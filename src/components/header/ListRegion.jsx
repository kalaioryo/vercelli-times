import React from 'react';
import style from './listRegion.module.css';


function ListRegion() {
  return (
    <div>
      <ul className={style.listRegion}>
        <li>U.S.</li>
        <li>INTERNATIONAL</li>
        <li>CANADA</li>
        <li>Español</li>
        <li>CINA</li>
      </ul>
    </div>
    
  );
}

export default ListRegion;
