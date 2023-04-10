// Next & React Imports
import { useRouter } from 'next/router';

// MUI Imports
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import { BackEndStack, FrontEndStack } from '@/utils/constants/home-constants';
import styles from '../../styles/Home.module.css';

const ParallaxBanner = () => {
    const router = useRouter();

    return (
        <Box className={styles.parallaxBanner}>
            <Paper className={styles.parallaxContainer1}>
                <Typography className={styles.parallaxTitle}>
                    Front-end
                </Typography>
                <List>
                    {FrontEndStack.map((tech, index) => (
                        <ListItem>
                            <ListItemButton
                                className={styles.parallaxListButton}
                                component="a"
                                href={tech.url}
                                target="_blank"
                            >
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
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>

            <Paper className={styles.parallaxContainer2}>
                <Typography className={styles.parallaxTitle}>
                    Back-end
                </Typography>
                <List>
                    {BackEndStack.map((tech, index) => (
                        <ListItem>
                            <ListItemButton
                                className={styles.parallaxListButton}
                                component="a"
                                href={tech.url}
                                target="_blank"
                            >
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
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem>
                        <ListItemButton
                            className={styles.button}
                            component="a"
                            href="#"
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Typography className={styles.buttonText}>
                                Learn More
                            </Typography>
                            <KeyboardDoubleArrowRightIcon fontSize="large" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default ParallaxBanner;
