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
          <li className={style.navbarToggle}>
            <Link to='#' className={style.menuBars}>
              <AiOutlineClose className={style.closeButton}  onClick={showSidebar}/> 
            </Link>
          </li>
          <Menu/>         
        </ul>
        
      </nav>
    </>
  )
}

export default Sidebar