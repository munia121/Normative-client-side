import { Link } from "react-router-dom";

const DashboardHome = () => {
    return (
        <div>

            <div className="md:w-[1000px] mx-auto border-[] border rounded-lg md:mt-28 md:h-[600px] flex justify-center items-center bg-[linear-gradient(180deg,_rgba(255,0,0,0.1)_0%,_rgba(255,0,0,0)_100%)]">
                <div className="">
                    <h2 className="flex justify-center text-5xl font-bold">Welcome The normative</h2>
                    <p className="text-center  px-28 text-[#ee839a] font-bold text-xl pt-4"> Welcome to Normative! Here, we believe in the power of ideas to change the world. Our mission is to inspire and empower you with knowledge, resources, and a supportive community that shares your passion for [your field/industry]. Together, we can innovate, create, and bring about the change we wish to see. Dive in and discover new perspectives, tools, and connections that will help you shape a brighter future.</p>
                    <div className="flex justify-center mt-5 ">
                        <Link to={'/'}>
                            <button className="btn bg-[#ee839a]">Go Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;