const PLAYERS = require('./players2')
const { generateTeams, generateMatches, printMatch } = require('./teamsFunctions')

/*Teams generator*/

//Numero par
const even = numero => numero % 2 == 0

function generarEquipos(jugadores){
	//Generar equipos posibles
	console.log("Generar equipos 1")
	const equipos1 = generateTeams(jugadores, Math.round(jugadores.length/2))
	console.log("Generar equipos 2")
	const equipos2 = even(jugadores.length) ? equipos1 : generateTeams(jugadores, Math.floor(jugadores.length/2))
	// Generar partidas posibles
	console.log("Generar partidas posibles")
	const partidasPosibles = generateMatches(equipos1, equipos2)
	//Mostrar partidas
	console.log(`La cantidad de partidas posibles es ${partidasPosibles.length}`)

	partidasPosibles.slice(0,20).forEach((match,index) => {
		console.log("--------------")
		console.log("--------------")
		console.log("--------------")
		console.log(`Opcion ${index+1}`)
		printMatch(match)
	})
}


//Run
const currentTime = new Date();
generarEquipos(PLAYERS);
const duration = (new Date() - currentTime) / ( 1000 ) //in seconds
console.log(`EL tiempo que se demoro es ${duration} segundos`)