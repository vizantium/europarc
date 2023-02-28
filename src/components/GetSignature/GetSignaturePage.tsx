import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from './GetSignature.module.scss'
import account from './../../assets/icons8-account-100 1.png';
import conference from './../../assets/icons8-conference-foreground-selected-100 1.png';
import {Link} from "react-router-dom";

const GetSignaturePage = () => {
    return (
        <Grid sx={{maxWidth: '1300px'}} container>
            <Grid container sx={{marginTop: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <Typography sx={{fontSize: '40px', color: '#00546B', fontWeight: 700}}>Obține semnătură electronică</Typography>
                <Grid md={7}>
                    <Typography sx={{marginTop: '19px', fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{marginTop: '60px', marginBottom: '80px'}} container>
                <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} item md={6}>
                    <img src={conference}/>
                    <Typography component={Link} to={'/GetSignatureFormJur'} sx={{color: '#00546B', fontSize: '20px', fontWeight: 700, marginTop: '20px', letterSpacing: '0.06em', textDecoration: 'none'}}>
                        Persoane juridice
                    </Typography>
                    <Typography sx={{maxWidth: '450px', textAlign: 'center', fontSize: '20px', fontWeight: 400, letterSpacing: '0.06em', marginTop: '8px', height: '200px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Grid sx={{display: 'flex', justifyContent: 'space-around'}} container>
                        <Button className={styles.button}>
                            Regulament
                        </Button>
                        <Button className={styles.button}>
                            Nota informativă
                        </Button>
                    </Grid>
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} item md={6}>
                    <img src={account}/>
                    <Typography component={Link} to={'/GetSignatureFormPhys'} sx={{color: '#00546B', fontSize: '20px', fontWeight: 700, marginTop: '20px', letterSpacing: '0.06em', textDecoration: 'none'}}>
                        Persoane fizice
                    </Typography>
                    <Typography sx={{maxWidth: '450px', textAlign: 'center', fontSize: '20px', fontWeight: 400, letterSpacing: '0.06em', marginTop: '8px', height: '210px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Grid sx={{display: 'flex', justifyContent: 'space-around'}} container>
                        <Button className={styles.button}>
                            Regulamentul prestatorului
                        </Button>
                        <Button className={styles.button}>
                            Alte servicii
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GetSignaturePage;
