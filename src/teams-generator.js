//Teams generator
var PLAYERS = require('./players.js')


//Filter items that are already in the array
const filterItemsAlreadyInArray = (allItems, itemsToFilter) => allItems.filter(item =>  !itemsToFilter.includes(item))




/* Util functions */
//Get last item in a list
const lastItem = array => array[array.length-1]
//Get remaining items of an array
const getRemainingItems = (items, item) => items.slice(items.indexOf(item)+1)
//Add add flatten method to arrays
Object.defineProperty(Array.prototype, 'flatten', { value: function() { return this.reduce((a,b) => a.concat(b)) } });
// Add add is empty method to arrays
Object.defineProperty(Array.prototype, 'isEmpty', { value: function() { return this.length == 0 } });




 /**
 * Get all possible combinations of elements without repeating
 * @param  {Array} baseItems base item array
 * @param  {Array} itemsToAdd array of items to add
 * @param  {Int} combinationLength number of items in the combinations generated
 * @return {Array<Array>} all possible combinations of base elements with elements to add
 */
const getPossibleCombinations = (baseItems, itemsToAdd, combinationLength) => {
	if (baseItems.length < combinationLength){
		// To avoid calculating duplicate combinations, reduce items to add, from the last item added to the end
		const remainingItemsToAdd = getRemainingItems(itemsToAdd, lastItem(baseItems))
		//if there are not remaining items to add to add, return empty list
		//else for each remaining item, add it to array and get possible combinations
		return remainingItemsToAdd.isEmpty() ? [] :
			remainingItemsToAdd.map(item => getPossibleCombinations([...baseItems, item], remainingItemsToAdd, combinationLength)).flatten() //
	}
	//If combination already have the necessary length, return it
	return [baseItems];
}


function generarEquipos(jugadores, cantidadPorEquipo){
	const equipoBase = [];
	return getPossibleCombinations(equipoBase, jugadores, cantidadPorEquipo);
}



// var qq = [gonza,negro,zana,jaiche]
// var z = qq.indexOf(negro)
// const a = generarEquipos(qq, 2)
// const a = generarEquipos([1,2,3,4], 2)
// const b = a.map(ea => ea.map(jug => jug.nombre))
// console.log(JSON.stringify(a))
// console.log(JSON.stringify(b))
// console.log(JSON.stringify([[1,2], [1,3], [1,4]].flat()))
// console.log(JSON.stringify([[1,2], [1,3], [1,4]].flatten()))

console.log(JSON.stringify(PLAYERS))







