import image from '../assets/contact-image/the-normative.jpg'
const Feature3 = () => {
    return (
        <div>
            <div className='md:w-[1200px] lg:flex mx-auto mt-36 lg:mb-64'>
                <div className='md:w-[500px]  mx-auto'>
                    <h1 className='text-4xl'>At The Normative, we are dedicated to nurturing the minds and spirits of the Gen Z and Alpha generations.</h1>
                    <p className='md:mt-10'>As a forward-thinking youth organization, our focus is on accommodating the diverse needs of young people, promoting mental health, and fostering personal development through the principles of Islamic ideology. We are committed to providing support and guidance in areas such as mental well-being, psychological resilience, skill development, volunteerism, spiritual growth, and addressing contemporary challenges like gaming addiction, substance abuse, and relationship issues.</p>
                    <p className='mt-10 border w-44 py-3 border-black rounded-md text-center'>Find out more</p>
                </div>
                <div className='md:w-[400px]  mx-auto'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Feature3;