import React from 'react';
import { Link } from 'react-router-dom';

import style from './subItem.module.css';

const SubItem = ({subSection}) =>{
  return(
    <>
      {subSection.map((subItem) =>{
          const {name, path} = subItem;
          return(
            <li key={name} className={style.subItem}>
              <Link className={style.subItemLink} to={`${path}`} >
                <span className={style.subItemName}>{name}</span>
              </Link>
            </li>
          )
        
        })}
    </>
      
    
  )
}

export default SubItem