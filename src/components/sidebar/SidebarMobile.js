import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import style from './sidebarMobile.module.css'

import { sidebarMobileData } from './sidebarMobileData';
import SearchForm from '../form/SearchForm';

const SidebarMobile = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)

    if(!sidebar) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
  }

  const closeSidebar = () =>{
    setSidebar(false)

  }

  return (
    <>
      <Link to='#' className='' onClick={showSidebar}  >
        <FaBars size='20px'/>
      </Link>
      
      {sidebar ? <ModalSiderbar showSidebar={showSidebar}/> : null}
    </>
  )
}

export default SidebarMobile

const ModalSiderbar = ({showSidebar}) =>{

  return (
    <div className={style.wrap}>
      <div className={style.modalContainer}>
        <div>
          <Link to='#' className='menuBars'>
            <AiOutlineClose size='20px' onClick={showSidebar}/> 
          </Link>
        </div>
        {/* <SearchForm/>  */}
        <Item/>
    </div>
    </div>
    
  )
}

const Item = () =>{
  return(
    <>
      {sidebarMobileData.map((item) =>{
        const {id, name, subSection} = item;
        return(
          <div key={`Siderbar mobile ${id}`} >
            <ul className={style.itemContainer}>
              <li className={style.itemName} >{name}</li>
              <ul className={style.subItemContainer}>
                {subSection ? <SubItem subSection={subSection}/> : null}
              </ul>
            </ul>
          </div>
        )
      })}
    </>
  )
}

const SubItem = ({subSection}) =>{
  return(
    <>
      {subSection.map((subItem) =>{
          const {name, path} = subItem;
          return(
            <li key={name} className={style.subItem}>
              <Link className={style.subItemLink} to={`${path}`} >
                <span className={style.subItemName}>{name}</span>
              </Link>
            </li>
          )
        
        })}
    </>
      
    
  )
}