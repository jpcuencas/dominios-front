import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';
import console from '../config/logger';
import DomainsService from '../services/DomainsService';

interface Props {
    value:any
}
const domainsService = new DomainsService();
const Domains = (props:any)=> { 
//    const [isLoading, setLoading] = useState(false);

/**/
    
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        domainsService.loadResources();
    }, []);

/**
 * <span className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
 */

    const instalar = (id: string) => {
        console.info('clicked');
        domainsService.installDomain(id);
    };
    const actualizarFicheros = (id: string) => {
        console.info('clicked');
        domainsService.updateFilesDomain(id);
    };
    const limpiarCarpeta = (id: string) => {
        if(window.confirm("Pulsa Aceptar para confirmar limpiar del dominio en servidor")) {
            domainsService.cleanDomain(id);
        }
        console.info('clicked');
    };
    const eliminarConfiguracion = (id: string) => {
        if(window.confirm("Pulsa Aceptar para confirmar el borrado del dominio en servidor")) {
            domainsService.eraseConfigDomain(id);
        }
        console.info('clicked');
    };
    const borrar = (id: string) => {
        if(window.confirm("Pulsa Aceptar para confirmar el borrado del dominio")) {
            domainsService.eraseDomain(id);
        }
        console.info('clicked');
    };
    const bloquear = (id: string) => {
        if(window.confirm("Pulsa Aceptar para confirmar bloquear del dominio en servidor")) {
            domainsService.blockDomain(id);
        }
        console.info('clicked');
    };
    const desbloquear = (id: string) => {
        if(window.confirm("Pulsa Aceptar para confirmar limpiar del dominio en servidor")) {
            domainsService.unblockDomain(id);
        }
        console.info('clicked');
    };

    const handleChange = useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);
//<button onClick={handleButtonClick}>Action</button>,
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
                <Link to="/domain/{row.id}">{row.name}</Link>,
                sortable: true,
            },
            {
                name: 'IP',
                selector:'ip',
                sortable: true,
                right: true,
            },
            {
                name: 'Server',
                selector: 'server.name',
                sortable: true,
                right: true,
            },
            {
                name: 'Type',
                selector: 'type.name',
                sortable: true,
                right: true,
            },
            {
                name: 'Language',
                selector: 'language.name',
                sortable: true,
                right: true,
            },
            {
                name: 'Template',
                selector: 'template.name',
                sortable: true,
                right: true,
            },
            {
                name: 'State',
                selector: 'state',
                sortable: true,
                right: true,
            },
            {
                name:'Options',
                cell: (row: any) => 
                <span className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Actions
                    </a>

                    <span className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="#" onClick={() => instalar(row.id)}>Instalar</a>
                      <a className="dropdown-item" href="#" onClick={() => actualizarFicheros(row.id)}>ActualizarFicheros</a>
                      <a className="dropdown-item" href="#" onClick={() => limpiarCarpeta(row.id)}>LimpiarCarpeta</a>
                      <a className="dropdown-item" href="#" onClick={() => eliminarConfiguracion(row.id)}>EliminarConfiguracion</a>
                      <a className="dropdown-item" href="#" onClick={() => borrar(row.id)}>Borrar</a>
                      
                      <a className="dropdown-item" href="#" onClick={() => bloquear(row.id)}>Bloquear</a>
                      { row.state ==='bloqueado' && <a className="dropdown-item" href="#" onClick={() => desbloquear(row.id)}>Desbloquear</a>}
                      
                      <a className="dropdown-item" href="{row.name}\admin" target='_blank'>EditarWP</a>
                      <a className="dropdown-item" href="{row.name}" target='_blank'>Visitar</a>
                    </span>
                  </span>,
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
            ip: '23.89.199.222',
            server:{
                name: 'www.fiveblogs1.com'
            },
            type: {
                name: 'Blog'
            },
            language: {
                name: 'Español'
            },
            template: {
                name: 'wordpress_basico_es'
            },
            state: 'Instalado'
        },{
            id: 2,
            name: 'bonosdescuento.com',
            ip: '23.89.199.222',
            server:{
                name: 'www.fiveblogs1.com'
            },
            type: {
                name: 'Blog'
            },
            language: {
                name: 'Español'
            },
            template: {
                name: 'wordpress_basico_es'
            },
            state: 'Instalado'
        },{
            id: 3,
            name: 'bonosdescuento.com',
            ip: '23.89.199.222',
            server:{
                name: 'www.fiveblogs1.com'
            },
            type: {
                name: 'Blog'
            },
            language: {
                name: 'Español'
            },
            template: {
                name: 'wordpress_basico_es'
            },
            state: 'Instalado'
        },
    ];


    return (
    <>
        <DataTable
            title="Domains"
            data={tableDataItems}
            columns={columns}
            selectableRows
            onSelectedRowsChange={handleChange}
        />
         <div>
            <p><Link to="/domain">Crear nuevo dominio</Link></p>
        </div>
    </>
    );
    
}

export default Domains;