const PLAYERS = require('./players')
const { generateTeams, generateMatches, printMatch } = require('./teamsFunctions')

/*Teams generator*/

//Numero par
const even = numero => numero % 2 == 0


function generar(){
	let partidasPosibles = []
	if (even(PLAYERS.length)) {
		console.log("Generar equipos posibles")
		const equiposPosibles = generateTeams(PLAYERS, Math.round(PLAYERS.length/2))
		console.log("Generar partidas posibles")
		partidasPosibles = generateMatches(equiposPosibles, equiposPosibles)
	} else {
		//Generar equipos posibles
		console.log("equiposConUnoMas")
		const equiposConUnoMas = generateTeams(PLAYERS, Math.round(PLAYERS.length/2))
		console.log("equiposConUnoMenos")
		const equiposConUnoMenos = generateTeams(PLAYERS, Math.floor(PLAYERS.length/2))
		//Generar partidas posibles
		console.log("PartidasPosibles")
		partidasPosibles = generateMatches(equiposConUnoMas, equiposConUnoMenos)
	}

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

generar();












