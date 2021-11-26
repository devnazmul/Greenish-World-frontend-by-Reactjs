import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Header from "../Shared/Header/Header";

const Purchase = () => {
  const { user } = useAuth();
  const { _id } = useParams();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const [plant, setPlant] = useState([]);
  useEffect(() => {
    axios
      .get(`https://evening-crag-72079.herokuapp.com/plant/${_id}`)
      .then((res) => {
        setPlant(res.data);
      });
  }, [_id]);

  const onSubmit = (data) => {
    axios
      .post("https://evening-crag-72079.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          history.push("/done_purchase");
        }
      });
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 py-32 px-5 md:px-10 h-auto">
        {plant.length !== 0 ? (
          <div className="lg:flex">
            <div className="text-black bg-gray-100 w-full body-font overflow-hidden rounded-lg shadow-xl">
              <div className="container p-5 mx-auto">
                <div className="mx-auto flex flex-col">
                  <img
                    alt="ecommerce"
                    className="w-2/5 self-center lg:h-auto h-64 object-cover object-center rounded"
                    src={plant.imageUrl}
                  />
                  <div className=" w-full p-5 text-left">
                    <h1 className="text-black text-5xl title-font font-medium mb-1 flex items-center justify-between">
                      {plant.plantName}
                      <span className="title-font font-medium text-2xl text-black">
                        <span className="text-textPrimary">$</span>{" "}
                        {plant.price}
                      </span>
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="mb-1 w-4 h-4 text-yellow-400"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                        <span className="ml-1">{plant.rating} Rating</span>
                      </span>
                    </div>
                    <p className="leading-relaxed">{plant.description}</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-10 lg:mt-0  flex justify-center items-start"
            >
              <div className="text-left md:w-2/3 text-black bg-gray-100 rounded-lg p-8 flex flex-col relative z-10  shadow-xl">
                <h2 className="text-textPrimary text-3xl mb-12 text-center font-medium title-font">
                  Place Order
                </h2>
                <div className="flex justify-between">
                  <div className="relative mb-4 mr-1 w-full ">
                    {user.photoURL ? (
                      <input
                        {...register("imgUrl", { required: true })}
                        className="hidden"
                        value={`${user.photoURL}`}
                        type="text"
                      />
                    ) : (
                      <input
                        {...register("imgUrl", { required: true })}
                        className="hidden"
                        value="https://i.ibb.co/fScLdY0/pic-1171831236-1.png"
                        type="text"
                      />
                    )}
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-500"
                    >
                      Your Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      defaultValue={`${user.displayName}`}
                      type="text"
                      required
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />

                    <input
                      {...register("procuctImage", { required: true })}
                      defaultValue={`${plant.imageUrl}`}
                      type="text"
                      required
                      id="procuctImage"
                      name="procuctImage"
                      className="hidden"
                    />
                    <input
                      {...register("procuctName", { required: true })}
                      defaultValue={`${plant.plantName}`}
                      type="text"
                      required
                      id="procuctName"
                      name="procuctName"
                      className="hidden"
                    />


                  </div>
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    required
                    defaultValue={user.email}
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-500"
                  >
                    Phone
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    required
                    placeholder="+880...."
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-500"
                  >
                    Address
                  </label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    required
                    placeholder="Your Address"
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="price"
                    className="leading-7 text-sm text-gray-500"
                  >
                    Price
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="text"
                    value={`${plant.price}`}
                    id="price"
                    name="price"
                    className="w-full bg-gray-100 rounded border border-borderPrimary focus:border-borderPrimary focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <input
                  {...register("status", { required: true })}
                  type="text"
                  defaultValue="pending"
                  id="status"
                  name="status"
                  className="hidden"
                />
                <input
                  type="submit"
                  defaultValue="Place Order"
                  className="cursor-pointer text-white bg-bgPrimary border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen w-full ">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-borderPrimary  h-64 w-64"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Purchase;
