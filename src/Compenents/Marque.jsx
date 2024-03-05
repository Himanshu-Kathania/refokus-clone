import { motion } from "framer-motion";
import React from "react";

const Marque = ({ imagesurl, direction }) => {
  return (
    <>
      <div className="flex w-full overflow-hidden">
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="text-white flex gap-20 py-10 flex-shrink-0 "
        >
          {imagesurl.map((url, index) => (
            <img key={index} className="w-[6vw] flex-shrink-0" src={url} />
          ))}
          {imagesurl.map((url, index) => (
            <img key={index} className="w-[6vw] flex-shrink-0" src={url} />
          ))}
        </motion.div>

        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="text-white flex gap-20 py-10 flex-shrink-0 "
        >
          {imagesurl.map((url, index) => (
            <img key={index} className="w-[6vw] flex-shrink-0" src={url} />
          ))}
          {imagesurl.map((url, index) => (
            <img key={index} className="w-[6vw] flex-shrink-0" src={url} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Marque;
