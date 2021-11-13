import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
const Blog = ({ blog }) => {
  const { title, imgUrl, description } = blog;
  return (
    <>
      <Grid item md={6} sm={12} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="140" image={imgUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.slice(0, 130)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Blog;
