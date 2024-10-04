import React, { useState } from "react";
import { Box, Typography, Button, TextField, Modal, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios"
// import { smtp } from "../util.js";

const Contact = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);  
  // console.log(smtp.username);
  

  const handleSend = async() => {
    try {
      setLoading(true);
      await axios.post("http://localhost:8000/api/v1/mail",{
        "email": "test@gmail.com",
        name,
        msg: message
      }).then((res)=>{
        // console.log(res);
        setOpenSuccessModal(true)
        setLoading(false)
      }).finally(()=>{
        setLoading(false)
      })
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

 

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#040319",
        color: "#FFF",
        padding: "4rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "500px",
          padding: "2rem",
          backgroundColor: "#1A1A2E",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, color: "#00FFFF" }}>
          Contact Me
        </Typography>

        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          sx={{ mb: 2, backgroundColor: "#FFF", borderRadius: "5px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Phone Number"
          fullWidth
          variant="outlined"
          sx={{ mb: 2, backgroundColor: "#FFF", borderRadius: "5px" }}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          sx={{ mb: 2, backgroundColor: "#FFF", borderRadius: "5px" }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

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
            onClick={handleSend}
            disabled={loading}
          >
            {loading ? <CircularProgress color="secondary" /> : "Send"}
          </Button>
        </motion.div>
      </Box>

      <Modal open={openSuccessModal} onClose={handleCloseSuccessModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#FFF",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: 24,
            maxWidth: "400px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Success!
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Your message has been sent successfully!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00FFFF",
              color: "#040319",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00e6e6",
              },
            }}
            onClick={handleCloseSuccessModal}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
