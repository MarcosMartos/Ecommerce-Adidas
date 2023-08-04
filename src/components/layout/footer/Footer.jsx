import { Box, Grid } from "@mui/material";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container>
        <Grid item className="iconosFooter">
          <ul>
            <Link
              className="icono-footer"
              to={"https://www.instagram.com/adidasar/?hl=es-la"}
            >
              <InstagramIcon />
            </Link>
            <Link
              className="icono-footer"
              to={
                "https://twitter.com/adidas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              }
            >
              <TwitterIcon />
            </Link>
            <Link
              className="icono-footer"
              to={"https://es-la.facebook.com/adidasAR/"}
            >
              <FacebookIcon />
            </Link>
            <Link
              className="icono-footer"
              to={"https://www.youtube.com/user/adidas"}
            >
              <YouTubeIcon />
            </Link>
            <Link className="icono-footer" to={"https://github.com/adidas"}>
              <GitHubIcon />
            </Link>
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
