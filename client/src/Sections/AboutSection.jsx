import { motion } from "framer-motion";
import { Typography, Box, Grid } from "@mui/material";
import about from "../assets/about.webp"

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        bgcolor: "#1A1A2E",
        color: "#FFF",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 4, color: "#00FFFF" }}
        >
          About Me
        </Typography>

        <Typography
        variant="h5"
          sx={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            mb: 4,
          }}
        >
          I’m Shree, a passionate web developer specializing in the MERN stack.
          I enjoy creating user-friendly applications that address real-world
          challenges. With a keen eye for design and functionality, I thrive on
          delivering seamless digital experiences.
        </Typography>
      </motion.div>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 1 }}
          >
            <Box
              component="img"
              src={about}
              alt="Profile Picture"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "4rem",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
              }}
            />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: "#00FFFF" }}>
              A Bit More About Me
            </Typography>
            <Typography variant="h5">
              I believe in the power of collaboration and open-source. I'm
              constantly learning and evolving as a developer, staying up to
              date with the latest industry trends. In my free time, I contribute
              to open-source projects, experiment with new technologies, and
              enjoy mentoring budding developers.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              backgroundColor: "#00FFFF",
              borderRadius: "8px",
              color: "#1A1A2E",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <Typography variant="h6">Let's Collaborate</Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
