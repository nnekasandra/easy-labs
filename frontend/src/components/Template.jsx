import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecordFields from "./RecordFields";
const Template = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [experimentCreated, setExperimentCreated] = useState(false);
  const { id } = useParams();
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();

  const titleRef = useRef();
  const aimRef = useRef();
  const theoryRef = useRef();
  const apparatusRef = useRef();
  const discussionRef = useRef();
  const conclusionRef = useRef();
  const precautionRef = useRef();

  const handleClick = () => {
     if (!id) {
       console.error("Error: Experiment ID is undefined");
       return;
     }
    const data = {
      experiment_structure_id: id,
      title: titleRef.current.value,
      aim: aimRef.current.value,
      theory: theoryRef.current.value,
      apparatus: apparatusRef.current.value,
      discussion: discussionRef.current.value,
      conclusion: conclusionRef.current.value,
      precaution: precautionRef.current.value,
    };
  
    return fetch(`/experiment/${data["experiment_structure_id"]}`, {
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
        navigate(`/experiments/${response.experiment_id}/record`);
        console.log(
          `Experiment successfully created at id ${response.experiment_id}`
        );
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

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
  }, [id]);
  return (
    <section className="p-10">
      <h1 className="text-center text-3xl">
        Experiment to Determine the Dose-Response Curve in Drugs
      </h1>
      <div className="recordings">
        <div className="title">
          <RecordFields ref={titleRef} heading="Title" value={data?.title} />
        </div>
        <div className="aim">
          <RecordFields ref={aimRef} heading="Aim" value={data?.aim} />
        </div>
        <div className="theory">
          <RecordFields ref={theoryRef} heading="Theory" value={data?.theory} />
        </div>
        <div className="apparatus">
          <RecordFields
            ref={apparatusRef}
            heading="Apparatus"
            value={data?.apparatus}
          />
        </div>
        <div className="discussion">
          <RecordFields
            ref={discussionRef}
            heading="Record Discussion"
            value={data?.result_discussion}
          />
        </div>
        <div className="conclusion">
          <RecordFields
            ref={conclusionRef}
            heading="Conclusion"
            value={data?.conclusion}
          />
        </div>
        <div className="precaution">
          <RecordFields
            ref={precautionRef}
            heading="precaution"
            value={data?.precautions}
          />
        </div>
        <div className="addfield my-5 w-28 h-14 bg-light-blue p-3 text-xl border-0 rounded-sm hover:bg-blue hover:text-white transition">
          <button onClick={handleClick}>CREATE</button>
        </div>
      </div>
    </section>
  );
};
export default Template;
