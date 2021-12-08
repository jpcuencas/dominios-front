import React, { useEffect, useState } from 'react';
import console from '../../config/logger';
import { Link } from 'react-router-dom';
import config from '../../config/dot-env';


const Navbar = () => {

    console.info(config);
    
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
                <div className="navbar-nav">
                    <Link className="nav-link" to="/servers">Servers</Link>
                    
                    <Link className="nav-link" to="/domains">Domains</Link>
                    
                    <Link className="nav-link" to="/templates">Templates</Link>
                    
                    <Link className="nav-link" to="/types">Types</Link>
                </div>
        </div>
    </nav>
    );
}


export default Navbar

