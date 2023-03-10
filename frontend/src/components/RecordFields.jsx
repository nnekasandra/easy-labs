import React, { useState, useEffect, forwardRef } from "react";

const RecordFields = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="grid gap-5">
      <h3 className="text-2xl font-bold mt-3">{props.heading}:</h3>
      <input
        type="text"
        ref={ref}
        className="border-2 text-lg rounded-lg block p-3 my-3 h-20"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
});

export default RecordFields;
