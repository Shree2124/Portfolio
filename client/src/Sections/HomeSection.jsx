import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import image from "../assets/space.jpg";
import coder from "../assets/coder.jpeg";
import bg from "../assets/Bg.png";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          backgroundColor: "#040319",
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              mb: 3,
              fontWeight: 700,
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            Hello, I'm Shree
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              mb: 4,
              color: "#00FFFF",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            A Passionate Full Stack Developer
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00FFFF",
                color: "#040319",
                fontWeight: "bold",
                fontSize: "1.2rem",
                padding: "0.8rem 2rem",
                "&:hover": {
                  backgroundColor: "#00e6e6",
                },
              }}
            >
              <ScrollLink to={"projects"} spy={true} smooth={true}>
                Explore My Work
              </ScrollLink>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: "2rem", right: "2rem" }}
        >
          <Box
            component="img"
            src={coder}
            alt="Profile"
            sx={{
              width: { xs: "7rem", md: "10rem" },
              height: { xs: "7rem", md: "10rem" },
              borderRadius: "50%",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
            }}
          />
        </motion.div>
      </Box>
    </>
  );
};

export default Home;
