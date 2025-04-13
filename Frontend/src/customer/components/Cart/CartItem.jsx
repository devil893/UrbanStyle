import React from "react";
import { Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { removeCartItem, updateCartItem } from "../../../Redux/Customers/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "../../data";

const CartItem = ({ item, showButton }) => {
  // const dispatch = useDispatch();
  // const jwt = localStorage.getItem("jwt");

  // Mock functions that would normally dispatch Redux actions
  const handleRemoveItemFromCart = () => {
    console.log("Item removed from cart:", item?._id);
    // const data = { cartItemId: item?._id, jwt };
    // dispatch(removeCartItem(data));
  };

  const handleUpdateCartItem = (num) => {
    console.log("Update cart item quantity:", item?._id, "by", num);
    // const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id, jwt };
    // console.log("update data ", data);
    // dispatch(updateCartItem(data));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="/images/polo1.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.title || "Sample Product"}</p>
          <p className="opacity-70">Size: {item?.size || "M"}, White</p>
          <p className="opacity-70 mt-2">Seller: {item?.product?.brand || "Sample Brand"}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">PKR {item?.product?.price || 999}</p>
            <p className="font-semibold text-lg">
              PKR {item?.product?.discountedPrice || 899}
            </p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discountPersent || 10}% off
            </p>
          </div>
        </div>
      </div>
      {showButton && (
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item?.quantity <= 1}
              color="primary"
              aria-label="decrease quantity"
            >
              <RemoveCircleOutlineIcon />
            </IconButton>

            <span className="py-1 px-7 border rounded-sm">{item?.quantity || 1}</span>
            <IconButton
              onClick={() => handleUpdateCartItem(1)}
              color="primary"
              aria-label="increase quantity"
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
            <Button onClick={handleRemoveItemFromCart} variant="text">
              Remove
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;