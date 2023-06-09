// Next & React Imports
import Image from 'next/image';
import { useRouter } from 'next/router';

// MUI Imports
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import { HomeItems } from '@/utils/constants/home-constants';
import styles from '../../styles/Home.module.css';

const ProfileBanner = () => {
    const router = useRouter();
    return (
        <Box className={styles.profile}>
            <Box
                component={'img'}
                className={styles.profileImg}
                alt={HomeItems.profile.alt}
                src={HomeItems.profile.img}
            />
            <Box className={styles.profileTextBox}>
                <Box className={styles.profileTitleBox}>
                    <Typography variant="h1" className={styles.profileTitle1}>
                        {HomeItems.profile.title1}
                    </Typography>
                    <Typography variant="h1" className={styles.profileTitle2}>
                        {HomeItems.profile.title2}
                    </Typography>
                </Box>
                <Typography className={styles.profileText}>
                    {HomeItems.profile.text}
                    <span className={'widow-wrap'}>
                        {HomeItems.profile.textWidow}
                    </span>
                    <span className={styles.profilePrideFlagContainer}>
                        <Image
                            className={styles.profilePrideFlag}
                            src="/img/pride-flag.png"
                            alt="An emoji of a pride flag."
                            width={35}
                            height={35}
                        />
                    </span>
                </Typography>
                <Box className={styles.profileSocialsBox}>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/tyler-hum/"
                        target="_blank"
                    >
                        <Tooltip title="LinkedIn">
                            <LinkedInIcon
                                fontSize="large"
                                className={styles.profileSocialsIcon}
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
                                fontSize="large"
                                className={styles.profileSocialsIcon}
                            />
                        </Tooltip>
                    </IconButton>
                    <IconButton component="a" href="mailto:tyler.hum@gmail.com">
                        <Tooltip title="Email">
                            <EmailIcon
                                fontSize="large"
                                className={styles.profileSocialsIcon}
                            />
                        </Tooltip>
                    </IconButton>
                </Box>
                <Box className={styles.profileButtonContainer}>
                    {/* <Button
                        className={styles.button}
                        href="#cards"
                        color="inherit"
                    >
                        <Typography className={styles.buttonText}>
                            More about my background
                        </Typography>
                        <KeyboardDoubleArrowRightIcon
                            fontSize="large"
                            className={styles.buttonIcon}
                        />
                    </Button> */}
                    <Button
                        className={styles.button}
                        href="../files/TylerHum-Resume.pdf"
                        target="_blank"
                        color="inherit"
                    >
                        <Typography className={styles.buttonText}>
                            Check out my resume
                        </Typography>
                        <DownloadIcon
                            fontSize="large"
                            className={styles.buttonIcon}
                        />
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileBanner;
