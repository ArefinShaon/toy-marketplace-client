


import img from "../../assets/starwars.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mt-2">
      <div className="hero min-h-screen bg-cyan-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="w-5/6 h-4/6 lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold p-8">About Us</h1>
            <p className="px-8 text-xl">
              Toy Man provide you the best toys.
            </p>
            <p className="px-8 py-2 text-xl">
            We are dedicated to creating an enjoyable shopping experience for
            both children and parents. Whether you visit our physical store or
            shop online, our friendly staff is here to assist you in finding
            the perfect toy for your child. We value your satisfaction and aim
            to exceed your expectations.
            </p>
            <Link className="btn bg-cyan-600 ms-8" to="/about">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
