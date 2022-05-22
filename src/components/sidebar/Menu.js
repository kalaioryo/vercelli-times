import React, {useState} from 'react';
import { SidebarData } from './sidebarData';

import Item from './Item';

const Menu = () => {
  
  return (
    <>
      {SidebarData.map((item) =>{
        const {id} = item;
        return(
          <Item key={`item Sidebar ${id}`} item={item}/>
        )
      })}
    </>
  )
}

export default Menu