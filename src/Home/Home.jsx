import Banner from "../Bannner/Banner";
import Countries from "../Countries/Countries";

import Team from "../Our Team/Team";
import Testimonials from "../Testimonials/Testimonials";
import Sections from "../TouristSection/Sections";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Home = () => {
    return (
        <div>
            <div className="mt-3 z-0">
                <Banner></Banner>
            </div>
            <div className="mt-[100px]">
                <Sections></Sections>
            </div>
            <hr />
            <div className="mt-[100px]" >
                <Countries></Countries>
            </div>
            <hr />
            <div  data-aos="fade-up" data-aos-duration="2000">
                <Team></Team>
            </div>
            <hr />
            <div  data-aos="fade-right" data-aos-duration="2000">
                <Testimonials></Testimonials>
            </div>
            
        </div>
    );
};

export default Home;