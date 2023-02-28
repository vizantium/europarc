import React, {useState} from 'react';
import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import styles from './ElectronicSignature.module.scss';
import VerifySignImg1 from "../../assets/icons8-upload-64 (3) 1.png";
import VerifySignArrow from "../../assets/Arrow 2.png";
import VerifySignImg from "../../assets/icons8-accept-64 1.png";
import VerifySignDelete from "../../assets/icons8-trash-can-50 1.png";
import VerifySignUpload from "../../assets/icons8-upload-64 1.png";
import ButtonCustom from "../Other/Button";
import arrowGray from './../../assets/Arrow 3.png';
import choose from './../../assets/icons8-choose-50 (2) 1.png';
import file from './../../assets/icons8-file-60 (1) 1.png';
import {Link} from "react-router-dom";
import logo2 from './../../assets/logo 2 1.png'

const ElectronicSignatureChoose = () => {


    return (
        <Grid sx={{maxWidth: '1300px'}} container>
            <Grid container sx={{
                marginTop: '80px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: '50px'
            }}>
                <Typography sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    lineHeight: '29.05px',
                    color: '#00546B',
                    marginBottom: '60px'
                }}>
                    Alegeți instrumentul de semnare
                </Typography>
                <Grid>
                    <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={VerifySignImg1}/>
                        <img style={{margin: '0px 35px'}} src={VerifySignArrow}/>
                        <img src={choose}/>
                        <img style={{margin: '0px 35px'}} src={VerifySignArrow}/>
                        <img src={file}/>
                        <img style={{margin: '0px 35px'}} src={arrowGray}/>
                        <img src={VerifySignImg}/>
                    </Grid>
                    <div className={styles.line3}/>
                </Grid>
                <Grid container sx={{marginBottom: '40px', maxWidth: '700px'}}>
                    <Grid sx={{padding: '0px 60px 0px 0px'}} md={6}>
                        <Grid sx={{border: '1px solid #00546B'}}>
                            <form>
                                <Typography sx={{background: '#00546B', color: '#FCFCFC', textAlign:'center', fontWeight: 700, fontSize: '20px', letterSpacing: '0.06em', padding: '6px 0px'}}>
                                    Semnătura mobilă</Typography>
                                <Grid sx={{display: 'flex', padding: '8px', flexDirection: 'row', alignItems: 'end'}}>
                                    <Typography sx={{paddingRight: '20px'}}>IDNP</Typography>
                                    <TextField id="standard-basic" fullWidth label="" variant="standard" />
                                </Grid>
                                <Grid sx={{display: 'flex', padding: '8px', flexDirection: 'row', alignItems: 'end'}}>
                                    <Typography sx={{paddingRight: '20px'}}>Telefon</Typography>
                                    <TextField id="standard-basic" fullWidth label="" variant="standard" defaultValue={'+373'} />
                                </Grid>
                                <Grid sx={{margin: '15px'}}>
                                    <Button component={Link} to={'/ElectronicSignature/Download'} type={'submit'} fullWidth className={styles.buttonGrid} >
                                        Transmite
                                    </Button>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid sx={{padding: '0px 0px 0px 60px'}} md={6}>
                        <Grid sx={{border: '1px solid #00546B', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography sx={{background: '#00546B',width:'100%', color: '#FCFCFC', textAlign:'center', fontWeight: 700, fontSize: '20px', letterSpacing: '0.06em', padding: '6px 0px'}}>
                                Semnătura electronică</Typography>
                            <img style={{padding: '25px 0px'}} src={logo2}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Button className={styles.buttonRed}>
                    Anulare
                </Button>
            </Grid>
        </Grid>
    );
};

export default ElectronicSignatureChoose;

