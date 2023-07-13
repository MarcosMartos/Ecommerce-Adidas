import { useState } from "react";

const CheckoutContainer = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [apellido, setApellido] = useState("");

  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se envio");
    console.log(e);

    console.log(data);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
