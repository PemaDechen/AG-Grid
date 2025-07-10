import React, {useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import './App.css';

function App() {
  const [columnDefs] = useState([
    {  field: "make" },
    {  field: "model" },
    {  field: "price" },
  ]);
  const [rowDefs] = useState([
    {  make:"Toyota", model:"Celecia", price: 3500000 },
    {  make:"Ford", model:"Mondeo", price: 3200000 },
    {  make:"Porche", model:"Boxter", price: 750000 },
  ]);
  return ;
}

export default App;
