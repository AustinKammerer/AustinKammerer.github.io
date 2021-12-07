import ResumeDownload from "../ResumeDownload/ResumeDownload";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import contactImg from "../../assets/images/gray-mountains.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactSection = styled("section")(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "35rem",
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${contactImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "cover",
  height: "100%",
  padding: "5rem 0 5rem 0",
}));

const Copyright = styled("p")(({ theme }) => ({
  position: "absolute",
  left: 0,
  bottom: 0,
  color: theme.palette.text.secondary,
  textAlign: "center",
  width: "100%",
}));

export default function Contact(props) {
  const {
    id,
    title,
    subtitle,
    gitHubUrl,
    // gitHubIcon,
    linkedInUrl,
    // linkedInIcon,
    copyright,
  } = props;

  return (
    <ContactSection id={id}>
      <Container fixed>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          spacing={2}
        >
          <Grid item>
            <Typography component="h3" variant="h3" align="center">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="p"
              variant="h4"
              align="center"
              sx={{ color: "text.secondary" }}
            >
              {subtitle}
            </Typography>
          </Grid>
          <Grid item textAlign="center">
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              spacing={2}
            >
              <IconButton
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <LinkedInIcon sx={{ fontSize: "10rem" }} />
              </IconButton>
              <IconButton
                href={gitHubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHubIcon sx={{ fontSize: "10rem" }} />
              </IconButton>
            </Stack>
            <ResumeDownload />
          </Grid>
        </Grid>
        <Grid item>
          <Copyright>{copyright}</Copyright>
        </Grid>
      </Container>
    </ContactSection>
  );
}
