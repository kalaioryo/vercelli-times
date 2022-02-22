import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
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
          toggle ? <FontAwesomeIcon icon={faToggleOff} size="2x"/> :
          <FontAwesomeIcon icon={faToggleOn} size="2x"/>      
        }
      </button>
      <div className='sun-moon' >
        {
          toggle ? <FontAwesomeIcon icon={faSun} size="1x" color='yellow'/> :
          <FontAwesomeIcon icon={faMoon} size="1x" color='white'/>
        }
      </div>
    </div>
  );
}

export default NightButton;
