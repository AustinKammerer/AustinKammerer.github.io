import Header from "../../components/Header/Header";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import { headerData, aboutData, contactData } from "../../data/data";

import CssBaseline from "@mui/material/CssBaseline";

export default function Main() {
  return (
    <>
      <CssBaseline />
      <Header {...headerData} />
      <AboutMe {...aboutData} />
      <Contact {...contactData} />
    </>
  );
}
