import icon from '../../assets/contact-image/11184961.png'
import icon1 from '../../assets/contact-image/7198180.png'
import icon2 from '../../assets/contact-image/10532049.png'
const AboutFeature = () => {
    return (
        <div className="mb-28">
            <div className="lg:flex lg:w-[1400px] gap-12 mx-auto mt-20  ">
                <div className='bg-[#FBB5630D] lg:w-[700px] border-[#FBB56333] rounded-2xl border px-10 py-16 space-y-3'>
                <img className='w-20' src={icon1} alt="" />
                    <h4 className='text-xl font-bold'>Our Mission</h4>
                    <p>Our mission is to create a supportive and empowering environment where young people can thrive. We strive to integrate Islamic values into every aspect of our work, offering resources and programs that enhance mental health, build skills, and promote spiritual well-being. Through our initiatives, we aim to guide youth in overcoming obstacles and developing a balanced, fulfilling life.</p>
                </div>
                <div className='bg-[#29CEF60D] lg:w-[700px] border-[#FBB56333] rounded-2xl border px-10 py-16 space-y-3'>
                <img className='w-20' src={icon2} alt="" />
                    <h4 className='text-xl font-bold'>Our Vision</h4>
                    <p>Our vision is to be a leading force in shaping a generation of well-rounded, resilient, and spiritually grounded young individuals. We envision a future where every young person has the tools and support they need to navigate life’s challenges and contribute positively to their communities, all while staying true to their Islamic values.</p>
                </div>

            </div>
            <div className="lg:w-[700px] mx-auto mt-10">
                <div className='bg-[#E944440D]  border-[#E9444433] rounded-2xl border px-10 py-16 space-y-3'>
                    <img className='w-20' src={icon} alt="" />
                    <h4 className='text-xl font-bold'>Our Value</h4>
                    <p>Our vision is to be a leading force in shaping a generation of well-rounded, resilient, and spiritually grounded young individuals. We envision a future where every young person has the tools and support they need to navigate life’s challenges and contribute positively to their communities, all while staying true to their Islamic values.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutFeature;