import { Box, Typography, Stack, Button, FormControl, FormHelperText, TextField, TextareaAutosize, } from "@mui/material";
import envelope from '../assests/envelope.svg';
import linkedin from '../assests/linkedin.svg';
import whatsapp from '../assests/whatsapp.svg';
import phone from '../assests/phone.svg';





const Contact = () => {
  return (
    <Box display='flex' gap={5} px={5} my={5} flexWrap='wrap' flexDirection='row'>
      <Stack sx={{width: {sm: '100%', lg: '40%'}}}>
        Drop Me a Message
        <form style={{margin: 3, width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <FormControl>
          <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#ffffff'}}>
            Enter your name
          </FormHelperText>
          <TextField
          fullWidth
          required
          id='outlined-basic'
          color='info'
          variant='outlined'
          />
        </FormControl>
        <FormControl>
          <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#ffffff'}}>
            Email
          </FormHelperText>
          <TextField
          fullWidth
          required
          id='outlined-basic'
          color='info'
          variant='outlined'
          />
        </FormControl>
        <FormControl>
          <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#ffffff'}}>
            Enter your name
          </FormHelperText>
          <TextareaAutosize
          minRows={5}
          required
          color='#111835'
          style={{ width: "100%", fontSize: '16px', borderRadius: 6, padding: 10, background: '#111835' }}
          />
        </FormControl>
        <Button variant="outlined">
          Let's talk
        </Button>

        </form>

      </Stack>
      <Stack sx={{width: {sm: '100%', lg: '50%'}}}>
        Social links
        <Typography variant='h6' fontFamily='karma'>You can reach me out for mentorship, networking, coaching and business
via the following contact info below. Don’t forget to leave a comment and suggestion
using the suggestion box on the right.</Typography>

    <Box display='block' flexDirection='row' flexWrap='wrap' gap={2} my={2} ml={2}>
      <Stack display='flex' flexDirection='row' gap={3} my={3} alignItems='center'>
<img src={envelope} alt='envelope' height='20px' width='20px'/>
<Typography variant='h6' fontFamily='karma'>otienoharrison95@gmail.com</Typography>

      </Stack>
      <Stack display='flex' flexDirection='row' gap={3} my={3} alignItems='center'>
<img src={linkedin} alt='linkedin' height='20px' width='20px'/>
<a href='https://www.linkedin.com/in/harrison-otieno-442a12162/'>
<Typography variant='h6' fontFamily='karma'>https://www.linkedin.com/in/harrison-otieno-442a12162/</Typography>

</a>

      </Stack>
      <Stack display='flex' flexDirection='row' gap={3} my={3} alignItems='center'>
<img src={whatsapp} alt='whatsapp' height='20px' width='20px'/>
<a href='https://wa.me/254778109769' >
<Typography variant='h6' fontFamily='karma'>https://wa.me/254778109769</Typography>
</a>

      </Stack>
      <Stack display='flex' flexDirection='row' gap={3} my={3} alignItems='center'>
<img src={phone} alt='phone number' height='20px' width='20px'/>
<Typography variant='h6' fontFamily='karma'>+254799820376</Typography>

      </Stack>
    </Box>




      </Stack>
    </Box>
  )
}

export default Contact
