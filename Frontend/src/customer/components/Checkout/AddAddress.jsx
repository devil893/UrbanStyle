import * as React from "react";
import { useState } from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";

export default function AddDeliveryAddressForm({ handleNext }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    handleNext?.(); // call parent handler if passed
  };

  return (
    <Grid container spacing={4} className="p-4">
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-2xl shadow-lg h-[30.5rem] overflow-y-scroll bg-white">
          <div className="p-5 py-7 border-b">
            <Typography variant="h6" className="mb-4 font-semibold">
              Your Saved Address (Coming Soon)
            </Typography>
            {/* Placeholder Card */}
            <Box className="border rounded-lg p-4 bg-gray-50 shadow-sm">
              <Typography>John Doe</Typography>
              <Typography>123 Main St, New York, NY 10001</Typography>
              <Typography>Phone: 555-123-4567</Typography>
            </Box>
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
        <Box className="border rounded-2xl shadow-lg p-6 bg-white">
          <Typography variant="h6" gutterBottom className="mb-6 font-semibold">
            Enter Delivery Address
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {[
                { name: "firstName", label: "First Name", sm: 6 },
                { name: "lastName", label: "Last Name", sm: 6 },
                {
                  name: "address",
                  label: "Address",
                  multiline: true,
                  rows: 4,
                  sm: 12,
                },
                { name: "city", label: "City", sm: 6 },
                {
                  name: "state",
                  label: "State/Province/Region",
                  sm: 6,
                },
                { name: "zip", label: "Zip / Postal Code", sm: 6 },
                { name: "phoneNumber", label: "Phone Number", sm: 6 },
              ].map((field) => (
                <Grid item xs={12} sm={field.sm} key={field.name}>
                  <TextField
                    required
                    id={field.name}
                    name={field.name}
                    label={field.label}
                    fullWidth
                    multiline={field.multiline || false}
                    rows={field.rows || 1}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Button
                  sx={{
                    padding: ".9rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                  }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Deliver Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
