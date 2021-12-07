import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }} elevation={3}>
      <CardMedia
        component="img"
        height="300"
        image={project.image}
        alt={project.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          {project.subtitle}: {project.duration}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          {project.technologies}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={project.heroku}
          target="_blank"
          rel="noreferrer noopener"
        >
          Try It
        </Button>
        <Button
          size="small"
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
