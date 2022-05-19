import PageHeader from "../../components/Header/pageHeader";
import Section_Midias from "../../components/Section/Midias";
import Footer from "../../components/Rodape";
import Motor from "../../components/Motor";

import "./style.css";

function Contato(){


    
    return(
        <>
             <PageHeader />
            <div className="page_section">
                <div className="page_title">Contato</div>
                <div className="page_description_2">
                    
                </div>

                <div className="page-section-content">
                    <div className="page-section-container">
                        <form className="form-contato">
                            <label>
                                <strong>Nome Completo:</strong>
                                <input type="text" className="text-input" required/>
                            </label>

                            <label>
                                <strong>E-Mail</strong>
                                <input type="email" className="text-input" required/>
                            </label>

                            <label>
                                <strong>Telefone</strong>
                                <input type="phone" className="text-input" required />
                            </label>

                            <label>
                                <strong>Mensagem</strong>
                                <textarea className="textarea" required></textarea>
                            </label>


                            <button class="btn">Enviar</button>

                        </form>
                    </div>
                </div>
            </div>
     

            <Section_Midias />
            <Footer />
            <Motor />
        </>
    );
}

export default Contato;