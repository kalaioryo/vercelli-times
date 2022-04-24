import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from './sidebarData';

import style from './sidebar.module.css';
import LinkSection from './LinkSection';



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      {/* <div className={style.navBar}> */}
        <Link to='#' className={style.menuBars} onClick={showSidebar}>
          <FaBars size='20px'/>
        </Link>
      {/* </div> */}
      <nav className={sidebar ? style.navMenuActive : style.navMenu }>
        <ul className='nav-menu-items' >
          <li className='navbar-toogle'>
            <Link to='#' className='menuBars'>
              <AiOutlineClose size='20px' onClick={showSidebar}/> 
            </Link>
          </li>
          <li className={style.list}>
            <Link to='/' className={style.navText}><span>Home</span></Link>

          </li>
          <LinkSection/>

        </ul>
      </nav>
    </>
  )
}

export default Sidebar