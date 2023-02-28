import React, {useEffect, useState} from 'react';
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import logo from './../../../assets/logo.png'
import styles from './Header.module.scss'
import {Link, useLocation, useParams} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header:React.FC = () => {
    const params = useLocation()
    const [activeLink, setActiveLink] = useState('')
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

    useEffect(() => {
        if (params.pathname.includes('Electronic')) {
            setActiveLink('Electronic')
        } else if (params.pathname.includes('Authentication')) {
            setActiveLink('Authentication')
        } else if (params.pathname.includes('About')) {
            setActiveLink('About')
        } else if (params.pathname.includes('VerifySignature')) {
            setActiveLink('VerifySignature')
        } else {
            setActiveLink('')
        }
    },[params])

    return (
            <AppBar sx={{background: '#8AB0BD', height: '120px', display: 'flex', alignItems: 'center', width: '100%'}} position="static">
                <Grid sx={{maxWidth: '1500px'}} container>
                    <Grid md={2} item>
                        <Link to={'/'}>
                            <img style={{height: '106px', marginTop: '5px', paddingLeft: '10px', cursor: 'pointer'}} src={logo}/>
                        </Link>
                    </Grid>
                    <Grid md={6.5} item sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: '#2F2B57'}}>
                        <Grid>
                            <Typography component={Link} to={'/About'}
                                        className={activeLink === 'About' ? styles.typographyActive : styles.typography}>
                                Despre noi
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography component={Link} to={'/ElectronicSignature'}
                                        className={activeLink === 'Electronic' ? styles.typographyActive : styles.typography}>
                                Semnează electronic
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography component={Link} to={'/VerifySignature'}
                                        className={activeLink === 'VerifySignature' ? styles.typographyActive : styles.typography}>
                                Verifică semnătura
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography component={Link} to={'/Authentication'}
                                        className={activeLink === 'Authentication' ? styles.typographyActive : styles.typography}>
                                Autentificare
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid md={3.5} item sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button component={Link} to={'/GetSignature'} className={styles.button}>
                            Obține semnătură
                        </Button>
                        <div>
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
                                sx={{marginLeft: '10px'}}
                            >
                                <MenuItem onClick={() => handleChangeLang('RO')}>RO</MenuItem>
                                <MenuItem onClick={() => handleChangeLang('EN')}>EN</MenuItem>
                                <MenuItem onClick={() => handleChangeLang('RU')}>RU</MenuItem>
                            </Menu>
                        </div>
                    </Grid>
                </Grid>
            </AppBar>
    );
};

export default Header;
