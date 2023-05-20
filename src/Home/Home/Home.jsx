import About from "../../Pages/About/About";
import AccordionComponent from "../../Pages/AccordionComponent/AccordionComponent";
import ShopByCategory from "../../Pages/ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";




const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopByCategory></ShopByCategory>
            <AccordionComponent></AccordionComponent>
            <About></About>
        </div>
    );
};

export default Home;