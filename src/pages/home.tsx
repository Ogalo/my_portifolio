import { Typography, Stack, Box } from "@mui/material";
import NavBar from '../components/NavBar';
import Bio from '../components/Bio';
import About from '../components/About';


const Home = () => {

    return (
        <Box>
          <NavBar />
          <Bio />
          <About />

        </Box>
    );
};

export default Home;
