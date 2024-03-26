import React from "react";
import { Box, Typography, Stack, Button, Card, CardMedia } from "@mui/material";
import Profile from "../assests/Profile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Bio = () => {

  const onButtonClick = () => {
    const pdfUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

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
    flex={1}
    my={5}
    px={5}
    py={4}
    gap={1}
    justifyContent='space-between'

    >

        <Box
        display='flex'
        flexDirection='column'
        flex={1}
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
          <Typography fontFamily='karma' width='90%' mt={3}>I am a rare combo, with a unique blend of skills ranging from Design, Web development, and analytics. I'm the guy you want in your team.</Typography>

          </Stack>
          <Stack my={2} py={2}>
          <Button
            sx={{borderBottom: 2, width: '170px' }}
            onClick={onButtonClick}
           >
       Download Resume
      </Button>
          </Stack>
        </Box>


          <Stack
          mt={-4}
         >
          <Card
          sx={{
            maxWidth: "550px",
            backgroundColor: "#111835",
            mt: 2,
          }}
        >
          <CardMedia>

            <img  width='100%' src={Profile} alt="Profile Image"  />


          </CardMedia>
        </Card>



          </Stack>


    </Box>
  );
};

export default Bio;
