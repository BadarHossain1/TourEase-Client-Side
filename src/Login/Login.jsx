
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    const handleSubmit = e =>{
        e.preventDefault();

        
        const email = e.target.email.value;
        const password = e.target.password.value;
      
        
        const userDetails = {
            
            email: email,
            
            password: password,
            

        }
        console.log(userDetails);

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
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>

                            <p className="text-center mt-5 font-semibold">Or Login With:</p>
                            <div className="flex justify-center gap-6 mt-4">
                                <button className="btn btn-circle">
                                    <FaGoogle />
                                </button>
                                <button className="btn btn-circle">
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