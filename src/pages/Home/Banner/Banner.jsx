import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Website</h2>
            <p className="text-gray-600">
              This Website is a collection of various dolls from market.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded">
              Learn More
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src="https://i.ibb.co/VChKfSM/106057477-1572025837996barbie3.jpg"
              height="300px"
              weight="100px"
              alt="Banner Image"
              className="rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
