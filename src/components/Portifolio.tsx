import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import ProjectCard from './ProjectCard';


const Portifolio = () => {

  const pages = ["ALL PROJECTS", "WEBSITES", "DESIGNS", "Mobile APPS", "USER JOURNAL",];
  const handleCloseNavMenu = () => {}


  return (
    <Box my={5} mx={5} boxShadow={4} >
      <Typography variant='h5' fontFamily='karma' textAlign='start' my={2} ml={5}>Projects</Typography>
      <Box sx={{ display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start', ml: 4, }}>
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
