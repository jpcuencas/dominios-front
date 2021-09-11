import React from 'react';
import console from '../../config/logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from '../../config/dot-env';

import  Header  from '../layout/Header';
import Footer from '../layout/Footer';
import Navbar from '../Navbar/Navbar';

import Domains from '../../pages/Domains';
import Servers from '../../pages/Servers';
import Templates from '../../pages/Templates';
import Types from '../../pages/Types';


function App() {
    console.info(config);
  return (
    <>
        <Header />
        
        <section className="container">
            <BrowserRouter>
                <Navbar/>
                <div className="container p-4">
                    <Switch>
                        <Route exact path="/" component={Domains} />

                        <Route exact path="/servers" component={Servers} />
                        <Route exact path="/domains" component={Domains} />
                        <Route exact path="/templates" component={Templates} />
                        <Route exact path="/types" component={Types} />
                    </Switch>
                </div>
            </BrowserRouter>
        </section>

        <Footer />
    </>
  );
}

export default App;
