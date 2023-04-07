import React, {useState} from 'react';
import styles from "./Signature.module.scss";
import {Button, CircularProgress, Grid, makeStyles, TextField, Typography} from "@mui/material";
import exportIcon from "../../assets/images/exporticon.png";
import vector1 from "../../assets/images/vector1.png";
import unlock from "../../assets/images/unlock.png";
import vector2 from "../../assets/images/vector2.png";
import edit from "../../assets/images/edit.png";
import vector3 from "../../assets/images/vector3.png";
import download from "../../assets/images/download.png";
import vector4 from "../../assets/images/vector4.png";
import end from "../../assets/images/end.png";
import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";
import {theme} from "../Other/theme";

const SignatureAuthentication = () => {
    const [sign, setSign] = useState(false)
    return (
        <Grid className={styles.signatureMain}>
            <Grid container sx={{maxWidth: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Typography sx={{fontSize: '48px', fontWeight: 500, color: '#161D39', marginTop: '65px'}}>Semnează documente</Typography>
                <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '65px'}}>
                    <Grid className={styles.eclipse}>
                        <img src={exportIcon} style={{width: '41px', height: '47px'}}/>
                    </Grid>
                    <img src={vector1} className={styles.vector}/>
                    <Grid className={styles.eclipseSelected}>
                        <img src={unlock} style={{width: '39px', height: '47px'}}/>
                    </Grid>
                    <img src={vector2} className={styles.vector}/>
                    <Grid className={styles.eclipse}>
                        <img src={edit} style={{width: '42px', height: '48px'}}/>
                    </Grid>
                    <img src={vector3} className={styles.vector}/>
                    <Grid className={styles.eclipse}>
                        <img src={download} style={{width: '41px', height: '47px'}}/>
                    </Grid>
                    <img src={vector4} className={styles.vector}/>
                    <Grid className={styles.eclipse}>
                        <img src={end} style={{width: '61px', height: '47px'}}/>
                    </Grid>
                </Grid>
                <Grid container className={styles.mainContainer} >
                    {!sign && <>
                        <Typography sx={{fontSize: '24px', fontWeight: 500, color: '#161D39', letterSpacing: '0.06em', marginTop: '65px'}}>Autentifică-te cu </Typography>
                        <img src={logo} style={{width: '136px', marginTop: '15px'}}/>
                        <TextField id="standard-basic" label="IDNP" variant="standard" sx={{width: '300px', marginTop: '40px', marginBottom: '40px', color: '#8A91AD'}} />
                    </>
                    }
                    {
                        sign && <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '30px'}}>
                        <Typography sx={{fontSize: '24px', fontWeight: 500, marginTop: '70px', letterSpacing: '0.06em', marginBottom: '6px'}}>Tranzacție în derulare</Typography>
                        <Typography sx={{fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(22, 29, 57, 0.8)', marginTop: '2px'}}>Nr. tranzacție: 102563</Typography>
                        <Typography sx={{fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(22, 29, 57, 0.8)', marginTop: '2px'}}>Nr. tranzacție: 102563</Typography>
                        <Typography sx={{fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(22, 29, 57, 0.8)', marginTop: '2px'}}>Nr. tranzacție: 102563</Typography>
                        <Typography sx={{fontSize: '20px', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(22, 29, 57, 0.8)', marginTop: '2px'}}>Nr. tranzacție: 102563</Typography>
                            <CircularProgress sx={{marginTop: '55px', color: '#656AE5'}} size={60} color="secondary" />
                        </Grid>
                    }
                </Grid>
                {!sign && <Button component={Link} to={'/Signature/Authentication'} onClick={() => setSign(true)} className={styles.signatureButton}>
                    Semnează
                </Button>}
            </Grid>
        </Grid>
    );
};

export default SignatureAuthentication;
