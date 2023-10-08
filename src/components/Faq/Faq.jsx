/* eslint-disable react/no-unescaped-entities */


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';


const Faq = () => {

    useEffect(() => {

        AOS.init();

    }, [])


    return (

        <div className="my-[50px] bg-[#F8FF95]" data-aos = "fade-up">

            <h1 className="text-5xl font-bold text-center pt-[20px]">Frequently Asked Questions </h1>

            <div className="space-y-3 mt-[40px]">

                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        What is "Social Events," and what types of events can I plan using it?
                    </div>
                    <div className="collapse-content">
                        <p> "Social Events" is a comprehensive event planning platform that allows you to plan various types of social events, including weddings, birthday parties, anniversaries, engagement parties, retirement parties, baby showers, and more.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I get started with "Social Events"?
                    </div>
                    <div className="collapse-content">
                        <p>To get started, simply sign up for an account on the platform, and you'll have access to all the tools and features to plan your event.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I customize invitations and announcements for my event?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, you can personalize your event invitations and announcements with your own text, images, and designs to make them unique to your event.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I collaborate with others on event planning using this platform?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can invite friends, family, or event planners to collaborate on your event and share responsibilities.</p>
                    </div>
                </div>



                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Is there a budgeting tool to help me manage my expenses?
                    </div>
                    <div className="collapse-content">
                        <p>"Social Events" provides a budgeting tool that allows you to set and track your event budget, helping you stay within your financial limits.</p>
                    </div>
                </div>


                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How do I make changes to my event details after it's been created?
                    </div>
                    <div className="collapse-content">
                        <p>You can easily update your event details by logging in to your account and editing the event page as needed.</p>
                    </div>
                </div>




            </div>

        </div>

    );
};

export default Faq;