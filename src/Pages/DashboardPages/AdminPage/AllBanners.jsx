import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const AllBanners = () => {

    const [banners, setBanners] = useState([]);


    // eslint-disable-next-line no-unused-vars
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['bannerData'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/banner`)
            // console.log(data)
            setBanners(data)
            return data
        }
    })
    console.log(banners)



    const toggleBannerStatus = async (banner) => {
        try {

            const newStatus = !banner.isActive;
            console.log(newStatus)
            const response = await axios.patch(`http://localhost:5000/banners/${banner._id}`, {
                isActive: newStatus,
            });

            console.log(response.data);
            if (response.data.modifiedCount > 0) {
                setBanners(banners.map(b =>
                    b._id === banner._id ? { ...b, isActive: newStatus } : b
                ));
            }
        } catch (error) {
            console.error('Error updating banner status:', error);
        }
    };


    return (
        <div className="lg:w-[900px] mx-auto">
            <div>
                <div>
                    <div className="flex justify-evenly">
                        <h2 className="text-3xl"> All Banner</h2>

                    </div>
                    <div className="container mx-auto">
                        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                            <div className="overflow-x-auto inline-block min-w-full shadow rounded-lg overflow-hidden ">
                                <table className="table min-w-full leading-normal">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Title</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        {
                                            banners.map((banner, idx) => <tr key={banner._id}>
                                                <th>{idx + 1}</th>
                                                <td>{banner.name}</td>

                                                <td>
                                                    {banner.title}
                                                </td>
                                                <td>
                                                    {banner.couponName}
                                                </td>
                                                <td>
                                                    {banner.couponRate}
                                                </td>
                                                <td>
                                                    <button className="btn"
                                                    style={{ color: banner.isActive ? 'green' : 'red' }}
                                                    onClick={() => toggleBannerStatus(banner)}>
                                                    {banner.isActive ? 'Active' : 'Inactive'}
                                                </button>
                                                </td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBanners;