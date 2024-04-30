import { useEffect, useState } from "react";
import Country from "./Country";


const Indonesia = () => {

    const [infos, setInfo] = useState([]);
    


    useEffect(() => {
        fetch('http://localhost:5000/spots/Countries/Indonesia')
        .then(res=>res.json())
        .then(data =>{
            
            setInfo(data);
        })
    }, [])



    return (
        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 mx-auto mt-10 ">
            
            {infos.map(info => <Country key={info._id} info={info}></Country>)}
            
        </div>
    );
};

export default Indonesia;