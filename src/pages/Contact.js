import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Paper, Box } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setSuccess('Message sent successfully!');
      // setName('');
      // setEmail('');
      // setMessage('');
    } else {
      setErrors(errors);
      setSuccess('');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <Paper elevation={2} style={{ padding: '2rem' }}>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Enter Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
              />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" style={{ backgroundColor: '#050C9B', color: 'white' }} type="submit">
        Send
      </Button>
            </Grid>
          </Grid>
        </form>
        {success && (
          <Box mt={2}>
            <Typography variant="body1" color="success.main">
              {success}
            </Typography>
          </Box>
        )}
      </Paper>
      <Box mt={4}>
        <Typography variant="h6" component="h2">
          Our Contact Information
        </Typography>
        <Typography variant="body1">
          Address: UCSC Building Complex,35 Reid Ave, Colomo 7
        </Typography>
        <Typography variant="body1">
          Phone: (091) 400-4546
        </Typography>
        <Typography variant="body1">
          Email: ucsccolombo7@gmail.com
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
