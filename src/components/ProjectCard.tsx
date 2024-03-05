import { Box, Typography, Stack, Button, Card, CardMedia, CardContent, } from '@mui/material'
import DashPro from '../assests/dashPro.png'
import bomaPro from '../assests/bomaPro.png'



const ProjectCard = () => {
  return (
    <Box sx={{mx: 5, display: 'flex', flexWrap: 'wrap', gap: 5}}>
      <Stack maxWidth='50%'>
        <Typography variant='h5' color='#83C4D2' fontFamily='karma'>Admin Dashboard</Typography>
        <Stack mt={2.5}>
        <Typography fontFamily='karma'>Introducing the Admin Dashboard, a versatile platform designed to empower administrators with comprehensive insights and control over their operations. This dynamic dashboard offers unparalleled customization, allowing users to tailor their interface precisely to their needs. With an intuitive drag-and-drop interface, administrators can effortlessly arrange widgets, charts, and data modules to create a personalized view of their organization's key metrics.</Typography>
        <Typography fontFamily='karma'>The heart of the Admin Dashboard lies in its robust visualization capabilities. Users can choose from a wide array of chart types, including line graphs, bar charts, pie charts, and more, to represent data in the most meaningful way possible. Real-time updates ensure that administrators always have access to the latest information, enabling them to make informed decisions with confidence.</Typography>
        <Typography fontFamily='karma'>In addition to visualizations, the Admin Dashboard provides powerful data management tools. Users can easily import, export, and manipulate data sets, ensuring that they have access to the information they need when they need it. Advanced filtering and sorting options further enhance data analysis capabilities, allowing administrators to drill down into the details and uncover valuable insights.</Typography>
        <Typography fontFamily='karma'>With its flexibility, ease of use, and powerful features, the Admin Dashboard is the ultimate tool for administrators seeking to take control of their data and drive organizational success. Whether monitoring key performance indicators, tracking trends over time, or identifying areas for improvement, the Admin Dashboard empowers users to make smarter decisions, faster.</Typography>
      </Stack>

        </Stack>

    <Card
     sx={{
      maxWidth: '550px',
      backgroundColor: '#111835',

    }}>
      <CardMedia
      >

      <img src={DashPro} alt='dash pro' width='100%' />
      </CardMedia>
    </Card>


    </Box>
  )
}

export default ProjectCard
