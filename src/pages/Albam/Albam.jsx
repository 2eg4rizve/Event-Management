
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Albam = () => {
    return (
        <div>
            Albam pages

            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Weddings</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/DQkqmYY/photo-1649183424680-464747a8e43d-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/tz6zfzq/photo-1520854221256-17451cc331bf-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/dmyvcQm/photo-1519225421980-715cb0215aed-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>




                </Swiper>

                {/* <div className='text-center'>
                    <Speciality></Speciality>
                </div> */}
            </div>


            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Birthday Parties</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/B3gnQQX/premium-photo-1691752880922-f89ff74f4c16-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/0r2p4Td/premium-photo-1692031545393-5e5904c1259c-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/kBphnCJ/premium-photo-1692880430217-00731a66c1ec-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>




                </Swiper>


            </div>

            {/* 3 */}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Anniversaries</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/4NmrSLb/photo-1654413413743-48d1c3772268-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/bXH5Fpb/premium-photo-1661592633747-1cca2a4d2caf-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/v3Px6Z4/premium-photo-1661590914661-5e7fbf566dd8-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>




                </Swiper>


            </div>


            {/* 4 */}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Engagement Partiess</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/K0jjdtk/photo-1622604061314-28cfb3ac2544-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/bPmm95B/photo-1496285416008-dfb54bbaedff-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/RNwj1FR/premium-photo-1661775142165-0c85050144fd-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>




                </Swiper>


            </div>


            {/* 5 */}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Retirement Parties</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/z2wVd31/premium-photo-1661575130123-af0fd4e08ac6-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/ChB4sX6/premium-photo-1681841276774-ce26ea1a43a5-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/17mVRn9/premium-photo-1683134070924-75ff53569b11-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>




                </Swiper>


            </div>


            {/* 6 */}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Baby shower</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/vqhhLM8/photo-1625990462521-a09e6b880d50-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/zRRVRRn/photo-1518228720823-c31477f48dc1-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/FDpP0Hs/photo-1548897969-80be2924dc9f-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-MXxh.jpg" alt="" /></SwiperSlide>




                </Swiper>


            </div>

        </div>
    );
};

export default Albam;