import { useContext, useEffect, useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const [producto, setProducto] = useState({});

  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

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
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    //Disparar alerta
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Producto agregado al carrito.",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    toast.success("Producto agregado al carrito", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="contenedor">
      <img className="imagenDetalle" src={producto.img} alt="" />
      <h2>{producto.title}</h2>
      <h4>{producto.price}</h4>

      <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity} />

      <ToastContainer />
    </div>
  );
};

export default ItemDetail;
