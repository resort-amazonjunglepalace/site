import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper";
import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import Section_Midias from "../../components/Section/Midias";
import Footer from "../../components/Rodape";
import Motor from '../../components/Motor';
import { HashLink } from 'react-router-hash-link';
import "swiper/css";
import "swiper/css/navigation";

export default function Eventos(){
    return(
    <>
        <PageHeader />
        {/* <PageTitle 
        title="Eventos"
        description="Texto" /> */}
    
    <div className="page_section">
                <div className="page_title">Eventos</div>
                <div className="page_description_2">
                    <p>A riqueza da nossa região permite possibilidades e alternativas de negócios ainda não descobertas. Permita-se aprender a reconhecer um bom negócio, com a correta orientação para usar os recursos naturais de forma racional e sustentável.</p>
                </div>
            </div>


        <div className="page-section-content">
            <div className="page-section-container">
                
            </div>


            <Swiper
                loop={true}
                spaceBetween={5}
                slidesPerView={5}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, Navigation]}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                   
                    <SwiperSlide>
                        <HashLink smooth to="/eventos#0" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/eventos/cupuacu/1.jpg'} height="250px" /> 
                            Sala Cupuaçu
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/eventos#1" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/eventos/guarana/1.jpg'} height="250px" /> 
                            Auditório Guaraná
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/eventos#2" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/eventos/deck_piquia/1.jpg'} height="250px" /> 
                            Deck Piquiá
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/eventos#3" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/eventos/araticum/1.jpg'} height="250px" /> 
                            Restaurante Araticum
                        </HashLink>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HashLink smooth to="/eventos#4" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/eventos/castanha/1.jpg'} height="250px" /> 
                            Restaurante Castanha da Amazônia
                        </HashLink>
                    </SwiperSlide>
                </Swiper>





            <div className="section-wrapper" id="0">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/eventos/cupuacu/1.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Sala Cupuaçu</div>     
                    <div className="section-wrapper-item-description">
                        <p>Capacidade: 30 pessoas sentadas</p>
                        <p>Tamanho: 9,30 m x 11 m x 2,90 m</p>
                    </div>
                    
                </div>   
                
            </div> 


            <div className="section-wrapper" id="1">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Auditório Guaraná</div>     
                    <div className="section-wrapper-item-description">
                        <p>Capacidade: 100 pessoas sentadas</p>
                        <p>Tamanho: 9,30 m x 11 m x 2,90 m.</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/eventos/guarana/1.jpg'}/> 
                    </div>
                </div>   
            </div> 



            <div className="section-wrapper" id="2">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/eventos/deck_piquia/1.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Deck Piquiá</div>     
                    <div className="section-wrapper-item-description">
                        <p>Capacidade: 800 pessoas sentadas</p>
                        <p>Tamanho: 12 m x 21 m x 2,16 m</p>
                    </div>
                    
                </div>   
                
            </div> 



            <div className="section-wrapper" id="3">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Restaurante Araticum</div>     
                    <div className="section-wrapper-item-description">
                        <p>Capacidade: 250 pessoas sentadas</p>
                        <p>Tamanho: 40 m x 20 m x 5,20 m</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/eventos/araticum/1.jpg'}/> 
                    </div>
                </div>   
                                
            </div> 



            <div className="section-wrapper" id="4">

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/eventos/castanha/1.jpg'}/> 
                    </div>
                </div>   
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Restaurante Castanha da Amazônia</div>     
                    <div className="section-wrapper-item-description">
                        <p>Capacidade: 500 pessoas sentadas</p>
                        <p>Tamanho: 40 m x 20 m x 5,20 m</p>
                    </div>
                    
                </div>   

                                
            </div>








        </div>

        <Section_Midias />
        <Footer />
        <Motor />

    </>
    );
}