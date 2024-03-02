import React from "react";
import Buttton from "./Buttton";

const Nav = () => {
  return (
    <div className="max-w-screen-xl p-3 mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700 ">
      <div className="nleft">
        <div className="links flex gap-14  ml-20">
          <img
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-800"></span>
            ) : (
              <a
                className="font-regular text-sm flex items-center gap-1"
                href=""
              >
                {index == 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <div className="nright">
        {" "}
        <Buttton />
      </div>
    </div>
  );
};

export default Nav;
