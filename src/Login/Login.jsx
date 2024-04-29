
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {

    const { LoginUser, GoogleLogin, GithubLogin, } = useContext(AuthContext);



    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
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

                    // notify here



                })

                .catch(error => {
                    console.log(error);
                    console.log('error from login');
                })
        }
        else {
            alert('The password is not good habibi');
        }


    }


    const GoogleSignIn = e => {
        e.preventDefault();

        GoogleLogin()
            .then(result => {
                console.log('User Google logged In', result.user);
                setLoading(false);


            })
            .catch(error => {
                console.log('google login error', error);
            })
    }



    const GithubSignIn = e => {
        e.preventDefault();

        GithubLogin()
            .then(result => {
                console.log('User Github signed In', result.user);
                setLoading(false)


            })
            .catch(error => {
                console.log('google error', error);
            })
    }





    return (
        <div>
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
                                {/* Toast */}
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;