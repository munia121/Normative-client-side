/* eslint-disable react/no-unescaped-entities */
import img from '../assets/image5.jpg'
const Feature1 = () => {
    return (
        <div>
            <div className='text-center mb-28 mt-20 chef bg-no-repeat bg-cover rounded-lg w-full container mx-auto py-32' style={{
                    backgroundImage: `url(${img}) `,
                }}>
                <div className='bg-white bg-opacity-30 md:w-[1096px] space-y-4 mx-auto py-20 px-5'>
                    <p className='text-5xl'>QUESTIONS?</p>
                    <p className='md:w-[762px] mx-auto'>We value open communication and are dedicated to addressing the needs and concerns of our community. If you have any questions, need advice, or want to discuss a specific issue, don’t hesitate to reach out to us.</p>
                    <button className="btn   btn-outline border-0 border-b-4 font-bold">Let's talk now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature1;