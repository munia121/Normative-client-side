import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Component/Hooks/useAuth";
// import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";


const SignUp = () => {
    // eslint-disable-next-line no-unused-vars
    const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth()
    // const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY
    // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const navigate = useNavigate()

    const {mutateAsync} = useMutation({
        mutationFn: async (userData)=> {
            const {data} = await axios.post(`http://localhost:5000/users`, userData)
            return data
        }
    })




    const handleSubmit = async (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const phone = form.phone.value
        console.table(name, email, password, phone)
        console.log('name: ',name)
        // const image = form.image.files[0]

        // console.log(name, email, password)
        // console.log(image)

        // const formData = new FormData()
        // formData.append('image', image)


        try {
            setLoading(true)
            // 1. upload image get image url
            // const image_url = await axios.post(image_hosting_api, formData,{
            //     headers:{
            //         'Content-Type': 'multipart/from-data'
            //     }
            // })
            // console.log(image_url.data.data.display_url
            // )

            // const photoURL = image_url.data.data.display_url

            // 2. user registration
            const result = await createUser(email, password)
            console.log(result)

            // 3.update profile/ save user name and photo

            await updateUserProfile(name , 'jh')

            const userData = {name, email, phone,}

            mutateAsync(userData)


            navigate('/')
            toast.success('Sign Up successfully')


        }

        catch (err) {
            // 
            console.log(err.message)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            // 
            await signInWithGoogle()

            toast.success('Sign Up successfully')
            navigate('/')
        }
        catch (err) {
            // 
            toast.error(err.message)
            console.log(err.message)
        }
    }


    return (
        <div>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                    <div className='mb-8 text-center'>
                        <h1 className='my-3 text-4xl font-bold '>Sign Up</h1>
                        <p className='text-sm text-gray-400'>Welcome to the normative</p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='space-y-6 '
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                {/* <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                /> */}

                                <div>
                                    <label htmlFor='phone' className='block mb-2 text-sm'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='number'
                                        name='phone'
                                        placeholder='Enter Your Name Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='text-sm mb-2'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    type='password'
                                    name='password'
                                    autoComplete='new-password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                // disabled={loading}
                                type='submit'
                                className='bg-black font-bold w-full rounded-md py-3 text-white'
                            >
                                {/* {loading ? <TbFidgetSpinner className='animate-spin mx-auto' /> : 'Continue'} */}
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center pt-4 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm dark:text-gray-400'>
                            Signup with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>
                    <button
                        // disabled={loading}
                        onClick={handleGoogleSignIn}
                        className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </button>
                    <p className='px-6 text-sm text-center text-gray-400'>
                        Already have an account?{' '}
                        <Link
                            to='/login'
                            className='hover:underline hover:text-rose-500 text-gray-600'
                        >
                            Login
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;