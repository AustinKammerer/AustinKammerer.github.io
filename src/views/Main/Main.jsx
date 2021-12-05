import Header from "../../components/Header/Header";
import { headerData } from "../../components/Header/data";

import CssBaseline from "@mui/material/CssBaseline";

export default function Main() {
  return (
    <>
      {/* <CssBaseline /> */}
      <Header {...headerData} />
    </>
  );
}
