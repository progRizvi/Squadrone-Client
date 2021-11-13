import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Topbar from "../../../shared/Topbar/Topbar";
import Product from "../Product/Product";

const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  const handleBuyNow = (productId) => {
    history.push(`/products/${productId}`);
  };
  useEffect(() => {
    axios
      .get("https://squadrone.herokuapp.com/products")
      .then((result) => setProducts(result.data));
  }, []);
  return (
    <Box>
      <Topbar />
      <Box
        sx={{
          background:
            "url('https://i.ibb.co/PzXxvpK/inner-shop.jpg') top center",
          height: "40vh",
          pt: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" component="div">
          Get Your Drone
        </Typography>
        <Typography variant="body1" sx={{ width: "50%", mt: 5 }}>
          If you’re buying a drone for the first time, you may want to consider
          the features, flight time, camera resolution, accessories and easy of
          use.
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleBuyNow={handleBuyNow}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
