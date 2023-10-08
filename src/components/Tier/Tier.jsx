/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Tier = () => {
    return (
        <div>
           

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
                        <div className="card w-full max-h-full p-[20px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Silver Tier</h2>


                                <p className='text-center items-center mt-[50px] mb-[30px]'>
                                    Silver represents the basic or entry-level tier.
                                    It typically includes standard or essential features and services.
                                    Silver-level offerings are often budget-friendly and provide basic functionality without many frills.
                                </p>

                                <div className="card-actions justify-end ">
                                    <button className="btn btn-primary w-full ">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-full max-h-full p-[20px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Gold Tier</h2>


                                <p className='text-center items-center mt-[50px] mb-[30px]'>
                                    Gold is a step up from Silver and offers enhanced features and services.
                                    It may include additional perks, better quality, or a more comprehensive package.
                                    Gold-tier options provide a balance between affordability and improved value.
                                </p>

                                <div className="card-actions justify-end ">
                                    <button className="btn btn-primary w-full ">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-full max-h-full p-[20px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Premium Tier</h2>


                                <p className='text-center items-center mt-[50px] mb-[30px]'>
                                    Premium is a high-quality tier that offers top-tier features and services.
                                    It often includes exclusive benefits, exceptional quality, and a superior experience.
                                    Premium products or services are typically priced higher due to their added value.
                                </p>

                                <div className="card-actions justify-end ">
                                    <button className="btn btn-primary w-full ">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-full max-h-full p-[20px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Diamond Tier</h2>


                                <p className='text-center items-center mt-[50px] mb-[30px]'>
                                    Diamond represents the pinnacle of quality and luxury.
                                    It offers the best available features, services, and experiences.
                                    Diamond-level offerings are associated with exclusivity and are usually priced at a premium.
                                </p>

                                <div className="card-actions justify-end ">
                                    <button className="btn btn-primary w-full ">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card w-full max-h-full p-[20px] shadow-xl bg-[#F4E869]">

                            <div className="card-body  ">
                                <h2 className="card-title font-bold text-center justify-center text-4xl">Specials Tier</h2>


                                <p className='text-center items-center mt-[50px] mb-[30px]'>
                                    Specials can vary widely depending on the context of your tier list.
                                    This tier may include unique, limited-time, or seasonal offerings.
                                    Specials are often designed to stand out and create excitement or anticipation among customers.
                                </p>

                                <div className="card-actions justify-end ">
                                    <button className="btn btn-primary w-full ">Buy Now</button>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>























                </Swiper>


            </div>

        </div>
    );
};

export default Tier;