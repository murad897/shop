import { Box, Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../Redux/Selectors/index";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useStyles } from "./PorductStyles";
import { v4 as uuidv4 } from "uuid";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = () => {
  const products = useSelector(productsSelector);
  const styles = useStyles();

  const GetProducts = () => {
    return products.map((product) => (
      <Card sx={{ maxWidth: 400 }} key={uuidv4()}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require(`../../assets/image${product.id}.jpg`)}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    ));
  };
  return (
    <Container className={styles.productsMainContainer} maxWidth="md">
      <Box className={styles.productsContainer}>{GetProducts()}</Box>
    </Container>
  );
};

export default ProductCard;
