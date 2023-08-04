import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Cart.css";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VerifiedIcon from "@mui/icons-material/Verified";

const Cart = () => {
  const { cart, clearToCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearToCart();
        Swal.fire("Eliminado correctamente!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Acción cancelada", "", "info");
      }
    });
  };

  return (
    <div className="contenedor-cart">
      <div className="contenedor-productos">
        <div className="titulos-productos-carrito">
          <h4>Producto</h4>
          <h4>Nombre</h4>
          <h4>Precio</h4>
          <h4>Cantidad</h4>
          <h4>Borrar</h4>
        </div>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className="producto-carrito">
              <img
                src={elemento.img}
                alt="zapatilla"
                className="img-producto-carrito"
              />
              <h4 className="nombre-producto">{elemento.title}</h4>
              <h5>{elemento.price}</h5>
              <h5>{elemento.quantity} </h5>
              <IconButton
                onClick={() => deleteById(elemento.id)}
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          );
        })}
        <div className="accion-carrito">
          {cart.length > 0 && (
            <Button
              onClick={limpiar}
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Limpiar Carrito
            </Button>
          )}

          {cart.length > 0 && <h2>El Total es {"$" + total}</h2>}

          {cart.length > 0 && (
            <Link to="/checkout">
              <Button
                variant="contained"
                color="success"
                startIcon={<VerifiedIcon />}
              >
                Comprar
              </Button>
            </Link>
          )}

          {cart.length < 1 && <h1>El carrito está vacío </h1>}
        </div>
      </div>
    </div>
  );
};

export default Cart;
