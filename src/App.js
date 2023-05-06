import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './scenes/global/Sidebar';
import Login from './Login';
import Topbar from './scenes/global/Topbar';

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
