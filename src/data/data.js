import headshot from "../assets/images/headshot2.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import mastheadImg from "../assets/images/bg-masthead-2.jpg";
import parkScreen from "../assets/images/screenshot.png";
import moviesScreen from "../assets/images/movieScreen.png";
import galleryScreen from "../assets/images/galleryScreen.png";
import todoScreen from "../assets/images/todoScreen.png";
import feedbackScreen from "../assets/images/feedbackScreen.png";

export const headerData = {
  id: "header",
  title: "Austin Kammerer",
  subTitle: "Full Stack Software Developer",
  img: mastheadImg,
};

export const aboutData = {
  id: "about",
  title: "About Me",
  headshot: headshot,
  bio1: "I'm excited about building web applications to enhance people's lives. I love everything about programming, from designing user interfaces, to developing back-end engines, to structuring databases.",
  bio2: "After nearly a decade of working in the ski industry, I am combining my leadership and customer service skills with my passion for solving puzzles.",
  technologies: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Material UI",
    "Bootstrap",
    "React",
    "React Router",
    "Redux",
    "Saga",
    "AJAX",
    "jQuery",
    "Node",
    "Express",
    "Passport",
    "C#",
    "Postgres",
    "AWS S3",
    "Web APIs",
    "Git",
  ],
};

export const portfolioData = {
  id: "portfolio",
  title: "Portfolio",
  subtitle: "Projects I've been working on",
  projects: [
    {
      title: "Parks Passport",
      subtitle: "Solo Project",
      duration: "Two week sprint",
      description:
        "A full stack mobile-styled application for finding National Parks and recording visits. It utilizes the NPS API to fetch information, and it allows users to upload their own photos.",
      technologies:
        "React, Redux/Saga, Material UI, Express, Passport, Postgres, AWS S3, web API",
      image: parkScreen,
      heroku: "",
      repo: "https://github.com/AustinKammerer/solo-project",
    },
    {
      title: "My Movies",
      subtitle: "Weekend Project",
      duration: "",
      description:
        "A full stack application for managing a movie collection. Displays info about movies including genre and a description, which may be edited.",
      technologies: "React, Redux/Saga, Material UI, Express, Postgres",
      image: moviesScreen,
      heroku: "https://damp-temple-01678.herokuapp.com/",
      repo: "https://github.com/AustinKammerer/weekend-movie-sagas",
    },
    {
      title: "Feedback Loop",
      subtitle: "Weekend Project",
      duration: "",
      description:
        "A full stack application for collecting students' feedback for an instructor. Feedback may be reviewed by an admin user.",
      technologies: "React, Redux/Saga, Material UI, Express, Postgres",
      image: feedbackScreen,
      heroku: "https://gruesome-web-81167.herokuapp.com/#/admin",
      repo: "https://github.com/AustinKammerer/weekend-redux-feedback-loop",
    },
    {
      title: "Image Gallery",
      subtitle: "Weekend Project",
      duration: "",
      description:
        "A full stack application for finding posting images to a board (URLs). Images may then be 'liked' by visitors.",
      technologies: "React, Material UI, Express, Postgres",
      image: galleryScreen,
      heroku: "https://calm-springs-77191.herokuapp.com/",
      repo: "https://github.com/AustinKammerer/weekend-react-gallery",
    },
    {
      title: "To-Do List",
      subtitle: "Weekend Project",
      duration: "",
      description:
        "A full stack application for keeping track of tasks. Tasks are timestamped and may be sorted.",
      technologies: "jQuery, Bootstrap, Express, Postgres",
      image: todoScreen,
      heroku: "https://polar-cove-00340.herokuapp.com/",
      repo: "https://github.com/AustinKammerer/weekend-sql-to-do-list",
    },
  ],
};

export const contactData = {
  id: "contact",
  title: "Hire Me",
  subtitle: "Let's have a conversation",
  gitHubUrl: "https://github.com/AustinKammerer",
  gitHubIcon: GitHubIcon,
  linkedInUrl: "https://www.linkedin.com/in/austin-kammerer/",
  linkedInIcon: LinkedInIcon,
  copyright: "Copyright © Austin Kammerer 2021",
};
