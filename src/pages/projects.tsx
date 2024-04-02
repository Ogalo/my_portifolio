import { Typography, Stack, Box } from "@mui/material";
import DashPro from "../assests/Rectangle5.svg";
import Iphone from "../assests/AppleClone.png";
import Boma from "../assests/Rectangle8.svg";
import Safe from "../assests/Symptoms.png";



const Projects = () => {
  return (
    <Box sx={{ backgroundColor: "#111835" }}>
      <Box px={5} py={5}>
        <Typography variant="h4" fontFamily="karma" color="white">
          Projects
        </Typography>

        <Box
          my={3}
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={6}
        >
          <Stack sx={{ width: { xs: "100%", lg: "48%" } }} boxShadow={10}>
            <a href="https://admin-dashboard197.netlify.app/">
              <img src={DashPro} alt="dash pro" width="100%" />
            </a>
            <Stack p={1}>
              <Typography
                variant="h5"
                fontFamily="karma"
                color="#83C4D2"
                my={1}
              >
                Admin Dashboard
              </Typography>
              <Typography variant="h6" fontFamily="karma" color="white">
                The Admin Dashboard is a versatile platform empowering
                administrators with insights and control. It offers
                comprehensive customization, enabling users to tailor their
                interface precisely. With an intuitive drag-and-drop interface
                ....
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ width: { xs: "100%", lg: "48%" } }} boxShadow={10}>

            <a href="https://apple15clone.netlify.app/">
             <img src={Iphone} width="100%" />
            </a>
            <Stack p={1}>
              <Typography
                variant="h5"
                fontFamily="karma"
                color="#83C4D2"
                my={1}
              >
                Iphone 15 Pro site
              </Typography>
              <Typography variant="h6" fontFamily="karma" color="white">
                A clone of the Iphone 15 Pro, built using Three.Js and GSAP technology for 3D dimentions. This project contains
                knowledge of how to animate a website to create more visual interactions with the end user ...
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ width: { xs: "100%", lg: "48%" } }} boxShadow={10}>
              <a href="https://bomaproject.netlify.app/">
                <img src={Boma} alt="boma pro" width="100%" />
              </a>
            <Stack p={1}>
              <Typography
                variant="h5"
                fontFamily="karma"
                color="#83C4D2"
                my={1}
              >
                E-commerce Boma Site
              </Typography>
              <Typography variant="h6" fontFamily="karma" color="white">
              Boma is an online marketplace offering a platform for free classified ads. It allows users to buy
               and sell a wide range of products and services, including vehicles, real estate, electronics,
               furniture, and more. The site will also features job listings and services like repair and
               construction. It's a comprehensive platform catering to various needs,
               making it a go-to site for classifieds in the world.
                ....
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ width: { xs: "100%", lg: "48%" } }} boxShadow={10}>
              <a href="https://www.figma.com/file/05WTgL38p3Xv0qUFlpOs8i/Safe-symptoms-search?type=design&node-id=0%3A1&mode=design&t=48fzwLtCzSt9FGGs-1">
              <img src={Safe} width="100%" />
              </a>

            <Stack p={1}>
              <Typography
                variant="h5"
                fontFamily="karma"
                color="#83C4D2"
                my={1}
              >
                Safe Symptoms Search mobile design
              </Typography>
              <Typography variant="h6" fontFamily="karma" color="white">
              Safe Symptoms aims to empower users to take control of their health by providing them with the tools and information they need to manage their symptoms effectively. Whether they're dealing with chronic conditions or simply tracking occasional discomforts, SafeSympto is their trusted companion on their health journey.
              </Typography>
            </Stack>
          </Stack>
          <Stack sx={{ width: { xs: "100%", lg: "48%" } }} boxShadow={10}>
            <img src={DashPro} width="100%" />
            <Stack p={1}>
              <Typography
                variant="h5"
                fontFamily="karma"
                color="#83C4D2"
                my={1}
              >
                Zoom Clone app
              </Typography>
              <Typography variant="h6" fontFamily="karma" color="white">
                Coming soon ....

              </Typography>
            </Stack>
          </Stack>

        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
