import React, {useState, useEffect} from 'react';

import NavbarUp from './NavbarUp';
import NavbarMid from './NavbarMid';
import NavbarMobile from './HeaderMobile';
import SectionBar from './SectionBar';

import style from './header.module.css'

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

  const isMobile = size <= 900;

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
