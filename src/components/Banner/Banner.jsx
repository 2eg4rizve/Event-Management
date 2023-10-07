import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>

            <div className='flex mb-[20px]'>
                <button className='btn btn-primary'>Contact Us</button>
                <Marquee pauseOnHover={true} speed={150}>
                   <p className='text-red-500 mr-[50px]'>Mobile : 01877777777</p>
                   <p className='text-red-500 mr-[50px]'>Mobile : 01988888888</p>
                   <p className='text-red-500 mr-[50px]'>Mobile : 01766666666</p>
                   <p className='text-red-500 mr-[50px]'>Email : Riz@gmail.com</p>
                   <p className='text-red-500 mr-[50px]'>Facebook : Riz@gmail.com</p>
                </Marquee>
            </div>

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
                <SwiperSlide><img className='h-[600px] w-full' src="/public/Banner/b1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="/public/Banner/b2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="/public/Banner/b3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="/public/Banner/b4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="/public/Banner/b5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="/public/Banner/b6.jpg" alt="" /></SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Banner;