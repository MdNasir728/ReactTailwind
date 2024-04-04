import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] overflow-x-hidden bg-slate-100">
      <Header />
      <Home />
    </div>
  );
};

export default App;
