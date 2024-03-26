import { Typography, Stack, Box } from "@mui/material";
import { Services , Tech, Portifolio, About, Bio, NavBar, Contact, Footer } from '../components'



const Home = () => {

    return (
        <Box className="App">
          <NavBar />
          <Bio />
          <About />
          <Portifolio />
          <Tech />
          <Services />
          <Contact />
          <Footer />

        </Box>
    );
};

export default Home;
