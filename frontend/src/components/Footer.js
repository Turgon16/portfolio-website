// MUI Imports
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// Project and Styles Imports
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <Box className={styles.footer}>
            <Container maxWidth="xl">
                <Box className={styles.footerFlex}>
                    <Typography className={styles.footerText}>
                        Copyright &#169; 2023
                    </Typography>
                    <Box className={styles.footerSocialsBox}>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/tyler-hum/"
                            target="_blank"
                        >
                            <Tooltip title="LinkedIn">
                                <LinkedInIcon
                                    className={styles.footerSocialsIcon}
                                />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://github.com/Turgon16"
                            target="_blank"
                        >
                            <Tooltip title="GitHub">
                                <GitHubIcon
                                    className={styles.footerSocialsIcon}
                                />
                            </Tooltip>
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:tyler.hum@gmail.com"
                        >
                            <Tooltip title="Email">
                                <EmailIcon
                                    className={styles.footerSocialsIcon}
                                />
                            </Tooltip>
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
export default Footer;
