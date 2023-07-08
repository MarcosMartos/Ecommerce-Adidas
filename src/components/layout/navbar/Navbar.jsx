import "./Navbar.css";
import { Box, Grid } from "@mui/material";
import Cartwidget from "../../common/cartWidget/Cartwidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Contenedor
    <Box className="navbar">
      <Grid container>
        {/* Secciones */}
        <Grid item xs={2}>
          {/* Imagen logo */}
          <Link to="/" className="img-logo">
            <img
              src="https://res.cloudinary.com/df4ghpsiz/image/upload/v1687018684/Adidas_isologo_lkb7ah.svg"
              alt="Logo de adidas"
            />
          </Link>
        </Grid>
        <Grid className="seccion-lista" item xs={8}>
          {/* Lista de rutas */}
          <ul className="lista">
            <li>
              <Link to="/">Todas las zapatillas</Link>
            </li>
            <li>
              <Link to="/category/hombre">Hombre</Link>
            </li>
            <li>
              <Link to="/category/mujer">Mujer</Link>
            </li>
            <li>
              <Link to="/category/niño">Niño</Link>
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
