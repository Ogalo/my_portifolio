import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import ProjectCard from './ProjectCard';


const Portifolio = () => {

  const pages = ["ALL PROJECTS", "WEBSITES", "DESIGNS", "Mobile APPS", "USER JOURNAL",];
  const handleCloseNavMenu = () => {}


  return (
    <Box my={5} px={5} >
      <Typography variant='h5' fontFamily='karma' textAlign='start' my={2} >Projects</Typography>
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start',  }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  pr: 3,
                  my: 1,
                  color: "white",
                  display: "flex",
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
