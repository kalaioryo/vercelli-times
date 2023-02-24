import React from 'react';

import { sidebarData } from './sidebarData';

import Item from './Item';

//drill of components all based from data sidebarData
//Menu => Item => Submenu

const Menu = () => {
  return (
    <>
      {sidebarData.map((item) =>{
        const {id} = item;
        return(
          <Item key={`item Sidebar ${id}`} item={item}/>
        )
      })}
    </>
  )
}

export default Menu