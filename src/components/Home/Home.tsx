import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from './Home.module.scss'
import logo from './../../assets/images/homeTopLogo.png'
import logoMedium from './../../assets/images/homeMediumLogo.png'
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Grid className={styles.homeTop} sx={{display: 'flex', justifyContent: 'center'}}>
                <Grid sx={{maxWidth: '1450px'}} container>
                    <Grid item md={6} sx={{}}>
                        <img src={logo} style={{width: '600px', marginTop: '70px'}}/>
                    </Grid>
                    <Grid item md={6} sx={{display: 'flex', alignItems: 'center'}} >
                        <Grid sx={{maxWidth: '580px'}}>
                            <Typography sx={{fontSize: '50px', fontWeight: 500, color: '#161D39', lineHeight: '75px'}}>
                                Semnează documente electronice
                            </Typography>
                            <Typography sx={{fontSize: '18px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.06em', marginTop: '30px', marginBottom: '45px'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Typography>
                            <Grid>
                                <Button component={Link} to={'/Signature/Sign'} className={styles.buttonFirst}>
                                    Semnează
                                </Button>
                                <Button component={Link} to={'/Verification/Upload'} className={styles.buttonSecond}>
                                    Verifică semnătura
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{maxWidth: '1200px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{fontSize: '48px', fontWeight: 500, color: '#161D39', marginTop: '100px', lineHeight: '72px', marginBottom: '50px'}}>Despre noi</Typography>
                <Typography sx={{maxWidth: '720px', marginBottom: '70px', color: '#8A91AD', fontSize: '18px', fontWeight: 400, lineHeight: '28px', letterSpacing: '0.06em'}}>
                    As App Developers we build apps and digital products from the ground up that impact lives, facilitate change and ultimately succeed. As App Developers we build apps and digital products from the ground up that impact lives, facilitate change and ultimately succeed.
                </Typography>
                <Grid sx={{display: 'flex'}} container>
                    <Grid item md={6}>
                        <img style={{maxWidth: '578 px', maxHeight: '765px'}} src={logoMedium}/>
                    </Grid>
                    <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} item md={6}>
                        <Grid sx={{maxWidth: '500px'}}>
                            <Typography sx={{fontSize: '30px', fontWeight: 500, lineHeight: '45px', color: '#161D39'}}>
                                What We Do
                            </Typography>
                            <Typography sx={{fontSize: '18px', fontWeight: 400, lineHeight: '27px', color: '#8A91AD'}}>
                                Our software development center provides you with the best resources, expertise.
                            </Typography>
                        </Grid>
                        <Grid sx={{maxWidth: '500px', marginTop: '100px', marginBottom: '100px'}}>
                            <Typography sx={{fontSize: '30px', fontWeight: 500, lineHeight: '45px', color: '#161D39'}}>
                                What We Do
                            </Typography>
                            <Typography sx={{fontSize: '18px', fontWeight: 400, lineHeight: '27px', color: '#8A91AD'}}>
                                Our software development center provides you with the best resources, expertise.
                            </Typography>
                        </Grid>
                        <Grid sx={{maxWidth: '500px'}}>
                            <Typography sx={{fontSize: '30px', fontWeight: 500, lineHeight: '45px', color: '#161D39'}}>
                                What We Do
                            </Typography>
                            <Typography sx={{fontSize: '18px', fontWeight: 400, lineHeight: '27px', color: '#8A91AD'}}>
                                Our software development center provides you with the best resources, expertise.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={styles.homeBottom} sx={{display: 'flex', justifyContent: 'center'}}>
                <Grid container sx={{maxWidth: '1200px', display: 'flex', flexDirection: 'column'}}>
                    <Typography sx={{marginTop: '30px', fontSize: '48px', fontWeight: 500, lineHeight: '72px'}}>
                        Cum obții semnătura
                    </Typography>
                    <Typography sx={{marginTop: '15px', fontSize: '18px', fontWeight: 400, lineHeight: '27px', letterSpacing: '0.06em', maxWidth: '580px'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <Grid sx={{display: 'flex', justifyContent: 'space-between', marginTop: '65px', marginBottom: '50px'}}>
                        <Grid className={styles.bottomBlock}>
                            <Typography sx={{color: '#67FBAE', fontSize: '24px', fontWeight: 600, lineHeight: '36px', letterSpacing: '0.06em'}}>01.</Typography>
                            <Typography sx={{fontSize: '24px', fontWeight: 600, lineHeight: '36px', letterSpacing: '0.06em', marginTop: '28px'}}>Lorem Ipsum is simply dummy</Typography>
                            <Typography sx={{fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.06em', marginTop: '38px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </Grid>
                        <Grid className={styles.bottomBlock}>
                            <Typography sx={{color: '#67FBAE', fontSize: '24px', fontWeight: 600, lineHeight: '36px', letterSpacing: '0.06em'}}>02.</Typography>
                            <Typography sx={{fontSize: '24px', fontWeight: 600, lineHeight: '36px', letterSpacing: '0.06em', marginTop: '28px'}}>Lorem Ipsum is simply dummy</Typography>
                            <Typography sx={{fontSize: '16px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.06em', marginTop: '38px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </Grid>
                        <Grid className={styles.bottomBlockLight}>
                            <Typography sx={{color: '#67FBAE', fontSize: '24px', fontWeight: 600, lineHeight: '36px', letterSpacing: '0.06em'}}>03.</Typography>
                            <Typography sx={{fontSize: '24px', fontWeight: 600, lineHeight: '36px', letterSpacing: '0.06em', marginTop: '38px'}}>Lorem Ipsum is simply dummy and Demos</Typography>
                            <Typography sx={{fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.1em', marginTop: '38px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={styles.bottomDiv}>
                        <Grid>
                            <Typography sx={{color: '#3A40D4', fontWeight: 500, fontSize: '36px', lineHeight: '54px'}}>Dorești să obții semnătură?</Typography>
                            <Typography sx={{color: '#161D39', fontWeight: 400, fontSize: '16px', lineHeight: '24px', marginTop: '7px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                        </Grid>
                        <Grid>
                            <Button component={Link} to={'/GetSign'} className={styles.bottomButton}>Obține semnătură</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
