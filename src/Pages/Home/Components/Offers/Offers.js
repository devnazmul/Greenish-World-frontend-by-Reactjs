import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../Loading/LoadingAnimation";
import OfferingCard from "./OfferingCard";

const Offers = () => {
  const [services, setServices] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://evening-crag-72079.herokuapp.com/services").then((res) => {
      setServices(res.data.services);
      setIsLoading(false)
    });
  }, []);

  return (
    <div className="w-full px-5 bg-gray-100 pt-20">
      <h1 className="text-3xl text-center text-gray-900 md:text-4xl font-bold mb-20 px-10">
        We Are <span className='text-textPrimary'>Offering</span> You
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className={`flex flex-wrap -m-4`}>
          {!isLoading ? ( services.length === 0 ? <div className='flex justify-center items-center text-gray-800 text-5xl'>No Data Found</div> :
              services?.map((service) => (
                <OfferingCard key={service._id} service={service} />
              ))
            ) : (
              <LoadingAnimation />
            )}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Offers;
