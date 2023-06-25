import img1 from "../../../src/assets/back-dark-blue-section.jpg";
import img2 from "../../../src/assets/back-school-kids.jpg";

const Extra = () => {
  return (
    <div className="py-12 bg-base-200 mt-12">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="relative text-center">
          <img className="w-full" src={img1} alt="" />
          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-8">
            <h1 className="text-white text-4xl font-bold mb-4 hover:text-pink-700">Toy Collection 💙</h1>
            <p className="text-white font-bold mb-8">
              We celebrate childhood by supporting babies, children, and families with thoughtful designs, quality materials and construction, and convenient shopping options.
            </p>
            <button className="btn btn-outline btn-info text-white font-bold hover:text-pink-700">Shop now</button>
          </div>
        </div>
        <div className="shadow-2xl bg-base-100">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Extra;
