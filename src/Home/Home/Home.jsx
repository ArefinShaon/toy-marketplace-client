import ShopByCategory from "../../Pages/ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";




const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <GallerySection></GallerySection>
           <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;