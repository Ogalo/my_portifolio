import { Typography, Stack, Box } from "@mui/material";
import { Services , Tech, Portifolio, About, Bio, NavBar, Contact } from '../components'



const Home = () => {

    return (
        <Box>
          <NavBar />
          <Bio />
          <About />
          <Portifolio />
          <Tech />
          < Services />
          <Contact />

        </Box>
    );
};

export default Home;
