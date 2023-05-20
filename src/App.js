import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './scenes/global/Sidebar';
import Login from './Login';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Register from './Login/Register';
import Team from './scenes/team';
import AddDevice from "./scenes/Assets/addDevice";
import UpdateDevice from './scenes/Assets/updateDevice';
import Sim from './scenes/Sim/index';
import Customer from "./scenes/Customer/index";
import Engineers from './scenes/engineers';
import Device from './scenes/Device/index';
import Assets from './scenes/Assets';
import UpdateEng from './scenes/engineers/update_engineers';
import Service from './scenes/Service';
import Renewal from './scenes/Renewal';
import Connect from './scenes/connect';
import AddConnect from './scenes/addConnect';
import EditConnect from './scenes/editConnect';



function App() {
  const [theme, colorMode] = useMode();
  return (
    <div className="App">
     <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
            <Routes>
              <Route path='/' element={
                <HeaderComponent hideSideBar hideTopBar>
                  <Login />
                </HeaderComponent>
              } />
               <Route path='/register' element={
                <HeaderComponent hideSideBar hideTopBar>
                  <Register />
                </HeaderComponent>
              } />
              <Route path='/dashboard' element={
                <HeaderComponent>
                  <Dashboard />
                </HeaderComponent>
              } />
                <Route path='/team' element={
                <HeaderComponent>
                  <Team />
                </HeaderComponent>
              } />
              <Route path='/engineers' element={
                <HeaderComponent>
                  <Engineers />
                </HeaderComponent>
              } />
              <Route path='/engineers/:engineersId' element={
                <HeaderComponent>
                  <UpdateEng />
                </HeaderComponent>
              } />
              <Route path='/device' element={
                <HeaderComponent>
                  <Device />
                </HeaderComponent>
              } />
              <Route path='/addDevice' element={
                <HeaderComponent>
                  <AddDevice />
                </HeaderComponent>
              } />
              <Route path='/device/:deviceId' element={
                <HeaderComponent>
                  <UpdateDevice />
                </HeaderComponent>
              } />
              <Route path='/sim' element={
                <HeaderComponent>
                  <Sim />
                </HeaderComponent>
              } />
              <Route path='/customer' element={
                <HeaderComponent>
                  <Customer />
                </HeaderComponent>
              } />
      
               <Route path='/assets' element={
                <HeaderComponent>
                  <Assets />
                </HeaderComponent>
              } />   
              <Route path='/Service' element={
                <HeaderComponent>
                  <Service />
                </HeaderComponent>
              } />   
              <Route path='/renewal' element={
                <HeaderComponent>
                  <Renewal />
                </HeaderComponent>
              } />  
               <Route path='/connect' element={
                <HeaderComponent hideSideBar hideTopBar>
                  <Connect />
                </HeaderComponent>
              } /> 
               <Route path='/addConnect' element={
                <HeaderComponent hideSideBar hideTopBar>
                  <AddConnect />
                </HeaderComponent>
              } /> 
               <Route path='/editConnect/:id' element={
                <HeaderComponent hideSideBar hideTopBar>
                  <EditConnect />
                </HeaderComponent>
              } /> 
            </Routes>

          
           
        </CssBaseline>
        </ThemeProvider>
        </ColorModeContext.Provider>
    </div>
  );
}

export default App;

function HeaderComponent({children, hideSideBar= false, hideTopBar=false}){
  // console.log(hideSideBar);
   return (
     <div className='app'>
       {!hideSideBar && <Sidebar />}
       <main className='content'>
           {!hideTopBar && <Topbar />}
           {children}
       </main>
     </div>
   )
 }
