import image from '../../assets/image6.webp'
import icon1 from '../../assets/contact-image/phone.png'
import icon2 from '../../assets/contact-image/map.png'
import icon3 from '../../assets/contact-image/email.png'

import photo1 from '../../assets/contact-image/Normative-.jpg'
import photo2 from '../../assets/contact-image/Sponsor-300x300.jpg'
import photo3 from '../../assets/contact-image/Team-Normative--1024x1024.jpg'
import photo4 from '../../assets/contact-image/the-normative.jpg'


const ContactUs = () => {
    return (
        <div>
            <div
                className='w-full bg-center  bg-cover lg:h-[36rem]'
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className='flex items-center  justify-center w-full h-full bg-gray-900/70'>
                    <div className='text-center'>
                        <h1 data-aos="zoom-in" data-aos-duration='4500' className='   text-3xl font-semibold text-white lg:text-4xl'>

                            Contact us
                        </h1>

                    </div>
                </div>
            </div>
            {/* ***************** */}
            <div className='py-20'>
                <div className="md:w-4/12 my-8 mx-auto text-center">
                    <p className="text-yellow-600 mb-2">--- some text here---</p>
                    <h2 className="text-3xl uppercase border-y-4 py-4">Contact Us</h2>
                </div>
            </div>
            {/* ************* */}
            <section className=' mb-28'>
                <div className="mt-12 justify-center lg:flex gap-6 p-4">
                    <div className=" border rounded-lg ">
                        <div className="p-8 space-y-6">
                            <div className="lg:w-[375px] h-[216px] p-8 rounded-lg bg-[#BCED6D1A] space-y-5">
                                <img src={icon1} alt="" />
                                <p><span>Phone Number :</span>
                                    <br /> <span>(+62) 123-321-543</span>
                                </p>
                            </div>
                            <div className="lg:w-[375px] h-[216px] p-8 rounded-lg bg-[#FDDD5F1A] space-y-5">
                                <img src={icon3} alt="" />
                                <p><span>Email : </span>
                                    <br /> <span>normative@support.com</span>
                                </p>
                            </div>
                            <div className="lg:w-[375px] h-[216px] p-8 rounded-lg bg-[#629CF31A] space-y-5">
                                <img src={icon2} alt="" />
                                <p><span>Location : </span>
                                    <br /> <span>152/1 Dhaka,Bangladesh</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="lg:flex gap-6">
                                <div>
                                    <h1 className="text-lg font-bold mb-3">Your Name</h1>
                                    <input className="bg-[#13131808] w-full lg:w-[324px] h-[60px] px-4 rounded-lg" type="text"
                                        placeholder="Enter your full name" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold mb-3">Your Email</h1>
                                    <input className="bg-[#13131808] w-full lg:w-[324px] h-[60px] px-4 rounded-lg" type="text"
                                        placeholder="Enter your Email" />
                                </div>
                            </div>
                            <div className="lg:flex gap-6 mt-8">
                                <div>
                                    <h1 className="text-lg font-bold mb-3">Subject</h1>
                                    <input className="bg-[#13131808] w-full lg:w-[324px] h-[60px] px-4 rounded-lg" type="text"
                                        placeholder="Enter your subject" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold mb-3">Phone Number</h1>
                                    <input className="bg-[#13131808] w-full lg:w-[324px] h-[60px] px-4 rounded-lg" type="text"
                                        placeholder="Enter your number" />
                                </div>
                            </div>
                            <div className="text-lg font-bold mt-8 mb-3">
                                <h1>Message</h1>
                                <textarea className="border w-full lg:w-[672px] lg:h-[370px] rounded-lg bg-[#13131808]" name="" id="" cols=""
                                    rows=""></textarea>
                            </div>
                            <button
                                className="mt-6  btn w-full lg:w-[672px] bg-[#FDDD5F1A]  text-lg font-bold h-[56px] rounded-2xl">Send
                                Message</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* ********** */}
            <div
                className='w-full mb-28 bg-center bg-[#629CF31A]  bg-cover md:py-36'>

                <div className='flex  items-center  justify-center w-full h-full '>

                    <div className='space-y-10'>
                        <h2 className='flex justify-center text-3xl '>We are optimists who love to work together</h2>
                        <div className='grid lg:grid-cols-4 gap-10 grid-cols-1'>
                            <img className='md:w-[250px] h-[350px]' src={photo1} alt="" />
                            <img className='md:w-[250px] h-[350px]' src={photo2} alt="" />
                            <img className='md:w-[250px] h-[350px]' src={photo3} alt="" />
                            <img className='md:w-[250px] h-[350px]' src={photo4} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;