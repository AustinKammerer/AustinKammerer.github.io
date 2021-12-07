import resume from "../../assets/images/Austin_Kammerer_Resume.pdf";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const ResumeBtn = styled(Button)(({ theme }) => ({
  borderRadius: 40,
  height: "4rem",
  width: "10rem",
}));

export default function ResumeDownload() {
  return (
    <ResumeBtn
      href={resume}
      download
      size="large"
      color="custom"
      variant="outlined"
      sx={{ mt: 3 }}
    >
      My Resume
    </ResumeBtn>
  );
}
