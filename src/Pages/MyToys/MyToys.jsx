import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import MyToysRow from "../MyToysRow/MyToysRow";
import swal from "sweetalert";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
 useTitle('My Toys')
  const url = `https://toy-server-gold.vercel.app/addtoys?email=${user?.email}&sort=${sortOrder}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [url]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleUpdate = (id, updatedData) => {
    fetch(`https://toy-server-gold.vercel.app/addtoys/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          swal("Success!", "Toy updated successfully.", "success");
          
          // Update the local state or fetch the updated data from the server
          setMyToys((prevMyToys) => {
            const updatedToys = prevMyToys.map((toy) => {
              if (toy._id === id) {
                return {
                  ...toy,
                  ...updatedData,
                };
              }
              return toy;
            });
            return updatedToys;
          });
        } else {
          swal("Error!", "Failed to update the toy.", "error");
        }
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
        swal("Error!", "Failed to update the toy.", "error");
      });
  };
  
  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`https://toy-server-gold.vercel.app/addtoys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining);
                }
            })
    }
}

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
        I Added : <span className="text-cyan-500">{myToys.length}</span> <span>Toys</span>
      </h2>
      <div className="text-center mb-4">
                <button className="btn btn-outline bg-cyan-200 mr-4" onClick={() => handleSort("asc")}>Price ↑</button>
        <button className="btn btn-outline bg-cyan-200"  onClick={() => handleSort("desc")}>Price ↓</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>DElete</th>
            <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Seller</th>
              <th>Update</th>
              
             
            </tr>
          </thead>
          <tbody>
            {/* Render the list of toys */}
            {myToys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
