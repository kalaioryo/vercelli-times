import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { closeSidebarMobile, switchSidebarMobile } from '../../../redux/actions/sidebarMobileAction';

import {Link} from 'react-router-dom';

import { FaBars } from "react-icons/fa";

import ModalSidebar from './ModalSidebar';

const SidebarMobile = () => {
  const sidebarMobile = useSelector(state => state.sidebarMobile);
  const dispatch = useDispatch();

  const showSidebar = () => {
    dispatch(switchSidebarMobile())

    if(!sidebarMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
  }

  const closeSidebar = () =>{
    dispatch(closeSidebarMobile())

    if(sidebarMobile) {
      document.body.style.overflow = 'visible';
    }
  }

  return (
    <>
      <Link to='#'  onClick={showSidebar}  >
        <FaBars  size='20px'/>
      </Link>
      
      {sidebarMobile && <ModalSidebar closeSidebar={closeSidebar} showSidebar={showSidebar}/>}
    </>
  )
}

export default SidebarMobile