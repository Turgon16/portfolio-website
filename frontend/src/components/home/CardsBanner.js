// Next & React Imports
import { useRouter } from 'next/router';

// MUI Imports
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
            <Container maxWidth="xl" className={styles.cardsContainer}>
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
                                {card.text1}
                            </Typography>
                            <Typography className={styles.cardsText}>
                                {card.text2}
                                <span className="widow-wrap">
                                    {card.textWidow}
                                </span>
                            </Typography>
                            {card.link != '' ? (
                                <Button
                                    className={styles.cardButton}
                                    href={card.link}
                                    target="_blank"
                                    color="inherit"
                                >
                                    <Typography
                                        className={styles.cardButtonText}
                                    >
                                        {card.linkText}
                                    </Typography>
                                    <KeyboardDoubleArrowRightIcon
                                        fontSize="large"
                                        className={styles.cardButtonIcon}
                                    />
                                </Button>
                            ) : (
                                ''
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </Box>
    );
};

export default CardsBanner;
