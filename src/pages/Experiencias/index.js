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

import "./style.css";


export default function Experiencias(){
    return(
    <>
        <PageHeader />
       

            <div className="page_section">
                <div className="page_title">A melhor experiência de selva é no Amazon Jungle Palace</div>
                <div className="page_description_2">
                    <p>Conheça a Amazônia de forma autêntica, com o charme e conforto que você merece. </p>
                    <p>Está em busca de uma boa dose de aventura e conhecer as incríveis belezas naturais da Amazônia? </p>
                    <p>Temos os melhores e mais completos pacotes de selva.</p>
                    <p><strong>Todos os pacotes incluem: </strong></p>
                    <ul className="page_description_list">
                        <li>Traslado fluvial in e out; </li>
                        <li>Ponto de embarque em Manaus - em píer particular do hotel com segurança; </li>
                        <li>Café da manhã, almoço, janta e bebidas não alcoólicas. </li>
                    </ul>
                    <p><strong>Escolha o seu!</strong></p>
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
                        <HashLink smooth to="/experiencias#0" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/curupira_folclore.jpeg'} height="250px" /> 
                            AJP Curupira - 2 Dias e 1 Noite
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/experiencias#1" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/caroco.jpg'} height="250px" /> 
                            AJP Caroço - 3 Dias e 2 Noites
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/experiencias#2" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/boitata.jpeg'} height="250px" /> 
                            AJP Boitata - 4 Dias e 3 Noites
                        </HashLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <HashLink smooth to="/experiencias#3" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/caipora_india.jpeg'} height="250px" /> 
                            AJP Caipora - 5 Dias e 4 Noites
                        </HashLink>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HashLink smooth to="/experiencias#4" className="swiperslider-link">
                            <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/iara.jpeg'} height="250px" /> 
                            AJP Iara - 6 Dias e 4 Noites
                        </HashLink>
                    </SwiperSlide>
                </Swiper>
            <div className="section-wrapper" id="0">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/curupira_folclore.jpeg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">AJP CURUPIRA - 2 DIAS e 1 NOITE </div>     
                    <div className="section-wrapper-item-description">                        
                        <p> A lenda fala que o curupira além de aterrorizar os caçadores, 
                        ele também era responsável por fazê-los se perder na floresta. Uma 
                        forma de atormentar os caçadores era o ato 
                        de o curupira assoviar continuadamente. O curupira evita estar nos locais com grande presença 
                        humana, somente indo atrás de humanos quando eles entram na floresta para 
                        caçar ou derrubar árvores. Escolhemos esse tema porque nesse pacote teremos 
                        muita aventura dentro da mata amazônica e vai que encontramos o curupira.<br /><br /> </p>
                        <ul className="section-wrapper-list">   
                            <span className="bold">Passeios inclusos: </span>  
                            <li>Tour pelo lago salvador;</li>
                            <li>Tour na selva;</li>
                            <li>Competição de canoagem cabocla;</li>
                            <li>Trilha interpretativa na floresta;</li>
                            <li>Relaxamento no Deck;</li>
                            <li>Hidro show;</li>                            
                            <li>Entretenimento interno.</li>
                        </ul>
                    
                    </div>
                    
                </div>   
                
            </div> 


            <div className="section-wrapper" id="1">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">AJP CAROÇO  3 DIAS e 2 NOITES</div>     
                    <div className="section-wrapper-item-description">
                    <p>Esse pacote recebe o nome de um ilustre morador do lago salvador 
                    onde o resort está localizado, o caroço é um jacaré açu de 2 metros que adora 
                    se exibir para os hospedes do resort. Nesse pacote teremos um pouco mais de 
                    diversão e inclusive teremos a focagem dos irmãos do caroço, assim como, visita 
                    as famosas ruínas de Paricatuba e contemplação da revoada das andorinhas.</p>                    
                        <ul className="section-wrapper-list">   
                            <span className="bold">Passeios inclusos: </span>  
                            <li>Atividades do pacote AJP Curupira;</li>                                                         
                            <li>Prática de arco e flecha indigena;</li>
                            <li>Prática de zarabatana indigena;</li>
                            <li>Pescaria recreativa;</li>
                            <li>Plante uma árvore;</li>
                            <li>Conhecendo as ruinas de paricatuba e comunidade;</li>
                            <li>Contemplação da revoada das andorinhas com por do sol;</li>
                            <li>Focagem de jacaré.</li>
                        </ul>                   
                    
                    </div>
                    
                </div>   

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/caroco.jpg'}/> 
                    </div>
                </div>   
                

                
            </div> 

            <div className="section-wrapper" id="2">
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/boitata-forest-guardian.jpeg'}/> 
                    </div>
                </div>   
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">AJP BOITATA - 4 DIAS e 3 NOITES</div>     
                    <div className="section-wrapper-item-description">
                        <p>O boitatá é um personagem do folclore que tem formato de uma cobra de fogo que expele 
                        suas chamas contra quem quer destruir as florestas e os campos. Escolhemos esse tema 
                        pois nesse pacote alem das atividades dos pacotes AJP Curupira e AJP Caroço teremos muitas atividades 
                        envolvendo agua e trilha noturna na floresta, afinal precisamos do fogo da cobra 
                        para que possamos enxergar na escuridão da floresta. Recomendamos que não tentem 
                        destruir a floresta, pois o Boitatá está de olho.</p>

                        <ul className="section-wrapper-list">   
                            <span className="bold">Passeios inclusos: </span>  
                            <li>Atividades do pacote AJP Caroço e AJP Curupira;</li>
                            <li>Encontro das aguas;</li>
                            <li>Tour no lago Janauari;</li>
                            <li>Simulação pesca de pirarucu;</li>
                            <li>Interação com os botos;</li>
                            <li>Trilha noturna na floresta amazônica com contos e lendas.</li>                            
                        </ul>                   
                    
                    
                    </div>
                    
                </div>   
                
            </div> 


            <div className="section-wrapper" id="4">
                 
                
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">AJP CAIPORA - 5 DIAS e 4 NOITES</div> 
                    <div className="section-wrapper-item-description">
                        <p>A caipora é um ser que faz parte do folclore brasileiro e é conhecido 
                        como o protetor dos animais contra os caçadores. Conhecida como uma índia bem 
                        pequena e que possui o corpo vermelho, reside na floresta e protege os 
                        animais de serem caçados. Nesse pacote o hospede passara o dia fazendo um 
                        tour pelos centros históricos e museus localizados no município de Manaus como 
                        Museu do seringal, museu do indio, teatro amazonas, mercado municipal, entre outros.</p>

                        <ul className="section-wrapper-list">   
                            <span className="bold">Passeios inclusos: </span>  
                            <li>Atividades do pacote AJP Caroço, AJP Curupira, AJP Boitata e Caipora;</li>
                            <li>Passeio na comunidade ribeirinha;</li>
                            <li>Uma tarde na comunidade indigena conhecendo costume e degustando especiarias;</li>
                            <li>Conhecendo a casa de farinha;</li>
                            <li>Ritual indigena;</li>
                            <li>Jantar de gala;</li>
                        </ul>                   
                    
                    
                    </div>
                    
                </div>   


                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/caipora_india.jpeg'}/>                         
                    </div>
                </div>  
                
            </div>


            <div className="section-wrapper" id="3">

                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-image">
                        <img src={process.env.PUBLIC_URL+'/assets/img/experiencia/iara.jpeg'}/> 
                    </div>
                </div>   
                <div className="section-wrapper-item">
                    <div className="section-wrapper-item-title">AJP Iara - 6 DIAS e 5 NOITES </div>
                    <div className="section-wrapper-item-description">
                        <p>Iara, também conhecida como “mãe d’água”, Na lenda, diz-se que a Iara 
                        é uma sereia, sendo parte mulher e parte peixe. Ela mora dentro de um rio 
                        e possui grande beleza física, uma bela voz e muitas riquezas. Ela é a 
                        protetora das aguas. Esse é o pacote mais completo e rico, a experiencia 
                        desse pacote é surpreendente, escolhemos a Iara como tema do pacote para a 
                        homenagear, pois o nosso  resort flutua sobre as águas onde a Iara é a mãe. Iara protege o nosso 
                        resort, e em troca não permitimos que as aguas sejam poluídas.</p>

                        

                        <ul className="section-wrapper-list">   
                            <span className="bold">Passeios inclusos: </span>  
                            <li>Atividades do pacote AJP Caroço, AJP Curupira e AJP Boitata;</li>
                            <li>Visita ao teatro amazonas;</li>
                            <li>Visita ao CIGS;</li>
                            <li>Visita ao Palácio do Rio Negro;</li>
                            <li>Visita ao museu da amazônia;</li>
                            <li>Visita ao mercado municipal;</li>
                            <li>Contemplação de pescaria indigena;</li>                            
                        </ul>   


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