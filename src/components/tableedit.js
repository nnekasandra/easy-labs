import "./styles.css";
export const Results = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr className="">
            <th>S/N</th>
            <th>Drug Name</th>
            <th>Drug Concentration (µg/mL)</th>
            <th>Drug Dose (mL)</th>
            <th>Response (mm)</th>
            <th>Response %</th>
          </tr>
        </thead>
        <tr>
          <td>
            <input type={"text"} id="input" name="input" />
          </td>
          <td>
            <input type={"text"} id="input2" name="input" />
          </td>
          <td>
            <input type={"text"} id="input3" name="input" />
          </td>
          <td>
            <input type={"text"} id="input4" name="input" />
          </td>
          <td>
            <input type={"text"} id="input5" name="input" />
          </td>
          <td>
            <input type={"text"} id="input6" name="input" />
          </td>
        </tr>
      </table>
    </div>
  );
};
