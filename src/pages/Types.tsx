import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';
import console from '../config/logger';
import TypesService from '../services/TypesService';
import Type from '../models/Type/Type';

interface Props {
    value:any
}
const Types = (props:any)=> { 
//    const [isLoading, setLoading] = useState(false);

/**/
const [selectedRows, setSelectedRows] = useState([]);
const [types, setTypes] = useState<Type[]>([]);

useEffect(() => {
    typesService.loadResources().then((result => {
        const tableDataItems = [
            {
                id: 1,
                name: 'bonosdescuento.com',
                description: '23.89.199.222',
                format:'23.89.199.222',
            },
        ];
     setTypes(result);
    }));

    console.info("state", selectedRows);
  }, [selectedRows]);
  const handleChange = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const typesService = new TypesService();

  const borrar = (id: number) => {
    if (
      window.confirm("Pulsa Aceptar para confirmar el borrado del tipo")
    ) {
        typesService.deleteResource(id);
    }
    console.info("clicked");
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
            <Link to={"/type/"+row.id}>{row.name}</Link>,
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
            cell: (row: any) => <button type="button" className="btn btn-primary" onClick={() => borrar(row.id)}>Borrar</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ],
    [],
);




   
    return (
    <>
        <DataTable
            title="Templates"
            data={types}
            columns={columns}
            selectableRows
            onSelectedRowsChange={handleChange}
        />
       <div>
            <p><Link to="/type">Crear nuevo tipo</Link></p>
       </div>  
    </>
    );
}

export default Types;