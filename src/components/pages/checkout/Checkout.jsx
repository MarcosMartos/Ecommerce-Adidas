import { Button, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = ({ handleChange, handleSubmit, errors }) => {
  return (
    <div className="fondo-checkout">
      <section className="contenedor-checkout">
        <form className="formulario" onSubmit={handleSubmit}>
          <TextField
            className="input-formulario"
            type="text"
            label="Nombre"
            variant="outlined"
            error={errors.name ? true : false}
            name="name"
            onChange={handleChange}
            helperText={errors.name}
          />
          <TextField
            className="input-formulario"
            type="text"
            label="Apellido"
            variant="outlined"
            error={errors.lastName ? true : false}
            name="lastName"
            onChange={handleChange}
            helperText={errors.lastName}
          />
          <TextField
            className="input-formulario"
            type="text"
            label="Teléfono"
            variant="outlined"
            error={errors.phone ? true : false}
            name="phone"
            onChange={handleChange}
            helperText={errors.phone}
          />
          <TextField
            className="input-formulario"
            type="text"
            label="Correo electrónico"
            variant="outlined"
            error={errors.email ? true : false}
            name="email"
            onChange={handleChange}
            helperText={errors.email}
          />
          <TextField
            className="input-formulario"
            type="text"
            label="Confirmar correo electrónico"
            variant="outlined"
            error={errors.repeatEmail ? true : false}
            name="repeatEmail"
            onChange={handleChange}
            helperText={errors.repeatEmail}
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
