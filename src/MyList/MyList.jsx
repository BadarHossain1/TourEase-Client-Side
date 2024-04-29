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

    const handleDelete = (id) => {
        console.log('DELETE KORO', id);
        fetch(`http://localhost:5000/spots/id/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                console.log(res);
                // You may want to check if the deletion was successful and update the state accordingly
                // For example, you can filter out the deleted item from the lists state
                setList(prevLists => prevLists.filter(item => item._id !== id));
            })
            .then(data => { console.log(data) })
            .catch(error => {
                console.error('Error deleting:', error);
            });
    }


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
                                    <th></th>
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
                                        <td>{list.averageCost}BDT</td>
                                        <td>{list.visitors}</td>
                                        <td>{list.season}</td>
                                        <td><button onClick={() => handleDelete(list._id)} className="btn">Delete</button></td>
                                        <td><Link to={`/update/${list._id}`} className="btn">Update</Link></td>
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