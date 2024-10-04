import { Box, Typography, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import Home from "./Sections/HomeSection";
import About from "./Sections/AboutSection";
import Projects from "./Sections/ProjectsSection";
import Contact from "./Sections/ContactSection";
import MySkills from "./Sections/SkillSection";



const App = () => {
 

  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <MySkills/>
      <Projects/>
      

      
<Contact/>
    </>
  );
};

export default App;
