import React from 'react';
// import Header from "./Header/Header";
import {Outlet} from "react-router-dom"
import Header from "./Header/Header";
import Bottom from "./Bottom/Bottom";
// import {Bottom} from "./Bottom/Bottom";

const MainPage:React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <div>
                <div style={{width: '100%'}}>
                    <Header/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Outlet/>
                </div>
            </div>
            <div style={{marginTop: 'auto'}}>
                <Bottom/>
            </div>
        </div>
    );
};

export default MainPage;
