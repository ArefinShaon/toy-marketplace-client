import About from "../../Pages/About/About";
import AccordionComponent from "../../Pages/AccordionComponent/AccordionComponent";
import Extra from "../../Pages/Extra/Extra";
import ShopByCategory from "../../Pages/ShopByCategory/ShopByCategory";
import TestimonialSection from "../../Pages/TestimonialSection/TestimonialSection";
import useTitle from "../../hooks/useTitle";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";




const Home = () => {
    useTitle('Home')
    return (
        <div className="mt-12">
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <Extra></Extra>
            <AccordionComponent></AccordionComponent>
            <GallerySection></GallerySection>
            <TestimonialSection></TestimonialSection>
            <About></About>
        </div>
    );
};

export default Home;