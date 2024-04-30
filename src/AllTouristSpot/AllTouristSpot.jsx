
import { useEffect, useState } from "react";
import TouristSpot from "./TouristSpot";



const AllTouristSpot = () => {

    const [cards, setCards] = useState([]);
    console.log(cards)

    useEffect(() => {
        fetch('http://localhost:5000/spots')
            .then(res => res.json())
            .then(data => {
                setCards(data);
                
            });
    }, []);

    const handleSort = () =>{

        

         const sortedCards = [...cards].sort((a,b)=> parseInt(a.averageCost) - parseInt(b.averageCost))
         setCards(sortedCards);


    }





    return (
        <div>

            <div className="">
                <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10">All <span className="text-[#0057d9] "> Tourist</span> Spots </p>
                <p className="mt-4 text-center font-playfair-display">Explore Our Newest Tourist Spots!

                    From breathtaking landscapes to vibrant cultural hubs, <br /> our latest additions promise unforgettable experiences.  </p>
                <hr className="border-1 mt-4 mb-16" />
                <div className="dropdown dropdown-hover mb-4 w-full flex justify-center">
                    <div tabIndex={0} role="button" className="btn m-1 bg-blue-600 text-white">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><button onClick={handleSort}>Average Cost</button></li>
                        
                    </ul>
                </div>
                <div className=" lg:w-7xl px-5 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">


                    {
                        cards.map(data => <TouristSpot key={data._id} data={data}></TouristSpot>)
                    }







                </div>

            </div>

        </div>
    );
};

export default AllTouristSpot;