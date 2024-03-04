import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Buttton = ({ title = "Get Started" }) => {
  return (
    <div className="max-w-40 px-5 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-center gap-3 ">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Buttton;
