import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebarMobile, switchSidebarMobile } from '../../../redux/actions/sidebarMobileAction';
import { FaBars } from "react-icons/fa";

import style from './sidebarMobile.module.css'

import ModalSidebar from './ModalSidebar';

import SearchForm from '../../form/SearchForm';


const SidebarMobile = () => {
  // const [sidebar, setSidebar] = useState(false);
  const sidebarMobile = useSelector(state => state.sidebarMobile);

  const dispatch = useDispatch();

  const showSidebar = () => {
    // setSidebar(!sidebar)
    dispatch(switchSidebarMobile())

    if(!sidebarMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
  }

  const closeSidebar = () =>{
    // setSidebar(false)
    // document.body.style.overflow = 'visible';

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
      
      {sidebarMobile ? <ModalSidebar closeSidebar={closeSidebar} showSidebar={showSidebar}/> : null}
    </>
  )
}

export default SidebarMobile