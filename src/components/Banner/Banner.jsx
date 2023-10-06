import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
    return (
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