import Banner from "../../Component/Banner";
import Feature1 from "../../Component/Feature1";
import Feature2 from "../../Component/Feature2";
import ProjectCards from "../../Component/OurProjects/ProjectCards";
import Reviews from "../../Component/Review/Reviews";

// import image from '../../assets/title.png'
const HomePage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <ProjectCards></ProjectCards>
            <Feature1></Feature1>
            <Feature2></Feature2>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;