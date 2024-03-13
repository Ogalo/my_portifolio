import { Box, Typography, Stack, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import reactIcon from "../assests/reactIcon.svg";
import nextjs from '../assests/nextjs.svg'
import node from '../assests/node-js.svg'
import javaScriptIcon from '../assests/javascript.svg'
import figma from '../assests/figma.svg'
import mongoDb from '../assests/mongodb.svg'
import github from '../assests/github.svg'
import css3 from '../assests/css-3.svg'
import html from '../assests/html-5.svg'
import vue from '../assests/vue.svg'
import materialUI from '../assests/material-ui.svg'
import expressIcon from '../assests/express.svg'







const Tech = () => {
  return (
    <Box my={5}  px={5}>
      <Typography variant="h5" fontFamily="karma" pt={5}>

        Technologies
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2} >
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'

          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={reactIcon} alt="react" />
          <Typography fontFamily='karma'>REACT JS</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={mongoDb} alt="mongo" />
          <Typography fontFamily='karma'>MongoDB</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={node} alt="node" />
          <Typography fontFamily='karma'>Node JS</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={expressIcon} alt="express" />
          <Typography fontFamily='karma'>Express JS</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img color='#000000' height="45px" src={github} alt="github" />
          <Typography fontFamily='karma'>Github</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={nextjs} alt="nextjs" />
          <Typography fontFamily='karma'>Next JS</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={javaScriptIcon} alt="javascript" />
          <Typography fontFamily='karma'>JavaScript</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={figma} alt="figma" />
          <Typography fontFamily='karma'>Figma</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={materialUI} alt="material UI" />
          <Typography fontFamily='karma'>Material UI</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={html} alt="html" />
          <Typography fontFamily='karma'>HTML</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={css3} alt="css3" />
          <Typography fontFamily='karma'>CSS</Typography>
        </Stack>
        <Stack
          display="flex"
          flexDirection="row"
          gap={6}
          alignItems="center"
          my={2}
          width='230px'
          justifyContent='space-evenly'
          sx={{
            boxShadow: 20,
            py: 1,

          }}
        >
          <img height="45px" src={vue} alt="vue js" />
          <Typography fontFamily='karma'>Vue JS</Typography>
        </Stack>


      </Box>
    </Box>
  );
};

export default Tech;
