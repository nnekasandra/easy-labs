import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecordFields from "./RecordFields";
import DynamicTable from "./DynamicTable";
const RecordTemplate = () =>{
    const [data, setData] = useState(null);
    const [setLoading] = useState(true);
    const [setError] = useState(null);
    const { id } = useParams();
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const [experimentCreated] = useState(false);
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

    return(
        <section>
      <h2>Experiment 1 Template</h2>
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
      </div>
    </section>
    );
}
export default RecordTemplate