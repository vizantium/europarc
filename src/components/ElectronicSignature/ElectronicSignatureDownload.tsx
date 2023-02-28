import React, {useState} from 'react';
import {
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
import download from './../../assets/icons8-downloading-updates-30 2.png'

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


const ElectronicSignatureDownload = () => {
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
                    Încărcați unul sau mai multe fișiere pentru semnare
                </Typography>
                <Grid>
                    <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={VerifySignImg1}/>
                        <img style={{margin: '0px 35px'}} src={VerifySignArrow}/>
                        <img src={choose}/>
                        <img style={{margin: '0px 35px'}} src={VerifySignArrow}/>
                        <img src={file}/>
                        <img style={{margin: '0px 35px'}} src={VerifySignArrow}/>
                        <img src={VerifySignImg}/>
                    </Grid>
                    <div className={styles.line4}/>
                </Grid>
                <Grid sx={{marginBottom: '40px'}}>
                    <TableContainer aria-label="simple table">
                        <Table sx={{border: '1px solid #00546B'}}>
                            <TableHead sx={{background: '#00546B'}}>
                                <TableRow>
                                    <TableCell className={styles.nameHead}>Nr.</TableCell>
                                    <TableCell style={{minWidth: '350px'}} className={styles.nameHead}>Nume</TableCell>
                                    <TableCell style={{minWidth: '350px'}}
                                               className={styles.nameHead}>Dimensiune</TableCell>
                                    <TableCell className={styles.nameHead}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    files && files.map((obj: any, index: number) => {
                                        return <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{obj.name}</TableCell>
                                            <TableCell>{formatBytes(obj.size)}</TableCell>
                                            <TableCell onClick={() => handleDelete(obj.name)} sx={{cursor: 'pointer'}}><img
                                                src={download}/></TableCell>
                                        </TableRow>

                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Button component={Link} to={'Choose'} className={styles.button}>
                    Descarcă documentele
                </Button>
            </Grid>
        </Grid>
    );
};

export default ElectronicSignatureDownload;

