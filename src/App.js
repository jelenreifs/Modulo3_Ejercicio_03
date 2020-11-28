
import Eventos from './Eventos';

let evento = {
    nombre: "Salsa dance party",
   	fecha: "24/07/2020",
	hora: "16:00",
	lugar: {
			direccion:"Done Bikendi Kalea, 2",
			ciudad: "Bilbao"
		}
}

let frutas = ["platano", "manzana", "pera", "limon", "cereza", "piña"]


function App() {

	const mostrarFrutas = frutas.map(fruta =>  { 
		return (
			<li> {fruta}</li>
	)
	})

	return (
		<>
		< Eventos
			Key={evento.nombre}
			fecha={evento.fecha}
			hora={evento.hora}
			lugar={evento.lugar.direccion}
			ciudad={evento.lugar.ciudad}

		/>
			<ul>{ mostrarFrutas }</ul>
			</>
	)
     
   
}

export default App;
