import React from 'react';

import { Link } from 'react-router-dom';

import { AiOutlineClose } from "react-icons/ai";

import ItemMobile from './ItemMobile';
import SearchForm from '../../form/SearchForm';

import style from './modalSidebar.module.css';

//drill of components all based from data of sidebarMobileData.js
//SidebarMobile => ModalSidebar => ItemMobile => SubItem

const ModalSidebar = ({showSidebar,closeSidebar}) =>{

  return (
    <div className={style.wrap}>
      <div className={style.modalContainer}>
        <div>
          <Link to='#' className={style.menuBars}>
            <AiOutlineClose color='red' size='30px' onClick={showSidebar}/> 
          </Link>
      </div>
        <div className={style.containerForm}><SearchForm closeSidebar={closeSidebar}/></div>
        <ItemMobile showSidebar={showSidebar}/>
    </div>
  </div>
  )
}

export default ModalSidebar