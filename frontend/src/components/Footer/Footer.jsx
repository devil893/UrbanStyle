import React, { useState } from "react";
import { Grid, Typography, Button, TextField, Box } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState('');
  const backend_url = process.env.REACT_APP_API_URL;

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async () => {
    try {
      const response = await fetch(`${backend_url}/api/subscribers`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const json = await response.json();
      
      if (response.ok) {
        toast.success('Subscribed successfully');
        setEmail('');
      } else {
        toast.error(json.error || 'Subscription failed');
        setEmail('');
      }
    } catch (error) {
      toast.error('Failed to connect to the server');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <Box sx={{ bgcolor: "#121212", color: "white", py: 5, px: { xs: 3, md: 10 } }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* SHOP SECTION */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Shop
          </Typography>
          {["New Arrivals", "Best Sellers", "Accessories", "Sale", "Gift Cards"].map((item) => (
            <Button key={item} color="inherit" sx={{ display: "block", textAlign: "left" }}>
              {item}
            </Button>
          ))}
        </Grid>

        {/* CUSTOMER SERVICE */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
          {["FAQs", "Shipping & Returns", "Size Guide", "Track Order", "Contact Us"].map((item) => (
            <Button key={item} color="inherit" sx={{ display: "block", textAlign: "left" }}>
              {item}
            </Button>
          ))}
        </Grid>

        {/* ABOUT US */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About UrbanStyle
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 250, mb: 2 }}>
            Redefining men's fashion with premium bamboo fiber clothing—sustainable, comfortable, and stylish.
          </Typography>
          {["Our Story", "Sustainability", "Careers"].map((item) => (
            <Button key={item} color="inherit" sx={{ display: "block", textAlign: "left" }}>
              {item}
            </Button>
          ))}
        </Grid>

        {/* NEWSLETTER & SOCIAL MEDIA */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Stay in the Loop
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Get updates on exclusive releases and latest trends.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              value={email}
              onChange={changeHandler}
              sx={{ bgcolor: "white", borderRadius: 1, flexGrow: 1 }}
            />
            <Button 
              variant="contained" 
              color="secondary" 
              sx={{ whiteSpace: "nowrap" }}
              onClick={submitHandler}
            >
              Subscribe
            </Button>
          </Box>

          {/* SOCIAL MEDIA LINKS */}
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
            <Instagram fontSize="large" />
            <Facebook fontSize="large" />
            <Twitter fontSize="large" />
          </Box>
        </Grid>
      </Grid>

      {/* COPYRIGHT */}
      <Box sx={{ textAlign: "center", mt: 5, opacity: 0.7 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} UrbanStyle. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
