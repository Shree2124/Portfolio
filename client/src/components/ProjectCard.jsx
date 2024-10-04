import { Box, Card, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Card sx={{ maxWidth: 345, backgroundColor: "#1A1A2E", color: "#FFF" }}>
        <CardMedia component="img" alt={title} height="140" image={imageUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <IconButton href={githubLink} target="_blank" sx={{ color: "#00FFFF" }}>
              <GitHubIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
