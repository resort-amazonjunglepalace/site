
import Header from './../../components/Header'
import Motor from './../../components/Motor';
import Section_Acomodacoes from './../../components/Section/Acomodacoes';
import Section_Gastronomia from './../../components/Section/Gastronomia';
import Section_Experiencia from './../../components/Section/Experiencias';
import Section_Midias from './../../components/Section/Midias';
import Footer from './../../components/Rodape';


function Home(){
    
    
   
    return(
        <>
            <Header/>
            <Motor />
            <Section_Acomodacoes />
            <Section_Gastronomia />
            <Section_Experiencia />
            <Section_Midias />
            <Footer />
        </>
    );
}

export default Home;