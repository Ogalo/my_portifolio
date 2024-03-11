import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import  marketing from '../assests/marketing.svg'
import  video from '../assests/video.svg'
import  ecommerce from '../assests/ecommerce.svg'
import   notes  from '../assests/notes.svg'
import  design from '../assests/design.svg'
import  web from '../assests/web.svg'
import  mobile  from '../assests/mobile.svg'



const Services = () => {
  return (
    <Box mx={5} my={5} boxShadow={5}>
      <Typography variant="h5" fontFamily="karma" mx={5} my={3} pt={5}>
        Services
      </Typography>
      <Typography variant="h5" fontFamily="karma" fontWeight={350} mx={5}>
        What I do
      </Typography>

      <Box display='flex' gap={1} flexDirection='row' flexWrap='wrap'>
        <Stack mx={4} my={5} boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={design} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma'> UI/UX  Design</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack mx={4} my={5} boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={web} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma'> Web Development</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack mx={4} my={5} boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={mobile} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma'> Mobile App</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack mx={4} my={5} boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={notes} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma'> Content Writing</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack mx={4} my={5} boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={video} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma'> Video Editing</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack mx={4} my={5} boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={marketing} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma'> Mentorship</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>

      </Box>
    </Box>
  );
};

export default Services;
