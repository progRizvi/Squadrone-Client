import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Product = ({ product, handleBuyNow }) => {
  const { productImgUrl, productPrice, productTitle, _id, productDescription } =
    product;
  return (
    <>
      <Box
        sx={{
          mb: 5,
          boxShadow: "0px 0px 10px gray",
          borderRadius: 1,
          mr: 5,
        }}
      >
        <img src={productImgUrl} alt="" />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" component="div">
            {productTitle}
          </Typography>
          <Typography variant="body1" sx={{ pt: 2 }}>
            ${productPrice}
          </Typography>
          <Typography variant="body1" sx={{ pt: 2 }}>
            {productDescription.slice(0, 30)}...
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleBuyNow(_id)}
            sx={{ mt: 2, borderRadius: 3 }}
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Product;

/* https://i.ibb.co/zHR7fSy/products-01.jpg Done
https://i.ibb.co/1rRFKvm/products-02.jpg Done
https://i.ibb.co/YQw5j97/products-03.jpg Done
https://i.ibb.co/v4mmkn3/products-04.jpg Done
https://i.ibb.co/YbFCVs9/products-05.jpg Done
https://i.ibb.co/yPQGnCh/products-06.jpg Done
https://i.ibb.co/SnLz2Zt/products-07.jpg Done
https://i.ibb.co/dmc1YxT/products-08.jpg
https://i.ibb.co/P4Zgc9Z/products-09.jpg
https://i.ibb.co/wyNwWH3/products-10.jpg
https://i.ibb.co/6ycVTrZ/products-11.jpg
https://i.ibb.co/9Zn4Vgm/products-12.jpg */
