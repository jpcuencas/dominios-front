import React from 'react';
import console from '../../config/logger';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
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
    <div className="page secondary">
        
        <Header />
        
        <div className="page-region">
            <section className="page-region-content">
                <BrowserRouter>
                    <Navbar/>
                    <div className="container p-4">
                        <Routes>
                            <Route path="/" element={<Domains />} />

                            <Route path="/servers" element={<Servers />} />
                            <Route path="/domains" element={<Domains />} />
                            <Route path="/templates" element={<Templates />} />
                            <Route path="/types" element={<Types />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </section>
        </div>
    </div>

    <Footer />
    </>
    );
}

export default App;
