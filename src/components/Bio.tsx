import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import Profile from '../assests/Profile.png'

const Bio = () => {
  return (
    <Box ml={5} mt={5}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'space-evenly'}}>
        <Box>

      <Stack mt={5}>
        <Typography variant='h3' color="#cec5c5" fontFamily = "karma"> I'm a </Typography>
      </Stack>
      <Stack mt={4}>
        <Typography variant='h4' fontFamily = "karma">FULL STACK SOFTWARE </Typography>
        <Typography variant='h5' fontFamily = "karma">DEVELOPER.</Typography>
      </Stack>
      <Button
      variant="contained" href="#contained-buttons" sx={{mt: '15px'}}
      >
        Get to Know me
      </Button>
        </Box>
        <Box>
      <Stack mt={0}
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
