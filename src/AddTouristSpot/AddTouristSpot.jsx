

const AddTouristSpot = () => {

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
        const Name = e.target.Name.value;
        const email = e.target.email.value;
      

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

    }
    return (
        <div className="mt-10 ">
            <div className="text-4xl text-center font-playfair-display font-extrabold mb-6">
                <p className="text-[#0057d9] underline">ADD TOURIST SPOT</p>
            </div>

            <form onSubmit={handleSubmit} className="w-3/4 mx-auto mb-10">
                <div className="flex flex-col lg:flex-row justify-center gap-4  mb-6">


                    <input type="text" placeholder="Image Link" name="Image" className="input input-bordered input-info w-full max-w-xs" />

                    <input type="text" placeholder="Name of the Spot" name="spotName" className="input input-bordered input-info w-full max-w-xs" />
                    <input type="text" placeholder="Name of the Country" name="countryName" className="input input-bordered input-info w-full max-w-xs" />
                </div>



                <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">
                    <input type="text" placeholder="Location" name="location" className="input input-bordered input-info w-full max-w-xs" />

                    <input type="text" placeholder="Write a Description" name="description" className="input input-bordered input-info w-full max-w-xs" />

                    <input type="text" placeholder="Average Cost" name="averageCost" className="input input-bordered input-info w-full max-w-xs" />




                </div>
                <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">

                    <input type="text" placeholder="Seasonality - like summer, winter" name="season" className="input input-bordered input-info w-full max-w-xs" />

                    <input type="number" placeholder="Travel Time" name="time" className="input input-bordered input-info w-full max-w-xs" />
                    <input type="number" placeholder="Total Visitors Per Year" name="visitors" className="input input-bordered input-info w-full max-w-xs" />

                </div>
                <div className="flex flex-col lg:flex-row  justify-center gap-4  mb-6">





                    <input type="text" placeholder="Your Name" name="Name" className="input input-bordered input-info w-full max-w-xs" />
                    <input type="email" placeholder="Your Email" name="email" className="input input-bordered input-info w-full max-w-xs" />

                </div>
                <div className="form-control mt-6 w-2/4 mx-auto">
                    <button className="btn bg-[#0057d9] text-white">Add</button>
                    {/* Toast */}
                </div>
            </form>




        </div>
    );
};

export default AddTouristSpot;