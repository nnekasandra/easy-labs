import { useState, useEffect } from "react";

const DynamicTable = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const fetchColumns = async () => {
    const response = await fetch("/experiment-table/1");
    const data = await response.json();
    console.log(data);
    setColumns(data.fieldnames);
    console.log(columns);
  };

  useEffect(() => {
    fetchColumns();
  }, []);

  const handleAddRow = async () => {
    const newRow = {};
    columns.forEach((column) => {
      newRow[column] = "";
    });
    setRows([...rows, newRow]);
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
    <div>
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
              {Object.keys(row).map((fieldName, index) => (
                <td key={index}>
                  <input
                    value={row[fieldName]}
                    onChange={(e) => handleCellChange(e, index, fieldName)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
};
export default DynamicTable;
