import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-6 ">
      <div className="max-w-screen-xl py-10 flex gap-32 mx-auto">
        <div className="basis-1/2 ">
          <h1 className="text-[11rem] font-semibold leading-none tracking-tighter">
            refoukus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-600">Socials</h4>
            {["Instagram", "Twitter(x?)", "Linkedin"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize ">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3 ">
            <h4 className="mb-10 text-zinc-600">Socials</h4>
            {["Instagram", "Twitter(x?)", "Linkedin"].map((item, index) => (
              <a key={index} className="block mt-3 text-zinc-600 capitalize ">
                {item}
              </a>
            ))}
          </div>

          <div className="mt-8 ml-8">
            <p className="text-zinc-500 basis-1/2">
              Refokus is a pioneering digital agency drive by design and
              empowered by technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
