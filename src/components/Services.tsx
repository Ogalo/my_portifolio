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
          As a seasoned UI/UX designer, I specialize in crafting innovative web and mobile experiences. With a keen eye for detail and a passion for user-centric design, I leverage Figma to bring the clients creative visions to life. I thrive on transforming concepts into seamless digital experiences that leave a lasting impression.
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
          I have a strong understanding of the a full stack MERN web applications from scratch. I have experience with React, CSS, JavaScript, Material UI, Nextjs, MongoDB, Express.JS and Node.
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
           I excels in crafting cross-platform applications for iOS and Android. Specializing in intuitive UI design and efficient performance optimization, using React Native.
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
          I possess a deep comprehension of the content creation process and am adept at crafting original content. My expertise spans various forms of writing including articles, blogs, and essays.
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
          As a dedicated video editor proficient in DaVinci Resolve 18, I specialize in crafting captivating visual narratives. With a keen eye for detail and a passion to transform raw footage into polished masterpieces. My expertise spans various genres, from cinematic shorts to promotional content, ensuring each project exceeds expectations.
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
          I provide guidance and support to aspiring developers and designers who are seeking to enter the field of software development and designers. If interested kindly reach out.
          </Typography>
        </Stack>

      </Box>
    </Box>
  );
};

export default Services;
