/* Util functions */

// Filter items already in array
// const filterItemsAlreadyInArray = (allItems, itemsToFilter) => allItems.filter(item =>  !itemsToFilter.map(x => JSON.stringify(x)).includes(JSON.stringify(item)))

// Have items in common
const haveItemsInCommon = (array1, array2) => array1.some(item => array2.includes(item))
//Get remaining items of an array
const getRemainingItemsString = (items, item) => items.slice(items.map(i => JSON.stringify(i)).indexOf(JSON.stringify(item))+1)
//Get last item in a list
const lastItem = array => array[array.length-1]
//Get remaining items of an array
const getRemainingItems = (items, item) => items.slice(items.indexOf(item)+1)
//Add add flatten method to arrays
Object.defineProperty(Array.prototype, 'flatten', { value: function() { return this.reduce((a,b) => a.concat(b)) }, configurable: true });
// Add add is empty method to arrays
Object.defineProperty(Array.prototype, 'isEmpty', { value: function() { return this.length == 0 }, configurable: true });

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
			remainingItemsToAdd.map(item => getPossibleCombinations([...baseItems, item], remainingItemsToAdd, combinationLength)).flatten()
	}
	//If combination already have the necessary length, return it
	return [baseItems];
}

/**
 * Get all the pobilbes pair combinations
 * @param  {Array<Array>} array of position 0 of the pair 
 * @param  {Array<Array>} array of position 1 of the pair 
 * @return {Array<Array<Array>>} all possible combinations of pairs
 */
 //TODO mejorar para que sea generico y no reciba un array con arrays
const getPairsCombinations = (items1, items2) => {
	return items1.map(
		item => {
			const remainingItemsToCombine = getRemainingItemsString(items2, item).filter(item2 => !haveItemsInCommon(item, item2))
			return getPossibleCombinations([item], remainingItemsToCombine, 2)
		}).flatten()
}


exports.getPossibleCombinations = getPossibleCombinations;
exports.getPairsCombinations = getPairsCombinations
