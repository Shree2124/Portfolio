import { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "My Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" color="transparent" sx={{ backdropFilter: "blur(10px)" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#00BFFF" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Shree's Portfolio
            </motion.div>
          </Typography>
          
          <Box sx={{ display: { xs: "none", md: "flex" },color: "#00BFFF" }}>
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveSection(section.id)}
              >
                <Typography
                  sx={{
                    margin: "0 1.5rem",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: activeSection === section.id ? "100%" : "0%",
                      height: "2px",
                      backgroundColor: "#00FFFF",
                      bottom: 0,
                      left: 0,
                      transition: "width 0.3s",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {section.label}
                </Typography>
              </ScrollLink>
            ))}
          </Box>
          <IconButton edge="start" color="white" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { md: "none" },color: "white" }}>
            <MenuIcon color="white" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, textAlign: "center", backgroundColor: "#040319", color: "#00FFFF", height: "100%" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#00FFFF", marginLeft: "auto" }}>
            <CloseIcon />
          </IconButton>
          <Box sx={{ mt: 4 }}>
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * sections.indexOf(section) }}
              >
                <ScrollLink
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleDrawerToggle}
                >
                  <Typography variant="h6" sx={{ marginBottom: "2rem", cursor: "pointer" }}>
                    {section.label}
                  </Typography>
                </ScrollLink>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
