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

const ProjectCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      gap={0.5}
      my={5}
      mx={5}
    >
      <Stack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={1}
        flex={1}
        width="100%"
      >
        <Stack display="flex" flexDirection="column" flex={1} width="70%">
          <Stack>
            <Typography variant="h5" color="#83C4D2" fontFamily="karma">
              Admin Dashboard
            </Typography>
          </Stack>
          <Stack mt={2.5}>
            <Typography fontFamily="karma" width="90%">
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
            <GitHubIcon />
            <Typography>View code</Typography>

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
          width="70%"
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
            <GitHubIcon />
            <Typography>View code</Typography>
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
        <Stack display="flex" flexDirection="column" flex={1} width="70%">
          <Stack>
            <Typography variant="h5" color="#83C4D2" fontFamily="karma">
              Admin Dashboard
            </Typography>
          </Stack>
          <Stack mt={2.5}>
            <Typography fontFamily="karma" width="90%">
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
            <GitHubIcon />
          </Stack>
        </Stack>
        <Card
          sx={{
            maxWidth: "550px",
            backgroundColor: "#111835",
          }}
        >
          <CardMedia>
            <img src={DashPro} alt="dash pro" width="100%" />
          </CardMedia>
        </Card>
      </Stack>

      <Stack my={5} alignItems="center">
        <Button variant="contained">View All</Button>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
