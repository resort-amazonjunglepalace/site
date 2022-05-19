import './style.css';
import { useState } from 'react';
import Logo from './../Logo';
import Nav from './../Nav';
import NavResponsivo from '../NavResponsivo';
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Header(){ 
    const [visible, setVisible] = useState(false)
  
    const handleScroll = () =>{
        if(window.scrollY >= 100){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }
    
    window.addEventListener("scroll", handleScroll);


    const handleMenuResponsivo = () => {
        document.querySelector("#menu-responsivo").classList.toggle("none"); 
    } 
    return(
        <>
            <div className="header">
                <div id="header_top" className={visible ? 'header_top fixo' : 'header_top'}>
                    <Logo />
                    <Nav />
                    <Link to="#" onClick={() => handleMenuResponsivo()} className="menu-burger"><BiMenu size={45} /></Link>
                    
                </div>

                <img src={process.env.PUBLIC_URL+'/assets/img/slide/home-2.jpg'} alt="Amazon Jungle Palace"/>
                
            </div>

            <NavResponsivo />
        </>
    );
}

export default Header;