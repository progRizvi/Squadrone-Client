import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Product from "../../Explore More/Product/Product";

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
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Products
      </Typography>
      <Container>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          {products.slice(0, 6).map((product) => (
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
