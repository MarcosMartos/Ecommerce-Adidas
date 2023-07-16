import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearToCart, deleteById } = useContext(CartContext);

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

      <button onClick={clearToCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
