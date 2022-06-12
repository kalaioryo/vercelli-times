import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";

import style from './sidebarMobile.module.css'

import ModalSidebar from './ModalSidebar';

import SearchForm from '../../form/SearchForm';

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
      
      {sidebar ? <ModalSidebar showSidebar={showSidebar}/> : null}
    </>
  )
}

export default SidebarMobile