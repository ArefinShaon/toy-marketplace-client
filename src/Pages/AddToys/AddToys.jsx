import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import img1 from "../../assets/gettyimages-878844026-612x612.jpg";

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission and perform necessary actions
    // Retrieve form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Access the form data
    const pictureUrl = data.pictureUrl;
    const name = data.name;
    const sellerName = data.sellerName;
    const sellerEmail = data.sellerEmail;
    const subCategory = data.subCategory;
    const price = parseFloat(data.price);
    const rating = parseFloat(data.rating);
    const quantity = parseInt(data.quantity);
    const description = data.description;

    const addToy = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(addToy);
    fetch("http://localhost:5000/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
    event.target.reset();
  };

  return (
    <div className="md:flex mt-20 mb-8">
      <div className="md:w-1/2">
        <img
          className="h-full w-full object-cover opacity-50"
          src={img1}
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 mx-auto md:mx-0 md:mt-0 mt-8 bg-cyan-50 p-8 text-center rounded shadow"
      >
        <h2 className="md:text-5xl font-semibold md:mb-6 text-center text-2xl p-6">
          <span className="text-primary">Add</span>{" "}
          <span className="text-sky-400">A Toy</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="pictureUrl" className="block font-medium">
              Picture URL of the toy
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              required
            />
          </div>
        </div>
        {user && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="sellerName" className="block font-medium">
                  Seller Name
                </label>
                <input
                  type="text"
                  id="sellerName"
                  name="sellerName"
                  className="input"
                  defaultValue={user.displayName}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label htmlFor="sellerEmail" className="block font-medium">
                  Seller Email
                </label>
                <input
                  type="email"
                  id="sellerEmail"
                  name="sellerEmail"
                  className="input"
                  defaultValue={user.email}
                  readOnly
                />
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="subCategory" className="block font-medium">
              Sub-category
            </label>
            <select
              id="subCategory"
              name="subCategory"
              className="input"
              required
            >
              <option value="">Select Sub-category</option>
              <option value="Avengers">Avengers</option>
              <option value="Marvel">Marvel</option>
              <option value="Transformers">Transformers</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="input"
              min="0"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="rating" className="block font-medium">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="input"
              min="0"
              max="5"
              required
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="quantity" className="block font-medium">
              Available quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="input"
              min="0"
              required
            />
          </div>
        </div>
        <div className="mb-4 text-center">
          <label htmlFor="description" className="block font-medium">
            Detail description
          </label>
          <textarea
            id="description"
            name="description"
            className="input w-full"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary bg-cyan-500 w-3/4 mx-auto"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
