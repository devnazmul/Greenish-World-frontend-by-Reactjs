import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = (props) => {
  const { userName, userProfile, userReview, rating } = props.userReview;
  return (
    <div className="border-2 border-borderPrimary w-auto bg-white shadow-lg rounded-lg my-20 p-5  mx-5">
      <div className="flex justify-center -mt-16 mb-5">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-borderPrimary shadow-lg"
          src={userProfile}
          alt=""
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{userName}</h2>
        <p className="mt-2 text-gray-600">{userReview.slice(0, 65)} ... ...</p>
      </div>
      <div className="flex justify-center mt-4">
        {rating === "1" && (
          <span className="flex text-xl text-yellow-500">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
        )}
        {rating === "2" && (
          <span className="flex text-xl text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
        )}
        {rating === "3" && (
          <span className="flex text-xl text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
        )}
        {rating === "4" && (
          <span className="flex text-xl text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </span>
        )}
        {rating === "5" && (
          <span className="flex text-xl text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
