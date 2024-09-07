import { Link } from "react-router-dom";
// import logo from '../../assets/logo (2).png'

const Navbar = () => {

    const navOptions = <>
        <div className="flex items-center font-bold text-xl">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/projects'}>Our Project</Link></li>
            <li><Link to={'/contact'}>Contact us</Link></li>


            {/* {
                // user ? 'true': 'false
                // user ? condition ? 'double true' : 'one true' : 'false
            }
            {
                user && isAdmin && <li><Link to={'/dashboard/adminHome'}>DashBoard</Link></li>
            }
            {
                user && !isAdmin && <li><Link to={'/dashboard/userHome'}>DashBoard</Link></li>
            }

            <li>
                <Link to={'/dashboard/cart'}>
                    <button className="btn">
                        <FaCartShopping />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
                </Link>
            </li>

            {
                user ? <>
                    <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>
                </> :
                    <>
                        <li><Link to={'/login'}>Login</Link></li>

                    </>
            } */}
        </div>
    </>

    return (
        <div className="">
            <div className="navbar bg-black bg-opacity-25 lg:w-[1540px] rounded-md px-5 lg:ml-[180px] flex justify-between fixed z-10  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">The Normative</a>
                    {/* <img src={logo} alt="" /> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Longin</a>
                </div>
            </div>


        </div>
    );
};

export default Navbar;