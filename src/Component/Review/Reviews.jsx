
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data)); 
    }, []);

    console.log(reviews);

    return (
        <div className='lg:mt-28 mb-28 container mx-auto'>
            <div>
                <div className="md:w-4/12 my-8 mx-auto text-center">
                    <p className="text-yellow-600 mb-2">--- What Our Client Say ---</p>
                    <h2 className="text-3xl uppercase border-y-4 py-4">Client Reviews</h2>
                </div>
            </div>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map(review => (
                        <SwiperSlide key={review._id}> {/* Make sure to use the correct key property */}
                            <div className="flex flex-col items-center my-16 mx-24">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-yellow-400">{review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;
