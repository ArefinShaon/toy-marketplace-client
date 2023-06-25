import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch category data for the selected tab
    const fetchCategoryData = async () => {
      try {
        const category = getCategoryByTabIndex(activeTab);
        const response = await fetch(
          `https://toy-server-gold.vercel.app/addtoys?category=${category}`
        );
        const data = await response.json();
        setCategoryData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching category data:", error);
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchCategoryData();
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getCategoryByTabIndex = (index) => {
    switch (index) {
      case 0:
        return "Avengers";
      case 1:
        return "Transformers";
      case 2:
        return "Marvel";
      default:
        return "";
    }
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="m-6 lg:mt-20">
      <h1 className="text-2xl lg:text-5xl text-cyan-500 font-bold text-center hover:text-slate-900">
        You Will ❤️ This
      </h1>
      <p  className="mx-auto text-center my-6 text-slate-400">We’ve picked few pieces we’re pretty sure you’ll love.
Check back often and enjoy.</p>
      <div className="mt-6 p-4">
        <div className="bg-cyan-50">
          <div className="tab-list flex align-top justify-center">
            <button
              className={`tab btn btn-outline bg-cyan-200 mr-2  p-2 ${
                activeTab === 0 ? "active" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              Avengers
            </button>
            <button
              className={`tab btn btn-outline bg-cyan-200 mr-2 p-2 ${
                activeTab === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              Transformers
            </button>
            <button
              className={`tab btn btn-outline bg-cyan-200 p-2 ${
                activeTab === 2 ? "active" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              Marvel
            </button>
          </div>
          <div className="tab-content mt-4">
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <div className="loader" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryData.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <img
                      src={item.pictureUrl}
                      alt={item.name}
                      className="w-64 h-64 object-cover rounded-2xl"
                    />
                    <h3 className="text-xl text-center py-2 font-semibold text-cyan-600 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-cyan-700 font-bold text-center  py-2 mb-2">
                      Price: {item.price} $
                    </p>
                    <div className="flex justify-center gap-8">
                      <div className="flex justify-normal items-center mb-2">
                        <span className="text-yellow-500 text-xl  hover:text-cyan-500 font-bold">
                          Ratings: {item.rating}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-yellow-500  hover:text-cyan-500 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1.222l2.822 5.682 6.322.92-4.577 4.48 1.084 6.315L10 15.789l-5.651 2.831 1.084-6.315L.858 7.824l6.322-.92L10 1.222zm0 2.23l-1.919 3.873-4.3.626 3.118 3.06-.737 4.296L10 13.802l3.737 1.956-.737-4.296 3.118-3.06-4.3-.625L10 3.453z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <Link
                        to={`/detail/${item._id}`}
                        className="btn btn-outline bg-cyan-200"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
