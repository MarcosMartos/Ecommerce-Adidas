import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Carrito de compra :3</h1>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h4>{elemento.title}</h4>
            <h5>{elemento.price}</h5>
            <h5>{elemento.quantity} </h5>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.length > 0 && <button onClick={limpiar}>Limpiar carrito</button>}

      <h2>El total es {total}</h2>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
};

export default Cart;
