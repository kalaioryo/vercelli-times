import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from './sidebarData';

import style from './sidebar.module.css';
import Menu from './Menu';



const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  const handleMouseEnter = () => setSidebar(true)

  const handleMouseLeave = () => setSidebar(false)

  return (
    <>
      {/* <div className={style.navBar}> */}
        <Link to='#' className={style.menuBars} onClick={showSidebar}  >
          <FaBars size='20px'/>
        </Link>
      {/* </div> */}
      <nav className={sidebar ? style.navMenuActive : style.navMenu } onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        <ul >
          <li className={style.navbarToogle}>
            <Link to='#' className={style.menuBars}>
              <AiOutlineClose size='20px' onClick={showSidebar}/> 
            </Link>
          </li>
          <li className={style.list}>
            <Link to='/' className={style.navText}><span className={style.itemList}>Home Page</span></Link>

          </li>
          <Menu/>

        </ul>
      </nav>
    </>
  )
}

export default Sidebar