import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  CircularProgress,
  Divider,
  Card,
  CardContent 
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon, 
  AccessTime as TimeIcon 
} from '@mui/icons-material';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill all fields correctly');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulating API call - in a real app, this would connect to your backend
      // const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message
      toast.success('Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error(error.message || 'Failed to send message. Please try again later.');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 6, minHeight: '70vh' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" paragraph align="center">
          Have a question or feedback? We'd love to hear from you. Fill out the form below or use our contact information.
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Send Us a Message
            </Typography>
            
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    disabled={isSubmitting}
                    sx={{ py: 1.5, px: 4 }}
                  >
                    {isSubmitting ? (
                      <>
                        <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <EmailIcon sx={{ mr: 2, color: 'secondary.main' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                      Email Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <a href="mailto:support@urbanstyle.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        support@urbanstyle.com
                      </a>
                    </Typography>
                    <Typography variant="body1">
                      <a href="mailto:info@urbanstyle.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                        info@urbanstyle.com
                      </a>
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'secondary.main' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                      Call Us
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <a href="tel:+923001234567" style={{ color: 'inherit', textDecoration: 'none' }}>
                        +92 300 123 4567
                      </a>
                    </Typography>
                    <Typography variant="body1">
                      <a href="tel:+923001234568" style={{ color: 'inherit', textDecoration: 'none' }}>
                        +92 300 123 4568
                      </a>
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <LocationIcon sx={{ mr: 2, color: 'secondary.main' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                      Visit Us
                    </Typography>
                    <Typography variant="body1">
                      UrbanStyle Headquarters<br />
                      123 Fashion Avenue<br />
                      Gulberg III, Lahore<br />
                      Pakistan 54000
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <TimeIcon sx={{ mr: 2, color: 'secondary.main' }} />
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                      Business Hours
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                    </Typography>
                    <Typography variant="body1">
                      <strong>Sunday:</strong> Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;

