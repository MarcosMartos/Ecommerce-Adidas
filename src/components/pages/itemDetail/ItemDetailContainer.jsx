import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      let producto = { ...res.data(), id: res.id };
      setProducto(producto);
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
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

  //   let data = {
  //     onAdd: onAdd,
  //     totalQuantity: totalQuantity,
  //     producto: producto,
  //   };

  return (
    <ItemDetail
      onAdd={onAdd}
      totalQuantity={totalQuantity}
      producto={producto}
    />
  );
};

export default ItemDetailContainer;
