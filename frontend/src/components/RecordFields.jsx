import Button from "../components/Button";
const RecordFields = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <h3 className="text-2xl font-bold mt-3">{props.heading}:</h3>
      <input
        type="text"
        className="border-2 text-lg rounded-lg block py-3 my-3"
      />
    </div>
  );
};
export default RecordFields;
