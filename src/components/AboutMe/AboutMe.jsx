import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const AboutSection = styled("section")(({ theme }) => ({
  padding: "5rem 0 5rem 0",
  margin: 0,
  background:
    "linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.9) 75%, rgba(0, 0, 0, 0.8) 100%)",
}));

const Headshot = styled("img")(({ theme }) => ({
  verticalAlign: "middle",
  width: "25%",
  height: "25%",
  borderRadius: "50%",
  border: "2px solid rgb(139, 139, 139)",
}));

const Tech = styled(Chip)(({ theme }) => ({
  fontSize: "1.25rem",
  // padding: "0.5rem",
  margin: 4,
}));

export default function AboutMe(props) {
  const { id, title, headshot, bio1, bio2, technologies } = props;

  return (
    <AboutSection id={id}>
      <Container fixed>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          height="100%"
          px={{ lg: 8, xl: 12 }}
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Box display="flex" mx="auto" maxWidth="fit-content">
              <Avatar
                alt="Austin Kammerer"
                src={headshot}
                sx={{ width: 300, height: 300 }}
              />
            </Box>
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            md={6}
            spacing={3}
          >
            <Grid item>
              <Typography component="h3" variant="h3" align="center">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="p"
                variant="h5"
                align="left"
                sx={{ color: "text.secondary" }}
              >
                {bio1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="p"
                variant="h5"
                align="left"
                sx={{ color: "text.secondary" }}
              >
                {bio2}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Stack direction="row" flexWrap="wrap" justifyContent="center">
            {technologies.map((tech) => (
              <Tech key={tech} label={tech} />
            ))}
          </Stack>
        </Box>
      </Container>
    </AboutSection>
  );
}
