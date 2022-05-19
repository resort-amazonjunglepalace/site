import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import Footer from "../../components/Rodape";
import Motor from '../../components/Motor';
import { HashLink } from 'react-router-hash-link';

import "./style.css";

function Gastronomia(){
  

    return(
        <>  
          <PageHeader />
          
            <div className="page_section">
                <div className="page_title">Nossa Gastronomia</div>
                <div className="page_description_2">
                    <p>A culinária Amazônica é conhecida pela sua autenticidade peculiaridade de pratos devido à existência de mais de duas mil espécies de peixes nos rios do Amazonas. A culinária amazonense valoriza, acima de tudo, o pescado. </p>
                    <p>As principais espécies consumidas são o tambaqui, tucunaré, pirarucu, jaraqui, pacu e matrinxã, que são transformados em pratos típicos, servidos fritos, assados ou cozidos.</p>
                    <p>No <strong>Amazon Jungle Palace</strong> cada prato regional ganha um toque da gastronomia internacional e une o rústico ao luxo. Então prepare o seu paladar para desfrutar do que a Amazônia tem de melhor. </p>
                    <p><strong>Nossas tarifas já contemplão todas as refeições e bebidas não alcoólicas.</strong></p>
                </div>
            </div>




        <div className="page-section-content">


           <div className="page-section-container">


           </div>


                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={7}
                    slidesPerView={4}
                    modules={[Autoplay]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >

                    <SwiperSlide>
                        <HashLink smooth to="/gastronomia#0" className="swiperslider-link">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/1.jpg'} height="250px" /> 
                        <span>Café da manhã</span>
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/gastronomia#1" className="swiperslider-link">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/4.jpg'} height="250px" /> 
                        <span>Almoço e Jantar</span>
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/gastronomia#2" className="swiperslider-link">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/3.jpg'} height="250px" /> 
                        <span>Bebidas</span>
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/gastronomia#3" className="swiperslider-link">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/2.jpg'} height="250px" /> 
                        <span>Petiscos</span>
                        </HashLink>
                    </SwiperSlide>
                </Swiper>



            <div className="section-wrapper" id="0">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/1.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Café da Manhã</div>     
                    <div className="section-wrapper-item-description">
                        <p>Frutas variadas, tapiocas, tucumã, sucos naturais e outras iguarias amazônicas. Estes são alguns dos ingredientes que fazem parte de um café da manhã reforçado para dar aquele ânimo antes dos passeios na selva amazônica.</p>
                    </div>
                    
                </div>                   
            </div> 





            <div className="section-wrapper" id="1">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Almoço e Jantar</div>     
                    <div className="section-wrapper-item-description">
                        <p>O melhor cardápio é com o chef Júnior, adaptado aos mais exigentes paladares. Peixes, carnes e frango ganham um toque especial de requinte nas mãos do nosso chef! 
                        <br/>Venha saborear e se encantar com a melhor gastronomia da Amazônia. </p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/4.jpg'}/> 
                    </div>
                </div>                   
            </div> 





            <div className="section-wrapper" id="2">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/3.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Bebidas</div>     
                    <div className="section-wrapper-item-description">
                        <p>Uma boa dose de drink regional. Aqui, a regra é inovar e trazer os mais variados sabores ao seu paladar. </p> 
                        <p>Drinks amazônicos, cervejas, whiskys e vinhos! </p> 
                        <p>Além disso, dispomos de open bar de bebidas não alcoólicas: águas, refrigerantes e sucos.</p>
                    </div>
                    
                </div>                   
            </div> 




            <div className="section-wrapper" id="3">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Petiscos</div>     
                    <div className="section-wrapper-item-description">
                        <p>Para acompanhar o drink, é sempre bom um petisco para degustar enquanto bebe e troca um dedo de prosa ao lado de pessoas queridas. </p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia/2.jpg'}/> 
                    </div>
                </div>                   
            </div> 



        </div>
            

        <Footer />
        <Motor />
 
        </>
    );
}

export default Gastronomia;