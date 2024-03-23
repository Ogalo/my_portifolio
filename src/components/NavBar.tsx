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
import { Link, useNavigate } from "react-router-dom";




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
              gap: 2,
            }}
          >
            <Stack>
              <img src={Logo} alt="Logo" width="80 px" height="55 px" />
            </Stack>
            <Stack>
              <Typography variant="h4" fontFamily='karma'>Harrison</Typography>
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

                <MenuItem >
                  <Typography key='about' textAlign="center">ABOUT</Typography>
                </MenuItem>
                <MenuItem >
                  <Typography key='blog' textAlign="center">BLOG</Typography>
                </MenuItem>
                <MenuItem >
                  <Typography key='services' textAlign="center">SERVICES</Typography>
                </MenuItem>
                <MenuItem >
                  <Typography key='experience' textAlign="center">EXPERIENCE</Typography>
                </MenuItem>
                <MenuItem >
                  <Button  key='contact' variant='contained'>CONTACT</Button>
                </MenuItem>

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, ml: 75}}>

               <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                ABOUT
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                BLOG
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                SERVICES
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                EXPERIENCE
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 6,
                  color: "white",
                  display: "block",
                  fontFamily: "karma",
                }}
              >
                CONTACT
              </Button>

          </Box>


        </Toolbar>
      </Container>
    </Box>
  );
}
export default NavBar;
