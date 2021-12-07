import Header from "../../components/Header/Header";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Portfolio from "../../components/Portfolio/Portfolio";
import {
  headerData,
  aboutData,
  contactData,
  portfolioData,
} from "../../data/data";

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import "@fontsource/nunito";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: [
        "Nunito",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h1: {
        "@media (max-width:470px)": {
          fontSize: "2.3rem",
        },
      },
      h2: {
        "@media (max-width:470px)": {
          fontSize: "1.3rem",
        },
      },
    },
  })
);

export default function Main() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header {...headerData} />
      <AboutMe {...aboutData} />
      <Portfolio {...portfolioData} />
      <Contact {...contactData} />
    </ThemeProvider>
  );
}
