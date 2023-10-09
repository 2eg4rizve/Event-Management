/* eslint-disable react/no-unescaped-entities */

import { ScrollRestoration } from "react-router-dom";

const Blog = () => {
    return (
        <div >
            <ScrollRestoration />

            <h1 className="text-center text-5xl font-bold my-[50px]">  Blog </h1>

            <div className="mt-[50px]  p-[30px]">


                <div className="mb-[20px]">
                    <p className="font-bold">Sarah Johnson (Weddings Enthusiast):</p>
                    <p>Comment: "I recently used Social Events for my wedding planning, and I couldn't be happier with the results. The attention to detail and personalized service made our day truly magical. Thank you for making our dream wedding a reality!"</p>
                </div>

                <div className="mb-[20px]">
                    <p className="font-bold">David Smith (Birthday Party Host):</p>
                    <p>Comment: "Social Events turned my birthday party into an unforgettable experience! The planning and execution were flawless. My guests had a blast, and I couldn't have asked for a better celebration. Kudos to your team!"</p>
                </div>

                <div className="mb-[20px]">
                    <p className="font-bold">Olivia Davis (Anniversary Celebrator):</p>
                    <p>Comment: "Celebrating our anniversary with Social Events was a fantastic decision. The team's creativity and dedication in organizing our special day were beyond expectations. It felt like our love story came to life all over again."</p>
                </div>

                <div className="mb-[20px]">
                    <p className="font-bold">Emma White (Engagement Party Planner):</p>
                    <p>Comment: "I can't thank Social Events enough for making our engagement party a huge success. The professionalism and expertise they brought to the table were remarkable. It set the perfect tone for our journey to 'I Do.'"</p>
                </div>


                <div className="mb-[20px]">
                    <p className="font-bold">James Miller (Retirement Party Organizer):</p>
                    <p>Comment: "Hats off to Social Events for orchestrating a retirement party that left a lasting impression. From the touching speeches to the seamless coordination, everything was superb. The retiree was truly honored."</p>
                </div>


                <div className="mb-[20px]">
                    <p className="font-bold">Sophie Carter (Baby Shower Host):</p>
                    <p>Comment: "Our baby shower organized by Social Events was a joyous occasion. The decorations, games, and attention to detail made it a day to remember. The mother-to-be was over the moon, and so were all the guests!"
                        These fictional comments showcase the satisfaction and appreciation of indiv</p>
                </div>

                <div className="mb-[20px]">
                    <p className="font-bold">Thomas and Emily Turner (Weddings Enthusiasts):</p>
                    <p>Comment: "Social Events made our dream wedding a reality. Their attention to detail, from the stunning venue to the exquisite decor, left us and our guests in awe. A heartfelt thanks to the team!"</p>
                </div>

                <div className="mb-[20px]">
                    <p className="font-bold">Isabella Martinez (Birthday Party Planner):</p>
                    <p>Comment: "Social Events made my son's superhero-themed birthday party unforgettable. The kids had a blast, and the parents were equally impressed. Your creativity and organization are top-notch!"</p>
                </div>


                <div className="mb-[20px]">
                    <p className="font-bold">John and Mary Williams (Anniversary Celebrators):</p>
                    <p>Comment: "Social Events helped us celebrate 50 wonderful years of marriage in style. The surprise party was a hit with our friends and family. It was an emotional and joyous affair. Thank you for the memories!"</p>
                </div>






            </div>

            <br />

            <div className="mt-[100px] space-y-3">
                <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs border-[#F4E869] border-2" />
                <br />
                <input type="text" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs border-[#F4E869] border-2" />

                <textarea className="textarea border-[#F4E869] border-2 w-full min-h-[200px]" placeholder="Type Your Comment"></textarea>

                <button className="btn btn-primary text-black w-full bg-[#F4E869]">Submit</button>

            </div>
        </div>
    );
};

export default Blog;