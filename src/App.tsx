import React from 'react';
import './main.global.css';
import './colorLight.css';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { GetStartedContainer } from './shared/GetStartedContainer/GetStartedContainer';
import { Timer } from './shared/Timer/Timer';
import { Navigate, useLocation } from 'react-router-dom';
import { StatisticsPage } from './shared/StatisticsPage/StatisticsPage';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

export function ReactApp() {
  const location = useLocation();
  let state = location.state as { backgroundLocation?: Location };
  const appIsDark = typeof localStorage !== "undefined" ? localStorage.getItem('darkMode') : null;
  const appIsDarkJSON: boolean = appIsDark !== null ? JSON.parse(appIsDark) : false;
  const [isDark, setIsDark] = useState(appIsDarkJSON);
  const darkModeStyle = document.createElement("style");
  darkModeStyle.id = 'darkModeStyle';
  darkModeStyle.innerHTML = 
  `:root {
    --tomatoDC: #23c1dd !important;
    --tomatoB7: #48d7f0 !important;
    --tomatoEA: #157586 !important;
    --orangeFFD:#002256 !important;
    --orangeFFA:#0051ca !important;
    --purpleDF: #202301 !important;
    --purple9C: #636828 !important;
    --blueC5:   #3a0e00 !important;
    --blue7F:   #803d28 !important;
    --greenA8:  #5749b0 !important;
    --green89:  #766bbe !important;
    --black:    #FFFFFF !important;
    --black12:  #1d1d1c !important;
    --grey33:   #cccccc !important;
    --grey99:   #666666 !important;
    --greyF4:   #1b1b1b !important;
    --greyEC:   #131313 !important;
    --greyE4:   #1b1b1b !important;
    --greyE5:   #1a1a1a !important;
    --greyC4:   #3b3b3b !important;
    --greyDE:   #212121 !important;
    --white:    #000000 !important;
  }`;
  useEffect(() => {
    if(!isDark) {
      document.getElementById('darkModeStyle')?.remove();
    } else {
      document.head.appendChild(darkModeStyle);
    }
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark])
  return(
    <>
      <Header isDarkChange={() => {
        setIsDark(!isDark)
        }}/> 
      <Content>
        <Routes location={state?.backgroundLocation || location}>
          <Route path='/' element={<Navigate to={'/tomato'}/>}/>
          <Route path='/tomato' element={
            <>
              <GetStartedContainer/>
              <Timer/>
            </>
          }/>
          <Route path='/statistics' element={<StatisticsPage/>}/>
        </Routes>
      </Content>
    </>
  );
}
