
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
const Login = () => {

    const { LoginUser, GoogleLogin, GithubLogin, setLoading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();



    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;


    const notify = (success) => {
        if (success) {
            toast.success('Login Completed. Welcome', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.error('Error Loggin In', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,

            });

        }
    }


    const handleSubmit = e => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        const userDetails = {

            email: email,

            password: password,


        }
        console.log(userDetails);
        if (passwordRegex.test(password)) {
            LoginUser(email, password)
                .then(res => {
                    console.log(res.user)
                    console.log('User logged in')
                    notify(true);
                    navigate(location?.state || '/')
                    



                })

                .catch(error => {
                    console.log(error);
                    notify(false);
                })
        }
        else {
            toast.error('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }


    }


    const GoogleSignIn = e => {
        e.preventDefault();

        GoogleLogin()
            .then(result => {
                console.log('User Google logged In', result.user);
                setLoading(false);
                notify(true)
                navigate(location?.state || '/')


            })
            .catch(error => {
                console.log('google login error', error);
                notify(false)
            })
    }



    const GithubSignIn = e => {
        e.preventDefault();

        GithubLogin()
            .then(result => {
                console.log('User Github signed In', result.user);
                setLoading(false)
                notify(true)
                navigate(location?.state || '/')


            })
            .catch(error => {
                console.log('google error', error);
                notify(false)
            })
    }





    return (
        <div data-aos="fade-left" data-aos-duration="2000">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#0057d9]">LogIn</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>

                            <p className="text-center mt-5 font-semibold">Or Login With:</p>
                            <div className="flex justify-center gap-6 mt-4">
                                <button onClick={GoogleSignIn} className="btn btn-circle">
                                    <FaGoogle />
                                </button>
                                <button onClick={GithubSignIn} className="btn btn-circle">
                                    <FaGithub />
                                </button>
                            </div>
                            <p>New To The Site? Please <Link to='/register' className="text-[#0057d9] font-bold font-playfair-display">Register.....</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#0057d9] text-white">Login</button>
                                <ToastContainer />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;