import React from "react";

const InputWrapper = ({ title, subTitle, placeholder }) => {
  return (
    <div>
      <h4 className="font-bold text-lg text-slate-700 mb-4">
        {title} <span className="text-red-600">*</span>
      </h4>
      <p className="font-medium italic text-sm text-gray-400 my-2">
        {subTitle}
      </p>
      <input
        className="border-2 border-gray-500 rounded-md shadow-sm shadow-gray-500 px-2 py-[3px] outline-none placeholder:text-sm w-[20rem]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWrapper;
