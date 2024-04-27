import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {

    const handleSubmit = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.email.value;
        const password = e.target.password.value;
        const userDetails = {
            name: name,
            email: email,
            photoURL: photoURL,
            password: password,
            

        }
        console.log(userDetails);


        

    }





    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                
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
                            <p>Already have an account? Please <Link to='/login' className="text-[#0057d9] font-bold font-playfair-display">Login.....</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#0057d9] text-white">Register</button>
                                {/* Toast */}
                            </div>
                        </form>


                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-[#0057d9]">Register</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;