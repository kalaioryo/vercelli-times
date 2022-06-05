import React, { useState } from 'react';

import style from './darkModeButton.module.css'

import { FaToggleOff, FaToggleOn, FaSun, FaMoon } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { darkMode } from '../../redux/actions/themeAction';
import { lightMode } from '../../redux/actions/themeAction';
import { useEffect } from 'react';

import "../../style/darkMode.css";

function DarkModeButton() {
  const toggle = useSelector(state => state.themeMode);

  const dispatch = useDispatch();

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark")
  }
  
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light")
  }
  
  const storiedTheme = localStorage.getItem("theme");
    
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  

  const defaultDark =
  storiedTheme === "dark" || (storiedTheme === null && prefersDark);

  if(defaultDark) {
    setDark();
    darkMode()
  }

  const toggleTheme = () => {
    if(!toggle) {
      setDark()
      dispatch(darkMode())
    } else {
      setLight()
      dispatch(lightMode())
    }
  }

  

  return (
    <div className={style.darkModeContainer} >
      <button  onClick={toggleTheme}>
        {
          toggle ?  <FaToggleOn size="22px"/> :
           <FaToggleOff size="22px"/>     
        }
      </button>
      <div>
        {
          toggle ? <FaMoon size="16px" color='white'/> :
           <FaSun size="16px" color='yellow'/>
        }
      </div>
    </div>
  );
}

export default DarkModeButton;
