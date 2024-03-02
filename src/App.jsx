import React from "react";
import Nav from "./Compenents/Nav";
import Work from "./Compenents/Work";
import Stripes from "./Compenents/Stripes";

const App = () => {
  return (
    <div className=" w-full h-screen bg-[#161618] text-white font-['satoshi'] ">
      <Nav />
      <Work />
      <Stripes />
    </div>
  );
};

export default App;
