import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Counter.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div className="caja-contador">
      <section className="contador">
        <IconButton onClick={restar} aria-label="delete">
          <RemoveIcon />
        </IconButton>
        <h3>{contador}</h3>
        <IconButton onClick={sumar} aria-label="delete">
          <AddIcon />
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
