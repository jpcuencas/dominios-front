import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';
import console from '../config/logger';
import ServersService from '../services/ServersService';
import Server from '../models/Server/Server';

interface Props {
    value:any
}
const Servers = (props:any)=> { 
//    const [isLoading, setLoading] = useState(false);

/**/
const [selectedRows, setSelectedRows] = useState([]);
const [servers, setServers] = useState<Server[]>([]);

    useEffect(() => {
        serversService.loadResources().then((result)=> {
            
    const tableDataItems = [
        {
            id: 1,
            name: 'bonosdescuento.com',
            provider: '23.89.199.222',
            ip:'23.89.199.222',
            ftpServer: 'www.fiveblogs1.es'
        },
    ];
    setServers(result);
        })

        console.info('state', selectedRows);
    }, [selectedRows]);

    const handleChange = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);
   
    
const serversService = new ServersService();

  const borrar = (id: number) => {
    if(window.confirm("Pulsa Aceptar para confirmar el borrado del servidor")) {
        serversService.deleteResource(id);
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
                <Link to={"/server/"+row.id}>{row.name}</Link>,
                sortable: true,
            },
            {
                name: 'Provider',
                selector:'provider',
                sortable: true,
                right: true,
            },
            {
                name: 'IP',
                selector: 'ip',
                sortable: true,
                right: true,
            },
            {
                name: 'FTPServer',
                selector: 'ftpServer',
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
            title="Servers"
            data={servers}
            columns={columns}
            selectableRows
            onSelectedRowsChange={handleChange}
        />
        <div>
            <p><Link to="/server">Crear nuevo servidor</Link></p>
        </div>
    </>
    );
}

export default Servers;