import { useEffect, useState } from "react";
import Section from "./Section";


const Sections = () => {

    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/spots')
            .then(res => res.json())
            .then(data => {
                
                setSections(data);

            })
    }, [])

    return (
        <div className="">
            <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10"> <span className="text-[#0057d9] ">Tourist</span> Spots </p>
            <p className="mt-4 text-center font-playfair-display">Discover Enchanting Destinations: From picturesque beaches to historic landmarks, <br /> explore a myriad of captivating tourist spots with TravelEase.</p>
            <hr className="border-1 mt-4 mb-16" />
            <div className=" lg:w-7xl px-5 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    sections.slice(0,6).map(section => <Section key={section._id} section={section}></Section>)
                }



                


            </div>

        </div>

    );
};

export default Sections;