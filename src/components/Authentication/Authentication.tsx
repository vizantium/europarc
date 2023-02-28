import React from 'react';
import {Button, Grid} from "@mui/material";
import styles from "./Authentication.module.scss";
import imagine from "../../assets/imagine.png";

import {Link} from "react-router-dom";

const Authentication: React.FC = () => {


    return (
        <Grid sx={{maxWidth: '1500px', padding: '0px 0px'}} container>
            <Grid sx={{display: 'flex', alignItems: 'center'}} md={4.9} item container>
                <Grid sx={{marginLeft: '0px'}} container>
                    <Grid md={7} item>
                        <Button component={Link} to={'JurAuth'} className={styles.button}>
                            Acces persoane juridice
                        </Button>
                    </Grid>
                    <Grid md={3} item>
                        <Button className={styles.button}>
                            Acces persoane fizice
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

export default Authentication;
