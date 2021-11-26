import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import axios from "axios";
import LoadingAnimation from "../Loading/LoadingAnimation";
import Header from "../../../Shared/Header/Header";

const Plants = (props) => {
  const numberOfCards = props.numberOfCards;
  const [plants, setPlants] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://evening-crag-72079.herokuapp.com/plants").then((res) => {
      setPlants(res.data.plants);
      setIsLoading(false)
    });
  }, []);

  return (
    <>
    <Header />
    <div id="services" className="Services bg-gray-100 pt-32 pb-20">
      
      <h2 className="text-3xl text-center text-gray-800 md:text-4xl font-bold mb-5 px-10">
        Our Awesome Collection Of{" "}
        <span className="text-textPrimary"> Plants</span>
      </h2>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className={`flex flex-wrap -m-4`}>
          {!isLoading ? ( plants.length === 0 ? <div className='flex justify-center items-center text-gray-800 text-5xl'>No Data Found</div> :
              plants?.slice(0).reverse().slice(0,numberOfCards)?.map((plant) => (
                <Card numberOfCards={numberOfCards} key={plant._id} plant={plant} />
              ))
            ) : (
              <LoadingAnimation />
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Plants;
