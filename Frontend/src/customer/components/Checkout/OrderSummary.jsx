import React from "react";
import { Badge, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../AddressCard/AddressCard";
// import { createPayment } from "../../../Redux/Customers/Payment/Action";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");
  // const { order } = useSelector(state => state);

  // Mock order data for frontend rendering
  const order = {
    order: {
      _id: "mock_order_id",
      shippingAddress: {
        street: "123 Main St",
        city: "Sample City",
        state: "Sample State",
        zipCode: "12345",
        country: "Sample Country"
      },
      orderItems: [
        {
          product: {
            imageUrl: "https://via.placeholder.com/150",
            title: "Sample Product",
            price: 999,
            discountedPrice: 899,
            discountPersent: 10,
            brand: "Sample Brand"
          },
          size: "M",
          quantity: 1
        }
      ],
      totalItem: 1,
      totalPrice: 999,
      discounte: 100,
      totalDiscountedPrice: 899
    }
  };

  console.log("orderId ", orderId);

  // useEffect(() => {
  //   dispatch(getOrderById(orderId));
  // }, [orderId]);

  const handleCreatePayment = () => {
    console.log("Payment initiated for order:", order.order?._id);
    // const data = { orderId: order.order?._id, jwt };
    // dispatch(createPayment(data));
  };

  return (
    <div className="space-y-5">
      <div className="p-5 shadow-lg rounded-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="lg:grid grid-cols-3 relative justify-between">
        <div className="lg:col-span-2">
          <div className="space-y-3">
            {order.order?.orderItems.map((item, index) => (
              <React.Fragment key={index}>
                <CartItem item={item} showButton={false} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price ({order.order?.totalItem} item)</span>
                <span>PKR {order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-PKR {order.order?.discounte}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">PKR {order.order?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button
              onClick={handleCreatePayment}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;