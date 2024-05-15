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

interface ProjectCardProps {
  title: string;
  description: string;
  code: string;
  img: string;


  link: string;
}

const ProjectCardType = ({
  title,
  description,
  code,
  img,
  link,
}: ProjectCardProps) => {
  return (
    <Stack sx={{ width: { xs: "100%", lg: "48%" } }} boxShadow={10}>
            <a href={link}>
              <img src={img} alt={title} width="100%" />
            </a>
            <Stack p={1}>
              <Typography
                variant="h5"
                fontFamily="karma"
                color="#83C4D2"
                my={1}
              >
                {title}
              </Typography>
              <Typography variant="h6" fontFamily="karma" color="white">
                {description}
              </Typography>
              <a href={code}>
                <Stack display="flex" flexDirection="row" gap={2}>
                 <GitHubIcon />
                 <Typography>View code</Typography>

                </Stack>

            </a>
            </Stack>
          </Stack>
  );
};

export default ProjectCardType;
