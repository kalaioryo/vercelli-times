import React, {useState, useEffect} from 'react';
import '../../style/Header.css';
// import '../../HeaderUp';
import NavbarUp from './NavbarUp';
import NavbarMid from './NavbarMid';
import NavbarDown from './NavbarDown';
import NavbarMobile from './NavbarMobile';

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
      <div className='header'>
        <NavbarUp/>

        <NavbarMid/>

        <NavbarDown/>


      </div>
    );
  }
}

export default NavbarContainer;
