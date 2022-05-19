import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import Section_Midias from './../Section/Midias';
import Footer from './../Rodape';
import Motor from '../Motor';
import './style.css';
import "swiper/css";
import "swiper/css/navigation";

function Content(){
    return(
        <>
            <div className="page-content">
                <div className="section-container">



                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Superior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Conforto e luxo com uma paisagem natural incrível pertinho de você assim é a Suíte Superior! 
                                    Perfeito para curtir uma estada cheia de romance e relaxamento, possui como cenário uma vista panorâmica para o lago e floresta!</p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_superior">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to={{pathname: `https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=&checkout=&adults=1&children=0&promocode=`}}>Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            pagination={{
                                clickable: true,
                              }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/superior/1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/superior/2.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/superior/3.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                    </div> 



                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            pagination={{
                                clickable: true,
                              }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/luxo/1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/luxo/2.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/luxo/3.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                        
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Luxo</div>     
                            <div className="section-wrapper-item-description">
                                <p>Experimente a sensação de estar na Amazônia com todo conforto e estilo que você merece. O quarto Luxo é a opção ideal para aproveitar momentos de pura conexão e relaxamento em meio à natureza. São 20 m² para acomodar até 4 pessoas, possui suíte com varanda e vista para rio e floresta ou piscina e floresta. </p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_luxo">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to={{pathname: `https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=&checkout=&adults=1&children=0&promocode=`}}>Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        
                    </div> 



                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Nobre</div>     
                            <div className="section-wrapper-item-description">
                                <p>Uma verdadeira suíte de nobre. Com sala de estar e sacada 360, a suíte nobre é ampla e charmosa. Possui, além de todas as facilidades, uma varanda privativa com uma vista privilegiada de toda a floresta, lago e piscina.</p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_nobre">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to={{pathname: `https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=&checkout=&adults=1&children=0&promocode=`}}>Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                              }}
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/nobre/2.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/nobre/3.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/nobre/4.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                    </div>



                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/imperial/1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/imperial/2.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/imperial/3.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/imperial/4.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/imperial/5.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                        
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Imperial</div>     
                            <div className="section-wrapper-item-description">
                                <p>
                                    Perfeita para quem quer espaço ou aproveitar a estada em família. O luxo significa certamente um nível excepcional de conforto e serviço nessa suíte, que é a mais sofistificada do hotel.
                                </p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_imperial">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to={{pathname: `https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=&checkout=&adults=1&children=0&promocode=`}}>Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        
                    </div> 


















                   <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Master</div>     
                            <div className="section-wrapper-item-description">
                                <p>Experimente a sensação de estar na Amazônia com todo conforto e luxo que você merece. A Suíte Master é a opção ideal para aproveitar momentos de pura conexão e relaxamento em meio à natureza.</p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_master">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to={{pathname: `https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=&checkout=&adults=1&children=0&promocode=`}}>Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/master/1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/master/2.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                    </div> 




                     <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/junior/1.jpg'} height="400px" /> </SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/junior/2.jpg'} height="400px" /> </SwiperSlide>
                            </Swiper>
                        </div>   
                        
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">Suíte Júnior</div>     
                            <div className="section-wrapper-item-description">
                                <p>Perfeita para uma estada em família. A Suíte Júnior tem como cenário a vista panorâmica para a piscina.</p>
                                <p>
                                    <Link className="btn" to="/acomodacoes/suite_junior">Detalhes</Link>
                                    <Link className="btn-outline" target="_blank" to={{pathname: `https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=&checkout=&adults=1&children=0&promocode=`}}>Reservar</Link>
                                </p>
                            </div>
                            
                        </div>   
                        
                    </div>  




                </div>
            </div>

            <Motor />
            <Section_Midias />
            <Footer />
        </>
    );
}

export default Content;