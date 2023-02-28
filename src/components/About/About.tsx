import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from "./About.module.scss";
import imagine from "../../assets/imagine.png";
import image1 from '../../assets/image 1.png';
import image2 from '../../assets/image 2.png'

const About = () => {
    return (
        <Grid sx={{maxWidth: '1500px', marginBottom: '50px'}} container>
            <Grid container>
                <Grid md={4.9} item>
                    <Typography className={styles.MainName}>
                        Despre noi
                    </Typography>
                    <Grid>
                        <Typography className={styles.names}>
                            Ce reprezintă Europarc?
                        </Typography>
                        <Typography className={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className={styles.names}>
                            Recomandare
                        </Typography>
                        <Typography className={styles.text}>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography className={styles.names}>
                            Securitate
                        </Typography>
                        <Typography className={styles.text}>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid md={6} item>
                    <img className={styles.image} src={imagine}/>
                </Grid>
            </Grid>
            <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%'}}>
                <Typography className={styles.MainName}>
                    Ghid de utilizare
                </Typography>
                <Typography className={styles.names}>
                    Cum semnezi documentele electronice?
                </Typography>
                <Typography sx={{marginTop: '70px'}} className={styles.text + styles.textMargin}>
                    Pasul 1. Selecteaza butonul Semnează:
                </Typography>
                <img className={styles.image} src={image1}/>
                <Typography sx={{marginTop: '70px'}} className={styles.text + styles.textMargin}>
                    Pasul 2. Încarcă fișiere:
                </Typography>
                <img className={styles.image} src={image2}/>
            </Grid>
        </Grid>
    );
};

export default About;
