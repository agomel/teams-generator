/*Players*/

class Player {
  constructor(name, level) {
  	this.name = name;
    this.level = level;
  }
}

const GONZA = new Player("Gonza", 9.27)
const JAICHE = new Player("Jaiche", 9.05)
const AGO = new Player("Ago", 8.19)
const NEGRO = new Player("Negro", 7.41)
const STUD = new Player("Stud", 7.00)
const DISKA = new Player("Diska", 7.3)
const NACHO = new Player("Nacho", 6.86)
const SASLA = new Player("Sasla", 6.55)
const KROCH = new Player("Kroch", 6.39)
const SEAN = new Player("Sean", 5.86)
const LIPI = new Player("Lipi", 3)
const HER = new Player("Her", 4)
const TOBA = new Player("Toba", 1.7)
const MAGO = new Player("Mago", 2.2)
const SUVA = new Player("Suva", 1.7)
const PITBULL = new Player("Pitbull", 2)

const PLAYERS = [
	GONZA,
	JAICHE,
	AGO,
	NEGRO,
	STUD,
	// DISKA,
	// NACHO,
	// SASLA,
	// KROCH,
	// SEAN,
	// LIPI,
	// HER,
	// TOBA,
	// MAGO,
	// SUVA,
	// PITBULL
];

module.exports = PLAYERS;
