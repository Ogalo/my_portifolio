import React from 'react'
import { Box, Typography, Stack } from '@mui/material'

const Bio = () => {
  return (
    <Box ml={5} mt={5}>
      <Stack>
        <Typography variant='h3' color="#cec5c5" fontFamily = "karma"> I'm a </Typography>
      </Stack>
      <Stack mt={4}>
        <Typography variant='h4' fontFamily = "karma">FULL STACK SOFTWARE </Typography>
        <Typography variant='h5' fontFamily = "karma">DEVELOPER.</Typography>
      </Stack>

    </Box>
  )
}

export default Bio;
