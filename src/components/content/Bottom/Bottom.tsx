import React from 'react';
import {Grid, Typography} from "@mui/material";
import styles from './Bottom.module.scss'
import logo from './../../../assets/images/logo.png'
import visaCard from './../../../assets/images/visacard.png'
import masterCard from './../../../assets/images/mastercard.png'
import facebook from './../../../assets/images/facebook.png'
import viber from './../../../assets/images/viber.png'
import telegram from './../../../assets/images/telegram.png'
import whatsapp from './../../../assets/images/whatsapp.png'
import googlePlay from './../../../assets/images/googlePlay.png'
import appStore from './../../../assets/images/appStore.png'

const Bottom = () => {
    return (
        <Grid sx={{display: 'flex', width: '100%', justifyContent: 'center', background: '##FFFEFF', minHeight: '240px', alignItems: 'center', color: '#2F2B57', flexDirection: 'column'}}>
            <div className={styles.line}/>
            <Grid container sx={{maxWidth: '1350px', paddingTop: '45px', paddingBottom: '25px', paddingLeft: '15px', paddingRight: '15px'}}>
                <Grid sx={{paddingLeft: '10px', display: 'flex', flexDirection: 'column'}} item md={4}>
                    <img src={logo} style={{width: '135px', marginLeft: '15px'}}/>
                    <Grid>
                        <img src={visaCard} style={{width: '70px', marginTop: '30px'}}/>
                        <img src={masterCard} style={{width: '70px', marginTop: '30px'}}/>
                    </Grid>
                    <Grid sx={{marginTop: '26px'}}>
                        <img src={facebook} style={{width: '39px', cursor: 'pointer'}}/>
                        <img src={viber} style={{width: '39px', cursor: 'pointer', marginLeft: '5px'}}/>
                        <img src={telegram} style={{width: '39px', cursor: 'pointer', marginLeft: '5px'}}/>
                        <img src={whatsapp} style={{width: '39px', cursor: 'pointer', marginLeft: '5px'}}/>
                    </Grid>
                </Grid>
                <Grid md={4} item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <Grid >
                        <Typography >
                            Termeni şi condiţii
                        </Typography>
                        <Typography sx={{marginTop: '13px'}}>
                            Politica de securitate
                        </Typography>
                        <Typography sx={{marginTop: '13px'}}>
                            Întrebări frecvente
                        </Typography>
                        <Typography sx={{marginTop: '13px'}}>
                            Registrul cheilor publice
                        </Typography>

                    </Grid>
                </Grid>
                <Grid md={4} item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Grid>
                        <Typography sx={{marginTop: '-15px', fontSize: '20px', fontWeight: 600}}>
                            Contacte
                        </Typography>
                        <Typography sx={{marginTop: '15px'}}>
                            Moldova, Chișinău, str. Calea Ieșilor 10B,
                        </Typography>
                        <Typography sx={{font: 'Inter'}}>
                            MD-2069
                        </Typography>
                        <Typography sx={{marginTop: '15px'}}>
                            info@europarc.md
                        </Typography>
                        <Typography sx={{marginTop: '15px'}}>
                            09:00-16:00
                        </Typography>

                    </Grid>
                </Grid>
            </Grid>
            <div className={styles.line}/>
            <Grid container sx={{maxWidth: '1350px', paddingTop: '25px', paddingBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                    <Grid item md={6} sx={{display: 'flex', flexDirection: 'row'}}>
                        <img src={googlePlay} style={{height: '50px', width: '170px', cursor: 'pointer'}}/>
                        <img src={appStore} style={{height: '50px', width: '170px', marginLeft: '10px', cursor: 'pointer'}}/>
                    </Grid>
                    <Grid sx={{display: 'flex', justifyContent: 'right'}} md={6} item>
                        <Typography>© Europarc 2023</Typography>
                    </Grid>
            </Grid>
        </Grid>
    );
};

export default Bottom;
