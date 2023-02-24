import React from 'react';

import { Link } from 'react-router-dom';

import style from './subItem.module.css';

//drill of components all based from data of sidebarMobileData.js
//SidebarMobile => ModalSidebar => ItemMobile => SubItem

const SubItem = ({subSection, showSidebar}) =>{
  return(
    <>
      {subSection.map((subItem) =>{
        const {name, path} = subItem;
        return (
          <li key={name} className={style.subItem}>
            <Link className={style.subItemLink} onClick={showSidebar} to={`${path}`} >
              <span className={style.subItemName}>{name}</span>
            </Link>
          </li>
        )}
      )}
    </>
  )
}

export default SubItem