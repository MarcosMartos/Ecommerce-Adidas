import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid } from "@mui/material";
import "./ItemDetailContainer";

const ItemDetail = ({ onAdd, totalQuantity, producto }) => {
  return (
    <Grid container className="contenedor">
      <Grid xs={12} md={6} className="cajaImagen">
        <figure className="contenedorImagen">
          <img className="imagenDetalle" src={producto.img} alt="imagen" />
        </figure>
      </Grid>
      <Grid xs={12} md={6} className="cajaDescripcion">
        <div className="info-producto">
          <h2>{producto.title}</h2>
          <h4>{producto.description}</h4>
          <h4 className="info-precio">{"$" + producto.price}</h4>
        </div>
        <div>
          {(typeof totalQuantity === "undefined" ||
            producto.stock > totalQuantity) &&
            producto.stock > 0 && (
              <CounterContainer
                stock={producto.stock}
                onAdd={onAdd}
                initial={totalQuantity}
              />
            )}

          {producto.stock === 0 && <h2>No hay stock</h2>}

          {typeof totalQuantity !== "undefined" &&
            totalQuantity === producto.stock && <h2>No hay stock</h2>}
        </div>
      </Grid>

      <ToastContainer />
    </Grid>
  );
};

export default ItemDetail;
