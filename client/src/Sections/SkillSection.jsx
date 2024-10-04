import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const skillsData = {
  tools: ["Git", "Docker", "Webpack", "VS Code"],
  languages: ["JavaScript", "Python", "TypeScript", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Express", "Node.js"],
  libraries: ["Redux", "MUI", "Framer Motion", "Tailwind CSS"],
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const MySkills = () => {
  return (
    <Box
    id="skills"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#040319",
        color: "#FFF",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, color: "#00FFFF", fontWeight: "bold" }}
      >
        My Skills
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={3}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: "#00FFFF" }}>
              Tools
            </Typography>
            <Box>
              {skillsData.tools.map((tool, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  style={{
                    backgroundColor: "#1A1A2E",
                    margin: "0.5rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "#FFF",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {tool}
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: "#00FFFF" }}>
              Languages
            </Typography>
            <Box>
              {skillsData.languages.map((language, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  style={{
                    backgroundColor: "#1A1A2E",
                    margin: "0.5rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "#FFF",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {language}
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: "#00FFFF" }}>
              Frameworks
            </Typography>
            <Box>
              {skillsData.frameworks.map((framework, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  style={{
                    backgroundColor: "#1A1A2E",
                    margin: "0.5rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "#FFF",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {framework}
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={3}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: "#00FFFF" }}>
              Libraries
            </Typography>
            <Box>
              {skillsData.libraries.map((library, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  style={{
                    backgroundColor: "#1A1A2E",
                    margin: "0.5rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    color: "#FFF",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {library}
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MySkills;
