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
            <Typography className={styles.cardsHeader}>Process</Typography>
            <Box className={styles.cardsContainer}>
                <Card>
                    <CardContent>
                        <TipsAndUpdatesIcon fontSize="large" />
                        <Typography>Design</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography>Agile Approach</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography>Testing</Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <ArticleIcon />
                        <Typography>Documentation</Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default CardsBanner;
