import './style.css';
import { Link } from 'react-router-dom';


function Nav(){

    const handleTranslate = (idioma) =>{
        if(idioma === 'es'){
            window.location.href = "https://www-amazonjunglepalace-com-br.translate.goog/?_x_tr_sl=pt&_x_tr_tl=es&_x_tr_hl=pt-BR&_x_tr_pto=wapp";
        }

        if(idioma === 'us'){
            window.location.href = "https://www-amazonjunglepalace-com-br.translate.goog/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp";
        }

        if(idioma === 'br'){
            window.location.href = "https://www.amazonjunglepalace.com.br/";
        }
        

    }

    return(
        <>  
            <div className="menu">
                <ul>
                    <li><Link to="/">Resort</Link></li>
                    <li><Link to="/acomodacoes">Acomodações</Link></li>
                    <li><Link to="/gastronomia">Gastronomia</Link></li>
                    <li><Link to="/experiencias">Experiências</Link></li>
                    <li><Link to="/eventos">Eventos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>

                    
                    <div className="menu-extra">
                        <div className="menu-translate">
                            <button className="menu-translate-btn">
                                <Link to="#"  onClick={() => handleTranslate('br')}>
                                    <img src={process.env.PUBLIC_URL+'/assets/img/icon-translate-br.png'} alt="Amazon Jungle Palace"/>Português
                                </Link>
                            </button>
                            <div className="menudrop-content">
                                <Link to="#" onClick={() => handleTranslate('us')}><img height="15" src={process.env.PUBLIC_URL+'/assets/img/icon-translate-us.png'} alt="Amazon Jungle Palace"/>Inglês</Link>
                                <Link to="#" onClick={() => handleTranslate('es')}><img height="15" src={process.env.PUBLIC_URL+'/assets/img/icon-translate-es.png'} alt="Amazon Jungle Palace"/>Espanhol</Link>
                            </div>
                            {/* <ul>
                                <li><Link to="#"><img src={process.env.PUBLIC_URL+'/assets/img/icon-translate-br.png'} alt="Amazon Jungle Palace"/>Português</Link>
                                    <ul class="submenu-translate">
                                        <li>
                                            <Link to="#" onClick={() => handleTranslate()}><img src={process.env.PUBLIC_URL+'/assets/img/icon-translate-us.png'} alt="Amazon Jungle Palace"/>Inglês</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul> */}
                            
                        </div>
                        <div className="menu-social">
                            <Link target="_blank" to={{pathname: `https://www.instagram.com/amazonjunglepalaceoficial/`}}><img src={process.env.PUBLIC_URL+'/assets/img/icon-instagram.png'} alt="Amazon Jungle Palace"/></Link>
                            <Link target="_blank" to={{pathname: `https://pt-br.facebook.com/amjunglepalace/`}}><img src={process.env.PUBLIC_URL+'/assets/img/icon-facebook.png'} alt="Amazon Jungle Palace"/></Link>
                        </div>
                    </div>

                    
                </ul>

         



            </div>
            

        </>
    );
}

export default Nav;