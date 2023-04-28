// Next & React Imports
import { useRouter } from 'next/router';

// MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Project & Style Imports
import { Cards } from '@/utils/constants/home-constants';
import styles from '../../styles/Home.module.css';

const CardsBanner = () => {
    const router = useRouter();

    return (
        <Box className={styles.cardsBanner} id={'cards'}>
            <Container className={styles.cardsContainer}>
                {Cards.map((card, index) => (
                    <Card className={styles.card} key={index}>
                        <CardContent className={styles.cardContainer}>
                            <Box
                                component={'img'}
                                className={styles.cardsIcon}
                                alt={card.iconAlt}
                                src={card.icon}
                            />
                            <Typography className={styles.cardsTitle}>
                                {card.name}
                            </Typography>
                            <Typography className={styles.cardsText}>
                                {card.text}
                                <span className="widow-wrap">
                                    {card.textWidow}
                                </span>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                {/* <Card className={styles.card}>
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
                </Card> */}
            </Container>
        </Box>
    );
};

export default CardsBanner;
