import React from 'react';
import console from '../../config/logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../../config/dot-env';

import  Header  from '../layout/Header';
import Footer from '../layout/Footer';
import Navbar from '../Navbar/Navbar';

import Domains from '../../pages/Domains';


function App() {
    console.info(config);
  return (
    <>
    <header>
        <Header />
    </header>
        <div className="container">
            <BrowserRouter>
                <Navbar/>
                <div className="container p-4">
                    <Switch>
                        <Route exact path="/" component={Domains} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
     <footer> 
        <Footer />
     </footer>
    </>
  );
}

export default App;
