import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';

function Motor(){
    const [fixo, setFixo]               = useState(false);
    const [startDate, setStartDate]     = useState(null);
    const [endDate, setEndDate]         = useState(null);

    //const [data_fim, setDataFim]        = useState('');
    const [adulto, setAdulto]           = useState('');
    const [crianca, setCrianca]         = useState('');    

    //let date = new Date();
    /*let dia_atual   = date.getDate().toString().padStart(2, "0");
    let mes_atual   = (date.getMonth() + 1).toString().padStart(2, "0");
    let ano_atual   = date.getFullYear();*/
    //const [data_atual, setDataAtual]    = useState(`${dia_atual}/${mes_atual}/${ano_atual}`);  
    
    /*const handleDateAtual = (value) => {
        //let data_atual  = `${ano_atual}-${mes_atual}-${dia_atual}`;
        setDataAtual(value);
    }

    const handleDateFim = (value) => {
        setDataFim(value);
    }*/

    const handleAdulto = (value) => {
        setAdulto(value);
    }

    const handleCrianca = (value) => {
        setCrianca(value);
    }
 

    const handleSubmit = (e) => {
        
        //alert("ok");
        let dia_atual   = startDate.getDate().toString().padStart(2, "0");
        let mes_atual   = (startDate.getMonth() + 1).toString().padStart(2, "0");
        let ano_atual   = startDate.getFullYear();
        setStartDate(`${dia_atual}/${mes_atual}/${ano_atual}`);
        setEndDate(`${dia_atual}/${mes_atual}/${ano_atual}`);
        let data_ini    = `${dia_atual}/${mes_atual}/${ano_atual}`;
        let data_fim    = `${dia_atual}/${mes_atual}/${ano_atual}`;
        //alert(data_atual);
        
        //window.open(`https://hbook.hsystem.com.br/Booking?companyId=61ae3ae83c56c5ca354513ee&checkin=${data_ini}&checkout=${data_fim}&adults=${adulto}&children=0&promocode=`);
        window.open(`https://myreservations.omnibees.com/default.aspx?q=15389&NRooms=1&ad=${adulto}&CheckIn=${data_ini}&CheckOut=${data_fim}&group_code=&ch=${crianca}`);
                e.preventDefault();

    }

    const handleScrollTop = () =>{
        console.log(window.screen.height);
        if(window.scrollY > 0){
            setFixo(true);
        }else{
            setFixo(false);
        }
        // console.log(window.screenY);
    }
    
    window.addEventListener("scroll", handleScrollTop);
   
    return(
        
        <>
            <div className={fixo === true ? 'wrapper fixo' : 'wrapper'} >
                <div className="container">
                    <form onSubmit={handleSubmit} className="form_search">
                       <label>
                            <DatePicker 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)}
                                locale="pt-BR"
                                dateFormat="dd/MM/yyyy"
                                popperClassName="box-calendar-date"
                                className="input-date"
                                //withPortal
                            />
                            {/* <input type="text" placeholder="00/00/0000" 
                                            value={data_atual}
                                            className="input_text_date"
                                            onChange={(e) => handleDateAtual(e.target.value)} 
                                            required/>    */}
                            <img src={process.env.PUBLIC_URL+'/assets/img/icon-date.png'} alt="Data Inicial"/>
                        </label> 
                        <label>
                            <DatePicker 
                                selected={endDate} 
                                onChange={(date) => setEndDate(date)}
                                locale="pt-BR"
                                dateFormat="dd/MM/yyyy"
                                popperClassName="box-calendar-date"
                                className="input-date"
                                //withPortal
                            />
                            {/* <input type="text" placeholder="00/00/0000" 
                                            value={data_fim}
                                            onChange={(e) => handleDateFim(e.target.value)}
                                            className="input_text_date"/>    */}
                            <img src={process.env.PUBLIC_URL+'/assets/img/icon-date.png'} alt="Data Fim"/>
                        </label> 
                        <label>
                            <input type="text" placeholder="0 Adultos" 
                                            value={adulto}
                                            onChange={(e) => handleAdulto(e.target.value)}
                                            className="select_text"/>                              
                        </label>                        
                        <label>
                            <input type="text" placeholder="0 Crianças"
                                            value={crianca}
                                            onChange={(e) => handleCrianca(e.target.value)}
                                            className="select_text"/>                              
                        </label>
                        <label>
                            <button className="btn btn_success">Simular Reserva</button>
                        </label>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Motor;