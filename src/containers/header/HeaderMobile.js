import React from 'react';
import NightButton from '../../components/NightButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'

import DataComponent from '../../components/DataComponent';
import { Link } from 'react-router-dom';

function HeaderMobile() {
  return (
    <>
      <div className='header-mobile'>
        <div className='header-left'>
          <button className='btn-sidebar'>
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </button>
        </div>
        
    
        <Link to={'/'}><h1 className='title-mobile'>The Vercelli Times</h1></Link>
        
        <div className='header-right'>
        <NightButton/>
        
        <button>
          <FontAwesomeIcon icon={faUser} size="lg"/>
        </button>
        </div>
      </div>

      <div className='header-mobile'>
        <DataComponent/>
        <p>subscribe</p>
      </div>
    </>
  );
}

export default HeaderMobile;
