import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";


import style from './modalSidebar.module.css';

import ItemMobile from './ItemMobile';

const ModalSidebar = ({showSidebar}) =>{

  return (
    <div className={style.wrap}>
      <div className={style.modalContainer}>
        <div>
          <Link to='#' className={style.menuBars}>
            <AiOutlineClose size='20px' onClick={showSidebar}/> 
          </Link>
        </div>
        {/* <SearchForm/>  */}
        <ItemMobile/>
    </div>
    </div>
    
  )
}

export default ModalSidebar