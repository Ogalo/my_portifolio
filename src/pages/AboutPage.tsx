import { Box, Typography, Stack, Button } from "@mui/material";

const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#111835",
        overflow: "hidden",
        height: "100%",
        px: 5,
      }}
    >
      <Box sx={{ height: { xs: "100%", lg: "100vh" } }}>
        <Typography
          variant="h4"
          textAlign="left"
          fontFamily="karma"
          pt={10}
          color="white"
        >
          About
        </Typography>
        <Typography sx={{ mt: 3, fontFamily: "karma", color: "white" }}>
          <Typography fontFamily="karma">
            I am a certified full stack web developer || Designer with a 3 years
            of versatile experience spanning Web development, UI-UX design, AI
            data training and Underwriting, I bring a comprehensive skill set to
            the table. Proficient in full-stack web development with a focus on
            MERN (MongoDB, Express.JS, ReactJS, and NodeJS), I also wield design
            software like Figma with finesse. My expertise extends to risk
            assessment and policy analysis within the underwriting sector.
          </Typography>
          <Typography fontFamily="karma">
            I excel in crafting responsive, user-friendly web applications and
            compelling designs while executing effective underwriting
            strategies. Equipped with a breadth of programming languages, I
            design engaging user experiences and make well-informed risk
            management decisions. My strengths lie in analytical thinking,
            problem-solving, and interpersonal communication.
          </Typography>
          <Typography fontFamily="karma">
            Furthermore, I thrive in collaborative environments, effortlessly
            bridging diverse functions. Committed to remaining abreast of
            industry trends and cutting-edge technologies in software
            development, design, and financial services, I am poised to drive
            innovation and deliver exceptional results.
          </Typography>
        </Typography>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "row",
            pb: 3,
            gap: { xs: 5, lg: 10 },
            flexWrap: "wrap",
          }}
        >
          <Button
            sx={{ borderBottom: 2, width: "170px" }}
            onClick={onButtonClick}
          >
            Download Resume
          </Button>
          <Button
            sx={{ width: "180px", borderBottom: 2 }}
            href="https://calendly.com/otienoharrison95/30min"
          >
            Schedule a meeting
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
