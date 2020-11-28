import './App.css';


const Eventos = (props) => { 
       return (
        <div>
            <h2>{props.nombre}</h2>
            <p>Fecha: {props.fecha}</p>
            <p>Hora: {props.hora}</p>
            <p>Dirección: {props.lugar}</p>
            <p>Ciudad: {props.ciudad}</p>

         </div> 
        )
}
    

export default Eventos;