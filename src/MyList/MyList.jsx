import { Link } from "react-router-dom";


const AllTouristSpot = () => {
    return (
        <div>
            <div className="">
                <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10">My <span className="text-[#0057d9] "> Lists</span></p>
                
                <hr className="border-1 mt-4 mb-16" />
                <div className=" lg:w-7xl px-5 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="card w-[90%] mx-auto lg:w-[400px] bg-base-100 shadow-xl ">
                        <figure><img src='https://i.ibb.co/NV6vc69/Rangamati-and-Banner4.jpg' alt="Property" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title font-playfair-display font-bold ">
                                Rangamati
                            </h2>
                            <p>Rangamati</p>
                            <p>rangamati</p>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline">rangamati</div>
                            </div>
                            <div className="flex justify-start mt-4">
                                <Link className="btn w-15 md:w-28 bg-[#0057d9] text-[#fff] ">Rangamati</Link>
                            </div>
                        </div>
                    </div>




                    <div className="card w-[90%] mx-auto lg:w-[400px] bg-base-100 shadow-xl ">
                        <figure><img src='https://i.ibb.co/NV6vc69/Rangamati-and-Banner4.jpg' alt="Property" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title font-playfair-display font-bold ">
                                Rangamati
                            </h2>
                            <p>Rangamati</p>
                            <p>rangamati</p>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline">rangamati</div>
                            </div>
                            <div className="flex justify-start mt-4">
                                <Link className="btn w-15 md:w-28 bg-[#0057d9] text-[#fff] ">Rangamati</Link>
                            </div>
                        </div>
                    </div>




                    <div className="card w-[90%] mx-auto lg:w-[400px] bg-base-100 shadow-xl ">
                        <figure><img src='https://i.ibb.co/NV6vc69/Rangamati-and-Banner4.jpg' alt="Property" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title font-playfair-display font-bold ">
                                Rangamati
                            </h2>
                            <p>Rangamati</p>
                            <p>rangamati</p>
                            <div className="card-actions justify-start">
                                <div className="badge badge-outline">rangamati</div>
                            </div>
                            <div className="flex justify-start mt-4">
                                <Link className="btn w-15 md:w-28 bg-[#0057d9] text-[#fff] ">Rangamati</Link>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default AllTouristSpot;