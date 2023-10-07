/* eslint-disable no-unused-vars */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

    const { name, images, price, short_description, long_description } = findService || {};

    // const firstImage = images.length > 0 ? images[0] : null;
    // console.log(images.length)
    // console.log(images)

    // const firstImageSource = images[0];

    return (
        <div>

            Service Details : {id};

            <div className="text-5xl text-center font-bold">
                {name}

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
                <SwiperSlide><img className='h-[400px] w-full' src="/public/Banner/b1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full' src="/public/Banner/b2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[400px] w-full' src="/public/Banner/b3.jpg" alt="" /></SwiperSlide>
               


            </Swiper>
            </div>







         






        </div>
    );
};

export default Sdetails;