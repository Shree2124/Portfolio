import React, { useState } from "react";
import { Box, Typography, Button, TextField, Modal } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSend = () => {

    setOpenModal(true);
  };

  const handleOtpVerification = () => {
    alert("OTP Verified! Email Sent.");
    setOpenModal(false);
  };

  return (
    <Box
    id="contact"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1A1A2E",
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
          backgroundColor: "#040319",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography variant="h4" sx={{ mb: 4, color: "#00FFFF" }}>
          Contact Me
        </Typography>

        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          sx={{ mb: 2, backgroundColor: "#FFF", borderRadius: "5px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          >
            Send
          </Button>
        </motion.div>
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
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
            Enter OTP
          </Typography>

          <TextField
            label="OTP"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

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
            onClick={handleOtpVerification}
          >
            Verify OTP
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
