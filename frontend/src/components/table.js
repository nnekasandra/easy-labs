import "./styles.css";
const data = [
  {
    serialNum: 1,
    drugName: "Ach",
    drugConc: 1,
    drugDose: 0.1,
    logDose: -1,
    response: 2,
    responsePercent: 20,
  },
  {
    serialNum: 2,
    drugName: "Ach",
    drugConc: 1,
    drugDose: 0.2,
    logDose: -0.7,
    response: 5,
    responsePercent: 25,
  },
  {
    serialNum: 3,
    drugName: "Ach",
    drugConc: 1,
    drugDose: 0.4,
    logDose: -0.4,
    response: 7,
    responsePercent: 35,
  },
  {
    serialNum: 4,
    drugName: "Ach",
    drugConc: 1,
    drugDose: 0.8,
    logDose: -0.1,
    response: 9,
    responsePercent: 45,
  },
  {
    serialNum: 5,
    drugName: "Ach",
    drugConc: 10,
    drugDose: 0.16,
    logDose: -0.8,
    response: 12,
    responsePercent: 60,
  },
  {
    serialNum: 6,
    drugName: "Ach",
    drugConc: 10,
    drugDose: 0.32,
    logDose: -0.5,
    response: 14,
    responsePercent: 70,
  },
  {
    serialNum: 7,
    drugName: "Ach",
    drugConc: 10,
    drugDose: 0.64,
    logDose: -0.2,
    response: 16,
    responsePercent: 80,
  },
  {
    serialNum: 8,
    drugName: "Ach",
    drugConc: 100,
    drugDose: 0.128,
    logDose: -0.9,
    response: 17,
    responsePercent: 85,
  },
  {
    serialNum: 9,
    drugName: "Ach",
    drugConc: 100,
    drugDose: 0.256,
    logDose: -0.6,
    response: 20,
    responsePercent: 100,
  },
  {
    serialNum: 10,
    drugName: "Ach",
    drugConc: 100,
    drugDose: 0.512,
    logDose: -0.3,
    response: 12,
    responsePercent: 60,
  },
];

function Table() {
  return (
    <div className="table py-10" style={{'overflowX': 'auto'}}>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Drug Name</th>
            <th>Drug Concentration (µg/mL)</th>
            <th>Drug Dose (mL)</th>
            <th>Log Dose</th>
            <th>Response (mm)</th>
            <th>Response %</th>
          </tr>
        </thead>
        {data.map((val, key) => {
          return (
            <tbody>
              <tr key={key}>
              <td>{val.serialNum}</td>
              <td>{val.drugName}</td>
              <td>{val.drugConc}</td>
              <td>{val.drugDose}</td>
              <td>{val.logDose}</td>
              <td>{val.response}</td>
              <td>{val.responsePercent}</td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default Table;
