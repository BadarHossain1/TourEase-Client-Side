
import { useState } from "react";
import { Link } from "react-router-dom";


const Countries = () => {

    // const Countries = [
    //     { countryName: "Bangladesh", Image: "https://i.ibb.co/zSTWcY3/Bangladesh.jpg", Description: "Bangladesh: Cultural richness historical landmarks, delicious cuisine.", },
    //     { countryName: "Indonesia", Image: "https://i.ibb.co/JyNQkPy/Borobodur-Indonesia.jpg", Description: "Indonesia: Archipelago paradise, diverse cultures, stunning landscapes, exquisite cuisine.", },
    //     { countryName: "Thailand", Image: "https://i.ibb.co/mR28XLH/Phi-Phi-Island.jpg", Description: "IThailand: Land of smiles, tropical beauty, rich culture, delicious cuisine." },
    //     { countryName: "Malaysia", Image: "https://i.ibb.co/6YvsnQy/Malaysia.jpg", Description: "Malaysia: Multicultural gem, tropical paradise,  modern metropolises, stunning biodiversity.", },
    //     { countryName: "Vietnam", Image: "https://i.ibb.co/0mYJYcy/Mekong-delta.jpg", Description: " Vietnam: Timeless charm, lush landscapes, rich history, delectable cuisine, vibrant markets.", },
    //     { countryName: "Cambodia", Image: "https://i.ibb.co/wgHsm2D/Angkor-wat-cambodia.jpg", Description: "Cambodia: Ancient wonders, majestic temples, Khmer culture, warm hospitality, scenic beauty.", },

    // ]


    // const [country, setCountry] = useState([])


    // const post = (e) => {


    //     fetch('http://localhost:5000/Country_name', {
    //         method: 'POST',
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(Countries)
    //     })





    // }

    // post();



    // fetch('http://localhost:5000/Country_name')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setCountry(data);
    //     })




    return (
        <div>

            <p className=" text-4xl lg:text-4xl   font-playfair-display font-semibold text-center w-full  lg:w-7xl mx-auto pt-10"> <span className="text-[#0057d9]">Countries</span> </p>
            <hr className="border-1 mt-4 mb-16" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1100px] mx-auto
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







            </div>



        </div>
    );
};

export default Countries;