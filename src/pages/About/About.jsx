
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';


const About = () => {

    useEffect(() => {

        AOS.init();

    }, [])
    return (
        <div className="mt-[50px] max-h-full text-center font-bold bg-[url('/public/extra/about6.webp')] bg-no-repeat bg-cover " data-aos = "fade-left">

            <p className="text-5xl font-bold text-center my-[40px] pt-[40px]">ABOUT</p>


            <p className="pt-[60px] pb-[60px] ">

                Our event management service for social events is a comprehensive and personalized solution that will help you to create a memorable and enjoyable experience for your guests. I specialize in planning and executing weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers.

                <br />
                <br />

                We understand that each event is unique, and I will work closely with you to develop a plan that reflects your personal style and budget. I will also take care of all the details, from booking the venue and vendors to coordinating the ceremony and reception.

                <br />
                <br />


                We have extensive experience in planning and executing social events.
                We are a creative and innovative event planner who can bring your vision to life.
                We are detail-oriented and organized, and We will ensure that everything runs smoothly on the day of your event.

                <br />
                <br />

                We are flexible and accommodating, and I will work with you to create an event that meets your specific needs.
                We are affordable and offer a variety of packages to fit your budget.




            </p>










        </div>
    );
};

export default About;