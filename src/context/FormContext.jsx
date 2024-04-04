import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <FormContext.Provider
      value={{page, setPage }}
    >
      {children}
    </FormContext.Provider>
  );
};
