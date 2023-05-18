import React from "react";

const ToyCard = ({ toy }) => {
  console.log(toy);
  const { description, email, pictureURL } = toy;
  // {toy.description}
  //   {
  //     toy.map((item) => item.email);
  //   }
  //
  return (
    <div>
      <h3> {description}</h3>
      <img height="100px" width="150px" src={pictureURL}></img>
      <button>View Details</button>
    </div>
  );
};

export default ToyCard;
