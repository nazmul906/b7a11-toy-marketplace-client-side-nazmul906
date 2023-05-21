import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddtoyForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyname = form.name.value;
    const sellername = user?.displayName;

    const email = user?.email;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    // const toy={}
    const toydata = {
      pictureURL: photo,
      name: toyname,
      sellerName: sellername,
      subcategory: subcategory,
      price: price,
      rating: rating,
      quantity: quantity,
      description: description,
      email: email,
    };
    console.log(toydata);

    // fetch("https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/addtoy", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(toydata),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    fetch(
      "https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/addtoy",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toydata),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("toy added successfully");
          reset.form();
        }
      });
  };
  return (
    <div>
      <h4>Add toy here</h4>
      <form className="space-y-6" onSubmit={handleAddtoyForm}>
        <div>
          <label>photo</label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="photo"
            required
          />
        </div>
        <div className="block font-medium">
          <label>Toy Name</label>
          <input
            type="name"
            name="name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="block font-medium">
          <label>Seller Name</label>
          <input
            type="name"
            name="sname"
            defaultValue={user?.displayName}
            className="input input-bordered w-full"
          />
        </div>
        <div className="block font-medium">
          <label>email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label>Subcategory</label>
          <select
            name="subcategory"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a sub-category</option>
            <option value="princess">Princess</option>
            <option value="frozendolls">Frozen Dolls</option>
            <option value="animation">Animation</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input
            type="price"
            name="price"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="rating"
            name="rating"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label>Available quantity</label>
          <input
            type="quantity"
            name="quantity"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label>Detail description</label>
          <input
            type="description"
            name="description"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <input type="submit" className="btn btn-primary" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
