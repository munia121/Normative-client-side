import Banner from "../../Component/Banner";
import BannerSlider from "../../Component/BannerSlider";
import Feature1 from "../../Component/Feature1";
import Feature2 from "../../Component/Feature2";
import Feature3 from "../../Component/Feature3";
import Reviews from "../../Component/Review/Reviews";

// import image from '../../assets/title.png'
const HomePage = () => {
    return (
        <div className="">
            <Banner></Banner>
            {/* <ProjectCards></ProjectCards> */}
            <BannerSlider></BannerSlider>
            <Feature2></Feature2>
            <Feature3></Feature3>
            <Reviews></Reviews>
            <Feature1></Feature1>
        </div>
    );
};

export default HomePage;