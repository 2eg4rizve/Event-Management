/* eslint-disable react/no-unescaped-entities */
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ScrollRestoration } from "react-router-dom";

const Festive = () => {
    return (
        <div>
             <ScrollRestoration />
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Foods</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/NLyN7L7/photo-1546069901-ba9599a7e63c-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-MXxh.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/ZxZ0Q1D/premium-photo-1663852297267-827c73e7529e-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/1QbS5gw/photo-1555939594-58d7cb561ad1-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-MXxh.jpg" alt="" /></SwiperSlide>





                </Swiper>

                <div className='mt-[20px] font-bold p-5'>
                    <li>Catering Services: Arrange for a variety of catering services to suit different tastes and dietary restrictions, including options for vegetarian, vegan, gluten-free, and other dietary preferences.</li>
                    <li>
                        Menu Planning: Collaborate with professional chefs or caterers to create customized menus that match the theme and ambiance of the event.
                    </li>
                    <li>
                        Food Stations: Set up interactive food stations or food bars where guests can customize their meals or snacks, such as a taco bar, sushi station, or dessert bar.
                    </li>
                    <li>
                        Beverage Selection: Offer a diverse range of beverages, including alcoholic and non-alcoholic options. Consider signature cocktails or mocktails that tie into the event theme.
                    </li>
                    <li>
                        Food Presentation: Pay attention to food presentation and plating to create an aesthetically pleasing dining experience.
                    </li>
                    <li>
                        Tasting Sessions: Organize food tastings for clients to help them choose their preferred menu items.
                    </li>
                    <li>
                        Food Safety: Ensure that all food handling and preparation adhere to food safety regulations to prevent any health concerns among attendees.
                    </li>
                </div>


            </div>

            {/* 2 */}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Drinks</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/GCVCRQQ/premium-photo-1679436985501-c6e960aa5578-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/F5JGQJt/photo-1513558161293-cdaf765ed2fd-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/SPBdLWQ/premium-photo-1679397830538-9b5caedc85d2-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>





                </Swiper>

                <div className='mt-[20px] font-bold p-5'>
                    <li>Beverage Options: Offer a diverse range of beverage options, including alcoholic and non-alcoholic choices. Ensure there are options for all guests, including those with dietary restrictions or preferences.</li>
                    <li>
                        Drink Stations: Consider setting up drink stations or bars in strategic locations throughout the event venue for easy access to refreshments.
                    </li>
                    <li>
                        Customized Beverage Menus: Create customized beverage menus that showcase the available drink options, including descriptions and pricing.
                    </li>
                    <li>
                        Non-Alcoholic Alternatives: Ensure there are appealing non-alcoholic alternatives for designated drivers, underage guests, and those who prefer not to consume alcohol.
                    </li>
                    <li>
                        Drink Service Timing: Coordinate the timing of drink service to align with different phases of the event, such as cocktail hours, toasts, and dancing.
                    </li>
                </div>
            </div>

            {/* 3 */}

            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Music</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/YWwpXPP/photo-1470225620780-dba8ba36b745-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/89H3P8V/photo-1619983081563-430f63602796-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/WgfTmkF/photo-1459749411175-04bf5292ceea-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>





                </Swiper>

                <div className='mt-[20px] font-bold p-5'>
                    <li>
                        Music Selection: Work closely with clients to understand their musical preferences and curate playlists or select live performers that align with the event's theme and mood.
                    </li>
                    <li>
                        Live Entertainment: Consider booking live bands, solo musicians, DJs, or other live entertainment acts to provide a dynamic and engaging musical experience.
                    </li>
                    <li>
                        Sound Equipment: Ensure that high-quality sound equipment, including speakers, microphones, and amplifiers, is available to provide clear and balanced audio throughout the event.
                    </li>
                    <li>
                        Venue Acoustics: Evaluate the acoustics of the event venue to determine if any adjustments or enhancements are needed to optimize the sound quality.
                    </li>
                    <li>
                        Music for Different Phases: Plan music for different phases of the event, including background music during arrival, upbeat tunes for dancing, and softer melodies for dining.
                    </li>
                    <li>
                        Song Requests: Offer a platform for attendees to make song requests in advance or during the event to personalize the music experience.
                    </li>
                </div>


            </div>

            {/* 4 */}

            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Dance</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/NpqPfBR/photo-1537365587684-f490102e1225-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/WHBBN6n/photo-1508700929628-666bc8bd84ea-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/KGb7KWm/photo-1621976360623-004223992275-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>





                </Swiper>

                <div className='mt-[20px] font-bold p-5'>

                    <li>
                        Dance Floor Design: Plan the layout and design of the dance floor area, considering factors like size, shape, and location within the venue to encourage dancing.
                    </li>
                    <li>
                        Dance Styles: Offer a variety of dance styles or themes based on client preferences and the event's atmosphere, such as ballroom, salsa, hip-hop, or line dancing.
                    </li>
                    <li>
                        Professional Dancers: Arrange for professional dancers or dance instructors to lead and engage guests in dance lessons or demonstrations.
                    </li>
                    <li>
                        Dance Performances: Schedule dance performances, showcases, or dance troupes to entertain guests and inspire them to join in the dance.
                    </li>
                    <li>
                        Interactive Dance: Encourage audience participation through interactive dance games, competitions, or dance-offs.
                    </li>
                    <li>
                        Live Bands or DJs: Ensure that live bands or DJs are well-versed in playing music that encourages dancing and keeps the energy level high.
                    </li>


                </div>


            </div>


            {/* 5 */}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Fun</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/y5PPv7m/premium-photo-1661777211390-125ba8631767-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/vvLwJBh/photo-1501386761578-eac5c94b800a-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/RDmMyP4/photo-1542304074-9c8ce93b52fd-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-MXxh.jpg" alt="" /></SwiperSlide>





                </Swiper>

                <div className='mt-[20px] font-bold p-5'>

                    <li>Thematic Decor: Incorporate thematic decor elements that set the tone for the event and create a fun and immersive atmosphere.</li>
                    <li>Interactive Games: Plan and organize interactive games and activities for guests to enjoy during the event. Examples include trivia, scavenger hunts, or photo booths with props.</li>
                    <li>
                        Entertainment: Arrange for a variety of entertainment options such as magicians, comedians, caricature artists, or stilt walkers to keep guests entertained.
                    </li>
                    <li>
                        Themed Costumes: Encourage attendees to dress in costumes or outfits that align with the event's theme, adding a playful and festive element.
                    </li>
                    <li>
                        Live Performances: Feature live performances like musical acts, dance troupes, or acrobats to captivate the audience and enhance the entertainment factor.
                    </li>
                    <li>
                        Interactive Photo Ops: Set up interactive photo opportunities with fun backdrops, props, and a professional photographer or photo booth for guests to capture memories.
                    </li>

                </div>


            </div>


            {/* 6*/}
            <div className='mt-[100px]'>
                <p className='text-center text-5xl font-bold mb-[20px]'>Games</p>
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
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/zJQBbdj/photo-1685914963814-74488677bc92-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/g73wzwG/photo-1685914962460-f362d85829fa-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[400px] w-full' src="https://i.ibb.co/7nHghMJ/premium-photo-1687919416905-546b7901d189-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A.jpg" alt="" /></SwiperSlide>





                </Swiper>

                <div className='mt-[20px] font-bold p-5'>
                    <li>
                        Game Selection: Curate a selection of games that align with the event's theme, atmosphere, and the preferences of the attendees.
                    </li>
                    <li>Interactive Gaming Areas: Designate specific areas for gaming activities, whether indoors or outdoors, and ensure they are well-equipped with all necessary materials.</li>
                    <li>
                        Game Hosts: Hire game hosts or facilitators who can explain the rules, keep score, and ensure the smooth flow of gaming activities.
                    </li>
                    <li>
                        Variety of Games: Offer a variety of games to cater to different interests and age groups. Examples include board games, lawn games, card games, and interactive video games.
                    </li>
                    <li>
                        Customized Games: Create custom or branded games that are unique to the event, adding a personalized touch and making the event more memorable.
                    </li>
                    <li>
                        Team Building Games: Incorporate team-building games and activities for corporate or group events to encourage collaboration and camaraderie among attendees.
                    </li>


                </div>


            </div>





        </div>
    );
};

export default Festive;