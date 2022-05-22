import React, { useState } from 'react';

import style from './darkModeButton.module.css'

import { FaToggleOff, FaToggleOn, FaSun, FaMoon } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { dayNight } from '../../redux/actions/articleAction';
import { useEffect } from 'react';

function DarkModeButton() {

  // const [toggle, setToggle] = useState(false);
  const toggle = useSelector(state => state.dayNigth);
  // console.log(toggle);
  const dispatch = useDispatch();

  return (
    <div className={style.darkModeContainer} >
      <button  onClick={() => dispatch(dayNight())}>
        {
          toggle ? <FaToggleOff size="22px"/> :
          <FaToggleOn size="22px"/>      
        }
      </button>
      <div>
        {
          toggle ? <FaSun size="16px" color='yellow'/> :
          <FaMoon size="16px" color='white'/>
        }
      </div>
    </div>
  );
}

export default DarkModeButton;
