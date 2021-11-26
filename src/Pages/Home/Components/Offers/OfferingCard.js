import React from 'react';

const OfferingCard = (props) => {
    const { serviceName, icon, description } = props.service; 
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4 ">
            <div className="border border-borderPrimary p-6 rounded-lg shadow-2xl transition duration-300 hover:shadow-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
                <img src={`${icon}`} alt="" />
              </div>
              <h2 className="text-4xl text-textPrimary font-medium title-font mb-2">{serviceName}</h2>
              <p className="leading-relaxed text-gray-400 text-base">{description}</p>

            </div>
          </div>
    );
};

export default OfferingCard;