import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import image from "../../../assets/contact-image/"

const AddBanner = () => {
    const navigate = useNavigate()

    const { mutateAsync } = useMutation({
        mutationFn: async (addBanner) => {
            const { data } = await axios.post(`http://localhost:5000/addBanner`, addBanner)
            return data
        },
        onSuccess: () => {
            console.log('data saved successfully')
            toast.success('Banner data added successfully')
            navigate('allbanner')

        }

    })



    const handlerBanner = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const title = form.title.value;
        const couponName = form.couponName.value
        const couponRate = parseInt(form.couponRate.value);
        const description = form.description.value;
        const photo = form.photo.value;
        const isActive = false

        const addBanner = { name, title, couponName, couponRate, description, photo, isActive }
        console.log(addBanner)

        try {
            mutateAsync(addBanner)

        }
        catch (err) {
            console.log(err)
        }


    }
    return (
        <div>
            <div className=' '>
                <div>
                    <div className="md:w-4/12 mb-5 mx-auto text-center">
                        <p className="text-yellow-600 ">--- some text here---</p>
                        <h2 className="text-3xl uppercase border-y-4 font-bold py-4">ADD A BANNER</h2>
                    </div>
                </div>
            </div>
            <div className="border-[#e4b2bc] border rounded-lg w-full  bg-center  bg-cover lg:h-[44rem] bg-[linear-gradient(180deg,_rgba(255,0,0,0.1)_0%,_rgba(255,0,0,0)_100%)]"

            >
                <div className="lg:w-[800px] pt-20 mx-auto">
                    <div>
                        <div className=" p-2  rounded-lg" style={{
                            backgroundImage: `url()`,

                        }}>
                            {/* <h2 className="text-3xl font-extrabold text-center"> Add A Banner</h2> */}

                            <form onSubmit={handlerBanner} className=" p-5  border-[#f29c94] ">
                                {/* form name and quanity row */}
                                <div className="md:flex items-center justify-center mt-10 gap-16">
                                    <div className="md:w-1/2">
                                        <label className=" form-control ">
                                            <div className="label">
                                                <span className="label-text">Website Name</span>
                                            </div>
                                            <input type="text" name="name" placeholder="item name" className="input border-[#e4b2bc] shadow-xl input-bordered w-full " />
                                        </label>
                                    </div>
                                    <div className="md:w-1/2 ">
                                        <div>
                                            <label className=" form-control ">
                                                <div className="label">
                                                    <span className="label-text">Title</span>
                                                </div>
                                                <input type="text" name="title" placeholder="Title here" className="input border-[#e4b2bc] shadow-xl input-bordered w-full " />
                                            </label>
                                            {/* Display selected option */}
                                            {/* <p>You selected: {selectedOption}</p> */}
                                        </div>
                                    </div>
                                </div>
                                {/* form supplier row */}

                                {/* form category and details row */}
                                <div className="md:flex mt-10 gap-16">
                                    <div className="md:w-1/2">
                                        <label className=" form-control ">
                                            <div className="label">
                                                <span className="label-text"> Description</span>
                                            </div>
                                            <input type="text" name="description" placeholder="description" className="input border-[#e4b2bc]  shadow-xl input-bordered w-full " />
                                        </label>
                                    </div>
                                    <div className="md:w-1/2">
                                        <label className="form-control w-full ">
                                            <div className="label">
                                                <span className="label-text">Photo URL</span>
                                            </div>
                                            <input type="text" name="photo" placeholder="Photo URL" className="input border-[#e4b2bc] shadow-xl input-bordered w-full " />
                                        </label>
                                    </div>
                                </div>
                                {/* **************** */}

                                {/* ******************* */}

                                {/* ***** form photo url */}

                                <input type="submit" value="Add now" className="btn btn-block mt-8  bg-[linear-gradient(180deg,_rgba(255,0,0,0.1)_0%,_rgba(255,0,0,0)_100%)]  font-bold" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBanner;