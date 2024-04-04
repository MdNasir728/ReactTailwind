import React from "react";

const EndPage = () => {
  return (
    <div className="md:max-w-[60%] w-full max-md:px-4 mx-auto pt-8 flex flex-col gap-8">
      <p className="font-semibold text-2xl">
        <span className="text-red-400">thanks so much </span>
        for answering our questions. We hope to give you access to Amie soon.
      </p>
      <p className="font-semibold text-xl">
        follow us on
        <span className="text-red-400">twitter/X</span> :)
      </p>
      <div className="w-full h-[40vw] overflow-hidden bg-cover bg-no-repeat mb-12">
        <img  className='w-full h-full' src="src/assets/image.jpg" alt="" />
      </div>
    </div>
  );
};

export default EndPage;
