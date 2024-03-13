import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Profile from "../assests/Profile.png";
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
    my={5}
    px={5}
    py={4}

    >

        <Box
        display='flex'
        flexDirection='column'
        flex={1}
        sx={{width: {sm: '100%', lg: '80%'}}}

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
          <Typography fontFamily='karma' width='80%' mt={3}>I am a rare combo, with a unique blend of skills ranging from Design, Web development, and analytics. I'm the guy you want in your team.</Typography>

          </Stack>
          <Stack my={2} py={2}>
          <Button sx={{width:'180px', }} variant="contained" href="#contained-buttons">
            Get to Know me
          </Button>
          </Stack>
        </Box>

        <Box
          mt={1}
          pr={15}

        >
          <Stack
          sx={{
            width: {sm: '100%', lg: '70%'}

          }}>
            <img height='330px' width='330px' src={Profile} alt="Profile Image"  />


          </Stack>
        </Box>

    </Box>
  );
};

export default Bio;
