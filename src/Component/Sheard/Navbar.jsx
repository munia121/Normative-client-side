import { useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import logo from '../../assets/logo (2).png'

const Navbar = () => {
    const navOptions = <>
        <div className="flex  font-bold text-xl">
            <li><Link className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold  rounded-md ' : 'font-bold font-lato text-black '} to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/projects'}>Our Project</Link></li>
            <li><Link to={'/contact'}>Contact us</Link></li>
        </div>
    </>

    const [isOpen, setIsOpen] = useState(false)
    // const user = false
    const { user, logOut } = useAuth()


    return (
        <div className="">
            <div className="navbar bg-black bg-opacity-25  rounded-md px-5  flex justify-between fixed z-10  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-[350px]">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-3xl">The Normative</Link>
                    {/* <img src={logo} alt="" /> */}
                </div>

                <div className="navbar-end">
                    <div className="navbar-end hidden  dropdown  lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navOptions}
                        </ul>
                    </div>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                    >

                        <div className='hidden md:block'>
                            {/* Avatar */}
                            {
                                //    user && user.photoURL ? user.photoURL :<FaRegUserCircle className="size-10"></FaRegUserCircle>
                            }
                            <img
                                className='rounded-full'
                                referrerPolicy='no-referrer'
                                src={user && user.photoURL ? user.photoURL : 'Login'
                                }
                                alt='profile'
                                height='30'
                                width='30'
                            />
                        </div>
                    </div>
                    {isOpen && (
                        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                            <div className='flex flex-col cursor-pointer'>
                                <Link
                                    to='/'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Home
                                </Link>

                                {user ? (
                                    <>
                                        <Link
                                            to='/dashboard'
                                            className='block  px-4 py-3 text-black   hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Dashboard
                                        </Link>
                                        <div
                                            onClick={logOut}
                                            className='px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                        >
                                            Logout
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to='/login'
                                            className='px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to='/signup'
                                            className='px-4 py-3 text-black hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Navbar;