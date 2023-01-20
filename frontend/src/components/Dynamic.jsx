import React, { useEffect, useState } from "react";

const DynamicTable = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchHeaders = async () => {
      try {
        const response = await fetch("/experiment/1");
        const data = await response.json();
        setHeaders(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchHeaders();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {headers?.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DynamicTable;
/*
javascript
import { useState, useEffect } from "react";

const DynamicTable = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const fetchColumns = async () => {
    const response = await fetch("/table-data");
    const data = await response.json();
    setColumns(Object.keys(data[0]));
  };

  useEffect(() => {
    fetchColumns();
  }, []);

  const fetchRows = async () => {
    const response = await fetch("/table-data");
    const data = await response.json();
    setRows(data);
  };

  const handleAddRow = async () => {
    // ... code for handling addition of new row 
  };

  const handleCellChange = (e, rowIndex, columnName) => {
    const { value } = e.target;
    setRows((prevRows) =>
      prevRows.map((row, index) =>
        index === rowIndex ? { ...row, [columnName]: value } : row
      )
    );
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default DynamicTable;

*/