import React from 'react';
import {Grid, Typography} from "@mui/material";
import facebook from './../../../assets/icons8-facebook-50 1.png'
import viber from './../../../assets/icons8-viber-50 1.png'
import whatsapp from './../../../assets/icons8-whatsapp-50 1.png'

export const Bottom:React.FC = () => {
    return (
        <Grid sx={{display: 'flex', width: '100%', justifyContent: 'center', background: '#00546B', minHeight: '240px', alignItems: 'center', color: '#FCFCFC'}}>
            <Grid container sx={{maxWidth: '1500px', paddingTop: '45px', paddingBottom: '25px'}}>
                <Grid sx={{paddingLeft: '10px'}} item md={4}>
                    <Typography sx={{fontSize: '20px', fontWeight: 600, marginTop: '-10px'}}>
                        +373 78 655 333
                    </Typography>
                    <Grid sx={{marginTop: '26px'}}>
                        <img src={facebook}/>
                        <img style={{marginLeft: '17px'}} src={viber}/>
                        <img style={{marginLeft: '17px'}} src={whatsapp}/>
                    </Grid>
                    <Typography sx={{fontSize: '16px', fontWeight: 500, marginTop: '56px'}}>
                        © Europarc 2023
                    </Typography>
                </Grid>
                <Grid md={4} item >
                    <Typography>
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
                <Grid md={4} item>
                    <Typography sx={{marginTop: '-15px', fontSize: '20px', fontWeight: 600}}>
                        Contacte
                    </Typography>
                    <Typography sx={{marginTop: '15px'}}>
                        Moldova, Chișinău, str. Calea Ieșilor 10B,
                    </Typography>
                    <Typography>
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
    );
};