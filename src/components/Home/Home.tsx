import React from 'react';
import {Button, Grid, Typography} from "@mui/material";
import imagine from './../../assets/imagine.png'
import styles from './Home.module.scss'

const Home:React.FC = () => {
    return (
        <Grid sx={{maxWidth: '1500px'}} container>
            <Grid sx={{display: 'flex', alignItems: 'center'}} md={4.9} item container>
               <Typography sx={{color: '#00546B', fontSize: '40px', lineHeight: '48.41px', fontWeight: 700}}>
                   Semnează sau verifică semnătura documentelor electronice
               </Typography>
                <Grid sx={{marginTop: '-470px', marginLeft:'10px'}} container>
                    <Grid md={7} item>
                        <Button className={styles.button}>
                            Semnează
                        </Button>
                    </Grid>
                    <Grid md={3}  item>
                        <Button className={styles.button}>
                            Verifică
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid md={6} item>
                <img className={styles.image} src={imagine}/>
            </Grid>
        </Grid>
    );
};

export default Home;
