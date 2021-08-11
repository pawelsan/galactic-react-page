import React from "react";

const Checkbox = ({ terrain, index, onChange, checked }) => {
  return (
    <li>
      <input
        type="checkbox"
        id={index}
        name="terrain"
        value={terrain}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={index}>{terrain}</label>
    </li>
  );
};

export default Checkbox;
