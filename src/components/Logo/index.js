import './style.css';
import { Link } from 'react-router-dom';

function Logo(){
    return(
        <>
            <div className="logo">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL+'/assets/img/logo.png'} alt="Amazon Jungle Palace"/>
                </Link>
            </div>
        </>
    );
}

export default Logo;