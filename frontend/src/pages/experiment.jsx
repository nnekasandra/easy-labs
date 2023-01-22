// const DrugDoseResponseRecord = ({id}) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [ experimentCreated, setExperimentCreated ] = useState(false)
//   const [ experiment_id, setExperiment_id ] = useState(undefined)
//   // State for Experiment 

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await fetch(`/experiment/${id}`);
//         console.log(response);
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         const data = await response.json();
//         setData(data);
//         setError(null);

//         if(!experimentCreated){
//         const res = await fetch("/experiment", {
//           method: "POST",
//           headers: { "Content-type": "application/json" },
//           body: JSON.stringify(data),
//         });
//         const response_body = await res.json()
//         setExperiment_id(response_body.experiment_id)
//         setExperimentCreated(true)
//         }

//         } catch (error) {
//             setError(error.message);
//             setData(null);
//         } finally {
//             setLoading(false);
//         }
//     };
//     getData();
//     }, [id, experimentCreated]);

//    const handleSubmit = async ()=>{
//       const newData = {...data}; //Modify newData as needed 
//       await fetch(`/experiment/edit/${experiment_id}`, {
//           method: "PATCH",
//           headers: { "Content-type": "application/json" },
//           body: JSON.stringify(newData),
//         });
//     }
// }





const DrugDoseResponseRecord = ({id}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/experiment/${id}`);
        console.log(response);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const data = await response.json();

        await fetch("/experiment", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        });

        console.log(data);
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
  }, [id]);}