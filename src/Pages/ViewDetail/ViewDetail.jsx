import { useLoaderData } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const ViewDetail = () => {
  const details = useLoaderData();
  const { price, pictureUrl, name, sellerName, rating, quantity, sellerEmail, description } = details;
  useTitle('Detail')
  return (
    <div className="hero min-h-screen mt-16 py-6 bg-cyan-50">
      <div className="hero-content flex-col lg:flex-row lg:gap-4">
        <img src={pictureUrl} alt={name} className="w-full lg:w-96 rounded-lg border border-cyan-500 shadow-2xl" />
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl text-cyan-600 font-bold mb-6">{name}</h1>
          <p className="text-xl mb-6 font-semibold"> Description : <span className="text-cyan-600">{description}</span> </p>
          <div className="flex items-center mb-6">
            <p className="mr-2 font-bold">Price:</p>
            <p className="font-bold text-cyan-600">$ {price}</p>
          </div>
          {sellerName && (
            <div className="flex items-center mb-6">
              <p className="mr-2 font-bold">Seller:</p>
              <p> <span className="text-cyan-600">{sellerName}</span></p>
            </div>
          )}
          <div className="flex items-center mb-6">
            <p className="mr-2 font-bold">Rating:</p>
            <p> <span className="text-cyan-800">{rating}</span> <span className="font-bold text-cyan-600">Stars.</span></p>
          </div>
          <div className="flex items-center mb-6">
            <p className="mr-2 font-bold">Quantity:</p>
            <p className="text-cyan-600">{quantity}</p>
          </div>
          <div className="flex items-center mb-6">
            <p className="mr-2 font-bold">Seller Email:</p>
            <p> <span className="text-cyan-600">{sellerEmail}</span></p>
          </div>
          <button className="btn btn-outline bg-cyan-200">
            Buy Now <FaShoppingCart className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
