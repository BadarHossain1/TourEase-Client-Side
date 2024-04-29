
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Countries = () => {

    


    const [country, setCountry] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/Country_name')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountry(data);
            });
    }, []);



    return (
        <div>

            <p className=" text-4xl lg:text-4xl   font-playfair-display font-semibold text-center w-full  lg:w-7xl mx-auto pt-10"> <span className="text-[#0057d9]">Countries</span> </p>
            <hr className="border-1 mt-4 mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1100px] mx-auto
            ">
                <h1>{country.length}</h1>

                {country.map(country => <Link key={country._id} to='/Countries/' className="w-[350px] h-[350px] mx-auto ">
                    <div className="relative">
                        <div className="overflow-hidden rounded-lg shadow-lg hover:opacity-80 transition duration-300">
                            <img className="w-full h-full object-cover" src="https://i.ibb.co/zSTWcY3/Bangladesh.jpg" alt="Image" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <div className="text-center ">
                                    <h2 className="text-[#FFFFFF] shadow-lg font-extrabold text-2xl  mb-2">Bangladesh</h2>
                                    <p className="text-[#FFFFFF] font-normal px-2">Bangladesh: Cultural richness historical landmarks, delicious cuisine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                )}





            </div>



        </div>
    );
};

export default Countries;