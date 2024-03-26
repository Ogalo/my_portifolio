import { Box, Typography, Stack, Button } from "@mui/material";


const About = () => {


  return (
    <Box

      id='about'

      sx={{ alignItems: "center", px: 5 }}
      mt={5}

    >
      <Typography variant="h5" textAlign="left" fontFamily="karma" mt={3}>
          About
      </Typography>
      <Typography sx={{ mt: 3, fontFamily: "karma" }}>
        <Typography fontFamily='karma'>
          I am a certified full stack web developer || Designer with a 3 years of versatile experience spanning Web development,
          UI-UX design, AI data training and Underwriting, I bring a
          comprehensive skill set to the table. Proficient in full-stack web
          development with a focus on MERN (MongoDB, Express.JS, ReactJS, and
          NodeJS), I also wield design software like Figma with finesse. My
          expertise extends to risk assessment and policy analysis within the
          underwriting sector.
        </Typography>
        <Typography fontFamily='karma'>
          I excel in crafting responsive, user-friendly web applications and
          compelling designs while executing effective underwriting strategies.
          Equipped with a breadth of programming languages, I design engaging
          user experiences and make well-informed risk management decisions. My
          strengths lie in analytical thinking, problem-solving, and
          interpersonal communication.
        </Typography>
        <Typography fontFamily='karma'>
          Furthermore, I thrive in collaborative environments, effortlessly
          bridging diverse functions. Committed to remaining abreast of industry
          trends and cutting-edge technologies in software development, design,
          and financial services, I am poised to drive innovation and deliver
          exceptional results.
        </Typography>
      </Typography>
      <Box sx={{mt: 3, display: 'flex', flexDirection: 'row', pb: 3, gap: 10 }}>
           <Button sx={{width:'180px', borderBottom: 2, }} href="https://calendly.com/otienoharrison95/30min">
            Schedule a meeting
      </Button>
      </Box>


    </Box>
  );
};

export default About;
