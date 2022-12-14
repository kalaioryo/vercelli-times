import React from 'react';
import { Link } from 'react-router-dom';

import style from './navbarMid.module.css'

import DailyNewspaper from './DailyNewspaper';
import DateComponent from './DateComponent';

function NavbarMid() {
  return (
    <div className={style.headerMid}>
      <div className={style.leftSide}>
        <DateComponent/>
        <DailyNewspaper/>
      </div>

      <Link to={'/'}>
        <h1 className={style.title}>The Vercelli Times</h1>
      </Link>

      <div className={style.rightSide}>
        <p>Meteo</p>
        <p>finanza</p>
      </div>
    </div>
  );
}

export default NavbarMid;
