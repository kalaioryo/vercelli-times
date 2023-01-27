import React from "react";
import { Link } from "react-router-dom";

import style from './submenu.module.css';

const Submenu = ({subSection, cName}) =>{

  return(
    <ul style={cName}>
      {subSection.map((subItem) =>{
        const {name, path} = subItem;
    
        return (
          <li key={`subItem Sidebar ${name}`} className={style.item}>                         
              <Link  className={style.link}  to={`${path}`}>
                <span className={style.spanLink}>{name}</span>                
              </Link>            
          </li>
        )
      })}
    </ul>
  )
}

export default Submenu