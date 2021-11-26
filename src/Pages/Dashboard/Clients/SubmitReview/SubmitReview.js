import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const SubmitReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = (data) => {
      console.log(data);
      axios.post("https://evening-crag-72079.herokuapp.com/reviews", data).then((res) => {
        if (res.data.insertedId) {
          alert("Review Added Successfully.");
          reset();
        }
      });
   
    };
  
    return (
      <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center">
        <div className="bg-white w-full py-10 px-2 md:px-10 md:w-3/4 lg:w-1/2 mx-auto rounded-lg overflow-hidden">
          <h1 className="text-textPrimary text-center text-4xl font-medium mb-5">
            Add Review
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex items-center mb-5">
              <input
                {...register("userName", { required: true })}
                type="text"
                id="userName"
                name="userName"
                defaultValue={user.displayName}
                placeholder="User Name"
                className="flex-1 py-2 border-2 px-3 rounded-lg border-gray-400 focus:border-borderPrimary
                        text-gray-600 placeholder-gray-400
                        outline-none"
              />
            </div>
  
            <div className="flex items-center mb-5">
              {user.photoURL?(<input
                {...register("userProfile", { required: true })}
                type="text"
                id="userProfile"
                name="userProfile"
                defaultValue={user.photoURL}
                placeholder="Image Url"
                className="flex-1 hidden py-2 border-2 px-3 rounded-lg border-gray-400 focus:border-borderPrimary
                text-gray-600 placeholder-gray-400
                outline-none"
              />):(
                <input
                {...register("userProfile", { required: true })}
                type="text"
                id="userProfile"
                name="userProfile"
                defaultValue="https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                placeholder="Image Url"
                className="flex-1 hidden py-2 border-2 px-3 rounded-lg border-gray-400 focus:border-borderPrimary
                text-gray-600 placeholder-gray-400
                outline-none"
              />
              )}
              

            </div>
            <div className="flex items-center mb-5">
              <textarea
                {...register("userReview", { required: true })}
                type="text"
                id="userReview"
                name="userReview"
                placeholder="Review"
                className="flex-1 py-2 border-2 px-3 rounded-lg border-gray-400 focus:border-borderPrimary
                text-gray-600 placeholder-gray-400
                outline-none"
              />
            </div>
          <div className="flex items-start mb-5">
              <select
              {...register("rating", { required: true })}
              id='rating'
              name="rating"
              title='rating'
              className="flex-1 py-3 border-2 px-2 rounded-lg border-gray-400 focus:border-borderPrimary
                text-gray-600 placeholder-gray-400
                outline-none"
              >
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>
            
            <div className="text-right">
              <input
                className=" w-full cursor-pointer rounded-lg py-3 px-8 bg-bgPrimary text-white font-bold"
                type="submit"
                value="Add Review"
              />
            </div>
          </form>
        </div>
      </div>
    );
  
};

export default SubmitReview;