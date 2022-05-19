import { Link } from "react-router-dom";
import './style.css';
import Logo from "../Logo";
import { MdOutlineClose } from "react-icons/md";
import MotorResponsivo from "../MotorResponsivo";

export default function NavResponsivo(){
    const closeMenuResponsivo = () => {
        document.querySelector("#menu-responsivo").classList.add("none");
    } 

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
            <div id="menu-responsivo" className="menu-responsivo none">
                <Logo />
                <Link to="#" onClick={() => closeMenuResponsivo()} className="menu-burger"><MdOutlineClose size={45} /></Link>
                <ul>
                    <li><Link to="/acomodacoes"><span>Acomodações</span></Link></li>
                    <li><Link to="/passeios"><span>Passeios</span></Link></li>
                    <li><Link to="/experiencias"><span>Experiencias</span></Link></li>
                    <li><Link to="/eventos"><span>Eventos</span></Link></li>
                    <li><Link to="/contato"><span>Contato</span></Link></li>
                </ul>

                <Link to="#"  onClick={() => handleTranslate('br')}>
                    <img src={process.env.PUBLIC_URL+'/assets/img/icon-translate-br.png'} alt="Amazon Jungle Palace"/>Português
                </Link>
                <Link to="#" onClick={() => handleTranslate('us')}>
                    <img height="15" src={process.env.PUBLIC_URL+'/assets/img/icon-translate-us.png'} alt="Amazon Jungle Palace"/> Inglês
                </Link>
                <Link to="#" onClick={() => handleTranslate('es')}>
                    <img height="15" src={process.env.PUBLIC_URL+'/assets/img/icon-translate-es.png'} alt="Amazon Jungle Palace"/> Espanhol
                </Link>
               


                <MotorResponsivo />
            </div>
        </>
    );
}