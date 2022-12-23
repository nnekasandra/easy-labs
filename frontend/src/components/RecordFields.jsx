import Button from "../components/Button";
const RecordFields = (props) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">{props.heading}</h3>
      <input
        type="text"
        className="border text-lg rounded-lg block py-3 my-3"
      />
      <div className="flex gap-5">
        <Button field="Add" />
        <Button field="Edit" />
        <Button field="Delete" />
      </div>
    </div>
  );
};
export default RecordFields;
