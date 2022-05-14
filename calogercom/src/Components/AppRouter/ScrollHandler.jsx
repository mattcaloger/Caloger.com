import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function ScrollHandler() {
    const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
          
        //const id = hash.replace('#', '');
        const id = hash;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change
  return null;
}
