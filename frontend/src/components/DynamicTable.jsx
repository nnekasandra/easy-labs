javascript;
import { useState, useEffect } from "react";

const DynamicTable = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  // populate with the first empty row after the columns are set.
  useEffect(() => {
    if (columns.length) {
      setRows([{ ...columns }]);
    }
  }, [columns]);
  const fetchColumns = async () => {
    const response = await fetch("/api/experiment-table/${experiment-id}");
    const data = await response.json();
    setColumns(data);
  };

  // fetch the columns when the component loads
  useEffect(() => {
    fetchColumns();
  }, []);

  const handleAddRow = async () => {
    const emptyRow = columns.reduce((acc, column) => {
      acc[column] = "";
      return acc;
    }, {});

    setRows([...rows, emptyRow]);
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
          {columns.map((column) => (
            <th key={column.field_name}>{column.field_name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.field_name}>
                <input
                  value={row[column.field_name]}
                  onChange={(e) =>
                    handleCellChange(e, rowIndex, column.field_name)
                  }
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button onClick={handleAddRow}>Add Row</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
