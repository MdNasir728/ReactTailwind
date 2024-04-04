import React from "react";

const Option = ({ option, selected, ClickHandler }) => {
  return (
    <div className="my-2" onClick={ClickHandler}>
      <span
        id={option}
        className={`${
          selected == option ? "border-red-400 text-red-400" : "border-gray-400"
        } 
         border-2  py-1 px-2 rounded-lg shadow-lg text-sm font-medium cursor-pointer`}
      >
        {option}
      </span>
    </div>
  );
};

export default Option;
