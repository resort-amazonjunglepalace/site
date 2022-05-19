import { Link } from 'react-router-dom';
import './style.css';


function Acomodacoes(){
    return(
        <>
        <div className="wrapper-flex">
            <div className="item">
                <div className="item-images">
                    <div className="item-text">
                        <div className="item-title">
                            Acomodações na amazônia como você nunca viu
                        </div>
                        <div className="item-btn">
                            <Link to="/acomodacoes">Veja nossas Suítes</Link>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL+'/assets/img/acomodacoes-principal-1-1.png'} 
                        alt="Amazon Jungle Palace"/>
                </div>

            </div>
            <div className="item">
                <div className="item-cards">
                    <div className="item-card-box">
                        <div className="item-card-image">
                            <img src={process.env.PUBLIC_URL+'/assets/img/suite-01.png'} /> 
                        </div>

                        <div className="item-card-title">
                            Suíte Superior
                        </div>
                        <div className="item-card-description">
                            Conforto e luxo com uma paisagem natural incrível pertinho de você assim é a Suíte Superior! Perfeito para curtir uma estadia cheia de romance e relaxamento, possui como cenário uma <strong>vista panorâmica para o lago e para a floresta!</strong>
                        </div>

                        <Link to="/acomodacoes/suite_superior" className="btn-link">Ver Suíte</Link>

                    </div> 

                    <div className="item-card-box">
                        <div className="item-card-image">
                            <img src={process.env.PUBLIC_URL+'/assets/img/suite-02.png'} /> 
                        </div>

                        <div className="item-card-title">
                            Suíte Imperial
                        </div>
                        <div className="item-card-description">
                        Perfeita para quem quer espaço ou aproveitar a estada em família. O <strong>luxo</strong> significa certamente um nível excepcional de <strong>conforto e serviço</strong> nessa suíte, que é a mais sofistificada do hotel. 
                        </div>

                        <Link to="/acomodacoes/suite_imperial" className="btn-link">Ver Suíte</Link>

                    </div> 
                </div>

                
            </div>
        </div>
        </>
    );
}
export default Acomodacoes;