import React, {useEffect} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import styles from "./Authentication.module.scss";
import {Link} from "react-router-dom";
import imagine from "../../assets/imagine.png";


const NewJurAuth: React.FC = () => {

    useEffect(() => {
        return () => {
            window.scrollTo(0, -200)
        };
    }, []);


    return (
        <Grid sx={{maxWidth: '1500px', padding: '0px 0px'}} container>
            <Grid sx={{display: 'flex', alignItems: 'center'}} md={4.9} item container>
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '90px',
                    marginBottom: '90px'
                }}>
                    <Typography sx={{color: '#00546B', fontSize: '24px', fontWeight: 700, letterSpacing: '0.06em'}}>Înregistrare
                        persoane juridice</Typography>
                    <Grid sx={{marginTop: '45px'}}>
                        <Typography sx={{fontSize: '20px', fontWeight: 400, lineHeight: '23.44px'}}>Date
                            organizație:</Typography>
                        <TextField fullWidth sx={{marginTop: '8px'}} id="standard-basic" label="IDNO organizație"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Denumirea organizației"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Email"
                                   variant="standard" type={'email'}/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Parola"
                                   variant="standard"/>
                    </Grid>
                    <Grid sx={{marginTop: '45px'}}>
                        <Typography sx={{fontSize: '20px', fontWeight: 400, lineHeight: '23.44px'}}>Date
                            organizație:</Typography>
                        <TextField fullWidth sx={{marginTop: '8px'}} id="standard-basic" label="IDNP utilizator"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Prenumele"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Numele"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Email"
                                   variant="standard" type={'email'}/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Telefon"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Niveluri de acces"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Utilizator"
                                   variant="standard"/>
                        <TextField fullWidth sx={{marginTop: '20px'}} id="standard-basic" label="Parola"
                                   variant="standard"/>
                    </Grid>
                    <Button className={styles.buttonAuth}
                            sx={{marginTop: '60px', padding: '5px 30px'}}>Înregistrare</Button>
                    <Typography sx={{marginTop: '40px', fontSize: '21px', color: 'black', fontWeight: 400}}>
                        Aveți cont?
                        <Link to={'/Authentication/JurAuth'} className={styles.spanAuth}>Logați-vă</Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid md={6} item>
                <img className={styles.image} src={imagine}/>
            </Grid>
        </Grid>
    );
};

export default NewJurAuth;
