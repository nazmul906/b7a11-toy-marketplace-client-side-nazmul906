import React from "react";

const Gallery = () => {
  return (
    <div>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Doll Toy Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co/tPgYLGp/9643310-R-SET.jpg"
                alt="Doll Image 1"
                className="w-full h-64 "
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Doll Toy 1</h3>
                <p className="text-gray-700">This is disney princess</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co/tPgYLGp/9643310-R-SET.jpg"
                alt="Doll Image 2"
                className="w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Doll Toy 2</h3>
                <p className="text-gray-700">
                  This is disney princess.Most Popular doll
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://i.ibb.co/2MfnnNp/89dd2bbe7fc57a0f6e555629a15e5904-aladdin-jasmine-princess-jasmine.jpg"
                alt="Doll Image 3"
                className="w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Doll Toy 3</h3>
                <p className="text-gray-700">Queen dolls.Most liked here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
