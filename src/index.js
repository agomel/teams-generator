const PLAYERS = require('./players')
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
	partidasPosibles.slice(0,5).forEach((match,index) => {
		console.log("--------------")
		console.log("--------------")
		console.log("--------------")
		console.log(`Opcion ${index+1}`)
		printMatch(match)
	})
}


//Run
generarEquipos(PLAYERS);
