/*Players*/

class Player {
  constructor(name, level) {
  	this.name = name;
    this.level = level;
  }
}

const GONZA = new Player("Gonza", 9.31)
const JAICHE = new Player("Jaiche", 9.28)
const AGO = new Player("Ago", 8.29)
const GONZAT = new Player("GonzaT", 8.15)
const DISKA = new Player("Diska", 7.64)
const STUD = new Player("Stud", 7.30)
const NACHO = new Player("Nacho", 7.26)
const NEGRO = new Player("Negro", 6.99)
const SEAN = new Player("Sean", 6.65)
const KROCH = new Player("Kroch", 6.57)
const SASLA = new Player("Sasla", 6.32)
const ALAN = new Player("Alan", 6.3)
const HER = new Player("Her", 4.99)
const LIPI = new Player("Lipi", 3.81)
const DYLO = new Player("Dylo", 3.49)
const SUVA = new Player("Suva", 3.32)
const PITBULL = new Player("Pitbull", 2.5)

const TOBA = new Player("Toba", 2)
const MAGO = new Player("Mago", 5)
const DOC = new Player("Doc", 13)
const REIVEN = new Player("Reiven", 11)
const ALE = new Player("Ale", 4.99)


const PLAYERS = [
	GONZA,
	JAICHE,
	AGO,
	GONZAT,
	DISKA,
	// STUD,
	NACHO,
	NEGRO,
	SEAN,
	// KROCH,
	SASLA,
	HER,
	ALAN,
	LIPI,
	PITBULL,
	// DYLO,
	// SUVA,

	// TOBA,
	// MAGO,
	// DOC,
	// REIVEN,
	ALE
];

module.exports = PLAYERS;
