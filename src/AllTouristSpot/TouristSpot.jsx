import { Link } from "react-router-dom";


const TouristSpot = ({ data }) => {

    const { _id, Image, spotName, averageCost, visitors, time, season } = data;

    return (
        <div>
            <div className="card w-[90%] mx-auto lg:w-[400px] bg-base-100 shadow-xl flex-grow">
                <figure><img src={Image} alt="Property" className="w-full h-[300px]" /></figure>
                <div className="card-body ">
                    <h2 className="card-title font-playfair-display font-bold ">
                        {spotName}
                    </h2>
                    <p className="">Average Cost: <span className="text-green">{averageCost}</span></p>
                    <p>{visitors}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{time} days</div>
                    </div>
                    <div className="flex justify-start mt-4">
                        <Link to={`/spots/id/${_id}`} className="btn w-15 md:w-28 bg-[#0057d9] text-[#fff] flex-grow">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;