import img from '../../assets/proImage.avif'
import image1 from '../../assets/photo1.png'
import image2 from '../../assets/photo2.png'
import image3 from '../../assets/photo3.png'
import image4 from '../../assets/proImg2.webp'
const OurProjects = () => {
    return (
        <div className=''>
            <div
                className='w-full bg-center  bg-cover lg:h-[36rem]'
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div className=' '>
                    <div>
                        <div className="md:w-6/12 lg:pt-44 mx-auto text-center">

                            <h2 className="text-3xl text-white uppercase font-bold py-4">Our Projects</h2>
                            <p className='text-white'>At our core, we believe in creating a positive impact through ethical practices and community engagement. We are committed to upholding the highest standards of integrity and professionalism, ensuring that every decision we make contributes to the greater good. Our goal is to foster a culture of respect, inclusivity, and continuous improvement, driving positive change for our clients, community, and the world.</p>
                        </div>
                    </div>

                    {/* ***** */}

                </div>

            </div>
            <div>
                <div className="md:w-4/12 py-20 mx-auto text-center">
                    <p className="text-yellow-600 mb-2">--- some text here---</p>
                    <h2 className="text-3xl  uppercase border-y-4 font-bold py-4">Our Projects</h2>
                </div>
            </div>

            {/* **** */}
            <section className='container mx-auto mb-20'>
                <div className=" grid lg:grid-cols-2 gap-5 mt-12 p-4 justify-center">
                    <div className="lg:flex  border p-5 rounded-xl gap-3">
                        <div className="">
                            <img className="lg:w-[250px] w-full object-cover lg:h-[172px] rounded-lg" src={image1} alt="" />
                        </div>
                        <div className="space-y-3 ">

                            <h1 className="text-xl font-extrabold">Mindful Futures: Mental Health Awareness Campaign</h1>
                            <p className="text-[#13131880]"><span className='font-bold'>Objective:</span> Promote mental health awareness among youth and provide tools for managing stress and anxiety.</p>
                            <p className="text-[#13131880]"><span className='font-bold'>Activities:</span>  Workshops, seminars, online resources, and peer support groups.</p>


                        </div>
                    </div>
                    <div className="lg:flex  border p-5 rounded-xl gap-3">
                        <div>
                            <img className="lg:w-[250px] w-full object-cover lg:h-[172px] rounded-lg" src={image2} alt="" />
                        </div>
                        <div className="space-y-3 ">

                            <h1 className="text-xl font-extrabold">Healthy Minds, Healthy Lives: Addressing Youth Challenges</h1>
                            <p className="text-[#13131880]"><span className='font-bold'>Objective:</span>  Provide support and resources to tackle common youth issues such as gaming addiction, substance abuse, and relationship difficulties.</p>
                            <p className="text-[#13131880]"><span className='font-bold'>Activities:</span>   Counseling services, educational workshops, and support groups.</p>


                        </div>
                    </div>
                    <div className="lg:flex  border p-5 rounded-xl gap-3">
                        <div>
                            <img className="lg:w-[250px] w-full object-cover lg:h-[172px] rounded-lg" src={image3} alt="" />
                        </div>
                        <div className="space-y-3 ">

                            <h1 className="text-xl font-extrabold">Spiritual Pathways: Islamic Values and Spiritual Growth Programs</h1>
                            <p className="text-[#13131880]"><span className='font-bold'>Objective:</span>
                                Foster spiritual development and a deeper understanding of Islamic teachings.</p>
                            <p className="text-[#13131880]"><span className='font-bold'>Activities:</span> Study circles, Quranic classes, and mentorship programs with religious scholars.</p>


                        </div>
                    </div>
                    <div className="lg:flex  border p-5 rounded-xl gap-3">
                        <div>
                            <img className="lg:w-[250px] w-full object-cover lg:h-[172px] rounded-lg" src={image4} alt="" />
                        </div>
                        <div className="space-y-3 ">

                            <h1 className="text-xl font-extrabold">Mindful Futures: Mental Health Awareness Campaign</h1>
                            <p className="text-[#13131880]"><span className='font-bold'>Objective:</span> Promote mental health awareness among youth and provide tools for managing stress and anxiety.</p>
                            <p className="text-[#13131880]"><span className='font-bold'>Activities:</span>  Workshops, seminars, online resources, and peer support groups.</p>


                        </div>
                    </div>

                </div>
                <div className='text-center mt-10'>
                    <button className="btn   btn-outline border-0 border-b-4 font-bold">See More</button>
                </div>
                {/* **** */}
                <div className=" mt-24">
                    <div className="lg:mt-6  text-center py-10 p-4 border-t-2  border-b-2">
                        <h1 className="lg:text-3xl text-lg font-extrabold ">Why The Normative</h1>
                        <p className="lg:w-[900px] mx-auto mt-6 font-medium text-[#13131899]">The Normative stands out because we combine Islamic values with practical support for today’s youth. Our programs address mental health, personal development, and spiritual growth while tackling contemporary issues like gaming addiction and relationship challenges. We offer a holistic approach, blending faith with modern solutions, in a supportive community that empowers you to thrive. Choose The Normative for guidance, growth, and a path to a balanced, fulfilling life.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurProjects;