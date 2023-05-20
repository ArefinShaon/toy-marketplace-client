
import img from "../../assets/slider_01_v3_bf417f92-1b8f-4c2d-aad5-dfc606c855df_1.png";
const AboutInfo = () => {
  return (
    <div>
      <div className="card w-full lg:w-3/4 lg:h-96 mx-auto bg-cyan-50 shadow-xl image-full m-24">
        <figure>
          <img src={img} alt="Shoes" className="w-full"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold text-cyan-500">
            About Us
          </h2>
          <p>
          At our toy store, we believe in the power of play. We strive to
            provide children with the best selection of toys that inspire
            creativity, encourage learning, and bring joy. Our team carefully
            curates a wide range of toys from trusted brands, ensuring safety
            and quality. We are dedicated to creating an enjoyable shopping experience for
            both children and parents. Whether you visit our physical store or
            shop online, our friendly staff is here to assist you in finding
            the perfect toy for your child. We value your satisfaction and aim
            to exceed your expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
