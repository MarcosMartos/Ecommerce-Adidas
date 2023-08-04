import { Grid, Skeleton } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  let arr = [1, 2, 3, 4];

  return (
    <div>
      <Grid container className="banner-principal">
        <Grid
          item
          md={6}
          display={"flex"}
          flexDirection="column"
          className="seccion-banner"
        >
          <h1 className="titulo-seccion-banner">adidas</h1>
          <img
            className="logo-banner"
            src="https://res.cloudinary.com/df4ghpsiz/image/upload/v1687018684/Adidas_isologo_lkb7ah.svg"
            alt="logo de adidas"
          />
          <h2 className="subtitulo-seccion-banner">Impossible is nothing</h2>
        </Grid>
        <Grid item md={6} className="imagen-banner">
          <img
            src="https://res.cloudinary.com/df4ghpsiz/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1686667900/Zapatillas_Forum_Low_Gris_HQ7096_01_standard_ge6dth.jpg"
            alt=""
          />
        </Grid>
      </Grid>
      <div
        className="cards"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.length > 0
          ? items.map((elemento) => {
              return <ProductCard key={elemento.id} elemento={elemento} />;
            })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.3rem" }}
                    width={100}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={200}
                  />
                  <Skeleton variant="rounded" width={210} height={60} />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default ItemList;
