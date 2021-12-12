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
import Navbar from '../layout/Navbar';

import Domains from '../../pages/Domains';
import Servers from '../../pages/Servers';
import Templates from '../../pages/Templates';
import Types from '../../pages/Types';

import DomainForm from '../Domain/DomainForm';
import ServerForm from '../Server/ServerForm';
import TypeForm from '../Type/TypeForm';
import TemplateForm from '../Template/TemplateForm';


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
                            <Route path="/server" element={<ServerForm />} />
                            <Route path="/server/:id" element={<ServerForm />} />

                            <Route path="/domains" element={<Domains />} />
                            <Route path="/domain" element={<DomainForm />} />
                            <Route path="/domain/:id" element={<DomainForm />} />
                            
                            <Route path="/templates" element={<Templates />} />
                            <Route path="/template" element={<TemplateForm />} />
                            <Route path="/template/:id" element={<TemplateForm />} />

                            <Route path="/types" element={<Types />} />
                            <Route path="/type" element={<TypeForm />} />
                            <Route path="/type/:id" element={<TypeForm />} />
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
