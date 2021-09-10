import React, { useEffect, useState } from 'react';
import console from '../../config/logger';
import { Link, useHistory } from 'react-router-dom';
import config from '../../config/dot-env';


const Navbar = () => {
    
    //const history = useHistory();
    //const initialLoggin: Boolean =false;
    //const [loggin, setLoggin] = useState<Boolean>(initialLoggin);
    
    
    useEffect( () => {
        /**
        let element = document.querySelector('#recdirect-link');
        element?.dispatchEvent(
            new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
          );
     /***/
    }, []);
    //     <Link className="nav-link" to="/list">Assets</Link>
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">


                
            </div>
          </div>

        </div>
      </nav>
    )
}


export default Navbar

