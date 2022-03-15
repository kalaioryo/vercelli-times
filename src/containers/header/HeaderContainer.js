import React, {useState, useEffect} from 'react';
import '../../style/Header.css';
// import '../../HeaderUp';
import HeaderUp from './HeaderUp';
import HeaderMid from './HeaderMid';
import HeaderDown from './HeaderDown';
import HeaderMobile from './HeaderMobile';

function Header() {
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
      <HeaderMobile/>
    )
  } else {
    return (
      <div className='header'>
        <HeaderUp/>

        <HeaderMid/>

        <HeaderDown/>


      </div>
    );
  }
}

export default Header;
