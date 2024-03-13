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
    <Box px={5}  >
      <Typography variant="h5" fontFamily="karma" pt={5}>
        Services
      </Typography>


      <Box display='flex' gap={6} flexDirection='row' flexWrap='wrap' mt={3} justifyContent='space-evenly'>
        <Stack boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={design} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma' pt={2}> UI/UX  Design</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={web} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma' pt={2}> Web Development</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={mobile} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma' pt={2}> Mobile App</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={notes} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma' pt={2}> Content Writing</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={video} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma' pt={2}> Video Editing</Typography>
          <Typography variant='h6' fontFamily='karma' my={1}>
            Lorem ipsum dolor sit amet consectetur, adipiscing elit neque curae
            pellentesque dictumst, nam vitae pulvinar cum. Fusce tristique
            turpis per volutpat erat mollis semper
          </Typography>
        </Stack>
        <Stack boxShadow={5} p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '320px',
          fontFamily: 'karma'
        }}>
          <img src={marketing} alt='design' height='80px' width='80px'/>

          <Typography variant='h5' fontFamily='karma' pt={2}> Mentorship</Typography>
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
