import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

import DataTable from "react-data-table-component";
import console from "../config/logger";
import TemplatesService from "../services/TemplatesService";
import Template from "../models/Template/Template";

interface Props {
  value: any;
}
const Templates = (props: any) => {
  //    const [isLoading, setLoading] = useState(false);

  /**/
  const [selectedRows, setSelectedRows] = useState([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  
  useEffect(() => {
    templatesService.loadResources().then((result => {
        
          const tableDataItems = [
            {
              id: 1,
              name: "bonosdescuento.com",
              pageType: "23.89.199.222",
              description: "23.89.199.222",
            },
          ];
        setTemplates(result);
      }));

    console.info("state", selectedRows);
  }, [selectedRows]);

  const handleChange = useCallback((state) => {
      
    setSelectedRows(state.selectedRows);
  }, []);

  const templatesService = new TemplatesService();

  const borrar = (id: number) => {
    if (
      window.confirm("Pulsa Aceptar para confirmar el borrado de la plantilla")
    ) {
      templatesService.deleteResource(id);
    }
    console.info("clicked");
  };

  const columns = useMemo(
    () => [
      {
        name: "Id",
        selector: "id",
        sortable: true,
        grow: 2,
      },
      {
        name: "Name",
        cell: (row: any) => <Link to={"/template/" + row.id}>{row.name}</Link>,
        sortable: true,
      },
      {
        name: "Page Type",
        selector: "pageType",
        sortable: true,
        right: true,
      },
      {
        name: "Description",
        selector: "description",
        sortable: true,
        right: true,
      },
      {
        name: "Options",
        cell: (row: any) => (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => borrar(row.id)}
          >
            Borrar
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ],
    []
  );


  return (
    <>
      <DataTable
        title="Templates"
        data={templates}
        columns={columns}
        selectableRows
        onSelectedRowsChange={handleChange}
      />
      <div>
        <p>
          <Link to="/template">Crear nueva plantilla</Link>
        </p>
      </div>
    </>
  );
};

export default Templates;
