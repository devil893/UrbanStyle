import { Box, Button, Grid } from "@mui/material";
import React from "react";
import OrderTracker from "./OrderTracker";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import AddressCard from "../AddressCard/AddressCard";
import { deepPurple } from "@mui/material/colors";

const OrderDetails = () => {
  const navigate = useNavigate();

  const order = {
    loading: false,
    order: {
      orderStatus: "SHIPPED",
      shippingAddress: {
        name: "John Doe",
        street: "123 Main St",
        city: "New York",
        zip: "10001",
      },
      orderItems: [
        {
          size: "M",
          price: 999,
          product: {
            _id: "123456",
            title: "Casual T-Shirt",
            brand: "UrbanStyle",
            imageUrl: "https://via.placeholder.com/100",
          },
        },
        {
          size: "L",
          price: 1299,
          product: {
            _id: "789012",
            title: "Denim Jeans",
            brand: "UrbanStyle",
            imageUrl: "https://via.placeholder.com/100",
          },
        },
      ],
    },
  };

  return (
    <>
      {!order.loading && (
        <div className=" px-2 lg:px-36 space-y-7 ">
          <Grid container className="p-3 shadow-lg">
            <Grid xs={12}>
              <p className="font-bold text-lg py-2">Delivery Address</p>
            </Grid>
            <Grid item xs={6}>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>

          <Box className="p-5 shadow-lg border rounded-md">
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid item xs={9}>
                <OrderTracker
                  activeStep={
                    order.order?.orderStatus === "PLACED"
                      ? 1
                      : order.order?.orderStatus === "CONFIRMED"
                      ? 2
                      : order.order?.orderStatus === "SHIPPED"
                      ? 3
                      : 5
                  }
                />
              </Grid>
              <Grid item>
                {order.order?.orderStatus === "DELIVERED" && (
                  <Button sx={{ color: "" }} color="error" variant="text">
                    RETURN
                  </Button>
                )}
                {order.order?.orderStatus !== "DELIVERED" && (
                  <Button sx={{ color: deepPurple[500] }} variant="text">
                    cancel order
                  </Button>
                )}
              </Grid>
            </Grid>
          </Box>

          <Grid container className="space-y-5">
            {order.order?.orderItems.map((item) => (
              <Grid
                container
                item
                key={item.product._id}
                className="shadow-xl rounded-md p-5 border"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item xs={6}>
                  <div className="flex items-center">
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src={item?.product.imageUrl}
                      alt=""
                    />
                    <div className="ml-5 space-y-2">
                      <p className="">{item.product.title}</p>
                      <p className="opacity-50 text-xs font-semibold space-x-5">
                        <span>Color: pink</span>{" "}
                        <span>Size: {item.size}</span>
                      </p>
                      <p>Seller: {item.product.brand}</p>
                      <p>₹{item.price} </p>
                    </div>
                  </div>
                </Grid>
                <Grid item>
                  <Box
                    sx={{ color: deepPurple[500] }}
                    onClick={() =>
                      navigate(`/account/rate/${item.product._id}`)
                    }
                    className="flex items-center cursor-pointer"
                  >
                    <StarIcon
                      sx={{ fontSize: "2rem" }}
                      className="px-2 text-5xl"
                    />
                    <span>Rate & Review Product</span>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
