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
            const {queryUrl, id, name, subSection} = item;
            // console.log(subSection.name);
            return(
             <Item key={`item Sidebar ${id}`} item={item}/>
            )
          })}
    </>
  )
}

export default LinkSection

const Item = ({item}) => {
  const {path, id, name, subSection} = item;

  const [isShown, setIsShown] = useState(false);

  const handleClick = (id) => {
    console.log(id.target);
  }

  const handleMouseEnter = () => {
    setIsShown(true)
  }

  const handleMouseLeave = () => {
    setIsShown(false)
  }

  return(
    <>
    <li key={id} className={style.list}
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <Link to={`${path}`} className={style.navText}>
      <span className={style.items}>
        {name}
      </span>
    </Link>

    { isShown && subSection ? <Submenu subSection={subSection}/> : null}

  </li>
  </>
  )
}

const Submenu = ({subSection}) =>{

  return(
    <ul className={style.subMenuContainer}>
      {subSection.map((subItem) =>{
        console.log(subItem);
        const {name, path} = subItem;
    
        return (
          <li  className={style.item}>
                          
              <Link key={`subItem Sidebar ${name}`} className={style.link}  to={`${path}`}>
                {name}
              </Link>
            
            
          </li>
        )
      })}
    </ul>
  )
}