import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import ProjectCard from './ProjectCard';


const Portifolio = () => {

  const pages = ["ALL PROJECTS", "WEBSITES", "DESIGNS", "Mobile APPS", "USER JOURNAL",];
  const handleCloseNavMenu = () => {}


  return (
    <Box mt={5}>
      <Typography variant='h5' fontFamily='karma' textAlign='center'>Projects</Typography>
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'center',  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  px: 6,
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <ProjectCard />
    </Box>
  )
}

export default Portifolio
