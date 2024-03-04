import React from "react";

const Marque = ({ imagesurl }) => {
  return (
    <div className="text-white flex gap-20 py-8 whitespace-nowrap overflow-hidden">
      {imagesurl.map((url) => (
        <img className="w-[6vw] flex-shrink-0" src={url} />
      ))}
      {imagesurl.map((url) => (
        <img className="w-[6vw] flex-shrink-0" src={url} />
      ))}
    </div>
  );
};

export default Marque;
