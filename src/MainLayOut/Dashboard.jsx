import { useState } from "react";
import useAdmin from "../Component/Hooks/useAdmin";
import { Link, NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    // const isAdmin = true
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    return (
        <div>
            <div className='bg-gray-100  text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block  cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            <img
                                // className='hidden md:block'
                                src=''
                            />
                            MediPlus
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            <div className="flex ">
                {/*dashboard side bar */}
                <div className={`w-[256px] flex flex-col shadow-xl justify-between min-h-screen border-[#e4b2bc] border bg-[linear-gradient(180deg,_rgba(255,0,0,0.1)_0%,_rgba(255,0,0,0)_100%)]  font-bold ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}>
                    <ul className="menu p-4">
                        {
                            isAdmin ? <>

                                <li>
                                    <NavLink className='' end to={'/dashboard'}>
                                        <FaHome></FaHome>
                                        Statistic</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'addbanner'}>

                                        Add Banner</NavLink>
                                </li>
                                <div className='divider'></div>
                                <li>
                                    <NavLink to={'alluser'}>
                                        {/* <FaUsers></FaUsers> */}
                                        All Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'allbanner'}>

                                        All Banner</NavLink>
                                </li>

                            </>
                                :
                                <>


                                    <li>
                                        <NavLink end to={'/dashboard'}>
                                            <FaHome></FaHome>
                                            User Home</NavLink>
                                    </li>

                                </>
                        }

                        {/* shared nav Links */}
                        <div className="divider"></div>

                    </ul>
                    <div>
                        <ul className='menu p-4'>
                            <li>
                                <NavLink to={'/'}>
                                    <FaHome className='text-xl'></FaHome>
                                    Home</NavLink>
                            </li>
                            {/* <li>
                            <NavLink to={'profile'}>
                                <FaPersonRifle></FaPersonRifle>
                                My Profile</NavLink>
                        </li> */}
                            {!isAdmin ? <li>
                                <NavLink to={'myprofile'}>
                                    <CgProfile className='text-xl' />
                                    My Profile</NavLink>
                            </li> : ''}
                        </ul>
                    </div>
                </div>
                {/* dashboard contain */}
                <div className="flex-1  p-8 ">
                    
                    <div className="max-h-screen">
                        <Outlet></Outlet>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;