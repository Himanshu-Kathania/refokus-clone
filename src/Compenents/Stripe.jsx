import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] py-4 px-10 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex items-center justify-between ">
      <img key={val.index} src={val.url} />{" "}
      <span key={val.index} className="font-semibold">
        {val.number}
      </span>
    </div>
  );
};

export default Stripe;
