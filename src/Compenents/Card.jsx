import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover }) => {
  return (
    <div
      className={` hover:bg-purple-500 min-h-[30rem] ${width} bg-zinc-800 p-2 rounded-xl flex flex-col justify-between `}
    >
      <div className="w-full">
        <div className="w-full flex justify-between">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>

        <h1 className="text-3xl font-medium mt-5">Whatever heading,</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none ">
              Start a Porject
            </h1>
            <button className="rounded-full py-2 px-5 mt-5 border-[1px] border-zinc-50 ">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
