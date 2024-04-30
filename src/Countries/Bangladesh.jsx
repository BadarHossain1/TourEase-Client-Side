import { useEffect, useState } from "react";
import Country from "./Country";


const Bangladesh = () => {

    const [infos, setInfo] = useState([]);



    useEffect(() => {
        fetch('https://tourease-gamma.vercel.app/spots/Countries/Bangladesh')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInfo(data);
            })
    }, [])



    return (
        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 mx-auto mt-10 ">

            {infos.map(info => <Country key={info._id} info={info}></Country>)}

        </div>
    );
};

export default Bangladesh;