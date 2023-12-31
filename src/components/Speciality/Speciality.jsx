
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';

import { ScrollRestoration } from "react-router-dom";

const Speciality = () => {

    useEffect(() => {

        AOS.init();

    }, [])

    return (
        <div>
            {/* <div className="mt-[50px] max-h-full  font-bold bg-[url('/public/extra/Speciality2.avif')] bg-no-repeat bg-cover">

                <h1 className="text-5xl font-bold text-center pt-[50px]">Speciality </h1>

                <div className="font-semibold mt-[40px] space-y-4 p-10 ">
                    <li>
                        Event Theme Generator: Provide users with a tool that generates creative and personalized event themes based on their preferences, making it easier to plan a cohesive and visually appealing event.
                    </li>
                    <li>
                        Vendor Matchmaking: Implement an intelligent vendor recommendation system that matches users with vendors and service providers based on their event category, budget, and location.
                    </li>
                    <li>
                        Virtual Venue Tours: Offer virtual tours of event venues, allowing users to explore and visualize potential event spaces from the comfort of their homes before making a booking decision.
                    </li>
                    <li>
                        Event Budget Optimization: Provide a feature that optimizes the event budget, suggesting cost-effective alternatives and helping users make the most of their available funds.
                    </li>
                    <li>
                        Interactive Seating Arrangement Planner: Create an interactive seating arrangement tool that allows users to drag and drop guest names, helping them design seating plans effortlessly.
                    </li>
                    <li>
                        Real-Time Guest Interactions: Enable real-time guest interactions on event pages, including live polls, Q&A sessions, and photo sharing to enhance engagement before and during the event.
                    </li>
                    <li>
                        Personalized Event Timelines: Generate customized event timelines based on event categories, ensuring that users do not miss any crucial planning steps or deadlines.
                    </li>
                    <li>
                        Exclusive Vendor Discounts: Partner with vendors and service providers to offer exclusive discounts and deals to users of the platform, helping them save money on event expenses.
                    </li>
                    <li>
                        Live Streaming Integration: Offer seamless integration with live streaming platforms, allowing users to broadcast their events to remote guests who cannot attend in person.
                    </li>
                    <li>
                        Gift Registry and Wishlist: Enable users to create gift registries or wishlists for their events, making it easy for guests to select and purchase gifts.
                    </li>
                    <li>
                        Green Event Planning: Promote eco-friendly event planning by suggesting sustainable practices and vendors, helping users reduce their environmental footprint.
                    </li>
                    <li className="pb-[80px]">
                        Event Inspiration Hub: Create a section of the platform dedicated to event inspiration, featuring real event stories, DIY ideas, and success stories from other users.
                    </li>



                </div>
            </div> */}

            <ScrollRestoration />


            <div className="mt-[50px]" data-aos="fade-up">

                <div className="hero max-h-full" style={{ backgroundImage: 'url("https://i.ibb.co/Km11bmB/vecteur-abstrait-fond-sans-couture.jpg")' }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content  text-black">
                        <div className="">
                            <h1 className="mb-5 text-5xl text-black  font-bold text-center">Speciality</h1>
                            <div className="font-bold text-black mt-[40px] text-[20px] space-y-4 p-10 ">
                                <li>
                                    Event Theme Generator: Provide users with a tool that generates creative and personalized event themes based on their preferences, making it easier to plan a cohesive and visually appealing event.
                                </li>
                                <li>
                                    Vendor Matchmaking: Implement an intelligent vendor recommendation system that matches users with vendors and service providers based on their event category, budget, and location.
                                </li>
                                <li>
                                    Virtual Venue Tours: Offer virtual tours of event venues, allowing users to explore and visualize potential event spaces from the comfort of their homes before making a booking decision.
                                </li>
                                <li>
                                    Event Budget Optimization: Provide a feature that optimizes the event budget, suggesting cost-effective alternatives and helping users make the most of their available funds.
                                </li>
                                <li>
                                    Interactive Seating Arrangement Planner: Create an interactive seating arrangement tool that allows users to drag and drop guest names, helping them design seating plans effortlessly.
                                </li>
                                <li>
                                    Real-Time Guest Interactions: Enable real-time guest interactions on event pages, including live polls, Q&A sessions, and photo sharing to enhance engagement before and during the event.
                                </li>
                                <li>
                                    Personalized Event Timelines: Generate customized event timelines based on event categories, ensuring that users do not miss any crucial planning steps or deadlines.
                                </li>
                                <li>
                                    Exclusive Vendor Discounts: Partner with vendors and service providers to offer exclusive discounts and deals to users of the platform, helping them save money on event expenses.
                                </li>
                                <li>
                                    Live Streaming Integration: Offer seamless integration with live streaming platforms, allowing users to broadcast their events to remote guests who cannot attend in person.
                                </li>
                                <li>
                                    Gift Registry and Wishlist: Enable users to create gift registries or wishlists for their events, making it easy for guests to select and purchase gifts.
                                </li>
                                <li>
                                    Green Event Planning: Promote eco-friendly event planning by suggesting sustainable practices and vendors, helping users reduce their environmental footprint.
                                </li>
                                <li className="pb-[80px]">
                                    Event Inspiration Hub: Create a section of the platform dedicated to event inspiration, featuring real event stories, DIY ideas, and success stories from other users.
                                </li>



                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Speciality;