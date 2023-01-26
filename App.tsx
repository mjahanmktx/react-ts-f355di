import * as React from 'react';
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

export default function App() {
  const [rowData, setRowData] = React.useState([
    { make: "Ford", model: "F-150", price: 40000},
    { make: "Tesla", model: "Model 3", price: 50000},
    { make: "Hyundai", model: "Tucson", price: 60000},
  ]);
  const [columnDefs, setColumnDefs] = React.useState([
    { field: "make"},
    { field: "model"},
    { field: "price"},
  ]);
  return (
    <div className = "ag-theme-balham" style = {{height: 500}}>
      <AgGridReact rowData = {rowData} columnDefs = {columnDefs} />
    </div>
  );
}