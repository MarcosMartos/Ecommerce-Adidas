import "./Navbar.css";
import { Box, Grid } from "@mui/material";
import Cartwidget from "../../common/cartWidget/Cartwidget";

const Navbar = () => {
  return (
    // Contenedor
    <Box className="navbar">
      <Grid container>
        {/* Secciones */}
        <Grid item xs={2}>
          {/* Imagen logo */}
          <div className="img-logo">
            <img
              src="https://res.cloudinary.com/df4ghpsiz/image/upload/v1687018684/Adidas_isologo_lkb7ah.svg"
              alt="Logo de adidas"
            />
          </div>
        </Grid>
        <Grid className="seccion-lista" item xs={8}>
          {/* Lista de rutas */}
          <ul className="lista">
            <li>
              <a href="">Todas las zapatillas</a>
            </li>
            <li>
              <a href="">Hombre</a>
            </li>
            <li>
              <a href="">Mujer</a>
            </li>
            <li>
              <a href="">Niño</a>
            </li>
          </ul>
        </Grid>
        <Grid className="seccion-carrito" item xs={2}>
          {/* Carrito logo */}
          <Cartwidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
