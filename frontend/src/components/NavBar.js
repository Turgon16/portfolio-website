// React & NextJS Imports
import { useState } from 'react';
import { useRouter } from 'next/router';

// MUI Imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const pages = ['Tech Stack', 'App Portfolio', 'About Me'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    // Router Handler
    const router = useRouter();

  return (
    <AppBar position="sticky" sx={{background: '#0E5E6F'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Below is the md-xl view of the appbar */}
            <Box sx={{ width: '100%', display: {xs: 'none', md: 'flex'}, justifyContent: 'space-between' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
                    <IconButton 
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }}
                        onClick={ () => {
                            router.push('../');
                        }}>
                        <DeveloperBoardIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Tyler Hum
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                        {page}
                    </Button>
                    ))}
                </Box>
            </Box>
            {/* Below is the xs-s view of the navbar */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <IconButton 
                    sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }}
                    onClick={ () => {
                        router.push('../');
                    }}>
                    <DeveloperBoardIcon />
                </IconButton>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    Tyler Hum
                </Typography>      
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
