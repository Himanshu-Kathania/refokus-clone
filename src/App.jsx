import React from "react";
import Nav from "./Compenents/Nav";
import Work from "./Compenents/Work";
import Stripes from "./Compenents/Stripes";
import Products from "./Compenents/Products";
import Maruees from "./Compenents/Maruees";
import Cards from "./Compenents/Cards";
import Footer from "./Compenents/Footer";

const App = () => {
  return (
    <>
      <div className=" w-full  bg-[#161618] text-white font-['satoshi'] ">
        <Nav />
        <Work />
        <Stripes />
        <Products />
        <Maruees />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
