// React & NextJS Imports
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI Imports
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Project and Styles Imports
import styles from '../styles/NavBar.module.css';

const pages = ['Tech Stack', 'App Portfolio', 'About Me'];

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
        <AppBar position="sticky" sx={{ background: '#0F4C75' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Below is the md-xl view of the appbar */}
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <IconButton
                                sx={{
                                    display: { xs: 'flex', md: 'flex' },
                                    mr: 1,
                                    color: 'white',
                                }}
                                onClick={() => {
                                    router.push('../');
                                }}
                            >
                                <DeveloperBoardIcon fontSize="large" />
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                className={styles.navbarTitle}
                            >
                                Tyler.dev
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    className={styles.navbarButton}
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    {/* Below is the xs-s view of the navbar */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
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
                            <MenuIcon fontSize="large" />
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
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <IconButton 
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
                </Typography>       */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
