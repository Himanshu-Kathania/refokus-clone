import React from "react";
import Product from "./Product";

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
  return (
    <div className="bg-[#161618] mt-36 ">
      {products.map((val, index) => (
        <Product val={val} />
      ))}
    </div>
  );
};

export default Products;
