import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import teamImage from './team.jpg'; // Ensure you have an image named 'team.jpg' in your src folder

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <img
              src={teamImage}
              alt="Our Team"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" paragraph>
              Welcome to our company! We are a team of dedicated professionals
              committed to providing top-notch services and solutions to our
              clients. Our mission is to deliver excellence in every project we
              undertake. With a focus on innovation and customer satisfaction,
              we strive to exceed expectations and build long-lasting
              relationships.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team brings together a wealth of experience and expertise from
              various industries. We believe in continuous learning and
              improvement, ensuring that we stay ahead of the curve in a rapidly
              changing world. Thank you for choosing us. We look forward to
              working with you and achieving great success together.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
