import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ProjectCard from "./ProjectCard";

const PortfolioSection = styled("section")(({ theme }) => ({
  padding: "5rem 0 5rem 0",
  margin: 0,
  backgroundColor: "white",
  color: "rgb(90,90,90)",
}));

export default function Portfolio(props) {
  const { id, title, subtitle, projects } = props;
  return (
    <PortfolioSection id={id}>
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
              sx={{ color: "rgb(20, 20, 20)" }}
            >
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" mt={3}>
          {projects.map((project) => (
            <Grid item key={project.title}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PortfolioSection>
  );
}
