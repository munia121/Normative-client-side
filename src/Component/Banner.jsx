import image1 from '../assets/mosque.avif'
import 'animate.css';

const Banner = () => {
    return (
        <div>
            <div
                className='w-full bg-center  bg-cover lg:h-[44rem]'
                style={{
                    backgroundImage: `url(${image1})`,
                }}
            >
                <div className='flex items-center  justify-center w-full h-full bg-gray-900/30'>
                    <div className='text-center'>
                        <h1 data-aos="zoom-in" data-aos-duration='4500' className='   text-3xl font-semibold text-white lg:text-4xl'>

                            Young Organisation
                        </h1>
                        <br />
                        <h3  className='text-white text-7xl font-bold '>The Normative</h3>
                        <p className='pt-2 text-white'>Accommodate Your Mind & Establish <br /> The Modest Normative</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;