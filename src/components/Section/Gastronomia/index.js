import { Link } from 'react-router-dom';
import './style.css';

function Gastronomia(){
    return(
        <>
            <div className="section">
                <div className="section-container">
                    <div className="section-title">Gastronomia</div>
                    <div className="section-wrapper">
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-image">
                            <img src={process.env.PUBLIC_URL+'/assets/img/gastronomia-home.jpg'} 
                                 alt="Amazon Jungle Palace"/>
                            </div>
                        </div>
                        <div className="section-wrapper-item">
                            <div className="section-wrapper-item-title">
                                Experimente a Culinária Amazônica
                            </div>

                            <div className="section-wrapper-description">
                                Conheça o nosso espaço, pensado para trazer inesquecíveis experiências. Visuais, com as exuberantes vistas do Rio Negro, e gastronômicas, com os mais diversos sabores em verdadeiras obras culinárias. 
                            </div>

                            <div className="section-wrapper-item-btn">
                                <Link to="/gastronomia" className="btn">Conheça Mais</Link>
                            </div>

                        </div>
                    </div>
             
                </div>
            </div>
        </>
    );
}
export default Gastronomia;