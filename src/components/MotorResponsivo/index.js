import { useState } from 'react';
import DatePicker from 'react-datepicker';
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function MotorResponsivo(){
    const [startDate, setStartDate]     = useState(null);
    const [endDate, setEndDate]         = useState(null);

    //const [data_fim, setDataFim]        = useState('');
    const [adulto, setAdulto]           = useState('');
    const [crianca, setCrianca]         = useState('');

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
        
        
        window.open(`https://myreservations.omnibees.com/default.aspx?q=15389&NRooms=1&ad=${adulto}&CheckIn=${data_ini}&CheckOut=${data_fim}&group_code=&ch=${crianca}`);
        e.preventDefault();

    }

    return(
    <>
        <div className="wrapper-responsivo">
            <form className="form-search" onSubmit={handleSubmit}>
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
                    {/* <input type="text" 
                    placeholder="00/00/0000" 
                    className="input_text_date"/>    */}
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
                    {/* <input type="text" placeholder="00/00/0000" className="input_text_date"/>    */}
                    <img src={process.env.PUBLIC_URL+'/assets/img/icon-date.png'} alt="Data Fim"/>
                </label> 
                <label>
                    <input type="text" placeholder="2 Adultos" 
                    value={adulto}
                    onChange={(e) => handleAdulto(e.target.value)}
                    className="select_text"/>  
                    <img src={process.env.PUBLIC_URL+'/assets/img/icon-arrow-down.png'} alt="Arrow Down"/> 
                </label>
                <label>
                    <input type="text" placeholder="2 Crianças" 
                    value={crianca}
                    onChange={(e) => handleCrianca(e.target.value)}
                    className="select_text"/>  
                    <img src={process.env.PUBLIC_URL+'/assets/img/icon-arrow-down.png'} alt="Arrow Down"/> 
                </label>
                <label>
                    <button className="btn btn_success">Simular Reserva</button>
                </label>                
            </form>
        </div>
    </>
    );
}