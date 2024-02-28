import logo from './logo.svg';
import './App.css';
import ForDesktop from './desktop';
import ForLaptop from './laptop';
import ForMobile from './mobile';
import { useState,useEffect } from 'react';

function App() {
  const [windowViewportSize, setWindowViewportSize] = useState('');


  useEffect(() => {
    
    function detectWindowSize() {
      if (window.innerWidth >= 1024){
        return 'isDesktop';
      } 
      if (window.innerWidth >= 768) {
        return 'isTablet';
      }
      if (window.innerWidth >= 360) {
        return 'isMobile';
      }
    }

    const size = detectWindowSize();
    setWindowViewportSize(size);

    window.addEventListener('resize', () => {
      const newSize = detectWindowSize();
      if (newSize !== windowViewportSize) {
        setWindowViewportSize(newSize);
      }
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [windowViewportSize])

  return (
    <>
      { windowViewportSize === 'isDesktop' && <ForDesktop /> }
      { windowViewportSize === 'isTablet' && <ForLaptop /> }
      { windowViewportSize === 'isMobile' && <ForMobile />}
    </>
  );
}

export default App;
