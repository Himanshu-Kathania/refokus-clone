import React from "react";
import Buttton from "./Buttton";

const Product = ({ val }) => {
  return (
    <div className="w-full py-20 text-white ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>

          <div className="flex gap-5 items-center">
            {val.live && <Buttton />}
            {val.case && <Buttton title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
