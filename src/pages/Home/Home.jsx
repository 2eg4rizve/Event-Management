import Banner from "../../components/Banner/Banner";
import Faq from "../../components/Faq/Faq";
import Speciality from "../../components/Speciality/Speciality";
import Tier from "../../components/Tier/Tier";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Speciality></Speciality>
            <Tier></Tier>
            <Faq></Faq>
            <ContactUs></ContactUs>
           
           
        </div>
    );
};

export default Home;