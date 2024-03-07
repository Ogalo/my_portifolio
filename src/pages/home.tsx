import { Typography, Stack, Box } from "@mui/material";
import NavBar from '../components/NavBar';
import Bio from '../components/Bio';
import About from '../components/About';
import Portifolio from '../components/Portifolio';
import Tech from '../components/Tech';


const Home = () => {

    return (
        <Box>
          <NavBar />
          <Bio />
          <About />
          <Portifolio />
          <Tech />

        </Box>
    );
};

export default Home;
