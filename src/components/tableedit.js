import "./styles.css";
export const Results = () => {
  const values = [
    {
      serialNum: 1,
      drugName: "Acetylcholine",
      drugConc: 1,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 2,
      drugName: "Acetylcholine",
      drugConc: 1,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 3,
      drugName: "Acetylcholine",
      drugConc: 1,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 4,
      drugName: "Acetylcholine",
      drugConc: 1,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 5,
      drugName: "Acetylcholine",
      drugConc: 10,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 6,
      drugName: "Acetylcholine",
      drugConc: 10,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 7,
      drugName: "Acetylcholine",
      drugConc: 10,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 8,
      drugName: "Acetylcholine",
      drugConc: 100,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 9,
      drugName: "Acetylcholine",
      drugConc: 100,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
    {
      serialNum: 10,
      drugName: "Acetylcholine",
      drugConc: 100,
      drugDose: <input type="number" className="dose" name="dose" />,
      logDose: <input type="number" className="logdose" name="logdose" />,
      response: <input type="number" className="response" name="response" />,
      responsePercent: <input type="number" className="responsep" name="responsep" />
    },
  ];
  return (
    <div className="table py-10"  style={{'overflow-x': 'auto'}}>
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
        {values.map((elem, index)=>{
          return(
            <tr index={index}>
              <td>{elem.serialNum}</td>
              <td>{elem.drugName}</td>
              <td>{elem.drugConc}</td>
              <td>{elem.drugDose}</td>
              <td>{elem.logDose}</td>
              <td>{elem.response}</td>
              <td>{elem.responsePercent}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};