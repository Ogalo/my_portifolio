import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import DashPro from "../assests/dashPro.png";
import bomaPro from "../assests/bomaPro.png";
import Figma from '../assests/figma.svg';
import workflow from '../assests/workflow.svg'
import assemble from '../assests/assemble.png'
import { NavLink, useNavigate } from "react-router-dom";
import ProjectCardType from "./ProjectCardType";


const ProjectCard = ({}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      gap={0.5}
      my={5}

    >
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={1}
        flex={1}
        width="100%"
      >
        <Stack display="flex" flexDirection="column" flex={1} >
          <Stack>
            <Typography variant="h5" color="#83C4D2" fontFamily="karma">
              Admin Dashboard
            </Typography>
          </Stack>
          <Stack mt={2.5}>
            <Typography fontFamily="karma" width="100%">
              The Admin Dashboard is a versatile platform empowering
              administrators with insights and control. It offers comprehensive
              customization, enabling users to tailor their interface precisely.
              With an intuitive drag-and-drop interface, administrators can
              effortlessly arrange widgets, charts, and data modules for a
              personalized view of key metrics. The dashboard's robust
              visualization capabilities include various chart types like line
              graphs, bar charts, and pie charts to represent data effectively.
              Real-time updates ensure administrators have access to the latest
              information, facilitating informed decision-making.
            </Typography>
          </Stack>
          <Stack my={2}>
            <a href='https://github.com/Ogalo/dashboard_pro'>
            <Stack display="flex" flexDirection="row" gap={2}>
                 <GitHubIcon />
                 <Typography>View code</Typography>

                </Stack>

            </a>
          </Stack>
        </Stack>
        <Card
          sx={{
            maxWidth: "550px",
            backgroundColor: "#111835",
          }}
        >
          <CardMedia>
            <a href="https://admin-dashboard197.netlify.app/">
              <img src={DashPro} alt="dash pro" width="100%" />
            </a>
          </CardMedia>
        </Card>
      </Stack>

      {/* //2nd project */}

      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        flex={1}
        width="100%"
        gap={5}
        my={5}
      >
        <Stack>
          <Card
            sx={{
              mt: 5,
              maxWidth: "550px",
              backgroundColor: "#111835",
            }}
          >
            <CardMedia>
              <a href="https://bomaproject.netlify.app/">
                <img src={bomaPro} alt="dash pro" width="100%" />
              </a>
            </CardMedia>
          </Card>
        </Stack>
        <Stack
          display="flex"
          flexDirection="column"
          flex={1}
          width="100%"
          mt={5}
        >
          <Stack>
            <Typography variant="h5" color="#83C4D2" fontFamily="karma">
              E-commerce Boma Site
            </Typography>
          </Stack>
          <Stack mt={2.5}>
            <Typography fontFamily="karma" width="100%">
              Boma is an online marketplace offering a platform for free
              classified ads. It allows users to buy and sell a wide range of
              products and services, including vehicles, real estate,
              electronics, furniture, and more. The site will also features job
              listings and services like repair and construction. It's a
              comprehensive platform catering to various needs, making it a
              go-to site for classifieds in the world.
            </Typography>
          </Stack>
          <Stack my={2}>
          <a href='https://github.com/Ogalo/Properties'>
          <Stack display="flex" flexDirection="row" gap={2}>
                 <GitHubIcon />
                 <Typography>View code</Typography>

                </Stack>
            </a>
          </Stack>
        </Stack>
      </Stack>

      {/* 3rd Project */}

      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={1}
        my={5}
        flex={1}
        width="100%"
      >
        <Stack display="flex" flexDirection="column" flex={1} width="100%">
          <Stack>
            <Typography variant="h5" color="#83C4D2" fontFamily="karma">
              Work Flow Journal
            </Typography>
          </Stack>
          <Stack mt={2.5}>
            <Typography fontFamily="karma" width="100%">
            This workflow chart outlines the sequential guiding steps involved in the process of underwriting, within a SaaS platform. It begins with the application order, followed by various check to ensure product quality. Subsequently, the application is checked for frauds. Once ready, it undergoes quality control to ensure accuracy and completeness. The final step involves senting the applicant an acceptance message, with clear instruction on what is to follow. Throughout this process, communication channels are maintained to keep the customer informed at each stage, ensuring a smooth and satisfactory transaction experience.
            </Typography>
          </Stack>
          <Stack my={2}>
            <a href='https://www.figma.com/file/CC2sm43wNbfFPAtMQ0vXQd/INV-Figma%3A-Findigs---McKinley-UaaS-Mechanics-%5BVersion-1.0-Feb%5D?type=whiteboard&node-id=0%3A1&t=Ea7XSRP6ujrEAuR2-1'>
            <Stack display="flex" flexDirection="row" gap={2}>

            <img src={Figma} alt='Figma' width='30px' />
            <Typography>View Design</Typography>

                </Stack>

            </a>
          </Stack>
        </Stack>
        <Card
          sx={{
            maxWidth: "550px",
            backgroundColor: "#111835",
          }}
        >
          <CardMedia>
            <a href='https://www.figma.com/file/CC2sm43wNbfFPAtMQ0vXQd/INV-Figma%3A-Findigs---McKinley-UaaS-Mechanics-%5BVersion-1.0-Feb%5D?type=whiteboard&node-id=0%3A1&t=Ea7XSRP6ujrEAuR2-1'>
            <img src={workflow} alt="workflow" width="100%" />

            </a>
          </CardMedia>
        </Card>
      </Stack>

      <Stack my={5} alignItems="center">
        <Button variant="contained"><NavLink to='/projects' style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })}>View All</NavLink></Button>
      </Stack>

    </Box>
  );
};

export default ProjectCard;
