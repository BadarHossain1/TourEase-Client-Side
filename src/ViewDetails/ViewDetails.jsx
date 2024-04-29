import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const ViewDetails = () => {


    const { id } = useParams();
    console.log(id);
    const [infos, setInfo] = useState([]);
    console.log(infos);

    useEffect(() => {
        fetch(`http://localhost:5000/spots/id/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInfo(data);
            })

    }, [id])



   


    return (
        <div>

         

            {
                infos.slice(0,1).map(info => <div key={info._id}>
                    <div className="card lg:card-side    shadow-xl mt-6 mb-6">
                        <figure className="w-[50%] mx-auto mt-6"><img src={info.Image} alt="Album" /></figure>
                        <div className="card-body ">
                            <h1 className="card-title text-3xl">{info.spotName}</h1>
                            <p>{info.description}</p>
    
                            <p className="badge badge-outline">{info.location}</p>
    
    
                            <p className="font-semibold">Country Name: {info.countryName}</p>
                            <p className="font-semibold">Visitors: {info.visitors}</p>
    
                            <p className="font-bold">Travel Time: {info.time}days</p>
                            <p className="font-bold">Season: {info.season}</p>
                            <p className="text-black font-bold">Average Cost: <span className="text-green-400">{info.averageCost}</span></p>
                        </div>
                    </div>
                </div>)
            }


            {/* <div>
                <div className="card lg:card-side bg-[#F8F5F0] md:bg-base-100  shadow-xl mt-6 mb-6">
                    <figure className="w-[90%] mx-auto mt-6"><img src={infos.Image} alt="Album" /></figure>
                    <div className="card-body ">
                        <h1 className="card-title text-3xl">{spotName}</h1>
                        <p>{description}</p>

                        <p className="badge badge-outline">{location}</p>


                        <p className="font-semibold">{countryName}</p>
                        <p className="font-semibold">{visitors}</p>

                        <p className="font-bold">Status: {time}</p>
                        <p className="font-bold">Status: {season}</p>
                        <p className="text-black font-bold">Average Cost: <span className="text-green-400">{averageCost}</span></p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ViewDetails;