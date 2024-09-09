import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'

import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/proImg2.webp'
import { Link } from 'react-router-dom';
const BannerSlider = () => {
    return (
        <div>
            <Link to={'projects'}>
                <div>
                    <div className='lg:my-28 md:w-[1200px] mx-auto'>
                        <div>
                            <div className="md:w-4/12 my-8 mx-auto text-center">
                                <p className="text-yellow-600 mb-2">--- some text here---</p>
                                <h2 className="text-3xl uppercase border-y-4 py-4">Your Projects</h2>
                            </div>
                        </div>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper mt-28"
                        >
                            <SwiperSlide>
                                <img className='lg:w-[350px]' src={photo1} alt="" />
                                <h3 className='uppercase text-white text-center -mt-14'>Mindful Futures</h3>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='lg:w-[350px]' src={photo2} alt="" />
                                <h3 className=' uppercase text-white text-center -mt-14'>Healthy Minds, Healthy Lives</h3>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='lg:w-[350px]' src={photo3} alt="" />
                                <h3 className=' uppercase text-white text-center -mt-14'>Spiritual Pathways</h3>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='lg:w-[350px] h-[400px]' src={photo4} alt="" />
                                <h3 className=' uppercase text-white text-center -mt-14'>Youth Matters</h3>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BannerSlider;