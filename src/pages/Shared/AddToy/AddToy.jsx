import React from "react";

const AddToy = () => {
  const handleAddtoyForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const toyname = form.name.value;
    const sellername = form.seller.value;
    const subcategory = form.subcategory.value;

    // const toy={}
    console.log(photo, toyname, sellername, subcategory);
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
          />
        </div>
        <div className="block font-medium">
          <label>Name</label>
          <input
            type="name"
            name="name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Seller Name</label>
          <input
            type="sellername"
            name="seller"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label>Subcategory</label>
          <select name="subcategory" className="select select-bordered w-full">
            <option value="">Select a sub-category</option>
            <option value="princess">Princess</option>
            <option value="frozendolls">Frozen Dolls</option>
            <option value="animation">Animation</option>
          </select>
        </div>
        {/* <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div>
        <div>
          <label></label>
          <input />
        </div> */}
        <div>
          <input type="submit" className="btn btn-primary" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
