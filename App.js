import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Grid } from '@mui/material';

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Electronic Store</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to our Electronic Store
          </Typography>
          <Typography variant="body1" gutterBottom>
            We offer a wide range of electronic products at great prices.
          </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg"
                title="CUCUMBER"
              />
              <CardContent>
                <Typography variant="h6">CUCUMBER</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                ₹ 20
                </Typography>
              </CardContent>
            </Card>
          </Grid>
            <Grid item xs={12} sm={6}>
              <img src="/path/to/image2.jpg" alt="Product 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default App;
