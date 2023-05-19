import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/AAAI36AABI670-1_1600x.jpg";
import image2 from "../../assets/AAAI36AABI674-1_1600x.jpg";
import image3 from "../../assets/AAAI79AABI671-1_1600x.jpeg";
import image4 from "../../assets/AAAI7AABI675-1_1600x.jpg";
import image5 from "../../assets/AAAM79AABI626-1_2000x.jpg";
import image6 from "../../assets/AABY367AABI616-1_2000x.jpg";
import image7 from "../../assets/AAGE384AABI650-1_1600x.jpg";
import image8 from "../../assets/AAEI40AABI628-1_bb820b0e-9307-4f0e-9702-e3118470e2cb_2000x.jpg";
import image9 from "../../assets/AAGE363AABI666-1_1600x.jpeg";
import image10 from "../../assets/AAGE363AABI667-5_1600x.jpeg";

const GallerySection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
    //   carouselRef.current.next();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
      <div className=" p-4 bg-cyan-50 rounded-xl">
          <p className="text-2xl lg:text-5xl font-bold text-cyan-600 text-center m-4 p-4">TOY GALLERY</p>
      <Carousel
        ref={carouselRef}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={23}
        itemClass="carousel-item-padding-40-px"
        interval={2000}
        stopOnHover={false}
        
      >
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image3} alt="Image 3" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image4} alt="Image 4" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image5} alt="Image 5" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image6} alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image7} alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image8} alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image9} alt="Image 6" />
        </div>
        <div className="border border-cyan-500 p-6 rounded-xl ">
          <img src={image10} alt="Image 6" />
        </div>
      </Carousel>
    </div>
  );
};

export default GallerySection;
