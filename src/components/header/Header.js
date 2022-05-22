import React, {useState, useEffect} from 'react';

import style from './header.module.css'

import NavbarUp from './NavbarUp';
import NavbarMid from './NavbarMid';
import SectionBar from './SectionBar';
import NavbarMobile from './HeaderMobile';

function NavbarContainer() {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () =>{
    setSize(window.innerWidth)
  }

  useEffect(() =>{
    window.addEventListener('resize', checkSize)

    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  const isMobile = window.innerWidth <= 900;

  if (isMobile) {
    return (
      <NavbarMobile/>
    )
  } else {
    return (
      <div className={style.header}>
        <NavbarUp/>

        <NavbarMid/>

        <SectionBar/>

      </div>
    );
  }
}

export default NavbarContainer;
