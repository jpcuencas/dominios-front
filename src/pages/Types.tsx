import React, { useEffect, useState } from 'react';
import console from '../config/logger';

interface Props {
    value:any
}
const Types = (props:any)=> { 
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
             <th scope="col">Description</th>
             <th scope="col">Format</th>
             <th scope="col">#</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td data-label="ID"><a href='tipos.php?mode=edit'>1</a></td>
             <td data-label="Name"><a href='tipos.php?mode=edit'>example.es</a></td>
             <td data-label="Description"><a href='tipos.php?mode=edit'>www.example.es</a></td>
             <td data-label="Format"><a href='tipos.php?mode=edit'>example.page</a></td>
             <td data-label="Menu">
                   <a className="dropdown-item" href="#">Borrar</a>
             </td>
           </tr>
         </tbody>
       </table>
       <div>
           <p><a href='tipos.php?mode=new'>Crear nuevo tipo</a></p>
       </div>  
    </>
    );
}

export default Types;