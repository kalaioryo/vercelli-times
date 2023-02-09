import React from 'react';

import { sidebarMobileData } from './sidebarMobileData';

import SubItem from './SubItem';

import style from './itemMobile.module.css';

const ItemMobile = ({showSidebar}) => {
  return(
    <>
      {sidebarMobileData.map((item) =>{
        const {id, name, subSection} = item;
        return(
          <div key={`Sidebar mobile ${id}`} >
            <ul className={style.itemContainer}>
              <li className={style.itemName} ><h3>{name}</h3></li>
              <ul className={style.subItemContainer}>
                {subSection && <SubItem showSidebar={showSidebar} subSection={subSection}/>}
              </ul>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default ItemMobile