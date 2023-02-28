import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Preloader = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
};

export default Preloader;
