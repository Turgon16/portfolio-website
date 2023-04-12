// Next & React Imports
import { useRouter } from 'next/router';

// MUI Imports
import ArticleIcon from '@mui/icons-material/Article';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import styles from '../../styles/Home.module.css';

const CardsBanner = () => {
    const router = useRouter();

    return (
        <Box className={styles.cardsBanner}>
            <Box className={styles.cardsContainer}>
                <Card className={styles.card}>
                    <CardContent className={styles.cardContainer}>
                        <TipsAndUpdatesIcon className={styles.cardsIcon} />
                        <Typography>Design</Typography>
                    </CardContent>
                </Card>
                <Card className={styles.card}>
                    <CardContent className={styles.cardContainer}>
                        <Box
                            component={'img'}
                            className={styles.cardsIcon}
                            alt={
                                'An icon representing the scrum arrows, which loop in a circle and then back out again.'
                            }
                            src={'../svg/scrum.svg'}
                        />
                        <Typography>Agile Approach</Typography>
                    </CardContent>
                </Card>
                <Card className={styles.card}>
                    <CardContent className={styles.cardContainer}>
                        <ArticleIcon className={styles.cardsIcon} />
                        <Typography>Documentation</Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default CardsBanner;
