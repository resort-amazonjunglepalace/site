import React from "react";

import PageHeader from "../../components/Header/pageHeader";
import PageDetalheTitle from "../../components/Header/pageDetalheTitle";
import PageContent from "../../components/Content/";



export default function  Acomodacoes(){
  
      return(
          <>  
            <PageHeader />
            

            <div className="page_section">
                <div className="page_title">Nossas Acomodações</div>
                <div className="page_description_2">
                    <p>Conheça as nossas acomodações e faça a sua escolha para desfrutar ao máximo sua estada aqui no <strong>Amazon Jungle Palace. </strong>
                    <br/><br/>Nosso resort contempla as seguintes categorias de suítes: <i>Nobre, Master, Imperial, Superior, Luxo e Júnior</i>. Perfeitas para quem gosta de espaço, requinte, luxo e uma dose extra de conforto.</p>
                    
                </div>
            </div>


            <PageContent />





          </>
      );
}