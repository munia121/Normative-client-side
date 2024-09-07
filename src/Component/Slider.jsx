import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image5.jpg'
import image3 from '../assets/image6.webp'

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
            <div >
                <Swiper

                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper lg:h-[600px]"
                >
                    <SwiperSlide>
                        <div
                            className='w-full bg-center rounded-lg bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${image1})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>

                                        Welcome to Our Literary Haven
                                    </h1>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='w-full bg-center rounded-lg bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${image2})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>

                                        Welcome to Our Literary Haven
                                    </h1>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className='w-full bg-center rounded-lg bg-cover h-[38rem]'
                            style={{
                                backgroundImage: `url(${image3})`,
                            }}
                        >
                            <div className='flex items-center rounded-lg justify-center w-full h-full bg-gray-900/70'>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>

                                        Welcome to Our Literary Haven
                                    </h1>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="" cy="" r=""></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;