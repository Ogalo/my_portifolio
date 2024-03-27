import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assests/Logo.svg";
import { Link, useNavigate, NavLink } from "react-router-dom";




function NavBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };




  return (
    <Box position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            sx={{
              display: { xs: "none", lg: "flex" },
              textDecoration: "none",
              px: 1,
              flexDirection: "row",
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Stack onClick={()=>navigate('/')}>
              <img src={Logo} alt="Logo" width="80 px" height="55 px" />
            </Stack>
            <Stack onClick={()=>navigate('/')} >
              <Typography variant="h4" sx={{cursor:'pointer'}}fontFamily='karma'>Harrison</Typography>
            </Stack>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}

            >

                <MenuItem>
                  <Typography key='about' textAlign="center">
                    <NavLink to='about' preventScrollReset={true} style={({ isActive }) => ({
                  color: isActive ? 'grey' : 'black',
                  textDecoration: 'none'
                })}>About</NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem >
                  <Typography key='blog' textAlign="center"><NavLink to='/blog' style={({ isActive }) => ({
                  color: isActive ? 'grey' : 'black',
                  textDecoration: 'none'
                })} preventScrollReset={true} >Blog</NavLink></Typography>
                </MenuItem>
                <MenuItem >
                  <Typography key='services' textAlign="center"><NavLink to='/services' style={({ isActive }) => ({
                  color: isActive ? 'grey' : 'black',
                  textDecoration: 'none'
                })} preventScrollReset={true} >Services</NavLink></Typography>
                </MenuItem>
                <MenuItem >
                  <Typography key='experience' textAlign="center"><NavLink to='/experience' style={({ isActive }) => ({
                  color: isActive ? 'grey' : 'black',
                  textDecoration: 'none'
                })} preventScrollReset={true} >Experience</NavLink></Typography>
                </MenuItem>
                <MenuItem>
                  <Button  key='contact' variant='contained'><NavLink to='/contact' style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })} preventScrollReset={true} >Contact</NavLink></Button>
                </MenuItem>

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, ml: 75}}>

               <Button
                 sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                <NavLink to='about' style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })} >About</NavLink>

              </Button>
              <Button

                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
               <NavLink to='/blog' style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })} preventScrollReset={true} >Blog</NavLink>
              </Button>
              <Button

                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
               <NavLink to='/services'style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })} preventScrollReset={true} >Services</NavLink>
              </Button>
              <Button

                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                <NavLink to='/experience' style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })}>Experience</NavLink>
              </Button>
              <Button

                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                  ml: 6,
                  borderRadius:'outline'
                }}
                variant='contained'

              >
                <NavLink
                to='/contact'
                style={({ isActive }) => ({
                  color: isActive ? 'grey' : '#ffffff',
                  textDecoration: 'none'
                })}
                 > Contact
                </NavLink>
              </Button>

          </Box>


        </Toolbar>
      </Container>
    </Box>
  );
}
export default NavBar;
