import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import {motion} from "framer-motion"
import playtube from "../assets/playtube.png"
import chat from "../assets/chat.png"
import blog from "../assets/blog.png"

const projects = [
  {
    title: "PlayTube",
    description: "A YouTube clone using the MERN stack with video upload and playback features.",
    imageUrl: playtube,
    githubLink: "https://github.com/Shree2124/Youtube-Clone",
  },
  {
    title: "Chat App",
    description: "A Chat Application build with MERN and Socket.io.",
    imageUrl: chat,
    githubLink: "https://github.com/Shree2124/ChatterHub-Frontend",
  },
  {
    title: "Blog App",
    description: "A simple blog application built with React and Appwrite for backend.",
    imageUrl: blog,
    githubLink: "https://github.com/Shree2124/ChatterHub-Frontend",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ minHeight: "100vh", bgcolor: "#1A1A2E", color: "#FFF", padding: "2rem" }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}>
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
            />
          </Grid>
        ))}
      </Grid>
    </motion.div>
  </Box>
  );
};

export default Projects;
