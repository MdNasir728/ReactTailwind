import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Button = ({ text, isBackBtn}) => {
  let {page, setPage} = useContext(FormContext)
  const clickHandler = () => {
    isBackBtn ? setPage(page--) : setPage(page++);
  };
  return (
    <div>
      <button
        onClick={clickHandler}
        className={`${
          isBackBtn
            ? "text-gray-500 text-sm"
            : "text-white font-bold text-md rounded-lg border-2 border-white bg-black shadow-lg py-1 px-4 hover:bg-zinc-800 duration-300"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
