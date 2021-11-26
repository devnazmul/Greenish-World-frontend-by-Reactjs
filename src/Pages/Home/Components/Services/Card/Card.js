import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { _id, plantName, imageUrl, description, price, rating } =
    props.plant; 
    const numberOfCards = props.numberOfCards;
  return (
    <div className={`p-4 ${numberOfCards === 6 ? (`md:w-1/2 lg:w-1/3`) : (`md:w-1/2 lg:w-1/4`)}`}>
      <div className="Card h-full transition duration-500 ease-in-out hover:shadow-xl rounded-xl overflow-hidden">
        <div className="relative">
          <img
            className="lg:h-48 md:h-36 w-full object-contain object-center rounded-lg"
            src={imageUrl}
            alt="blog"
          />
          <span className="absolute text-xl top-0 right-0 flex p-3 font-semibold text-gray-900 items-center justify-center">
            <MdOutlineStar className="text-yellow-500" /> {rating}
          </span>
        </div>
        <div className="p-6  text-left">
          <div className='flex justify-between flex-col'>
            <div>
              <h1 className="title-font text-2xl font-medium text-gray-400">
                {plantName}
              </h1>
            </div>

            <p className="flex items-center pb-7 text-sm">
              {description.slice(0,90)}... ...
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className=" text-2xl font-medium">
              <span className="text-textPrimary">$ </span>
              {price}
              <span className="font-normal text-xs">/pice</span>
            </p>

            <NavLink
              to={`/purchase/${_id}`}
              className="px-10 hover:bg-white border hover:border-borderPrimary hover:text-textPrimary py-1 rounded-full bg-bgPrimary text-white inline-flex items-center md:mb-2 lg:mb-0"
            >
              Book
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
