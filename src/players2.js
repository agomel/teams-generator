/*Players*/

class Player {
  constructor(name, level) {
  	this.name = name;
    this.level = level;
  }
}

const GONZAT = new Player("GonzaT", 10)
const GONZA = new Player("Gonza", 8.68)
const JAICHE = new Player("Jaiche", 8.59)
const AGO = new Player("Ago", 7.88)
const DISKA = new Player("Diska", 7.14)
const ALAN = new Player("Alan", 7)
const STUD = new Player("Stud", 6.67)
const NACHO = new Player("Nacho", 6.40)
const NEGRO = new Player("Negro", 6.58)
const SEAN = new Player("Sean", 5.43)
const KROCH = new Player("Kroch", 6.52)
const SASLA = new Player("Sasla", 5.36)
const HER = new Player("Her", 4.33)
const LIPI = new Player("Lipi", 2.53)
const DYLO = new Player("Dylo", 2.27)
const SUVA = new Player("Suva", 2.35)
const PITBULL = new Player("Pitbull", 2.90)

const TOBA = new Player("Toba", 2)
const MAGO = new Player("Mago", 5)
const DOC = new Player("Doc", 13)
const REIVEN = new Player("Reiven", 11)
const OTE = new Player("Ote", 7)


const PLAYERS = [
	GONZAT,
	GONZA,
	JAICHE,
	AGO,
	DISKA,
	ALAN,
	STUD,
	// NACHO,
	NEGRO,
	SEAN,
	KROCH,
	// SASLA,
	HER,
	LIPI,
	PITBULL,
	// DYLO,
	// SUVA,

	// TOBA,
	// MAGO,
	// DOC,
	// REIVEN,
	OTE
];

module.exports = PLAYERS;
