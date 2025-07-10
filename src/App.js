import "./App.css";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import {
  ClientSideRowModelModule,
  MenuModule,
  ColumnsToolPanelModule,
  SetFilterModule,
  RowGroupingModule,
  PaginationModule,
  TextEditorModule,
  CheckboxSelectionModule
} from "ag-grid-enterprise";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ModuleRegistry.registerModules([AllCommunityModule]);

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  MenuModule,
  ColumnsToolPanelModule,
  SetFilterModule,
  RowGroupingModule,
  PaginationModule,
  TextEditorModule,
  CheckboxSelectionModule
]);

function App() {
  const gridRef = useRef(null);
  const [columnDefs] = useState([
    {
      field: "make",
      sortable: true,
      // filter: "agSetColumnFilter",
      // rowGroup: true,
      // hide: true,
      editable: true,
    },
    { field: "model", sortable: true, filter: true, editable: true },
    { field: "price", sortable: true, filter: true, editable: true },
  ]);

  // const [rowData, setRowData] = useState([]);

  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);

  // useEffect(() => {
  //   fetch("https://www.ag-grid.com/example-assets/row-data.json")
  //     .then((response) => response.json())
  //     .then((data) => setRowData(data));
  // }, []);

  const onButtonClick = () => {
    const selectedNode = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNode.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected Nodes  ${selectedDataStringPresentation}`);
  };

  const autoGroupColumnDef = useMemo(
    () => ({
      headerName: "Group",
      field: "model", // optional display value
      headerCheckboxSelection: true,
      cellRendererParams: {
        checkbox: true, // ✅ Shows checkboxes in group and leaf rows
      },
      editable: true,
    }),
    []
  );

  const onCellValueChanged = (params) => {
    console.log("Cell changed:", params.colDef.field, "→", params.newValue);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 200, width: 600 }}>
      <button onClick={onButtonClick}>Get Selected Rows</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{
          flex: 1,
          editable: true,
          filter: true,
          sortable: true,
        }}
        pagination={true}
        paginationPageSize={5} 
        rowSelection="multiple"
        animateRows={true}
        onCellValueChanged={onCellValueChanged}
        singleClickEdit={true} // ✅ Makes cells editable on one click
      />
    </div>
  );
}

export default App;
