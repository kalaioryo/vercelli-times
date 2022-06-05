import React from 'react';
import style from './navbarUp.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SearchButton from '../button/SearchButton';
import ListRegion from './ListRegion';
import DarkModeButton from '../button/DarkModeButton';
import Sidebar from '../sidebar/Sidebar';

function NavbarUp() {
  return (
    <div  className={style.headerUp}>
      <div className={style.leftSide}>
        <button className='btn-sidebar'>
          <Sidebar/>
          {/* <FontAwesomeIcon icon={faBars} size="lg"/> */}
        </button>
        <SearchButton/>
      </div>

      <div className={style.centerSide}>
        <ListRegion/>
      </div>

      <div className={style.rigthSide}>
        <DarkModeButton/>
        <button>subscribe</button>
        <button>Login</button>
      </div>

    </div>
  );
}

export default NavbarUp;
