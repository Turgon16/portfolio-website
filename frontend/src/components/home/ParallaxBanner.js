// Next & React Imports
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI Imports
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
// Project & Style Imports
import {
    BackEndBox,
    BackEndStack,
    FrontEndBox,
    FrontEndStack,
} from '@/utils/constants/home-constants';
import styles from '../../styles/Home.module.css';
import ParallaxDrawer from './ParallaxDrawer';

const ParallaxBanner = () => {
    const [showClass1, setShowClass1] = useState('false');
    const [showClass2, setShowClass2] = useState('false');
    const router = useRouter();

    const handleClass1Toggle = () => {
        setShowClass1(!showClass1);
    };

    const handleClass2Toggle = () => {
        setShowClass2(!showClass2);
    };

    const CloseWindowButton = () => {
        return (
            <Box className={styles.parallaxDrawerInnerContainer}>
                <IconButton
                    className={styles.parallaxCloseButton}
                    onClick={handleClass1Toggle}
                    href={'#front-end'}
                >
                    <Typography className={styles.parallaxCloseButtonText}>
                        Close Window
                    </Typography>
                    <CloseIcon className={styles.parallaxCloseIcon} />
                </IconButton>
            </Box>
        );
    };

    return (
        <Box id={'front-end'} className={styles.parallaxBanner}>
            <Box className={styles.parallaxTop}>
                <Box className={styles.parallaxContainer1}>
                    <Typography className={styles.parallaxTitle}>
                        Front-end
                    </Typography>
                    <List>
                        {FrontEndStack.map((tech, index) => (
                            <ListItem key={index}>
                                <Box className={styles.parallaxListBox}>
                                    <ListItemIcon>
                                        <Box
                                            component={'img'}
                                            className={styles.parallaxIcon}
                                            alt={tech.alt}
                                            src={tech.img}
                                        />
                                    </ListItemIcon>
                                    <Typography className={styles.parallaxText}>
                                        {tech.name}
                                    </Typography>
                                </Box>
                            </ListItem>
                        ))}
                        <ListItem>
                            <ListItemButton
                                className={styles.parallaxButton}
                                onClick={handleClass1Toggle}
                                href={'#front-end'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={styles.buttonText}>
                                    Learn More
                                </Typography>
                                <KeyboardDoubleArrowRightIcon fontSize="large" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <ParallaxDrawer
                    handleClass1Toggle={handleClass1Toggle}
                    showClassFunction={showClass1}
                    techstack={FrontEndBox}
                />
            </Box>

            <Box className={styles.parallaxBottom}>
                <Box className={styles.parallaxContainer2}>
                    <Typography className={styles.parallaxTitle}>
                        Back-end
                    </Typography>
                    <List>
                        {BackEndStack.map((tech, index) => (
                            <ListItem key={index}>
                                <Box className={styles.parallaxListBox}>
                                    <ListItemIcon>
                                        <Box
                                            component={'img'}
                                            className={styles.parallaxIcon}
                                            alt={tech.alt}
                                            src={tech.img}
                                        />
                                    </ListItemIcon>
                                    <Typography className={styles.parallaxText}>
                                        {tech.name}
                                    </Typography>
                                </Box>
                            </ListItem>
                        ))}
                        <ListItem>
                            <ListItemButton
                                className={styles.parallaxButton}
                                onClick={handleClass2Toggle}
                                href={'#front-end'}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography className={styles.buttonText}>
                                    Learn More
                                </Typography>
                                <KeyboardDoubleArrowRightIcon fontSize="large" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <ParallaxDrawer
                    handleClass1Toggle={handleClass2Toggle}
                    showClassFunction={showClass2}
                    techstack={BackEndBox}
                />
            </Box>
        </Box>
    );
};

export default ParallaxBanner;
