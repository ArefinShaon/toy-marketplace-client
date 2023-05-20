


import img from "../../assets/slider_02_v4_1.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold p-8">About Us</h1>
            <p className="px-8 text-xl">
              BD Chefs provide you the Testy and Healthy foods
            </p>
            <p className="p-8 text-xl">
              We know how much your food and your family are considerable
              matters for you. Spacially when you are in a busy city with a busy
              schedule, in a corporate office, or a bachelor Hostel. BD Chefs...
            </p>
            <Link className="btn bg-pink-600 ms-8" to="/about">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
