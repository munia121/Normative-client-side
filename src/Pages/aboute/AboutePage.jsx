import img from '../../assets/img1.jpg'
import AboutFeature from './AboutFeature';


const AboutePage = () => {
    return (
        <div>
            <div
                className='w-full bg-center pb-20  bg-cover lg:h-[36rem]'
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className=' '>
                    
                        <div>
                            <div className="md:w-4/12 lg:pt-44 mx-auto text-center">
                                <p className="text-yellow-600 mb-2">--- some text here---</p>
                                <h2 className="text-3xl uppercase border-y-4 font-bold py-4">About us</h2>
                            </div>
                        </div>

                    
                </div>
            </div>

            <div className='container mx-auto'>
                <div>
                    <p className='text-3xl text-center pt-20'>At The Normative</p>
                    <p className='lg:w-[700px] text-center text-xl mx-auto '> we are dedicated to nurturing the minds and spirits of the Gen Z and Alpha generations.</p>
                </div>

                <AboutFeature></AboutFeature>
                <div className='border-[#e4b2bc] space-y-5 mb-28 border rounded-md bg-[linear-gradient(180deg,_rgba(255,0,0,0.1)_0%,_rgba(255,0,0,0)_100%)] lg:py-44'>
                    <h2 className='text-center text-5xl'>Empowering Youth through Faith and Growth</h2>
                    <h2 className='lg:w-[800px] mx-auto text-center text-2xl'>The Normative is founded on the belief that integrating Islamic principles with modern needs creates a harmonious path for youth development. We embrace an ideology that values mental health, spiritual enrichment, and personal growth, while addressing contemporary issues with compassion and understanding. Our approach combines traditional wisdom with practical strategies to empower the next generation, helping them establish a balanced and modest normative that aligns with their faith and aspirations..</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutePage;