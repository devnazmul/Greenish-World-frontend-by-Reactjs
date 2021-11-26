import React from "react";
import Slide from "./Slide";

const Reviews = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <h2 className="text-3xl text-center text-gray-800 md:text-4xl font-bold mb-5 px-10">
        Customer's thinkings about <span className="text-textPrimary"> Us</span>
      </h2>
        <div className={`flex flex-wrap`}>
          <Slide />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
