/* eslint-disable no-unused-vars */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Speciality from '../../components/Speciality/Speciality';


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

                <p className='font-semibold'>
                    {features}
                </p>
            </div>

            <div>
                <Speciality></Speciality>
            </div>














        </div>
    );
};

export default Sdetails;