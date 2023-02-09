import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import DarkModeButton from '../button/DarkModeButton';
import DateComponent from './DateComponent';
import SidebarMobile from '../sidebar/mobile/SidebarMobile';

import style from './headerMobile.module.css';

function HeaderMobile() {
  return (
    <div className={style.containerHeader}>
      <div className={style.headerMobile}>
        <div className={style.headerLeftSection}>
          <div className='btn-sidebar'>
          <SidebarMobile/>
          {/* <FontAwesomeIcon icon={faBars} size="lg"/> */}
          </div>
        </div>
        <Link to={'/'}><h1 className={style.titleMobile}>The Vercelli Times</h1></Link>

        <div className={style.headerRightSection}>
          <DarkModeButton/>
            <button><FontAwesomeIcon icon={faUser} size="lg"/></button>
        </div>
      </div>

      <div className={style.navbarBottomSide}>
        <DateComponent/>
        <p>subscribe</p>
      </div>
    </div>
  );
}

export default HeaderMobile;