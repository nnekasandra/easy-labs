
// const DrugDoseResponseRecord = () =>{
//     return (
      // <section className="p-10">
      //   <h1 className="text-center text-3xl">
      //     Experiment to Determine the Dose-Response Curve in Drugs
      //   </h1>
      //   <div className="recordings">
      //     <div className="title">
      //       <RecordFields heading="Title" />
      //     </div>
      //     <div className="aim">
      //       <RecordFields heading="Aim" />
      //     </div>
      //     <div className="theory">
      //       <RecordFields heading="Theory" />
      //     </div>
      //     <div className="apparatus">
      //       <RecordFields heading="Apparatus" />
      //     </div>
      //     <div className="presentation">
      //       <RecordFields heading="Record Presentation" />
      //     </div>
      //     <div className="discussion">
      //       <RecordFields heading="Record Discussion" />
      //     </div>
      //     <div className="conclusion">
      //       <RecordFields heading="Conclusion" />
      //     </div>
      //     <div className="precaution">
      //       <RecordFields heading="precaution" />
      //     </div>
      //     <div className="addfield my-5 w-28 h-14 bg-light-blue p-3 text-xl border-0 rounded-sm hover:bg-blue hover:text-white transition">
      //       <button>Add Field</button>
      //     </div>
      //   </div>
      // </section>
//     );
// }
// export default DrugDoseResponseRecord;

import React, { useEffect, useState } from "react";
import RecordFields from "../components/RecordFields";
const DrugDoseResponseRecord = (id)=> {
  const [experiments, setExperiments] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `/experiment/${id}`
        );
        console.log(response)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let data = await response.json();
        console.log(data)
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
  }, []);  
  return (
    <section className="p-10">
      <h1 className="text-center text-3xl">
        Experiment to Determine the Dose-Response Curve in Drugs
      </h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data -  ${error}`}</div>
      )}
      <div className="recordings">
        <div className="title">
          <RecordFields heading="Title" />
        </div>
        <div className="aim">
          <RecordFields heading="Aim" />
        </div>
        <div className="theory">
          <RecordFields heading="Theory" />
        </div>
        <div className="apparatus">
          <RecordFields heading="Apparatus" />
        </div>
        <div className="presentation">
          <RecordFields heading="Record Presentation" />
        </div>
        <div className="discussion">
          <RecordFields heading="Record Discussion" />
        </div>
        <div className="conclusion">
          <RecordFields heading="Conclusion" />
        </div>
        <div className="precaution">
          <RecordFields heading="precaution" />
        </div>
        <div className="addfield my-5 w-28 h-14 bg-light-blue p-3 text-xl border-0 rounded-sm hover:bg-blue hover:text-white transition">
          <button>Add Field</button>
        </div>
      </div>
    </section>
  );
}
export default DrugDoseResponseRecord;