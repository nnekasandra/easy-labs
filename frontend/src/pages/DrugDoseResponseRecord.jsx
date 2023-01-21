import React, { useEffect, useState } from "react";
import RecordFields from "../components/RecordFields";
// import DynamicTable from "../components/DynamicTable";
import DynamicTable from "../components/Dynamic";
const DrugDoseResponseRecord = ({id}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/experiment/${id}`);
        console.log(response)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();
        console.log(data);
        setData(data);
        console.log(setData(data))
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
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
