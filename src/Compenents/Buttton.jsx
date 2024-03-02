import React from "react";
import { IoIosReturnRight } from "react-icons/io";
const Buttton = () => {
  return (
    <div className="min-w-40 px-5 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-center gap-3 ">
      <span className="text-sm font-medium">Start a Project</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Buttton;
