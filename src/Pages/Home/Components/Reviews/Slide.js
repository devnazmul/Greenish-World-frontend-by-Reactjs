import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import LoadingAnimation from "../Loading/LoadingAnimation";
import axios from "axios";

const Slide = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} md:hidden`}
        style={{
          ...style,
          display: "block",
          background: "#0005",
          borderRadius: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#0005",
          borderRadius: "30px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          cssEase: "linear",
          arrows:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          cssEase: "linear",
          arrows:false,
        },
      },
    ],
  };

  const [userReviews, setUserReviews] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://evening-crag-72079.herokuapp.com/reviews").then((res) => {
      setUserReviews(res.data.reviews);
      setIsLoading(false)
    });
  }, []);

  return (
    <div className="w-full">
      <Slider {...settings}>
      {!isLoading ? ( userReviews.length === 0 ? <div className='flex justify-center items-center text-gray-800 text-5xl'>No Data Found</div> :
              userReviews?.slice(0).reverse().map((userReview) => (
                <ReviewCard key={userReview._id} userReview={userReview} />
              ))
            ) : (
              <LoadingAnimation />
            )}
      </Slider>
    </div>
  );
};

export default Slide;
