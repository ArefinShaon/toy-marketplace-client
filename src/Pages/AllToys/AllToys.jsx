import  { useEffect, useState } from "react";
import ViewToys from "../ViewToys/ViewToys";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);
 useTitle('All Toys')
  useEffect(() => {
    fetch("https://toy-server-gold.vercel.app/addtoys")
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

  useEffect(() => {
    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredToys(filteredToys);
  }, [toys, searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

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
        We Have : <span className="text-cyan-500">{filteredToys.length}</span> <span>Toys</span>
      </h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by toy name"
          className="border border-cyan-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
            {filteredToys.map((toy) => (
              <ViewToys key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
