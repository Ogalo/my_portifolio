import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import DashPro from "../assests/dashPro.png";
import bomaPro from "../assests/bomaPro.png";

const ProjectCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={0.5}
      my={5}
      mx={5}
    >
      <Stack
      display='flex'
      flexDirection='column'
      flex={1}
      width='70%'
      >
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
    </Box>
  );
};

export default ProjectCard;
