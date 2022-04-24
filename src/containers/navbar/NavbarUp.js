import React from 'react';
// import SearchForm from '../../components/SearchForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SearchButton from '../../components/SearchButton';
import ListRegion from '../../components/ListRegion';
import NightButton from '../../components/NightButton';
import Sidebar from '../../components/sidebar/Sidebar';

function NavbarUp() {
  return (
    <div  className="header-up">
      <div className='header-left'>
        <button className='btn-sidebar'>
          <Sidebar/>
          {/* <FontAwesomeIcon icon={faBars} size="lg"/> */}
        </button>
        <SearchButton/>
      </div>

      <div className='header-center'>
        <ListRegion/>
      </div>

      <div className='header-right'>
        <NightButton/>
        <button>subscribe</button>
        <button>Login</button>
      </div>

    </div>
  );
}

export default NavbarUp;
