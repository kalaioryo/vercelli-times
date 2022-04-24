import React, { useState } from 'react';

import { FaToggleOff, FaToggleOn, FaSun, FaMoon } from "react-icons/fa";

import { useSelector, useDispatch } from 'react-redux';
import { dayNight } from '../redux/actions/articleAction';
import { useEffect } from 'react';

function NightButton() {

  // const [toggle, setToggle] = useState(false);
  const toggle = useSelector(state => state.dayNigth);
  // console.log(toggle);
  const dispatch = useDispatch();

  return (
    <div className='nigth-div' >
      <button className='Nigth-btn' onClick={() => dispatch(dayNight())}>
        {
          toggle ? <FaToggleOff size="22px"/> :
          <FaToggleOn size="22px"/>      
        }
      </button>
      <div className='sun-moon' >
        {
          toggle ? <FaSun size="16px" color='yellow'/> :
          <FaMoon size="16px" color='white'/>
        }
      </div>
    </div>
  );
}

export default NightButton;
