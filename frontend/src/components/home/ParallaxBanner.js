// Next & React Imports
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI Imports
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import {
    BackEndStack,
    FrontEndBox,
    FrontEndStack,
} from '@/utils/constants/home-constants';
import { IconButton } from '@mui/material';
import styles from '../../styles/Home.module.css';

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
                <Box
                    className={
                        showClass1
                            ? styles.parallaxContainer3
                            : styles.parallaxContainer3 +
                              ' ' +
                              styles.showContainer3
                    }
                >
                    <IconButton
                        onClick={handleClass1Toggle}
                        href={'#front-end'}
                    >
                        <Typography
                            sx={{ color: 'white', whiteSpace: 'nowrap' }}
                        >
                            Close Window
                        </Typography>
                        <CloseIcon className={styles.parallaxCloseIcon} />
                    </IconButton>
                    <Box
                        component={'img'}
                        className={styles.parallaxImg}
                        alt={FrontEndBox.alt1}
                        src={FrontEndBox.img1}
                    />
                    <Typography className={styles.parallaxDrawerText}>
                        {FrontEndBox.text1}
                        <span className={'widow-wrap'}>
                            {FrontEndBox.text1Widow}
                        </span>
                    </Typography>
                    <Box className={'flex-evenly'}>
                        <Box
                            component={'img'}
                            className={styles.parallaxImg2}
                            alt={FrontEndBox.alt3}
                            src={FrontEndBox.img3}
                        />
                    </Box>
                    <Typography className={styles.parallaxDrawerText}>
                        {FrontEndBox.text2}
                        <span className={'widow-wrap'}>
                            {FrontEndBox.text2Widow}
                        </span>
                    </Typography>
                    <Box
                        component={'img'}
                        className={styles.parallaxImg}
                        alt={FrontEndBox.alt2}
                        src={FrontEndBox.img2}
                    />
                    <Typography className={styles.parallaxDrawerText}>
                        {FrontEndBox.text3}
                        <span className={'widow-wrap'}>
                            {FrontEndBox.text3Widow}
                        </span>
                    </Typography>
                    <IconButton
                        onClick={handleClass1Toggle}
                        href={'#front-end'}
                    >
                        <Typography
                            sx={{ color: 'white', whiteSpace: 'nowrap' }}
                        >
                            Close Window
                        </Typography>
                        <CloseIcon
                            className={styles.parallaxCloseIcon}
                            href={'#'}
                        />
                    </IconButton>
                </Box>
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
                <Box
                    className={
                        showClass2
                            ? styles.parallaxContainer4
                            : styles.parallaxContainer4 +
                              ' ' +
                              styles.showContainer4
                    }
                >
                    <IconButton
                        onClick={handleClass2Toggle}
                        href={'#front-end'}
                    >
                        <Typography
                            sx={{ color: 'white', whiteSpace: 'nowrap' }}
                        >
                            Close Window
                        </Typography>
                        <CloseIcon className={styles.parallaxCloseIcon} />
                    </IconButton>
                    <Box
                        component={'img'}
                        className={styles.parallaxImg}
                        alt={FrontEndBox.alt1}
                        src={FrontEndBox.img1}
                    />
                    <Typography className={styles.parallaxDrawerText}>
                        {FrontEndBox.text1}
                        <span className={'widow-wrap'}>
                            {FrontEndBox.text1Widow}
                        </span>
                    </Typography>
                    <Box className={'flex-evenly'}>
                        <Box
                            component={'img'}
                            className={styles.parallaxImg2}
                            alt={FrontEndBox.alt3}
                            src={FrontEndBox.img3}
                        />
                    </Box>
                    <Typography className={styles.parallaxDrawerText}>
                        {FrontEndBox.text2}
                        <span className={'widow-wrap'}>
                            {FrontEndBox.text2Widow}
                        </span>
                    </Typography>
                    <Box
                        component={'img'}
                        className={styles.parallaxImg}
                        alt={FrontEndBox.alt2}
                        src={FrontEndBox.img2}
                    />
                    <Typography className={styles.parallaxDrawerText}>
                        {FrontEndBox.text3}
                        <span className={'widow-wrap'}>
                            {FrontEndBox.text3Widow}
                        </span>
                    </Typography>
                    <IconButton
                        onClick={handleClass2Toggle}
                        href={'#front-end'}
                    >
                        <Typography
                            sx={{ color: 'white', whiteSpace: 'nowrap' }}
                        >
                            Close Window
                        </Typography>
                        <CloseIcon
                            className={styles.parallaxCloseIcon}
                            href={'#'}
                        />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ParallaxBanner;
