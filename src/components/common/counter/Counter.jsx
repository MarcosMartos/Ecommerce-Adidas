import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="caja-contador">
      <section className="contador">
        <IconButton aria-label="delete">
          <RemoveIcon onClick={restar} />
        </IconButton>
        <h3>{contador}</h3>
        <IconButton aria-label="delete">
          <AddIcon onClick={sumar} />
        </IconButton>
      </section>

      <Button
        onClick={() => onAdd(contador)}
        variant="contained"
        endIcon={<AddShoppingCartIcon />}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
