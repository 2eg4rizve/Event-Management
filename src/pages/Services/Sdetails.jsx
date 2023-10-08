/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Speciality from '../../components/Speciality/Speciality';

import { ScrollRestoration } from "react-router-dom";


import Marquee from "react-fast-marquee";

const Sdetails = () => {

    const [findService, setFindService] = useState();

    const { id } = useParams();

    // console.log(id);

    const services = useLoaderData();

    // console.log(services)

    useEffect(() => {
        const rec = services.find(service => service.id == id);

        setFindService(rec);

    }, [id, services])


    console.log("Find Service ", findService);

    const { name, images1, images2, images3, price, short_description, long_description, features } = findService || {};

    // const firstImage = images.length > 0 ? images[0] : null;
    // console.log(images.length)
    // console.log(images)

    // const firstImageSource = images[0];

    return (
        <div className=''>

            <ScrollRestoration />

            Service Details : {id};

            <div className="text-5xl text-center font-bold">
                {name}

            </div>

            <div className='flex mb-[30px]  mt-[30px]'>
                <button className='btn btn-primary bg-[#F4E869] text-black'>Contact Us</button>
                <Marquee pauseOnHover={true} speed={150}>
                    <p className='text-green-500 mr-[50px]'>Mobile : 01877777777</p>
                    <p className='text-green-500 mr-[50px]'>Mobile : 01988888888</p>
                    <p className='text-green-500 mr-[50px]'>Mobile : 01766666666</p>
                    <p className='text-green-500 mr-[50px]'>Email : Riz@gmail.com</p>
                    <p className='text-green-500 mr-[50px]'>Facebook : Riz@gmail.com</p>
                    <p className='text-green-500 mr-[50px]'>Address : Halishahar, Chittagong</p>
                </Marquee>
            </div>

            <p className="mt-[50px] text-center" >{long_description}</p>



            <h2 className="my-[40px] font-bold text-3xl text-center">Price : {price}$ - {price * 10}$ </h2>


            <div>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "red",
                        "--swiper-navigation-color": "green",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                >
                    <SwiperSlide><img className='h-[400px] w-full' src={images1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src={images2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src={images3} alt="" /></SwiperSlide>



                </Swiper>

                {/* <div className='text-center'>
                    <Speciality></Speciality>
                </div> */}
            </div>


            <div>
                <h1 className='text-center text-5xl font-bold my-[50px]'> Features</h1>

                <p className='font-semibold '>
                    {features}
                    {features}
                </p>
            </div>

            <div>
                <Speciality></Speciality>
            </div>






            <div className='mt-[50px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Tier List For Price</p>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "red",
                        "--swiper-navigation-color": "green",
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                // className="mySwiper"

                >
                    <SwiperSlide>
                        <div className="card w-full h-[400px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Silver</h2>
                                <p className='font-bold text-center justify-center text-3xl' >Price : {price}$ to {price + 2000}$ </p>


                                <p className='text-center '>
                                    Event management for weddings is an intricate process that encompasses a wide array of essential features. It begins with meticulous venue selection, considering factors like ambiance, capacity, and location. A wedding planner's expertise extends to theme and decor, where they create a visually captivating environment through floral arrangements, lighting, and decor elements.
                                </p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-full h-[400px]  shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Gold</h2>
                                <p className='font-bold text-center justify-center text-3xl' >Price : {price + 2000}$ to {price + 4000}$ </p>


                                <p className='text-center '>
                                    Coordinating various vendors, from caterers to photographers and musicians, is crucial to ensure that every aspect aligns seamlessly. Timeline management is paramount, as planners meticulously schedule the ceremony, reception, and all activities to ensure a flawless day. Budget management is another key aspect, helping couples make informed choices while staying within their financial constraints. Managing guest lists, seating arrangements, and communication with attendees ensures that everyone enjoys the celebration. On the wedding day
                                </p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="card w-full h-[400px]  shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Premium</h2>
                                <p className='font-bold text-center justify-center text-3xl' >Price : {price + 4000}$ to {price + 6000}$ </p>


                                <p className='text-center '>
                                    Catering encompasses arranging food, snacks, and refreshments that suit the occasion, often with a touch of whimsy. Guest management involves handling guest invitations, RSVPs, and seating arrangements to ensure a harmonious gathering. Keepsakes or party favors are provided, offering guests a tangible memento of the special occasion. Overall, event managers strive to create a joyous and memorable atmosphere that celebrates the expectant mother and the exciting journey into parenthood.


                                </p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className="card w-full h-[400px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Diamond</h2>
                                <p className='font-bold text-center justify-center text-3xl' >Price : {price + 6000}$ to {price * 10}$ </p>


                                <p className='text-center '>
                                    Catering encompasses arranging food, snacks, and refreshments that suit the occasion, often with a touch of whimsy. Guest management involves handling guest invitations, RSVPs, and seating arrangements to ensure a harmonious gathering. Keepsakes or party favors are provided, offering guests a tangible memento of the special occasion. Overall, event managers strive to create a joyous and memorable atmosphere that celebrates the expectant mother and the exciting journey into parenthood.Baby shower event management centers on celebrating expectant mothers and the impending arrival of their child. The process starts with theme selection, choosing themes that reflect the baby's gender or nursery decor and coordinating decorations accordingly.

                                </p>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>











                </Swiper>


            </div>














        </div>
    );
};

export default Sdetails;