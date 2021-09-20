import React, { useEffect, useState } from 'react';
import console from '../config/logger';

interface Props {
    value:any
}
const Domains = (props:any)=> { 
//    const [isLoading, setLoading] = useState(false);

/**/
    useEffect( () => {        
        //if(!props.match.params.id){
        //    props.history.push("/list");
        //}
        
    }, []);
   
    return (
    <>
        <table className="table">
          <caption>Statement Summary</caption>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Server</th>
              <th scope="col">Type</th>
              <th scope="col">State</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="ID"><a href='dominios.php?mode=edit'>1</a></td>
              <td data-label="Name"><a href='dominios.php?mode=edit'>example.es</a></td>
              <td data-label="Server"><a href='dominios.php?mode=edit'>www.example.es</a></td>
              <td data-label="Type"><a href='dominios.php?mode=edit'>example.page</a></td>
              <td data-label="State"><a href='dominios.php?mode=edit'>Pending</a></td>
              <td data-label="Menu">
                <span className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                  </a>

                  <span className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Instalar</a>
                    <a className="dropdown-item" href="#">ActualizarFicheros</a>
                    <a className="dropdown-item" href="#" onclick='if(!confirm(\"Pulsa Aceptar para confirmar limpiar del dominio en servidor\"))return false'>LimpiarCarpeta</a>
                    <a className="dropdown-item" href="#" onclick='if(!confirm(\"Pulsa Aceptar para confirmar el borrado del dominio en servidor\"))return false'>EliminarConfiguracion</a>
                    <a className="dropdown-item" href="#" onclick='if(!confirm(\"Pulsa Aceptar para confirmar el borrado del dominio\"))return false'>Borrar</a>
                    <a className="dropdown-item" href="#" onclick='if(!confirm(\"Pulsa Aceptar para confirmar bloquear del dominio en servidor\"))return false'>Bloquear</a>
                    <a className="dropdown-item" href="#" onclick='if(!confirm(\"Pulsa Aceptar para confirmar limpiar del dominio en servidor\"))return false'>Desbloquear</a>
                    <a className="dropdown-item" href="#" target='_blank'>EditarWP</a>
                    <a className="dropdown-item" href="#" target='_blank'>Visitar</a>
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
            <p><a href='dominios.php?mode=new'>Crear nuevo dominio</a></p>
        </div>
    </>
    );
}

export default Domains;