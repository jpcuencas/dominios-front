import React, { useEffect, useState, useMemo, useCallback } from 'react';
import console from '../../config/logger';

interface Props {
    value:any
}
const ServerForm = (props:any)=> { 
//    const [isLoading, setLoading] = useState(false);

/**/
    
    

    useEffect(() => {
        
    }, []);

    const save = () => {
        console.info('clicked');
    };
//<button onClick={handleButtonClick}>Action</button>,
    return (
    <>
        <div className="modal" >
          <div className="modal-dialog">
            <div className="modal-content">
            <form name="domainForm" id="domainForm">
              <div className="modal-header">
                <h5 className="modal-title">Domain</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

                <div className="form-group">
                    <label htmlFor="domainName">Nombre del dominio (*):</label>
                    <input type="text" className="form-control" name="name" id="domainName" aria-describedby="nameHelp" placeholder="Enter name"/>
                    <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="domainServer">Servidor:</label>
                    <select name="server" id="domainServer" className="form-select" aria-label="Default select example" aria-describedby="serverHelp">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <small id="serverHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="RegistredIn">Registrado en (*):</label>
                    <input type="text" className="form-control" name="RegistredIn" id="RegistredIn" aria-describedby="registerHelp" placeholder="Register"/>
                    <small id="registerHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="domainIdiom">Idioma:</label>
                    <select name="idiom" id="domainIdiom" className="form-select" aria-label="Default select example" aria-describedby="idiomHelp">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <small id="idiomHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="domainType">Tipo:</label>
                    <select name="type" id="domainType" className="form-select" aria-label="Default select example" aria-describedby="typeHelp">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <small id="typeHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="domainTemplate">Plantillas:</label>
                    <select name="template" id="domainTemplate" className="form-select" aria-label="Default select example" aria-describedby="templateHelp">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <small id="templateHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                  <img src="" id="imgPlantilla" width="300px" height="200px" className="imgPlantilla" alt="plantilla" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="TitleDomain">Title de la pagina(meta)(170 caracteres):</label>
                    <input type="text" className="form-control" name="title" id="TitleDomain" aria-describedby="titleHelp" placeholder="Title"/>
                    <small id="titleHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <aside id="parametros" className="parametros"> 
	            </aside>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
    </>
    );
}

export default ServerForm;