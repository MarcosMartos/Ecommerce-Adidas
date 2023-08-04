import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import "./Checkout.css";
import { Button } from "@mui/material";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearToCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      repeatEmail: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      //CREAR LA ORDEN DE COMPRA EN FIREBASE
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      //MODIFICAR EL STOCK EN FIREBASE DE CADA DOCUMENTO
      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo es obligatorio"),
      lastName: Yup.string().required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("El email es incorrecto"),
      repeatEmail: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("email"), "Los emails no coinciden"]),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <div
          className="fondo-checkout {
          "
        >
          <section className="cartel-compra">
            <h3 className="titulo-compra">Gracias por su compra!</h3>
            <h4 className="id-compra">Su numero de compra es: {orderId} </h4>
            <img
              className="imagen-compra"
              src="https://res.cloudinary.com/df4ghpsiz/image/upload/v1687018684/Adidas_isologo_lkb7ah.svg"
              alt="Logo de adidas"
            />
            <Link className="volver-home" to="/">
              <Button onClick={clearToCart} variant="contained">
                Volver
              </Button>
            </Link>
          </section>
        </div>
      ) : (
        <Checkout
          orderId={orderId}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          cart={cart}
          total={total}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
