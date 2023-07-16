import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find(
      (elemento) => elemento.id === parseInt(id)
    );
    const tarea = new Promise((res, rej) => {
      res(productoSeleccionado);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);

  const onAdd = (cantidad) => {
    producto;
    cantidad;
    let productCart = { ...producto, quantity: cantidad };

    addToCart(productCart);
  };

  return (
    <div className="contenedor">
      <img className="imagenDetalle" src={producto.img} alt="" />
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
