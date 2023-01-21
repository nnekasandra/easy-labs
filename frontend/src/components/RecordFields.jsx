const RecordFields = (props) => {
  return (
    <div className="grid gap-5">
      <h3 className="text-2xl font-bold mt-3">{props.heading}:</h3>
      <input
        type="text"
        className="border-2 text-lg rounded-lg block p-3 my-3 h-20"
        value={props.value}
      />
    </div>
  );
};
export default RecordFields;
