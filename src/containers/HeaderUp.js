import React from 'react';
import SearchForm from '../components/SearchForm';
import ListRegion from '../components/ListRegion';
import NightButton from '../components/NightButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function HeaderUp() {
  return (
    <div  className="header-up">
      <div className='header-left'>
        <button className='btn-sidebar'>
          <FontAwesomeIcon icon={faBars} size="lg"/>
        </button>
        <SearchForm/>
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

export default HeaderUp;
