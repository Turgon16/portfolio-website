// Next & React Imports

// MUI Imports
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import styles from '../../styles/Home.module.css';

const ParallaxDrawer = ({
    showClassFunction,
    handleClass1Toggle,
    techstack,
}) => {
    const CloseWindowButton = () => {
        return (
            <Box className={styles.parallaxDrawerInnerContainer}>
                <Button
                    className={styles.parallaxCloseButton}
                    onClick={handleClass1Toggle}
                    href={'#front-end'}
                >
                    <Typography className={styles.closeButtonText}>
                        Close
                    </Typography>
                    <CloseIcon className={styles.closeButtonIcon} />
                </Button>
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
            <Container maxWidth="xl">
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
                        <span className={'widow-wrap'}>
                            {techstack.text1Widow}
                        </span>
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
                        <span className={'widow-wrap'}>
                            {techstack.text2Widow}
                        </span>
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
                        <span className={'widow-wrap'}>
                            {techstack.text3Widow}
                        </span>
                    </Typography>
                </Box>
                <CloseWindowButton />
            </Container>
        </Box>
    );
};

export default ParallaxDrawer;
