// Next & React Imports
import Head from 'next/head';

// MUI Imports
import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NavBar from '@/components/NavBar';
import CardsBanner from '@/components/home/CardsBanner';
import ParallaxBanner from '@/components/home/ParallaxBanner';
import ProfileBanner from '@/components/home/ProfileBanner';

export default function Home() {
    return (
        <>
            <Head>
                <title>Tyler.dev</title>
                <meta
                    name="description"
                    content="This is my portfolio website showcasing my talents as a full-stack developer."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CssBaseline />
                <NavBar />
                <Box className="centered-container">
                    <ProfileBanner />
                    <ParallaxBanner />
                    <CardsBanner />
                    <Box>
                        <Typography variant="h3">Body 3</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h2">About Me</Typography>
                    </Box>
                    <Box className="flex-center">
                        <Typography variant="h4">Footer Here</Typography>
                    </Box>
                </Box>
            </main>
        </>
    );
}

