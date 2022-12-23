import RecordFields from "../components/RecordFields";
const DrugDoseResponseRecord = () =>{
    return (
      <section className="p-10">
        <h1 className="text-center text-3xl">
          Experiment to Determine the Dose-Response Curve in Drugs
        </h1>
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