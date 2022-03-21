import React from 'react';
import { Link } from 'react-router-dom';
import DailyNewspaper from '../../components/DailyNewspaper';
import DataComponent from '../../components/DataComponent';

function NavbarMid() {
  return (
    <div className='header-mid'>
      <div className='header-left column'>
        <DataComponent/>
        <DailyNewspaper/>
      </div>

      <Link to={'/'}><h1 className='title'>The Vercelli Times</h1></Link>

      <div className='header-right column'>
        <p>Meteo</p>
        <p>finanza</p>
      </div>
    </div>
  );
}

export default NavbarMid;
