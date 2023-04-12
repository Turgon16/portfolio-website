// Next & React Imports

// MUI Imports
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import { IconButton } from '@mui/material';
import styles from '../../styles/Home.module.css';

const ParallaxDrawer = ({
    showClassFunction,
    handleClass1Toggle,
    techstack,
}) => {
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
        <Box
            className={
                showClassFunction
                    ? styles.parallaxDrawerContainer
                    : styles.parallaxDrawerContainer +
                      ' ' +
                      styles.showContainer
            }
        >
            <CloseWindowButton />
            <Box className={styles.parallaxDrawerInnerContainer}>
                <Box
                    component={'img'}
                    className={styles.parallaxImg}
                    alt={techstack.alt1}
                    src={techstack.img1}
                />
                <Typography className={styles.parallaxDrawerText}>
                    {techstack.text1}
                    <span className={'widow-wrap'}>{techstack.text1Widow}</span>
                </Typography>
            </Box>
            <Box className={styles.parallaxDrawerInnerContainerMid}>
                <Box
                    component={'img'}
                    className={styles.parallaxImg2}
                    alt={techstack.alt3}
                    src={techstack.img3}
                />
                <Typography className={styles.parallaxDrawerText}>
                    {techstack.text2}
                    <span className={'widow-wrap'}>{techstack.text2Widow}</span>
                </Typography>
            </Box>
            <Box className={styles.parallaxDrawerInnerContainer}>
                <Box
                    component={'img'}
                    className={styles.parallaxImg}
                    alt={techstack.alt2}
                    src={techstack.img2}
                />
                <Typography className={styles.parallaxDrawerText}>
                    {techstack.text3}
                    <span className={'widow-wrap'}>{techstack.text3Widow}</span>
                </Typography>
            </Box>
            <CloseWindowButton />
        </Box>
    );
};

export default ParallaxDrawer;
