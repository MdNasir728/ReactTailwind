import React, { useContext, useEffect, useState } from "react";
import InputWrapper from "../components/InputWrapper";
import Button from "../components/Button";
import { data } from "../constants/data";
import { FormContext } from "../context/FormContext";
import InviteSent from "./InviteSent";
import Question from "./Question";
import EndPage from "./EndPage";

const Home = () => {
  const [btnText, setBtnText] = useState("Next");
  const { page } = useContext(FormContext);

  useEffect(() => {
    page == 1 ? setBtnText("Continue →"): setBtnText('Next →')
  }, [page]);

  if (page == 2) {
    return <InviteSent />;
  }
  if (page == 7) {
    return <EndPage />;
  }

  return (
    <div className="md:max-w-[60%] w-full max-md:px-4 mx-auto pt-8 flex flex-col gap-8">
      {data
        .filter((item) => item.page === page)
        .map((item) =>
          item.options ? (
            <div key={item.quiz}>
              <Question quiz={item.quiz} option={item.options} />
            </div>
          ) : (
            <div key={item.quiz}>
              <InputWrapper
                title={item.quiz}
                subTitle={item.subTitle}
                placeholder={item.placeholder}
              />
            </div>
          )
        )}
      <Button text={btnText} />
    </div>
  );
};

export default Home;
