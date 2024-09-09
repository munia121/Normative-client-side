import axios from 'axios';
import image1 from '../assets/mosque.avif'
import 'animate.css';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {

    // eslint-disable-next-line no-unused-vars
    const { data: bannerData, isLoading, refetch } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/bannerDisplay`)
            // console.log(data)
            const filter = data.filter(banner => banner.isActive)
            return filter[0]
        }
    })

    console.log(bannerData)


    if (isLoading) return <p>Loading...</p>
    return (
        <div >
            <div
                className='w-full bg-center  bg-cover lg:h-[44rem]'
                style={{
                    backgroundImage: `url(${bannerData.photo})`,
                }}
            >
                <div className='flex items-center  justify-center w-full h-full bg-gray-900/30'>
                    <div className='text-center'>
                        <h1 data-aos="zoom-in" data-aos-duration='4500' className='   text-3xl font-semibold text-white lg:text-4xl'>

                            {bannerData.title}
                        </h1>
                        <br />
                        <h3  className='text-white text-7xl font-bold '>{bannerData.name}</h3>
                        <p className='pt-2 text-white'>{bannerData.description
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;