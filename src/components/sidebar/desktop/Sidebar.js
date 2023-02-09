import React, { useState } from 'react'; 

import { Link } from 'react-router-dom';

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Menu from './Menu';

import style from './sidebar.module.css';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  const handleMouseEnter = () => setSidebar(true)
  const handleMouseLeave = () => setSidebar(false)

  return (
    <>
      <Link to='#' className={style.menuBars} onClick={showSidebar}  >
        <FaBars size='20px'/>
      </Link>
      
      <nav className={sidebar ? style.navMenuActive : style.navMenu } 
        onMouseLeave={handleMouseLeave} 
        onMouseEnter={handleMouseEnter}
      >
        <ul className={style.ulContainer}>
          <li className={style.navbarToogle}>
            <Link to='#' className={style.menuBars}>
              <AiOutlineClose size='20px' onClick={showSidebar}/> 
            </Link>
          </li>
          <li className={style.list}>
            <Link to='/' className={style.navText}>
              <span className={style.itemList}>Home Page</span>
            </Link>

          </li>
          <Menu/>
          
        </ul>
      </nav>
    </>
  )
}

export default Sidebar