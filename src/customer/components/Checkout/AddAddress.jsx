import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { createOrder } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../AddressCard/AddressCard";
// import { useState } from "react";
// import BackdropComponent from "../BackDrop/Backdrop";

export default function AddDeliveryAddressForm({ handleNext }) {
  /* Commented out all functionality hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);
  const {order} = useSelector(state=>state);
  */

  /* Mock data commented out
  const auth = {
    user: {
      addresses: [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          streetAddress: "123 Main St",
          city: "New York",
          state: "NY",
          zipCode: "10001",
          mobile: "555-123-4567"
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          streetAddress: "456 Oak Ave",
          city: "Los Angeles",
          state: "CA",
          zipCode: "90001",
          mobile: "555-987-6543"
        }
      ]
    }
  };

  const order = {
    loading: false
  };
  */

  /* Form handler commented out
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log("Address submitted:", address);
    dispatch(createOrder({ address, jwt, navigate }));
    handleNext();
  };
  */

  /* Address selection handler commented out
  const handleCreateOrder = (item) => {
    console.log("Order created with address:", item);
    dispatch(createOrder({ address:item, jwt, navigate }));
    handleNext();
  };
  */

  return (
    <>
      {/* Backdrop commented out 
      {order.loading && <BackdropComponent open={order.loading}/>}
      */}
      
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
            {/* Address list commented out
            {auth.user?.addresses.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAdress(item)}
                className="p-5 py-7 border-b cursor-pointer"
              >
                <AddressCard address={item} />
                {selectedAddress?.id === item.id && (
                  <Button
                    sx={{ mt: 2 }}
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={() => handleCreateOrder(item)}
                  >
                    Deliver Here
                  </Button>
                )}
              </div>
            ))}
            */}
            <div className="p-5 py-7 border-b">
              <AddressCard />
              <Button
                sx={{ mt: 2 }}
                size="large"
                variant="contained"
                color="primary"
                disabled
              >
                Deliver Here
              </Button>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form /*onSubmit={handleSubmit}*/>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="shipping address"
                    multiline
                    rows={4}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{ padding: ".9rem 1.5rem" }}
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}