import { useContext, useEffect, useState } from "react";
import { MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {

    const [theme, setTheme] = useState("light");
    const { user, LogoutUser, loading, } = useContext(AuthContext);
    console.log(theme);

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme);

    }, [theme])

    const handleTheme = (e) => {

        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const handleLogout = e => {
        e.preventDefault();

        LogoutUser()
            .then(result => {
                console.log('User Logged out', result)
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div className="">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/' className=" mr-2 p-1 bg-transparent  font-bold font-playfair-display  hover:bg-transparent  hover:text-[#0057d9]">Home</Link>
                            <Link to='/' className=" mr-2 p-1 bg-transparent  font-bold font-playfair-display hover:bg-transparent  hover:text-[#0057d9]">All Tourist Spot</Link>
                            <Link to='/' className=" mr-2 p-1 bg-transparent  font-bold font-playfair-display  hover:bg-transparent hover:text-[#0057d9]">Add Tourist Spot</Link>
                            <Link to='/' className=" mr-2 p-1 bg-transparent font-bold font-playfair-display  hover:bg-transparent hover:text-[#0057d9]">My List</Link>
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex z-50">
                        <ul className="menu menu-horizontal px-1  ">
                            <Link to='/' className=" mr-2 p-1 bg-transparent  font-bold font-playfair-display  hover:bg-transparent  hover:text-[#0057d9]">Home</Link>
                            <Link to='/AllTouristSpot' className=" mr-2 p-1 bg-transparent  font-bold font-playfair-display hover:bg-transparent  hover:text-[#0057d9]">All Tourist Spot</Link>
                            <Link to='/AddTouristSpot' className=" mr-2 p-1 bg-transparent  font-bold font-playfair-display  hover:bg-transparent hover:text-[#0057d9]">Add Tourist Spot</Link>
                            <Link to='/MyList' className=" mr-2 p-1 bg-transparent font-bold font-playfair-display  hover:bg-transparent hover:text-[#0057d9]">My List</Link>
                        </ul>
                    </div>

                </div>
                <Link to="/" className=" text-3xl font-extrabold font-playfair-display flex items-center justify-center mr-2"><MdTravelExplore className="w-8 h-8 mr-1" />Tour<span className="text-[#0057d9]">Ease</span></Link>



                {
                    loading ? <div className="w-1/2 flex justify-end items-end mr-6"><span className="loading loading-spinner loading-xl bg-blue-600"></span></div> : <div className="navbar-end">

                        {
                            user ?
                                <div className="flex ">
                                    <label className="swap swap-rotate mr-2">

                                        {/* this hidden checkbox controls the state */}
                                        <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                                        {/* sun icon */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* moon icon */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>

                                    <div className="dropdown dropdown-end mr-4 flex">



                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={user?.displayName || 'No Name'}>
                                            <div className=" " data-tip={user?.displayName || 'No Name'}>
                                                {
                                                    user ? <img src={user?.photoURL || <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] border border-blue-600" />} alt="User's Photo" className="w-full h-full rounded-full" /> : <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                                                }
                                                {

                                                }
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ">
                                            <li className="text-center mb-1">{user?.displayName}</li>
                                            <li>
                                                <Link to="/update" className="justify-between hover:bg-blue-200 hover:text-white">
                                                    Update Profile

                                                </Link>
                                            </li>
                                            <li><Link to='/'  onClick={handleLogout} className="hover:bg-blue-600 hover:text-white">Logout</Link></li>
                                        </ul>
                                    </div>
                                </div> : <div className="flex">
                                    <label className="swap swap-rotate mr-2">

                                        {/* this hidden checkbox controls the state */}
                                        <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />

                                        {/* sun icon */}
                                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                        {/* moon icon */}
                                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                    <div className="flex items-center">

                                        <div className="mr-1 md:mr-3 border-2 rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center border-blue-600 tooltip"  data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName || 'No Name'}>
                                            <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                                        </div>
                                        <Link to="/login" className="btn w-15 md:w-20 bg-blue-600 text-[#fff] font-playfair-display">Login</Link>
                                    </div>
                                </div>

                        }
                    </div>

                }
            </div>
        </div>
    );

};

export default Navbar;