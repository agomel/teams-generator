const { getPossibleCombinations, getPairsCombinations } = require('./utils')

/* Domain functions */
//Team score
const teamScore = team => team.map(player => player.level).reduce((total, level) => total + level, 0)
//Difference of scores in teams of a match
const matchScore = match => Math.abs(teamScore(match[0]) - teamScore(match[1]))
//Sorting criteria by team score
const sortMatches = (match1, match2) => (matchScore(match1) == matchScore(match2)) ? 0 : ((matchScore(match1) > matchScore(match2)) ? 1 : -1)

//Generate teams
const generateTeams = (jugadores, cantidadPorEquipo) => getPossibleCombinations([], jugadores, cantidadPorEquipo);

//Generate matches
const generateMatches = (teams1, teams2) => getPairsCombinations(teams1, teams2).sort(sortMatches)

//Print team
const printTeam = (team, index) => {
	console.log(`Equipo${index}: ${team.map(player => player.name).join(', ')}`)
	console.log(`Puntaje${index}: ${teamScore(team)}`)
}

//Print match
const printMatch = match => {
	match.forEach((team, index) => printTeam(team, index+1))
	console.log(`La diferencia entre los equipos es de  ${matchScore(match)}`)	
}


exports.generateTeams = generateTeams;
exports.generateMatches = generateMatches;
exports.printMatch = printMatch;
