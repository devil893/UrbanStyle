const Order = require("./../models/orderModel");
const User = require("./../models/userModel");
const errorHandler = require("./../utils/errorHandler");
const jwt = require("jsonwebtoken");
const Stripe = require("stripe");
require("dotenv").config({ path: "./config.env" });

//configure stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place order and create payment session
exports.placeOrder = async (req, res, next) => {
  const { _id } = req.user;
  const frontend_url = process.env.FRONTEND_URL;

  const { items, amount, address, appliedCoupon } = req.body;
  try {
    // Create the order with coupon information if applied
    const order = await Order.create({
      userId: _id,
      items,
      amount,
      address,
      appliedCoupon
    });

    // Clear user's cart
    await User.findByIdAndUpdate(_id, { cartData: {} });

    // Calculate original total (without shipping)
    const originalTotal = items.reduce((sum, item) => sum + (item.new_price * item.quantity), 0);
    
    // Get discount amount if coupon applied
    const discountAmount = appliedCoupon ? appliedCoupon.value : 0;
    
    // Target total is the amount from request minus shipping (1)
    const targetTotalWithoutShipping = amount - 1;
    
    // Create line items with proportionally discounted prices
    let line_items = items.map((item) => {
      // Calculate item's proportion of the total
      const proportion = (item.new_price * item.quantity) / originalTotal;
      
      // Apply proportional discount
      let discountedUnitPrice;
      if (discountAmount > 0) {
        // Calculate the proportional discount for this item's total
        const itemTotalAfterDiscount = proportion * targetTotalWithoutShipping;
        // Get discounted unit price
        discountedUnitPrice = Math.round((itemTotalAfterDiscount / item.quantity) * 100) / 100;
      } else {
        discountedUnitPrice = item.new_price;
      }
      
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name + (discountAmount > 0 ? ` (Discounted with coupon: ${appliedCoupon.code})` : ""),
          },
          unit_amount: Math.round(discountedUnitPrice * 100),
        },
        quantity: item.quantity,
      };
    });
    
    // Add shipping fee
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Shipping Fee",
        },
        unit_amount: 1 * 100,
      },
      quantity: 1,
    });
    
    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${order._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${order._id}`,
    });
    
    res.status(200).json({ success: true, session_url: session.url });
  } catch (err) {
    next(err);
  }
};

// Verify order after payment
exports.verifyOrder = async (req, res, next) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      const order = await Order.findByIdAndUpdate(
        orderId,
        { payment: true },
        { new: true }
      );
      res.status(200).json(order);
    } else {
      const order = await Order.findByIdAndDelete(orderId);
      res.status(200).json(order);
    }
  } catch (err) {
    next(err);
  }
};

// Get user's orders
exports.userOrders = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const orders = await Order.find({ userId: _id });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

// Get all orders (admin)
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).sort({ date: -1 });
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

// Update order status (admin)
exports.updateStatus = async (req, res, next) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};
