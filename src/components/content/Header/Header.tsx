import React, {useState} from 'react';
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import logo from './../../../assets/images/logo.png';
import {Link} from "react-router-dom";
import styles from './Header.module.scss'
import number from './../../../assets/images/number.png'
import {Squash as Hamburger} from 'hamburger-react'
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
    const [language, setLanguage] = useState('RO')
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [languageSelected, setLanguageSelected] = useState('RO')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const setIsOpenMenuHandler = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const handleChangeLang = (lang: string) => {
        setAnchorEl(null);
        setLanguage(lang)
    }

    return (
        <>
            <AppBar className={styles.appBar} sx={{background: '#FFFEFF', height: '115px', display: 'flex', alignItems: 'center', width: '100%'}} >
                <Grid className={styles.headerPC} sx={{maxWidth: '1450px', padding: '0px 15px'}} container>
                    <Grid md={2} item>
                        <Link to={'/'}>
                            <img style={{height: '84px', marginTop: '10px', paddingLeft: '10px', cursor: 'pointer'}} src={logo}/>
                        </Link>
                    </Grid>
                    <Grid md={1}>
                    </Grid>
                    <Grid md={3.5} item sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: '#2F2B57'}}>
                        <Grid>
                            <Typography sx={{color: '#161D39'}} component={Link} to={'/Signature/Sign'}
                                        className={styles.headerTypography}>
                                Semnează
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{color: '#161D39'}} component={Link} to={'/Verification/Upload'}
                                        className={styles.headerTypography}>
                                Verifica
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{color: '#161D39'}} component={Link} to={'/GetSign'}
                                        className={styles.headerTypography}>
                                Obține semnătură
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid md={1}>
                    </Grid>
                    <Grid md={4.5} item sx={{display: 'flex', alignItems: 'center', color: '#161D39', justifyContent: 'right'}} >
                        <Grid sx={{display: 'flex', marginTop: '2px', marginRight: '30px'}}>
                           <Typography onClick={() => setLanguageSelected('RO')}
                               sx={{color: '#2F2B57',
                                        fontWeight: 600,
                                        fontSize: '17px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RO' ? '65%' : '100%'}`}}>RO</Typography>
                           <Typography onClick={() => setLanguageSelected('RU')}
                               sx={{color: '#2F2B57',
                                        fontWeight: 600,
                                        fontSize: '17px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RU' ? '65%' : '100%'}`}}>RU</Typography>
                           <Typography onClick={() => setLanguageSelected('EN')}
                               sx={{color: '#2F2B57',
                                        fontWeight: 600,
                                        fontSize: '17px', marginRight: '10px', cursor:'pointer', opacity: `${languageSelected === 'EN' ? '65%' : '100%'}`}}>EN</Typography>
                        </Grid>
                        <Grid component={Link} to={'tel:+37378655333'} sx={{marginRight: '40px', display: 'flex', cursor: 'pointer', textDecoration: 'none'}}>
                            <img style={{width: '24px'}} src={number}/>
                            <Link style={{fontWeight: 500, fontSize: '14px', textDecoration: 'none', color: '#161D39', marginTop: '2px'}} to={'tel:+37378655333'}>+373 78 655 333</Link>
                        </Grid>
                        <Grid>
                            <Button sx={{width: '174px', height: '50px'}} component={Link} to={'/'} className={styles.button}>
                               Autentificare
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={styles.headerMob} container>
                    <Grid>
                        <Grid sx={{marginTop: '-2px', marginLeft: '5px'}}  onClick={setIsOpenMenuHandler}>
                            <Hamburger size={29} color={'black'} toggled={isOpenMenu}/>
                        </Grid>
                        {/*<MenuIcon sx={{color: 'black', marginTop: '4px', marginLeft: '5px'}} onClick={setIsOpenMenuHandler} fontSize={'large'}/>*/}
                    </Grid>
                    <Grid sx={{display: 'flex', alignItems: 'center'}}>
                        <Grid sx={{display: 'flex', cursor: 'pointer', textDecoration: 'none'}} component={Link} to={'tel:+37378655333'} className={styles.headerNumber}>
                            <img style={{width: '20px', height: '22px'}} src={number}/>
                            <Typography sx={{fontWeight: 500, fontSize: '14px', color: '#161D39', marginTop: '1px'}}>+373 78 655 333</Typography>
                        </Grid>
                        <Grid sx={{display: 'flex'}}>
                            <Grid sx={{display: 'flex', marginTop: '0px', marginLeft: '5px'}}>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{textTransform: 'none', color: '#161D39'}}
                                >
                                    Limba
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem sx={{padding: '0px 17px', margin: '-5px 0px', color: '#161D39', height: '48px'}} onClick={() => handleChangeLang('RO')}>RO</MenuItem>
                                    <MenuItem sx={{padding: '0px 17px', margin: '-5px 0px', color: '#161D39', height: '48px'}} onClick={() => handleChangeLang('EN')}>EN</MenuItem>
                                    <MenuItem sx={{padding: '0px 17px', margin: '-5px 0px', color: '#161D39', height: '48px'}} onClick={() => handleChangeLang('RU')}>RU</MenuItem>
                                </Menu>
                                {/*<Typography onClick={() => setLanguageSelected('RO')}*/}
                                {/*            sx={{color: '#2F2B57',*/}
                                {/*                fontWeight: 600,*/}
                                {/*                fontSize: '15px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RO' ? '65%' : '100%'}`}}>RO</Typography>*/}
                                {/*<Typography onClick={() => setLanguageSelected('RU')}*/}
                                {/*            sx={{color: '#2F2B57',*/}
                                {/*                 fontWeight: 600,*/}
                                {/*                fontSize: '15px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RU' ? '65%' : '100%'}`}}>RU</Typography>*/}
                                {/*<Typography onClick={() => setLanguageSelected('EN')}*/}
                                {/*            sx={{color: '#2F2B57',*/}
                                {/*                fontWeight: 600,*/}
                                {/*                fontSize: '15px', marginRight: '10px', cursor:'pointer', opacity: `${languageSelected === 'EN' ? '65%' : '100%'}`}}>EN</Typography>*/}
                            </Grid>
                            <Link to={'/'} style={{marginTop: '7px', marginRight: '5px'}}>
                                <PersonIcon color={'action'}/>
                            </Link>
                            {/*<Button  component={Link} to={'/'} className={styles.button}>*/}
                            {/*    Autentificare*/}
                            {/*</Button>*/}
                        </Grid>
                    </Grid>
                    {
                        <Grid className={isOpenMenu ? styles.headerMenuActive : styles.headerMenu}>
                            <Typography sx={{borderTop: '1px solid #D3D3D3'}} className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/'}>Acasa</Typography>
                            <Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/Signature/Sign'}>Semnează</Typography>
                            <Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/Verification/Upload'}>Verifica</Typography>
                            <Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/GetSign'}>Obține semnătură</Typography>
                            {/*<Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/Authentication'}>Autentificare</Typography>*/}
                        </Grid>
                    }
                </Grid>
            </AppBar>

        </>
        );
};

export default Header;
