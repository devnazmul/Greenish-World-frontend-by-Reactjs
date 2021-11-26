import React from "react";
import Header from "../../../Shared/Header/Header";

const Contact = () => {
  return (
    <>
    <Header/>
    <div id="contact" className="w-full text-gray-100 body-font relative">
      <div className="w-full px-5 py-5 md:px-52 md:py-24 mx-auto flex">
        <div className="text-left text-white w-full bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-textPrimary text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 ">
            We will answer your any question.
          </p>
          <div className='flex justify-between'>
          <div className="relative mb-4 mr-1 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              First Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-gray-900 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="ml-1 relative mb-4 w-1/2">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              Last Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-gray-900 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-900 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-900 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;
