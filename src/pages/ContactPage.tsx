import {
  Box,
  Typography,
  Stack,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import envelope from "../assests/envelope.svg";
import linkedin from "../assests/linkedin.svg";
import whatsapp from "../assests/whatsapp.svg";
import phone from "../assests/phone.svg";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const Contact = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setState({ name: "", email: "", message: "" });

    emailjs
      .sendForm(
        "service_p6ck6of",
        "template_m7i32h3",
        e.currentTarget,
        "pobYJ-XJkUXH_dYd6"
      )
      .then(
        (e) => {
          alert("message sent successfully");
        },
        (error) => {
          alert(error.message);
        }
      );
  };
  return (
    <Box sx={{ backgroundColor: "#111835", height: '100%', overflow: 'hidden'}}>

    <Box
      display="flex"
      gap={10}
      p={10}
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Stack sx={{ width: { sm: "100%", lg: "40%" } }}>
        <Typography variant="h4" fontFamily="karma" color="white">Drop Me a Message</Typography>

        <form
          style={{
            margin: 3,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={sendEmail}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#ffffff",
              }}
            >
              Enter your name
            </FormHelperText>
            <TextField
              fullWidth
              sx={{ backgroundColor: "#949494" }}
              type="text"
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              name="name"
              value={state.name}
              onChange={(e) => {
                setState({ ...state, name: e.target.value });
              }}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#ffffff",
              }}
            >
              Email
            </FormHelperText>
            <TextField
              fullWidth
              required
              sx={{ backgroundColor: "#949494" }}
              type="email"
              id="outlined-basic"
              color="info"
              variant="outlined"
              name="email"
              value={state.email}
              onChange={(e) => {
                setState({ ...state, email: e.target.value });
              }}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#ffffff",
              }}
            >
              Enter your message
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              name="message"
              value={state.message}
              onChange={(e) => {
                setState({ ...state, message: e.target.value });
              }}
              color="info"
              style={{
                width: "100%",
                fontSize: "16px",
                borderRadius: 6,
                padding: 10,
                borderColor: "rgba(0, 0, 0, 0.23)",
                color: "#949494",
                backgroundColor: "#949494",
              }}
            />
          </FormControl>
          <Button variant="outlined" type="submit">
            Let's talk
          </Button>
        </form>
      </Stack>
      <Stack sx={{ width: { sm: "100%", lg: "50%" } }}>
        <Typography variant="h5" fontFamily="karma" color="white"> Social links </Typography>

        <Typography fontFamily="karma" width="100%" pt={3} color='white'>
          You can reach me out for mentorship, networking, business via the
          following contact info below. Don’t forget to leave a comment and
          suggestion using the suggestion box on the right.
        </Typography>
        <Box
          display="block"
          flexDirection="row"
          flexWrap="wrap"
          gap={1}
          my={2}
          pr={2}
        >
          <Stack
            display="flex"
            flexDirection="row"
            gap={3}
            my={3}
            alignItems="center"
          >
            <img src={envelope} alt="envelope" height="20px" width="20px" />
            <Typography fontFamily="karma" color='white'>
              otienoharrison95@gmail.com
            </Typography>
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            gap={3}
            my={3}
            alignItems="center"
          >
            <img src={linkedin} alt="linkedin" height="20px" width="20px" />
            <a href="https://www.linkedin.com/in/harrison-otieno-442a12162/">
              <Typography fontFamily="karma" color='white'>Harrison Otieno</Typography>
            </a>
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            gap={3}
            my={3}
            alignItems="center"
          >
            <img src={whatsapp} alt="whatsapp" height="20px" width="20px" />
            <a href="https://wa.me/254778109769">
              <Typography fontFamily="karma" color='white'>Automate Ventures</Typography>
            </a>
          </Stack>
          <Stack
            display="flex"
            flexDirection="row"
            gap={3}
            my={3}
            alignItems="center"
          >
            <img src={phone} alt="phone number" height="20px" width="20px" />
            <Typography fontFamily="karma" color='white'>+254799820376</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
    </Box>
  );
};

export default Contact;
