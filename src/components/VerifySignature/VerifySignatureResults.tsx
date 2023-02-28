import React from 'react';
import {
    Alert,
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import VerifySignImg from './../../assets/icons8-accept-64 1.png'
import VerifySignImg1 from './../../assets/icons8-upload-64 (3) 1.png'
import VerifySignArrow from './../../assets/Arrow 2.png'
import styles from './VerifySignature.module.scss'


const VerifySignatureResults = () => {
    const data = [
        {nr: 1, name: 'ABC.signed.pdf', sem: 'Moraru Ion 0111111111111', org: 'S.C. AAA S.R.L. 111111111111', date: '31.01.2023 16:45:17', status: 'Validă'},
        {nr: 2, name: 'ABC.signed.pdf', sem: 'Moraru Ion 0111111111111', org: 'S.C. AAA S.R.L. 111111111111', date: '31.01.2023 16:45:17', status: 'Validă'},
        {nr: 3, name: 'ABC.signed.pdf', sem: 'Moraru Ion 0111111111111', org: 'S.C. AAA S.R.L. 111111111111', date: '31.01.2023 16:45:17', status: 'Validă'},
        {nr: 4, name: 'ABC.signed.pdf', sem: 'Moraru Ion 0111111111111', org: 'S.C. AAA S.R.L. 111111111111', date: '31.01.2023 16:45:17', status: 'Validă'},
    ]



    return (
        <Grid sx={{maxWidth: '1300px'}} container>
            <Grid container sx={{marginTop: '80px', display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '50px'}}>
                <Typography sx={{fontSize: '24px', fontWeight: 700, letterSpacing: '0.06em', lineHeight: '29.05px', color: '#00546B', marginBottom: '60px'}}>
                    Încărcați unul sau mai multe fișiere pentru verificare
                </Typography>
                <Grid>
                    <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={VerifySignImg1}/>
                        <img style={{margin: '0px 35px'}} src={VerifySignArrow}/>
                        <img src={VerifySignImg}/>
                    </Grid>
                    <div className={styles.line2}/>
                </Grid>
                <Grid>
                    <TableContainer aria-label="simple table">
                        <Table sx={{border: '1px solid #00546B'}}>
                            <TableHead sx={{background: '#00546B'}}>
                                <TableRow>
                                    <TableCell className={styles.nameHead}>Nr.</TableCell>
                                    <TableCell style={{minWidth: '150px'}} className={styles.nameHead}>Nume</TableCell>
                                    <TableCell style={{minWidth: '50px'}} className={styles.nameHead}>Semnatar</TableCell>
                                    <TableCell style={{maxWidth: '100px'}} className={styles.nameHead}>Organizația</TableCell>
                                    <TableCell style={{minWidth: '50px'}} className={styles.nameHead}>Data semnării</TableCell>
                                    <TableCell style={{minWidth: '50px'}} className={styles.nameHead}>Semnătura</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{border: '1px solid #00546B'}}>
                                {
                                   data.map((obj : any, index: number)=> {
                                        return <TableRow key={index}>
                                            <TableCell className={styles.cellText} align={'center'}>{obj.nr}</TableCell>
                                            <TableCell className={styles.cellText} align={'center'}>{obj.name}</TableCell>
                                            <TableCell className={styles.cellText} align={'center'}>{obj.sem}</TableCell>
                                            <TableCell className={styles.cellText} align={'center'}>{obj.org}</TableCell>
                                            <TableCell className={styles.cellText} align={'center'}>{obj.date}</TableCell>
                                            <TableCell className={styles.cellTextRes} align={'center'}>{obj.status}</TableCell>
                                        </TableRow>

                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Alert sx={{width: '97%', marginTop: '20px'}} severity="error">Documentul ABCD.pdf nu conține semnături.</Alert>

                </Grid>
                <Grid sx={{display: 'flex', flexDirection: 'row'}}>
                    <Button sx={{marginRight: '55px'}} className={styles.button}>
                        Verifică documentele
                    </Button>
                    <Button className={styles.button}>
                        Verifică documentele
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default VerifySignatureResults;
