import { Link } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";
import Logo from '../Logo';
import Nav from '../Nav';
import NavResponsivo from '../NavResponsivo';
import './style.css';

function PageHeader(){
    const handleMenuResponsivo = () => {
      document.querySelector("#menu-responsivo").classList.toggle("none"); 
    } 

    return(
        <>
            <div className="page_header">
                <div className="page_header_top">
                    <Logo />
                    <Nav />
                    <Link to="#" onClick={() => handleMenuResponsivo()} className="menu-burger"><BiMenu size={45} /></Link>
                    
                </div>
                
            </div>

            <NavResponsivo />
        </>
    );
}

export default PageHeader;