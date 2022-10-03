import React from "react";

const FormInput = ({ label, type, name, handleChange, value, formDetails, disabled }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="text-sm text-gray-800 mb-2 inline-block">{label}</label>
      <input
        className="text-black input input-bordered input-primary focus:outline-offset-0 focus:outline-1 disabled:bg-[#ececec] disabled:text-black"
        type={type}
        name={name}
        onChange={handleChange}
        value={value ? value : formDetails[name]}
        disabled={disabled}
      />
    </div>
  );
};

export default FormInput;
