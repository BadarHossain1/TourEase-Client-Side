import Banner from "../Bannner/Banner";
import Countries from "../Countries/Countries";
import Team from "../Our Team/Team";
import Sections from "../TouristSection/Sections";


const Home = () => {
    return (
        <div>
            <div className="mt-3 ">
                <Banner></Banner>
            </div>
            <div className="mt-[100px] ">
                <Sections></Sections>
            </div>
            <div className="mt-[100px]">
                <Countries></Countries>
            </div>
            <div className="">
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;