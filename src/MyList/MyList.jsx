import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import List from "./List";


const AllTouristSpot = () => {
    const { user } = useContext(AuthContext)
    const [lists, setList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/spots/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setList(data);
            });
    }, [user]);


    return (
        <div>
            <div className="">
                <p className=" text-4xl lg:text-4xl   font-playfair-display font-extrabold text-center w-full  lg:w-7xl mx-auto pt-10">My <span className="text-[#0057d9] "> Lists</span></p>

                <hr className="border-1 mt-4 mb-16" />
                <div className=" ">







                    {/* {lists.map(list => <List key={list._id} list={list}></List>)} */}

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th>Image</th>
                                    <th>Location</th>
                                    <th>Average Cost</th>
                                    <th>Visitors</th>
                                    <th>Season</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lists.map(list => (
                                    <tr key={list._id}>
                                        <td>
                                            <img src={list.Image} alt={list.spotName} className="w-16 h-16 object-cover rounded-full" />
                                        </td>
                                        <td>
                                            <div>
                                                <p className="font-semibold">{list.spotName}</p>
                                                <p>{list.countryName}, {list.location}</p>
                                            </div>
                                        </td>
                                        <td>{list.averageCost}</td>
                                        <td>{list.visitors}</td>
                                        <td>{list.season}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AllTouristSpot;