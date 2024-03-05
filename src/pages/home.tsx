import { Typography, Stack, Box } from "@mui/material";
import NavBar from '../components/NavBar';
import Bio from '../components/Bio';
import About from '../components/About';
import Portifolio from '../components/Portifolio';


const Home = () => {

    return (
        <Box>
          <NavBar />
          <Bio />
          <About />
          <Portifolio />

        </Box>
    );
};

export default Home;
