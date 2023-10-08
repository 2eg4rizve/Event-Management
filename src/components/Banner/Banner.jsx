import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div>

            <div className='flex mb-[20px] z-0'>
                <button className='btn btn-primary bg-[#F4E869] text-black'>Contact Us</button>
                <Marquee pauseOnHover={true} speed={150}>
                    <p className='text-red-500 mr-[50px]'>Mobile : 01877777777</p>
                    <p className='text-red-500 mr-[50px]'>Mobile : 01988888888</p>
                    <p className='text-red-500 mr-[50px]'>Mobile : 01766666666</p>
                    <p className='text-red-500 mr-[50px]'>Email : Riz@gmail.com</p>
                    <p className='text-red-500 mr-[50px]'>Facebook : Riz@gmail.com</p>
                    <p className='text-red-500 mr-[50px]'>Address : Halishahar, Chittagong</p>
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

                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/wNpLrBb/b3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/TPM04FK/b2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/WF9gYyk/b4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/Jt0T28g/b5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/MZSpHmF/b6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/JcbT7m7/w3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/3Bp1S39/bp2.jpg"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/5Yvy6XV/ap0.webp"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/t3JLNrg/photo-1507504031003-b417219a0fde-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpgg"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/DkzWsHy/rp1.jpg"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/H21vbBk/bp2.jpg"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/Q6vwsGs/hp1.jpg"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/JnhcT32/ep2.jpg"alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[600px] w-full' src="https://i.ibb.co/S37M8wv/cp1.webp"alt="" /></SwiperSlide>


            </Swiper>

        </div>
    );
};

export default Banner;