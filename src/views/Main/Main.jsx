import Header from "../../components/Header/Header";
import AboutMe from "../../components/AboutMe/AboutMe";
import { headerData, aboutData } from "../../data/data";

import CssBaseline from "@mui/material/CssBaseline";

export default function Main() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Header {...headerData} />
      <AboutMe {...aboutData} />
    </>
  );
}
