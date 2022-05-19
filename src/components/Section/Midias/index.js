import { Link } from 'react-router-dom';
import './style.css';

function Midias(){
    return(
        <>
            <div className="section">
                <div className="section-wrapper-midias">
                    <div className="section-wrapper-midias-item">

                        <div className="section-wrapper-midias-item-title">
                            Mídias Socias
                        </div>
                        <Link target="_blank" to={{pathname: `https://www.instagram.com/amazonjunglepalaceoficial/`}}><img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-instagram.png'} /> </Link>
                        
                        <Link target="_blank" to={{pathname: `https://pt-br.facebook.com/amjunglepalace/`}}><img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-facebook.png'} /> </Link>

                        <Link target="_blank" to={{pathname: `https://www.tripadvisor.com.br/Hotel_Review-g303235-d1741125-Reviews-Amazon_Jungle_Palace-Manaus_Amazon_River_State_of_Amazonas.html`}}><img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-tripadvisor.png'} /> </Link>

                        
                    </div>
                    <div className="section-wrapper-midias-item">
                        <div className="section-wrapper-midias-item-3">
                            <div className="section-wrapper-midias-item-box">
                                <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-email.png'} /> 
                                <strong>E-Mail</strong>
                                <span>reservas@amazonjunglepalace.com.br</span>
                            </div>
                            <div className="section-wrapper-midias-item-box">
                                <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-telefone.png'} /> 
                                <strong>Telefone</strong>
                                {/* <span>+55 (92) 99285-5215</span>      */}
                                {/* <span>+55 (92) 99244-8361</span>      */}
                                <span>Atendimento das 08:00 às 18:00 Horas</span>
                                <span>+55 (92) 3211-3973</span>    
                            </div>
                            <div className="section-wrapper-midias-item-box">
                                <Link target="_blank" to={{pathname: `https://api.whatsapp.com/send?phone=5592984057698&text=Ol%C3%A1%2C%20seja%20bem%20vindo.%20Sou%20um%20assistente%20virtual%2C%20me%20pergunte%20algo!`}}>
                                <img src={process.env.PUBLIC_URL+'/assets/img/icon-rodape-whatsapp.png'} /> 
                                <strong>Whatsapp</strong>
                                <span>Atendimento das 08:00 às 23:00 Horas</span>
                                <span>+55 (92) 99244-8361</span>                               
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Midias;