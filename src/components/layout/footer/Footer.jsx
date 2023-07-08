import { Box, Grid } from "@mui/material";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container>
        <Grid item className="iconosFooter">
          <ul>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <GitHubIcon />
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
