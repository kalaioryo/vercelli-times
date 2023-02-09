import React from 'react';
import style from './navbarUp.module.css'

import SearchButton from '../button/SearchButton';
import ListRegion from './ListRegion';
import DarkModeButton from '../button/DarkModeButton';
import Sidebar from '../sidebar/desktop/Sidebar';

function NavbarUp() {
  return (
    <div  className={style.headerUp}>
      <div className={style.leftSide}>
        <button className='btn-sidebar'>
          <Sidebar/>
        </button>
        <SearchButton/>
      </div>

      <div className={style.centerSide}>
        <ListRegion/>
      </div>

      <div className={style.rightSide}>
        <DarkModeButton/>
        <button>subscribe</button>
        <button>Login</button>
      </div>

    </div>
  );
}

export default NavbarUp;
