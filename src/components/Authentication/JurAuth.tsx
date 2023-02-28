import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import styles from "./Authentication.module.scss";
import imagine from "../../assets/imagine.png";
import {Link} from "react-router-dom";



const JurAuth: React.FC = () => {

    return (
        <Grid sx={{maxWidth: '1500px', padding: '0px 0px'}} container>
            <Grid sx={{display: 'flex', alignItems: 'center'}} md={4.9} item container>
                <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
                    <Typography sx={{color: '#00546B', fontSize: '24px', fontWeight: 700, letterSpacing: '0.06em'}}>Logare
                        persoane juridice</Typography>
                    <TextField fullWidth sx={{marginTop: '90px'}} id="standard-basic" label="Utilizator"
                               variant="standard"/>
                    <TextField fullWidth sx={{marginTop: '50px'}} id="standard-basic" label="Parola"
                               variant="standard"/>
                    <Button className={styles.buttonAuth} fullWidth sx={{marginTop: '60px'}}>Logare</Button>
                    <Typography sx={{marginTop: '40px', fontSize: '21px', color: 'black', fontWeight: 400}}>
                        Nu aveți cont?
                        <Link to={'/GetSignatureFormJur'} className={styles.spanAuth}
                            >Solicită</Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid md={6} item>
                <img className={styles.image} src={imagine}/>
            </Grid>
        </Grid>
    );
};

export default JurAuth;
