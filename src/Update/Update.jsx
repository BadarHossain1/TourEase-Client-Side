import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";


const Update = () => {


    const { id } = useParams();

    const { user } = useContext(AuthContext)
    const [lists, setList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/spots/id/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setList(data);
            });
    }, [id]);

    console.log(id);

    const handleSubmit = e => {
        e.preventDefault();

        const Image = e.target.Image.value;
        const spotName = e.target.spotName.value
        const countryName = e.target.countryName.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        const averageCost = e.target.averageCost.value;
        const season = e.target.season.value;
        const time = e.target.time.value;
        const visitors = e.target.visitors.value;
        const Name = user?.displayName;
        const email = user?.email;




        const AddSpot = {
            Image: Image,
            spotName: spotName,
            countryName: countryName,
            location: location,
            description: description,
            averageCost: averageCost,
            season: season,
            time: time,
            visitors: visitors,
            Name: Name,
            email: email,

        }
        console.log(AddSpot);
        fetch(`http://localhost:5000/spots/id/${id}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(AddSpot),

        })
            .then(res => res.json())
            .then(data => {

                console.log('inserted', data);
                alert('Inserted')
                e.target.reset();


            })
      



    }
    return (
        <div className="mt-10 ">
            <div className="text-4xl text-center font-playfair-display font-extrabold mb-6">
                <p className="text-[#0057d9] underline">UPDATE TOURIST SPOT</p>
            </div>

            {
                lists.map(list => <form key={list._id} onSubmit={handleSubmit} className="w-3/4 mx-auto mb-10">
                <div className="flex flex-col lg:flex-row justify-center gap-4  mb-6">


                    <input type="text" placeholder="Image Link" name="Image" defaultValue={list?.Image} className="input input-bordered input-info w-full max-w-xs" />

                    <input type="text" placeholder="Name of the Spot" name="spotName" defaultValue={list.spotName} className="input input-bordered input-info w-full max-w-xs" />
                    <input type="text" placeholder="Name of the Country" name="countryName" defaultValue={list.countryName} className="input input-bordered input-info w-full max-w-xs" />
                </div>



                <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">
                    <input type="text" placeholder="Location" name="location" defaultValue={list.location} className="input input-bordered input-info w-full max-w-xs" />

                    <input type="text" placeholder="Write a Description" name="description" defaultValue={list.description} className="input input-bordered input-info w-full max-w-xs" />

                    <input type="number" placeholder="Average Cost" name="averageCost" defaultValue={list.averageCost} className="input input-bordered input-info w-full max-w-xs" />




                </div>
                <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">

                    <input type="text" placeholder="Seasonality - like summer, winter" name="season" defaultValue={list.season} className="input input-bordered input-info w-full max-w-xs" />

                    <input type="number" placeholder="Travel Time" name="time" defaultValue={list?.time} className="input input-bordered input-info w-full max-w-xs" />
                    <input type="number" placeholder="Total Visitors Per Year" name="visitors" defaultValue={list?.visitors} className="input input-bordered input-info w-full max-w-xs" />

                </div>
                <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">





                    <input type="text" placeholder="Your Name" name="Name" defaultValue={user?.displayName} className="input input-bordered input-info w-full max-w-xs" />
                    <input type="email" placeholder="Your Email" name="email" defaultValue={user?.email} className="input input-bordered input-info w-full max-w-xs" />

                </div>
                <div className="form-control mt-6 w-2/4 mx-auto">
                    <button className="btn bg-[#0057d9] text-white">Update</button>
                    {/* Toast */}
                </div>
            </form>)
            }

            




        </div>
    );
};

export default Update;