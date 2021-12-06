import "./App.css";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import "@fontsource/nunito";
// import "@fontsource/nunito/200.css";
// import "@fontsource/nunito/300.css";
// import "@fontsource/nunito/400.css";
// import "@fontsource/nunito/500.css";
// import "@fontsource/nunito/600.css";
// import "@fontsource/nunito/700.css";

// views
import Main from "./views/Main/Main";

const theme = responsiveFontSizes(
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
      h3: {
        "@media (max-width:470px)": {
          fontSize: "1.3rem",
        },
      },
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
