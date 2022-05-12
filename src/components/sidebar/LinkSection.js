import React, {useState} from 'react';
import { SidebarData } from './sidebarData';
import { FaBars } from "react-icons/fa";

import { Link } from 'react-router-dom';

import style from './sidebar.module.css';

// import Submenu from './Submenu';

const LinkSection = () => {
  
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

export default LinkSection

const Item = ({item}) => {
  const [isShown, setIsShown] = useState(false);
  const {path, id, name, cName, subSection} = item;

  const handleMouseEnter = () => setIsShown(true)

  const handleMouseLeave = () => setIsShown(false)

  return(
    <>
    <li key={id} className={style.list}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <Link to={`${path}`} className={style.navText}>
      <span className={style.itemList}>
        {name}
      </span>
    </Link>

    { isShown && subSection ? <Submenu subSection={subSection} cName={cName}/> : null}

  </li>
  </>
  )
}

const Submenu = ({subSection, cName}) =>{

  return(
    <ul style={cName}>
      {subSection.map((subItem) =>{
        const {name, path} = subItem;
    
        return (
          <li key={`subItem Sidebar ${name}`} className={style.item}>                         
              <Link  className={style.link}  to={`${path}`}>
                {name}
              </Link>            
          </li>
        )
      })}
    </ul>
  )
}