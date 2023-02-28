import React, {useEffect, useState} from 'react';
import {Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {BootstrapInput} from "../Other/BootstrapInput";
import ButtonCustom from "../Other/Button";
import styles from './GetSignature.module.scss'
import {useLocation} from "react-router-dom";

const GetSignature = () => {
    const params = useLocation()
    const [isJur, setIsJur] = useState(false)
    useEffect(() => {
        if (params.pathname.includes('Jur')) {
            setIsJur(true)
        }
    }, [])


    return (
        <Grid sx={{maxWidth: '550px'}} container>
            <Grid container sx={{marginTop: '80px', display: 'flex', alignItems: 'left', flexDirection: 'column', marginBottom: '100px'}}>
                <Grid item sx={{display: 'flex', flexDirection: 'row', marginBottom: '25px', alignItems: 'center'}}>
                    <Typography className={styles.nameInputs}>
                        {isJur ? 'IDNO:' : 'IDNP:'}
                    </Typography>
                    <BootstrapInput fullWidth/>
                </Grid>
                <Grid item sx={{display: 'flex', flexDirection: 'row', marginBottom: '25px', alignItems: 'center'}}>
                    <Typography className={styles.nameInputs}>
                        Telefon:
                    </Typography>
                    <BootstrapInput defaultValue={'+373'} fullWidth/>
                </Grid>
                <div className={styles.line}/>
                <FormControlLabel sx={{marginBottom: '15px'}} control={<Checkbox disabled defaultChecked sx={{
                    color: '#007C9E',
                    '&.Mui-checked': {
                        color: '#007C9E',
                    },
                }} />} label="Semnătură" />
                <Typography className={styles.price}>Preț:<Typography className={styles.priceNum}>000 MDL</Typography></Typography>
                <Grid>
                    <Typography className={styles.selectText}>Selectează metoda de plată</Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="VISA"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel className={styles.mainText} value="VISA" control={<Radio sx={{
                                color: '#007C9E',
                                '&.Mui-checked': {
                                    color: '#007C9E',
                                },
                            }}/>} label="Plata cu cardul VISA sau MASTERCARD" />
                            <FormControlLabel className={styles.mainText} value="MPAY" control={<Radio sx={{
                                color: '#007C9E',
                                '&.Mui-checked': {
                                    color: '#007C9E',
                                },
                            }}/>} label="Achită cu MPAY" />
                        </RadioGroup>
                    </FormControl>
                    <FormGroup sx={{marginTop: '45px', display: 'flex', justifyContent: 'left', alignItems: 'normal' }}>
                        <FormControlLabel className={styles.mainText} control={<Checkbox sx={{
                                color: '#007C9E',
                                '&.Mui-checked': {
                                    color: '#007C9E',
                                },
                            }} defaultChecked />} label="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        <FormControlLabel sx={{marginTop: '10px'}} className={styles.mainText} control={<Checkbox sx={{
                                color: '#007C9E',
                                '&.Mui-checked': {
                                    color: '#007C9E',
                                },
                            }} defaultChecked/>} label="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        <FormControlLabel sx={{marginTop: '10px'}} className={styles.mainText} control={<Checkbox sx={{
                                color: '#007C9E',
                                '&.Mui-checked': {
                                    color: '#007C9E',
                                },
                            }} defaultChecked/>} label="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    </FormGroup>
                </Grid>
                <Grid container sx={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                    <Typography sx={{marginBottom: '55px'}} className={styles.bottomText}>
                        După comandarea semnăturii, veți fi apelat.
                    </Typography>
                    <ButtonCustom text={'Comandă semnătură'}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GetSignature;
