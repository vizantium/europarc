import React, {useState} from 'react';
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import logo from './../../../assets/images/logo.png';
import {Link} from "react-router-dom";
import styles from './header.module.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import number from './../../../assets/images/number.png'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [language, setLanguage] = useState('RO')

    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const handleChangeLang = (lang: string) => {
        setAnchorEl(null);
        setLanguage(lang)
    }

    return (
        <AppBar sx={{background: '#FFFEFF', height: '115px', display: 'flex', alignItems: 'center', width: '100%'}} position="static">
            <Grid sx={{maxWidth: '1450px', padding: '0px 15px'}} container>
                <Grid md={2} item>
                    <Link to={'/'}>
                        <img style={{height: '94px', marginTop: '10px', paddingLeft: '10px', cursor: 'pointer'}} src={logo}/>
                    </Link>
                </Grid>
                <Grid md={5.5} item sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: '#2F2B57'}}>
                    <Grid>
                        <Typography  sx={{font: 'Poppins', color: '#161D39'}} component={Link} to={'/'}
                                    className={styles.headerTypography}>
                            Acasă
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{color: '#161D39'}} component={Link} to={'/Signature/Sign'}
                                    className={styles.headerTypography}>
                            Semnează
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{color: '#161D39'}} component={Link} to={'/Contacts'}
                                   className={styles.headerTypography}>
                            Contacte
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{color: '#161D39'}} component={Link} to={'/Documentation'}
                                    className={styles.headerTypography}>
                            Ghidul Utilizatorului
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{color: '#161D39'}} component={Link} to={'/Authentication'}
                                    className={styles.headerTypography}>
                            Autentificare
                        </Typography>
                    </Grid>
                </Grid>
                <Grid md={4.5} item sx={{display: 'flex', alignItems: 'center', color: '#161D39', justifyContent: 'right'}} >
                    <Grid>
                        <Button
                            aria-owns={anchorEl ? "simple-menu" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{paddingLeft: '20px', color: '#2F2B57', fontSize: '18px', fontWeight: 700, textTransform: 'none'}}
                        >
                            {language}
                            <ArrowDropDownIcon/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            disableScrollLock={true}
                            sx={{marginLeft: '10px', "& .MuiPaper-root": {
                                    backgroundColor: "#ffffff",
                                    color: '#2F2B57',
                                    fontWeight: 700,
                                    fontSize: '20px'
                                }}}
                        >
                            <MenuItem sx={{
                                fontWeight: 700
                            }} onClick={() => handleChangeLang('RO')}>RO</MenuItem>
                            <MenuItem sx={{
                                fontWeight: 700
                            }} onClick={() => handleChangeLang('EN')}>EN</MenuItem>
                            <MenuItem sx={{
                                fontWeight: 700
                            }} onClick={() => handleChangeLang('RU')}>RU</MenuItem>
                        </Menu>
                    </Grid>
                    <Grid sx={{marginRight: '40px', display: 'flex', cursor: 'pointer'}}>
                        <img style={{width: '24px'}} src={number}/>
                        <Typography sx={{fontWeight: 500, fontSize: '14px'}}>+373 78 655 333</Typography>
                    </Grid>
                    <Grid>
                        <Button sx={{width: '174px', height: '50px'}} component={Link} to={'/GetSign'} className={styles.button}>
                            Obține semnătură
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
        );
};

export default Header;
