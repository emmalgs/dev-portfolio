import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono">
          <span className="text-green-600">
            Hello there, I'm{" "}
          </span>
          Emma
        </h1>
        <p className="text-base sm:text-lg mb-6 lg:text-xl">Lorem ipsum git er done cmon give me some text and more thoughts and did you know that pythons have live births.</p>
        <div>
          <button className="font-mono px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-blue-500 border border-white hover:border-slate-800">
            Connect
          </button>
          <button className="font-mono px-6 py-3 w-full sm:w-fit rounded-full mt-2 bg-transparent hover:bg-slate-800 hover:text-white border border-white">
            Github
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center ml-4 mt-4 lg:mt-0">
        <div className="rounded-full bg-slate-200 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/keyboard.gif"
            alt="hero-image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={180}
            height={180}
          />
        </div>
      </div>
    </div>
  );
};
