import React, { useEffect, useState } from 'react';
import console from '../config/logger';

interface Props {
    value:any
}
const Servers = (props:any)=> { 
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
              <th scope="col">Provider</th>
              <th scope="col">IP</th>
              <th scope="col">FTPServer</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="ID"><a href='servidor.php?mode=edit'>1</a></td>
              <td data-label="Name"><a href='servidor.php?mode=edit'>example.es</a></td>
              <td data-label="Provider"><a href='servidor.php?mode=edit'>www.example.es</a></td>
              <td data-label="IP"><a href='servidor.php?mode=edit'>example.page</a></td>
              <td data-label="FTPServer"><a href='servidor.php?mode=edit'>Pending</a></td>
              <td data-label="Menu">
                    <a className="dropdown-item" href="#">Borrar</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
            <p><a href='servidor.php?mode=new'>Crear nuevo servidor</a></p>
        </div>
    </>
    );
}

export default Servers;