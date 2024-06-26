import { Typography, Stack, Box } from "@mui/material";
import DashPro from "../assests/Rectangle5.svg";
import Iphone from "../assests/AppleClone.png";
import Assemble from "../assests/assemble.png";
import Boma from "../assests/Rectangle8.svg";
import Safe from "../assests/Symptoms.png";
import ProjectCardType from "../components/ProjectCardType";




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

          <ProjectCardType
            title='Assemble (A zoom clone)'
            description='Assemble is a state-of-the-art video conferencing app designed to bring people together seamlessly, no matter where they are in the world. Whether for business       meetings, virtual classrooms, or casual catch-ups, Assemble offers a robust platform with high-quality video and audio to ensure clear and effective communication.'
            link='https://assembleazoomclone-ogalos-projects.vercel.app'
            img={Assemble}
            code='https://github.com/Ogalo/zoom-clone'
          />
          <ProjectCardType
            title='Admin Dashboard'
            description='The Admin Dashboard is a versatile platform empowering
            administrators with insights and control. It offers
            comprehensive customization, enabling users to tailor their
            interface precisely. With an intuitive drag-and-drop interface
            ....'
            link='https://admin-dashboard197.netlify.app/'
            img={DashPro}
            code='https://github.com/Ogalo/dashboard_pro'
          />
          <ProjectCardType
            title='Iphone 15 Pro site'
            description='A clone of the Iphone 15 Pro, built using Three.Js and GSAP technology for 3D dimentions. This project contains
            knowledge of how to animate a website to create more visual interactions with the end user ...'
            link='https://apple15clone.netlify.app/'
            img={Iphone}
            code='https://github.com/Ogalo/appleweb'
          />
          <ProjectCardType
            title='E-commerce Boma Site'
            description='Boma is an online marketplace offering a platform for free classified ads. It allows users to buy
            and sell a wide range of products and services, including vehicles, real estate, electronics,
            furniture, and more. The site will also features job listings and services like repair and
            construction.'
            link='https://bomaproject.netlify.app/'
            img={Boma}
            code='https://github.com/Ogalo/Properties'
          />
          <ProjectCardType
            title='Safe Symptoms Search mobile design'
            description='Safe Symptoms aims to empower users to take control of their health by providing them with the tools and information they need to manage their symptoms effectively.'

            link='https://www.figma.com/file/05WTgL38p3Xv0qUFlpOs8i/Safe-symptoms-search?type=design&node-id=0%3A1&mode=design&t=48fzwLtCzSt9FGGs-1'
            img={Safe}
            code='https://www.figma.com/file/05WTgL38p3Xv0qUFlpOs8i/Safe-symptoms-search?type=design&node-id=0%3A1&mode=design&t=48fzwLtCzSt9FGGs-1'
          />

        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
