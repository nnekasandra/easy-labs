import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecordFields from "./RecordFields";
import DynamicTable from "./DynamicTable";
const Template = () => {
  const [data, setData] = useState(null);
  const [setLoading] = useState(true);
  const [setError] = useState(null);
  const [experimentCreated] = useState(false);
  const { id } = useParams();
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  function handleClick() {
    fetch(`${baseUrl}/experiment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setError(null);
        setData(response);
        navigate(`/experiment/${response.experiment_id}/record`);
        console.log(`Experiment successfully created at id ${response.experiment_id}`);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${baseUrl}/experiment/${id}`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
      
    };
    getData();
  }, [id, experimentCreated]);
  return (
    <section className="p-10">
      <h1 className="text-center text-3xl">
        Experiment to Determine the Dose-Response Curve in Drugs
      </h1>
      <div className="recordings">
        <div className="title">
          <RecordFields heading="Title" value={data?.title} />
        </div>
        <div className="aim">
          <RecordFields heading="Aim" value={data?.aim} />
        </div>
        <div className="theory">
          <RecordFields heading="Theory" value={data?.theory} />
        </div>
        <div className="apparatus">
          <RecordFields heading="Apparatus" value={data?.apparatus} />
        </div>
        {/* <div className="result-table">
          <h3 className="text-2xl font-bold mt-3">Result Presentation:</h3>
          <DynamicTable />
        </div> */}
        <div className="discussion">
          <RecordFields
            heading="Record Discussion"
            value={data?.result_discussion}
          />
        </div>
        <div className="conclusion">
          <RecordFields heading="Conclusion" value={data?.conclusion} />
        </div>
        <div className="precaution">
          <RecordFields heading="precaution" value={data?.precautions} />
        </div>
        <div className="addfield my-5 w-28 h-14 bg-light-blue p-3 text-xl border-0 rounded-sm hover:bg-blue hover:text-white transition">
          <button onClick={handleClick}>CREATE</button>
        </div>
      </div>
    </section>
  );
};
export default Template;