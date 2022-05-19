import { Swiper, SwiperSlide } from 'swiper/react';
import PageHeader from "../../components/Header/pageHeader";
import PageTitle from "../../components/Header/pageTitle";
import Section_Midias from "../../components/Section/Midias";
import Footer from "../../components/Rodape";
import Motor from '../../components/Motor';
import './style.css';

export default function Passeios(){
    return(
    <>
        <PageHeader />
        <PageTitle 
        title="Passeios Amazônicos"
        description="Texto" />
    


        <div className="page-section-content">
            <div className="page-section-container">
                <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/passeios/1.png'} height="250px" /> </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/passeios/2.png'} height="250px" /> </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/passeios/3.png'} height="250px" /> </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/passeios/4.png'} height="250px" /> </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/passeios/5.png'} height="250px" /> </SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/passeios/6.png'} height="250px" /> </SwiperSlide>
                </Swiper>
            </div>


            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/passeios/1-small.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Nascer e pôr do sol</div>     
                    <div className="section-wrapper-item-description">
                        <p>Relaxe e aprecie o nascer e pôr-do-sol em completa imersão com a natureza.</p>
                    </div>
                    
                </div>   
                
            </div> 


            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Encontro das águas</div>     
                    <div className="section-wrapper-item-description">
                        <p>Visita ao incrível encontro das águas dos Rios Negro e Solimões, que não se misturam.</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/passeios/2-small.jpg'}/> 
                    </div>
                </div>   
                

                
            </div> 

            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/passeios/3-small.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Trilha Interpretativa em floresta de terra firme</div>     
                    <div className="section-wrapper-item-description">
                        <p>Caminhada na selva, permitindo contato mais próximo à fauna e flora amazônica.</p>
                    </div>
                    
                </div>   
            </div> 



            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Lago janauari</div>     
                    <div className="section-wrapper-item-description">
                        <p>Visita à Reserva Ecológica Janauari e suas vitórias-régias incríveis.</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/passeios/4-small.jpg'}/> 
                    </div>
                </div>      
            </div> 




            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/passeios/5-small.jpg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Nadar com os botos cor-de-rosa</div>     
                    <div className="section-wrapper-item-description">
                        <p>O verdadeiro encontro com a natureza: nadar junto com os botos cor-de-rosa.</p>
                    </div>
                    
                </div>   
            </div> 


            <div className="section-wrapper">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">Tribo indígena</div>     
                    <div className="section-wrapper-item-description">
                        <p>Visita e interação a nativos indígenas em uma tribo, com apresentação de danças, histórias e artesanatos.</p>
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/passeios/6-small.jpg'}/> 
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