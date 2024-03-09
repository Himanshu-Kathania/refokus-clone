import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import stvideo from "../../public/assets/1.webm";
import stvideo2 from "../../public/assets/2.webm";
import stvideo3 from "../../public/assets/3.mp4";
import stvideo4 from "../../public/assets/4.mp4";

const Products = () => {
  var products = [
    {
      title: "arqitel ",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },

    {
      title: "TTR ",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: true,
    },

    {
      title: "YIR 2022",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
    },

    {
      title: "Yahoo! ",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
  ];

  const [pos, setpos] = useState(0);

  const mover = (val) => {
    setpos(val * 23);
  };
  return (
    <div className="bg-[#161618] mt-36 relative ">
      {products.map((val, index) => (
        <Product key={index} mover={mover} val={val} count={index} />
      ))}

      <div className=" absolute w-full h-full top-0 pointer-events-none">
        <motion.div
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[45%] overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + "rem" }}
            className=" w-full h-full bg-sky-200"
          >
            <video autoPlay muted loop src={stvideo}></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + "rem" }}
            className=" w-full h-full bg-sky-300"
          >
            <video autoPlay muted op src={stvideo2}></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.64 }}
            animate={{ y: -pos + "rem" }}
            className=" w-full h-full bg-sky-400"
          >
            {" "}
            <video autoPlay muted op src={stvideo3}></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
            animate={{ y: -pos + "rem" }}
            className=" w-full h-full bg-sky-500"
          >
            <video autoPlay muted loop src={stvideo4}></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
