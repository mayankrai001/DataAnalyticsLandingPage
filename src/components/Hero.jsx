import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">Keep Growing With Mayank</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Growww with Mayank
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast , Flexible , Financing for
          </p>
          <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#00df9a]"
            strings={["buyer to buyer", "buyer to customer", "SAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">Monitor your funds to increase your revenue</p>
        <button className="bg-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
