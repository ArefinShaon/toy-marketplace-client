import img1 from "../../assets/slider_02_v4_1.png";
import img2 from "../../assets/slider_01_v3_bf417f92-1b8f-4c2d-aad5-dfc606c855df_1.png";
import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full mt-22">
      <div id="slide1" className="carousel-item relative  w-full">
        <img src={img1} className="w-full" />
        <div className="absolute  flex items-center h-full left-0 top-0 ">
          <div className="text-center pl-20 lg:pl-48 py-4 w-full">
            <h2 className="lg:text-xl font-bold border bg-red-200 md:p-4">
              Big Discount!!
            </h2>
            <p className="lg:text-6xl text-black text-2xl lg:py-4 font-bold">
              Kids offer
            </p>
            <div>
              <button className="btn btn-outline btn-info hover:bg-cyan-200 mr-3">
                Buy Now <FaShoppingCart className="inline-block ms-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-cyan-200">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-cyan-200">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute  flex items-center h-full left-0 top-0 ">
          <div className="text-center pl-20 lg:pl-48 py-4 w-full">
            <h2 className="lg:text-xl font-bold border bg-red-200 md:p-4">
              Big Discount!!
            </h2>
            <p className="lg:text-6xl text-black text-2xl lg:py-4 font-bold">
              Kids offer
            </p>
            <div>
              <button className="btn btn-outline btn-info hover:bg-cyan-200 mr-3">
                Buy Now <FaShoppingCart className="inline-block ms-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-cyan-200">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-cyan-200">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
