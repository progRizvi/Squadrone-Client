import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HomeSlider = () => {
  return (
    <Box
      sx={{
        background: "url('https://i.ibb.co/DM0SpQf/hero-home-01.jpg') top",
        height: "80vh",
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Typography
              variant="h3"
              component="div"
              color="white"
              sx={{ pt: 20 }}
            >
              We Can Make Your Celebration Extraordinary
            </Typography>
            <Typography
              variant="body1"
              component="div"
              color="white"
              sx={{ pt: 3 }}
            >
              While they might seem like toys, a high-quality drone is a serious
              investment. We’ve flown plenty and there are a lot of good
              performers that we use.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeSlider;
