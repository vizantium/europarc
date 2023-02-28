import React, {useState} from 'react';
import {
    Button,
    Grid,
    Input,
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
import {TableBar} from "@mui/icons-material";
import VerifySignUpload from './../../assets/icons8-upload-64 1.png'
import VerifySignDelete from './../../assets/icons8-trash-can-50 1.png'
import {Link} from "react-router-dom";

function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
        return '0';
    } else {
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Byte', 'КB', 'MB', 'GB', 'TB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}

const VerifySignature = () => {
    const [files, setFiles] = useState<any[]>([])

    const handleChange = (event: any) => {
        setFiles([...files, {name: event.target.files[0].name, size: event.target.files[0].size}])
        console.log(files)
    }

    const handleDelete = (name: string) => {
        let filterFiles = files.filter(obj => obj.name !== name)
       setFiles(filterFiles)
    }

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
                    <div className={styles.line}/>
                </Grid>
                <Grid>
                    <TableContainer aria-label="simple table">
                        <Table sx={{border: '1px solid #00546B'}}>
                            <TableHead sx={{background: '#00546B'}}>
                                <TableRow>
                                    <TableCell className={styles.nameHead}>Nr.</TableCell>
                                    <TableCell style={{minWidth: '350px'}} className={styles.nameHead}>Nume</TableCell>
                                    <TableCell style={{minWidth: '350px'}} className={styles.nameHead}>Dimensiune</TableCell>
                                    <TableCell className={styles.nameHead}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    files && files.map((obj : any, index: number)=> {
                                        return <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{obj.name}</TableCell>
                                            <TableCell>{formatBytes(obj.size)}</TableCell>
                                            <TableCell onClick={() => handleDelete(obj.name)} sx={{cursor: 'pointer'}}><img src={VerifySignDelete}/></TableCell>
                                        </TableRow>

                                    })
                                }

                                <TableRow>
                                    <TableCell align={'center'} sx={{border: '1px solid #00546B'}} colSpan={4}>
                                        <input onChange={handleChange} className={styles.inputFile} type="file" name="file" id="file"/>
                                        <label htmlFor="file"><img style={{marginRight: '4px'}} src={VerifySignUpload}/>
                                            <span style={{position: 'relative', bottom: '5px'}}>Selectați sau trageți fișiere aici.</span></label>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Button component={Link} to={'Results'} className={styles.button}>
                    Verifică documentele
                </Button>
            </Grid>
        </Grid>
    );
};

export default VerifySignature;
