import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/content/MainPage";
import Home from "./components/Home/Home";
import Authentication from "./components/Authentication/Authentication";
import ElectronicSignature from "./components/ElectronicSignature/ElectronicSignature";
import About from "./components/About/About";
import VerifySignature from "./components/VerifySignature/VerifySignature";
import JurAuth from "./components/Authentication/JurAuth";
import NewJurAuth from "./components/Authentication/NewJurAuth";
import VerifySignatureResults from "./components/VerifySignature/VerifySignatureResults";
import GetSignature from "./components/GetSignature/GetSignature";
import Preloader from "./components/Other/Preloader";
import ElectronicSignatureChoose from "./components/ElectronicSignature/ElectronicSignatureChoose";
import ElectronicSignatureDownload from "./components/ElectronicSignature/ElectronicSignatureDownload";
import GetSignaturePage from "./components/GetSignature/GetSignaturePage";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}>
                <Route path={''} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <Home/>
                    </React.Suspense>
                }/>
                <Route path={'Authentication'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <Authentication/>
                    </React.Suspense>
                }/>
                <Route path={'GetSignatureFormJur'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <GetSignature/>
                    </React.Suspense>
                }/>
                <Route path={'GetSignature'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <GetSignaturePage/>
                    </React.Suspense>
                }/>
                <Route path={'GetSignatureFormPhys'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <GetSignature/>
                    </React.Suspense>
                }/>
                <Route path={'Authentication/JurAuth'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <JurAuth/>
                    </React.Suspense>
                }/>
                <Route path={'Authentication/NewJurAuth'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <NewJurAuth/>
                    </React.Suspense>
                }/>
                <Route path={'ElectronicSignature'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <ElectronicSignature/>
                    </React.Suspense>
                }/>
                <Route path={'ElectronicSignature/Choose'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <ElectronicSignatureChoose/>
                    </React.Suspense>
                }/>
                <Route path={'ElectronicSignature/Download'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <ElectronicSignatureDownload/>
                    </React.Suspense>
                }/>
                <Route path={'About'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <About/>
                    </React.Suspense>
                }/>
                <Route path={'VerifySignature'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <VerifySignature/>
                    </React.Suspense>
                }/>
                <Route path={'VerifySignature/Results'} element={
                    <React.Suspense fallback={<Preloader/>}>
                        <VerifySignatureResults/>
                    </React.Suspense>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
