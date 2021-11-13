import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("https://squadrone.herokuapp.com/blogs").then((result) => {
      setBlogs(result.data);
    });
  }, []);

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h5" color="red" sx={{ textAlign: "center", py: 5 }}>
        OUR BLOG
      </Typography>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", pb: 5 }}
      >
        Latest News Feed
      </Typography>
      <Grid container spacing={2}>
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog._id} />
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;
