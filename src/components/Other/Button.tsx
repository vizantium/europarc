import React from 'react';
import styles from "./Button.module.scss";
import {Button} from "@mui/material";

const ButtonCustom:React.FC<{text: string}> = ({text}) => {
    return (
        <Button className={styles.button}>
            {text}
        </Button>
    );
};

export default ButtonCustom;
