import React , { useState } from 'react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);
  const [rowData] = useState([
    { make: "Toyota", model: "Celecia", price: 3500000 },
    { make: "Ford", model: "Mondeo", price: 3200000 },
    { make: "Porche", model: "Boxter`", price: 750000 },
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}

export default App;
