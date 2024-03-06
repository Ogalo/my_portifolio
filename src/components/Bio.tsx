import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Profile from "../assests/Profile.png";
import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Bio = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Full-Stack MERN Developer!",
      "FIGMA Designer!",
      "Technical Mentor!",
      "Product Designer!",
      "Senior Underwriter!",
    ],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <Box
    display='flex'
    flexDirection='row'
    flexWrap='wrap'
    gap={0.5}
    my={5}
    mx={5}
    py={4}
    >

        <Box
        display='flex'
        flexDirection='column'
        flex={1}
        width='60%'
        >
          <Stack>
            <Typography variant="h3" color="#cec5c5" fontFamily="karma">
              I'm Harrison Otieno,
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography
              variant="h4"
              fontFamily="karma"
              sx={{ fontWeight: "700px" }}
            >
              A {typeEffect}
            </Typography>
          </Stack>
          <Stack my={2}>
          <Typography variant='h6' fontFamily='karma' width='80%' mt={3}>I am a rare combo, with a unique blend of skills ranging from Design, Web development, and analytics. I'm the guy you want in your team.</Typography>

          </Stack>
          <Stack my={2} py={2}>
          <Button sx={{width:'180px', ml: 0,}} variant="contained" href="#contained-buttons">
            Get to Know me
          </Button>
          </Stack>
        </Box>

        <Box
          mt={1}


        >
          <Stack
          sx={{
            maxWidth: "320px",
          }}>
            <img src={Profile} alt="Profile Image" />
          </Stack>
        </Box>

    </Box>
  );
};

export default Bio;
