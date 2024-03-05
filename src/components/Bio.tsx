import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import Profile from '../assests/Profile.png'

const Bio = () => {
  return (
    <Box mt={5}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 26, justifyContent: 'space-evenly', }}>
        <Box>

      <Stack mt={5}>
        <Typography variant='h3' color="#cec5c5" fontFamily = "karma"> I'm a </Typography>
      </Stack>
      <Stack mt={4}>
        <Typography variant='h4' fontFamily = "karma">FULL-STACK WEB SOFTWARE </Typography>
        <Typography variant='h5' mt={1.5} fontFamily = "karma">DEVELOPER.</Typography>
      </Stack>
      <Button
      variant="contained" href="#contained-buttons" sx={{mt: 5}}
      >
        Get to Know me
      </Button>
        </Box>
        <Box>
      <Stack
        sx={{
          maxWidth: '330px',


        }}
        >
        <img src={Profile} alt='Profile Image' />
      </Stack>

        </Box>
      </Box>



    </Box>
  )
}

export default Bio;
