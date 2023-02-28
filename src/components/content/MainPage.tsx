import React from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom"
import {Bottom} from "./Bottom/Bottom";

const MainPage:React.FC = () => {
    return (
        <div>
            <div style={{width: '100%'}}>
                <Header/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingLeft: '10px'}}>
                <Outlet/>
            </div>
            <div>
                <Bottom/>
            </div>
        </div>
    );
};

export default MainPage;
