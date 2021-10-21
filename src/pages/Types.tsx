import React, { useEffect, useState, useMemo, useCallback } from 'react';

import DataTable from 'react-data-table-component';
import console from '../config/logger';

interface Props {
    value:any
}
const Types = (props:any)=> { 
//    const [isLoading, setLoading] = useState(false);

/**/
const [selectedRows, setSelectedRows] = useState([]);

useEffect(() => {
    
    console.info('state', selectedRows);
}, [selectedRows]);
const handleChange = useCallback(state => {
    setSelectedRows(state.selectedRows);
}, []);

const borrar = () => {
    if(window.confirm("Pulsa Aceptar para confirmar el borrado del servidor")) {

    }
    console.info('clicked');
};

const columns = useMemo(
    () => [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
            grow: 2,
        },
        {
            name: 'Name',
            cell: (row: any) =>
            <a href='servidor.php?mode=edit'>row.name</a>,
            sortable: true,
        },
        {
            name: 'Description',
            selector:'description',
            sortable: true,
            right: true,
        },
        {
            name: 'Format',
            selector: 'format',
            sortable: true,
            right: true,
        },
        {
            name:'Options',
            cell: (row: any) => <button type="button" className="btn btn-primary" onClick={borrar}>Primary</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ],
    [],
);



const tableDataItems = [
    {
        id: 1,
        name: 'bonosdescuento.com',
        description: '23.89.199.222',
        format:'23.89.199.222',
    },
];
   
    return (
    <>
        <DataTable
            title="Templates"
            data={tableDataItems}
            columns={columns}
            selectableRows
            onSelectedRowsChange={handleChange}
        />
       <div>
           <p><a href='tipos.php?mode=new'>Crear nuevo tipo</a></p>
       </div>  
    </>
    );
}

export default Types;