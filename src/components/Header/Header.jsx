// import "./Header.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import mastheadImg from "../../assets/images/bg-masthead-2.jpg";

const Masthead = styled(Container)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "35rem",
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${mastheadImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "cover",
  height: "100vh",
  padding: 0,
}));

const MastheadH1 = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  width: "100%",
  textTransform: "uppercase",
  letterSpacing: "0.8rem",
  background:
    "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
}));

export default function Header(props) {
  const { id, title, subTitle, btnText } = props;

  return (
    <Masthead component="header" id={id} maxWidth={false}>
      <Grid container height="100%" justifyContent="center" alignItems="center">
        <Grid container item justifyContent="center" alignItems="center">
          <Box>
            <Grid container justifyContent="center" alignItems="center">
              <Grid
                item
                sx={{
                  "@media (min-width: 992px)": { marginRight: "2rem" },
                }}
              >
                <MastheadH1 component="h1" variant="h1">
                  {title.split(" ")[0]}
                </MastheadH1>
              </Grid>
              <Grid item>
                <MastheadH1 component="h1" variant="h1">
                  {title.split(" ")[1]}
                </MastheadH1>
              </Grid>
            </Grid>

            <Typography
              component="h2"
              variant="h2"
              align="center"
              sx={{ color: "rgb(139, 139, 139)" }}
            >
              {subTitle}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Masthead>
  );
}
