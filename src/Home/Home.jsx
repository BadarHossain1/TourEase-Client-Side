import Banner from "../Bannner/Banner";
import Countries from "../Countries/Countries";
import Footer from "../Footer/Footer";
import Team from "../Our Team/Team";
import Testimonials from "../Testimonials/Testimonials";
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
            <hr />
            <div className="mt-[100px]">
                <Countries></Countries>
            </div>
            <hr />
            <div className="">
                <Team></Team>
            </div>
            <hr />
            <div>
                <Testimonials></Testimonials>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;