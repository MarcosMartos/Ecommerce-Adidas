import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ elemento, isInItemList = true }) => {
  return (
    <Card className="tarjetaProducto" sx={{ width: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={elemento.img}
      />
      <CardContent className="detallesProducto">
        <Typography gutterBottom variant="h5" component="div">
          {elemento.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {elemento.description}
        </Typography>
      </CardContent>
      <CardActions className="detallesProducto">
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
