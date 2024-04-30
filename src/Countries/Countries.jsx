
import { Link } from "react-router-dom";


const Countries = () => {






    return (
        <div>

            <p className=" text-4xl lg:text-4xl   font-playfair-display font-semibold text-center w-full  lg:w-7xl mx-auto pt-10"> <span className="text-[#0057d9] font-extrabold font-playfair-display">Countries</span> </p>
            <p className="mt-4 text-center font-playfair-display mb-4">The Countries section of our platform invites travelers to embark on a <br />captivating journey across diverse landscapes, rich cultures, and vibrant histories. </p>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto
            ">


                <Link to='/Countries/Bangladesh' className="w-[350px] h-[350px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 hover:bg-black hover:bg-opacity-50 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/zSTWcY3/Bangladesh.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center">
                                    <h2 className="text-white shadow-lg font-extrabold text-2xl mb-2">Bangladesh</h2>
                                    <p className="text-white font-normal px-2">Bangladesh: Cultural richness historical landmarks, delicious cuisine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/Countries/Thailand' className="w-[350px] h-[350px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 hover:bg-black hover:bg-opacity-50 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/mR28XLH/Phi-Phi-Island.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center">
                                    <h2 className="text-white shadow-lg font-extrabold text-2xl mb-2">Thailand</h2>
                                    <p className="text-white font-normal px-2">Thailand: Land of smiles, tropical beauty, rich culture, delicious cuisine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/Countries/Indonesia' className="w-[350px] h-[350px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 hover:bg-black hover:bg-opacity-50 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/FV16L6S/yogyakarta-Indonesia.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center">
                                    <h2 className="text-white shadow-lg font-extrabold text-2xl mb-2">Indonesia</h2>
                                    <p className="text-white font-normal px-2">Indonesia: Archipelago paradise, diverse cultures, stunning landscapes, exquisite cuisine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/Countries/Malaysia' className="w-[350px] h-[350px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 hover:bg-black hover:bg-opacity-50 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/6YvsnQy/Malaysia.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center">
                                    <h2 className="text-white shadow-lg font-extrabold text-2xl mb-2">Malaysia</h2>
                                    <p className="text-white font-normal px-2">Malaysia: Multicultural gem, tropical paradise, modern metropolises, stunning biodiversity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/Countries/Vietnam' className="w-[350px] h-[350px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 hover:bg-black hover:bg-opacity-50 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/Jx4HG3P/Mekong-delta.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center">
                                    <h2 className="text-white shadow-lg font-extrabold text-2xl mb-2">Vietnam</h2>
                                    <p className="text-white font-normal px-2">Vietnam: Timeless charm, lush landscapes, rich history, vibrant markets.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to='/Countries/Cambodia' className="w-[350px] h-[350px] mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 hover:bg-black hover:bg-opacity-50 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/kg9xzpT/Angkor-wat-cambodia.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center">
                                    <h2 className="text-white shadow-lg font-extrabold text-2xl mb-2">Cambodia</h2>
                                    <p className="text-white font-normal px-2">Cambodia: Ancient wonders, majestic temples, warm hospitality, scenic beauty.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>







            </div>



        </div>
    );
};

export default Countries;