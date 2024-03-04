import { Box, Typography, Stack, Button } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{ alignItems: "center", boxShadow: 3, mx: 10 }}
      mt={8}

    >
      <Typography variant="h5" textAlign="center" fontFamily="karma">
          About Me
      </Typography>
      <Typography sx={{ mt: 3, fontFamily: "karma" }}>
        <Typography>
          I have 4 years of versatile experience spanning Web development,
          UI-UX design, AI data training and Underwriting, I bring a
          comprehensive skill set to the table. Proficient in full-stack web
          development with a focus on MERN (MongoDB, Express.JS, ReactJS, and
          NodeJS), I also wield design software like Figma with finesse. My
          expertise extends to risk assessment and policy analysis within the
          underwriting sector.
        </Typography>
        <Typography>
          I excel in crafting responsive, user-friendly web applications and
          compelling designs while executing effective underwriting strategies.
          Equipped with a breadth of programming languages, I design engaging
          user experiences and make well-informed risk management decisions. My
          strengths lie in analytical thinking, problem-solving, and
          interpersonal communication.
        </Typography>
        <Typography>
          Furthermore, I thrive in collaborative environments, effortlessly
          bridging diverse functions. Committed to remaining abreast of industry
          trends and cutting-edge technologies in software development, design,
          and financial services, I am poised to drive innovation and deliver
          exceptional results.
        </Typography>
      </Typography>
      <Box sx={{mt: 3, }}>

      <Button
      variant="contained" href="#contained-buttons"
      >
        Hire Me
      </Button>
      <Button
      variant="contained" href="#contained-buttons" sx={{ml: 15}}
      >
        Resume
      </Button>
      </Box>


    </Box>
  );
};

export default About;
