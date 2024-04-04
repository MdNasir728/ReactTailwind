import React, { useState } from "react";
import Option from "../components/Option";
import Button from "../components/Button";

const Question = ({ quiz, option }) => {
  const [selected, setSelected] = useState(null);

  const ClickHandler = (e) => {
    const clickedOption = e.target.id;
    setSelected(clickedOption);
  };
  return (
    <div className="w-full flex flex-col">
      <Button text="⬅ Back" isBackBtn="true" />
      <h4 className="font-bold text-lg text-slate-700 mb-4 mt-8">
        {quiz}
        <span className="text-red-600">*</span>
      </h4>
      {option.map((item) => (
        <Option
          option={item}
          key={item}
          selected={selected}
          ClickHandler={ClickHandler}
        />
      ))}
    </div>
  );
};

export default Question;
