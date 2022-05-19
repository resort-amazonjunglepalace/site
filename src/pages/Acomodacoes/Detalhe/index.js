import React from "react";
import {useParams} from "react-router-dom";
import PageHeader from "../../../components/Header/pageHeader"
import PageDetalheTitle from "../../../components/Header/pageDetalheTitle";
import Section_Midias from "../../../components/Section/Midias";
import Footer from '../../../components/Rodape';
import Motor from "../../../components/Motor";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import './style.css';

export default function AcomodacoesDetalhe(){
    const {detalhe} = useParams();
  
    let title = "";
    let description = "";
    switch(detalhe){
      case 'suite_junior':
        title = "Suíte Junior";
        description += `Conheça nossas acomodações e escolha a melhor para desfrutar ao máximo sua estada conosco no Amazon Jungle Palace.
        A torre principal é constituída pelas suítes: Nobre, Master e Imperial Perfeitas para quem gosta de espaço, requinte, luxo e uma dose extra de conforto.
        Já na torre secundária estão localizadas as categorias: superiores, luxo e junior, ideal para quem busca economia sem abrir mão do conforto e comodidade. 
        Nosso hotel proporciona um clima luxuoso em todas as acomodações e é ideal para famílias ou grupos de amigos. 
        Todos as suítes são privativas e possuem ar condicionado, TV com acesso a netflix e canais abertos, chuveiro elétrico,  roupas de banho e amenities especiais.`; 
        break;
      case 'suite_master':
        title = "Suíte Master";
        description += `A ${title} foi construída dentro dos mais altos padrões da hotelaria.`; 
        description += "Os 3 (três) apartamentos que dispomos nesse categoria apresentam diferenças extremamente"; 
        description += "sutis entre si. Todas contam com com sacada, vista para piscina, cama King Size, banheiro privativo e secador de cabelos.";
        break;
      case 'suite_superior':
        title = "Suíte Superior";
        description += `Conforto e luxo com uma paisagem natural incrível pertinho de você assim é a Suíte Superior! Perfeito para curtir uma estada cheia de romance e relaxamento, possui como cenário uma
        vista panorâmica para o lago e floresta! 
        15 m² acomoda até 2 pessoas  (Sem Varanda)`; 
      break;

    }

    return(
        <>
            <PageHeader />

            {/* <PageDetalheTitle  
            title={title}
            description={description} /> */}


            {detalhe == 'suite_superior' && 
            <div>

            <div className="page_section">
                <div className="page_title">Suíte Superior</div>
                <div className="page_description_1">
                Conforto e luxo com uma paisagem natural incrível pertinho de você. Assim é a Suíte Superior! 
                Perfeita para curtir uma estadia cheia de romance e relaxamento, possui como cenário uma vista panorâmica para o lago e para a floresta! 
                <br /><strong>15 m² acomoda até 2 pessoas  (Sem Varanda)</strong>
                </div>
            </div>
            

            <div className="page-content">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/superior/2.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/superior/1.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/superior/3.jpg'} height="400px" /> </SwiperSlide>
              </Swiper>

            </div>

            <div className="section-container">
              <div className="section-title">Vantagens da {title}</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                    <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Vista privilegiada para o lago e floresta</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      {/* <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li> */}
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>

                    </ul>


                  </div>
              </div>
            </div>
            
            
            </div>}




            {detalhe == 'suite_luxo' && 
            <div>
              
            <div className="page_section">
                <div className="page_title">Suíte Luxo</div>
                <div className="page_description_1">
                  Experimente a sensação de estar na Amazônia com todo conforto e estilo que você merece. 
                  O quarto Luxo é a opção ideal para aproveitar momentos de pura conexão e relaxamento em meio à natureza. 
                  <br/> <strong>20 m² | acomoda até 4 pessoas | varanda e vista para rio e floresta ou piscina e floresta. </strong>
                </div>
            </div>
            

            <div className="page-content">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/luxo/1.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/luxo/2.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/luxo/3.jpg'} height="400px" /> </SwiperSlide>
              </Swiper>

            </div>

            <div className="section-container">
              <div className="section-title">Vantagens da Luxo</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      {/* <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li> */}
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>

                    </ul>


                  </div>
              </div>
            </div>
            
            
            </div>}


            



            {detalhe == 'suite_imperial' && 
            <div>
              
            <div className="page_section">
                <div className="page_title">Suíte Imperial</div>
                <div className="page_description_1">
                Perfeita para quem quer espaço ou aproveitar a estada em família. O luxo significa certamente um nível excepcional de conforto e serviço nessa suíte, que é a mais sofistificada do hotel. 
                <strong>Possui uma ampla sala de estar com  mesa para refeições, sofá cama, deck privativo com jacuzzi para o lago e floresta.</strong> O quarto conta com cama King Size e varanda privativa. 
                <br/><strong>45m² | acomoda até 4 pessoas | deck privativo para o lago e floresta.</strong>
                </div>
            </div>
            

            <div className="page-content">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                
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

            <div className="section-container">
              <div className="section-title">Vantagens da Imperial</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sala de Estar </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Jacuzzi</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          Netflix </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Mesa de Jantar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sofá Cama</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sofá Cama Kinsize</li>
                      
                    </ul>


                  </div>




              </div>
            </div>
            
            
            </div>}








            {detalhe == 'suite_nobre' && 
            <div>
              
            <div className="page_section">
                <div className="page_title">Suíte Nobre</div>
                <div className="page_description_1">
                  Uma verdadeira suíte de nobre. Com sala de estar e <strong>sacada 360</strong>, a suíte nobre é ampla e charmosa. Possui, além de todas as facilidades, uma varanda privativa com uma vista privilegiada de toda a floresta, lago e piscina. 
                  <br/><strong>45 m², varanda 61m | acomoda até 4 pessoas | varanda 360 com vista para a floresta, lago e piscina </strong>
                </div>
            </div>
            

            <div className="page-content">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/nobre/2.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/nobre/3.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/nobre/4.jpg'} height="400px" /> </SwiperSlide>
              </Swiper>

            </div>

            <div className="section-container">
              <div className="section-title">Vantagens da Nobre</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      {/* <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li> */}
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>

                    </ul>


                  </div>
              </div>
            </div>
            
            
            </div>}









            {detalhe == 'suite_master' && 
            <div>
              
            <div className="page_section">
                <div className="page_title">Suíte Master</div>
                <div className="page_description_1">
                  Experimente a sensação de estar na Amazônia com todo conforto e luxo que você merece. A Suíte Master é a opção ideal para aproveitar momentos de pura conexão e relaxamento em meio à natureza. 
                  <br/><strong>28 m² | acomoda até 3 pessoas | quarto amplo com varanda</strong>
                </div>
            </div>
            

            <div className="page-content">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/master/1.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/master/2.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/master/1.jpg'} height="400px" /> </SwiperSlide>
              </Swiper>

            </div>

            <div className="section-container">
              <div className="section-title">Vantagens da Master</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      {/* <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li> */}
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>

                    </ul>


                  </div>
              </div>
            </div>
            
            
            </div>}






            {detalhe == 'suite_junior' && 
            <div>
              
            <div className="page_section">
                <div className="page_title">Suíte Júnior</div>
                <div className="page_description_1">
                  Perfeita para uma estada em família. A Suíte Júnior tem como cenário a vista panorâmica para a piscina.
                  <br/><strong>23 m² | acomoda até 3 pessoas | varanda e vista para piscina</strong>
                </div>
            </div>
            

            <div className="page-content">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/junior/1.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/junior/2.jpg'} height="400px" /> </SwiperSlide>
              <SwiperSlide><img src={process.env.PUBLIC_URL+'/assets/img/suites/junior/1.jpg'} height="400px" /> </SwiperSlide>
              </Swiper>

            </div>

            <div className="section-container">
              <div className="section-title">Vantagens da Júnior</div>
              <div className="section-wrapper page-section-wrapper">
                  <div className="section-wrapper-item">
                
                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-wifi.png'} height="25"/> 
                          Internet Wi-fi em todas as áreas públicas </li>
                      {/* <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-balcony.png'} height="25"/> 
                          Sacada </li> */}
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-air-conditioner.png'} height="25"/> 
                          Ar-Condicionado</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-telephone.png'} height="25"/> 
                          Telefone</li>

                    </ul>

                  </div>
                  <div className="section-wrapper-item">
                    

                    <ul>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-pool.png'} height="25"/> 
                          Visite para a piscina </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-tv.png'} height="25"/> 
                          TV </li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-minibar.png'} height="25"/> 
                          Frigobar</li>
                      <li><img src={process.env.PUBLIC_URL+'/assets/img/icon-curtain.png'} height="25"/> 
                          Cortina e Blackout</li>

                    </ul>


                  </div>
              </div>
            </div>
            
            
            </div>}



            



            <Section_Midias />
            <Footer />
            <Motor />



        </>
      );
}
