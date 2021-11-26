import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="Hero flex justify-center items-center relative  overflow-hidden">
      <div className="w-1/2 bg-bgPrimary h-screen pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-full z-10">
          <h1 className="titleSpeech text-textPrimary pb-0 font-black text-7xl lg:text-9xl z-10">
            Greenish World
          </h1>
          <p className='heroDes text-2xl lg:text-3xl pt-0 text-center'>Turn your space into a garden</p>
        </div>
      </div>
      <div className="MainImage absolute py-20 mt-16 px-5 lg:px-12">
        <img
          src="https://i.ibb.co/4tqWNgd/plant-png-levitating-levitate-everything-3-1.png"
          alt=""
        />
      </div>
      <div className="w-1/2 h-screen bg-white"></div>
    </div>
  );
};

export default Hero;
