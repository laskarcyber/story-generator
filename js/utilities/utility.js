namespace.module('agherriot.story-generator.utilities', 
	function (exports, require) {
	"use strict";
	
	exports.extend({
		"randomInt": randomInt,
		"randomSelection": randomSelection,
		"randomIndex": randomIndex,
		"shuffle": shuffle,
		"randomUniqueSelection": randomUniqueSelection,
		"randomUniqueIndex": randomUniqueIndex,
		"addWordToList": addWordToList,
		"replaceWithRandomWords": replaceWithRandomWords,
		"adlib": adlib		
	});
	
	/** 
	 * Returns a random integer in the range [0, max].
	 * @static 
	 * @param {int} max The maximum value for the integer.
	 */
	function randomInt(max) {
		"use strict";
	    
		return Math.floor(Math.random() * (max + 1));
	}
	
	/**
	 * Takes an list and returns one element at random.
	 * @static 
	 * @param {String[]} list The list of strings to choice from.
	 */
	function randomSelection(list) {
		"use strict";
		
	    return list[ this.randomInt(list.length - 1) ];
	}
	
	/**
	 * Returns the index of a random element from the list.
	 * @static 
	 * @param {String[]} list The list of strings to choice from.
	 */
	function randomIndex(list) {
		"use strict";
		
	    return this.randomInt(list.length - 1);
	}
	
	/**
	 * Randomizes the order of a list.
	 * @static 
	 * @param {String[]} list The list of strings to choice from.
	 */
	function shuffle(list) {
		"use strict";
		
		return list.sort(function() { return Math.random() - 0.5 });
	}
	
	
	/**
	 * Returns a random selection from the list not on the alreadyUsed list.
	 * @static 
	 * @param {String[]} list The list of strings to choice from.
	 * @param {String[]} alreadyUsed The list of strings that are excluded
	 * from the selection.
	 */
	function randomUniqueSelection(list, alreadyUsed) {
		"use strict";

	    var newList = list.slice();

	    for (var i in alreadyUsed) {
	        var index = newList.indexOf(alreadyUsed[i]);

	        if (index >= 0) {
	            newList.splice(index, 1);
	        }
	    }
	    return this.randomSelection(newList);
	}
	
	/**
	 * Returns the index of a random element from the list.
	 * @static 
	 * @param {String[]} list The list of strings to choice from.
	 */
	function randomUniqueIndex(list, alreadyUsed) {
		"use strict";

	    var selection = this.randomUniqueSelection(list, alreadyUsed);
	    
	    return list.indexOf(selection);
	}
	
	/**
	 * Adds one new word to the list from the list of possible choices.
	 * @static
	 * @param {String[]} currentList The list of words already there.
	 * @param {String[]} possibleList The candidates that might be added.
	 */
	function addWordToList(currentList, possibleList) {
		"use strict";
		
		currentList.push( this.randomUniqueSelection(possibleList, currentList));
	}
	
	/**
	 * Replaces each instance of {listNumber} with a selection from the list
	 * making sure that the words are not in the usedWords list.
	 * @static
	 * @param {String} string The sentence to be edited.
	 * @param {String[]} list The list of candidate words.
	 * @param {int} listNumber The number to look for.
	 * @param {String[]} usedWords The words that have already been used.
	 */
	function replaceWithRandomWords(string, list, listNumber, usedWords) {
		"use strict";
		
		if (list !== undefined) {
			
			while (string.indexOf("{" + listNumber + "}") >= 0) {
				
				var word = this.randomUniqueSelection(list, usedWords);
				usedWords.push(word);
				
				string = string.replace("{" + listNumber + "}", word);
			}
		}
		return string;
	}
	
	/**
	 * Injects sentences with words from the provided lists.
	 * @static
	 * @param {Array} array
	 * @param {String[]} usedWords The list of strings that are excluded
	 * from the selection.
	 * @example
	 * utility.adlib(
	 * 	[ [sentence1, [list1, list2, list3, ...] ], 
	 * 	[sentence2, [list1, list2, list3, ...] ],
	 * 	[]...], usedWords
	 *);
	 */
	function adlib(array, usedWords) {
		"use strict";
		
		if (usedWords === undefined) {
			var usedWords = [];
		}
		
		var choice = this.randomInt(array.length - 1);
		var string = array[choice][0];

		var wordLists = array[choice][1];
		
		for(var i in array[choice][1]) {
			string = this.replaceWithRandomWords(string, wordLists[i], i, usedWords);	
		}		
		return string + "  ";
	}
});
