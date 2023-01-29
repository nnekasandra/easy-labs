import React, { useEffect, useState } from "react";
import RecordFields from "../components/RecordFields";
import DynamicTable from "../components/DynamicTable";
const DrugDoseResponseRecord = ({id}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ experimentCreated, setExperimentCreated ] = useState(false)
  const [ experiment_id, setExperiment_id ] = useState(undefined)
  // const baseUrl = process.env.REACT_APP_API_BASE_URL;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/experiment/${id}`);

        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        setData(data);
        setError(null);

        if (!experimentCreated) {
          const res = await fetch(`/experiment`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
          });
          const response_body = await res.json();
          setExperiment_id(response_body.experiment_id);
          setExperimentCreated(true);
          console.log("experiment updated successfully");
        }
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id, experimentCreated]);

   const handleSubmit = async ()=>{
      const newData = {...data}; 
      await fetch(`/experiment/edit/${experiment_id}`, {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newData),
        });
    }

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
        <div className="result-table">
          <h3 className="text-2xl font-bold mt-3">Result Presentation:</h3>
          <DynamicTable />
        </div>
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
          <button>Add Field</button>
        </div>
      </div>
    </section>
  );
};
export default DrugDoseResponseRecord;
