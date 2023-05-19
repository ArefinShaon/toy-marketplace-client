import { useEffect, useState } from "react";
import ViewToys from "../ViewToys/ViewToys";

const AllToys = () => {
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addtoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toy data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div className="mt-24">
      <h2 className="text-2xl lg:text-5xl text-cyan-800 font-bold text-center m-6">
        All TOYS : <span className="text-cyan-500">{toys.length}</span>
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ViewToys key={toy._id} toy={toy}></ViewToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
