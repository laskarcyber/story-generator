// Andrew Herriot, 2011

/**
 * @namespace Lists
 */
namespace.module('agherriot.story-generator.utilities', 
	function (exports, require) {
	"use strict";
	
	exports.extend({
		'numberName': numberName
		
	});
	
	function numberName(n) { 
		var names = ["Zero", "One", "Two", "Three", "Four", "Five", "Six",
		    "Seven", "Eight", "Nine", "Ten"];
		return names[n];
	}
	
	/** @constant */
	var GENDER_MALE = 0;
	/** @constant */
	var GENDER_FEMALE = 1;

	var genders = [GENDER_MALE, GENDER_FEMALE];

	var TITLE_MALE = "Mr.";
	var TITLE_FEMALE = "Ms.";

	var titles = [TITLE_MALE, TITLE_FEMALE];
	
	var maleNames = ["Cornelius", "William", "George", "Abraham", "Bartholomew", 
	      "Richard", "Rosencrantz", "Guildenstern", "Lawrence", "Mortimer"];
     var maleNicknames = ["Corny", "Willy", "Big G", "Abe", "Bart", 
         "Dick", "Crantz", "Stern", "Larry", "Mort"];


     var femaleNames = ["Sophia", "Elizabeth", "Abigale", "Katherine", 
         "Henrietta", "Winnifred"];
     var femaleNicknames = ["Sophie", "Liz", "Abby", "Kate", "Hettie", 
         "Winnie"];


     var lastNames = ["Featherbottom", "Turbomax", "MacDonald"];

     var usedNames = [];
     var usedLastNames = [];

     var interests = ["castle", "boat", "Australian football"];

     var positiveAdjectives = ["admirable", "adorable", "amazing", "appealing", 
         "astonishing", "astounding", "awesome", "beautiful", "brilliant", 
         "charming", "cute", "elegant", "excellent", "extraordinary", "fabulous",
         "fantastic", "fine", "graceful", "great", "incredible", "lovely",
         "magnificent", "marvellous", "neat", "nice", "outstanding", "phenomenal",
         "pleasing", "remarkable", "sensational", "smashing", "stupendous", "super",
         "superb", "terrific", "trustworthy", "wonderful"];


     var negativeAdjectives = ["abomidable", "bad", "despicable", "detestable",
         "dirty", "disgusting", "dumb", "evil", "filthy", "foggy", "foul", 
         "fraudulent", "gross", "heinous", "indecent", "nasty", "nauseating", 
         "obnoxious", "polluted", "putrid", "shady", "smelly", "stupid", "ugly", 
         "unclean", "unsportsmanlike", "venomous", "vile", "vulgar", "wicked" ];


     var neutralAdjectives = ["acceptable", "bland", "fine", "normal", "satistfactory",
         "so-so"];

     var textureAdjectives = ["rough", "slimy", "slippery", "smooth"];

     var visualAdjectives = ["blue", "foggy", "red", "shinny", "tall" ];
     var visualNouns = [];

     var shapeAdjectives = ["big", "broad", "chubby", "colossal", "crooked", 
         "curved", "deep", "fat", "flat", "gigantic", "hollow", "round", "square",
         "straight", "wiggly"];

     var audioAdjectives = [ "harsh", "loud", "quiet" ];
     var audioNouns = ["bang", "bark"];

     var tasteAdjectives = ["bitter", "salty", "savoury", "smooth", "sour", "sugary", "sweet"];
     var tasteNouns = [];

     var smellAdjectives = ["foul", "fragrant", "fruity","putrid", "smoky", 
         "strong", "sweet"];
     var smellNouns = ["bakery", "cinnamon", "death", "lemon", "locker room", 
         "McDonalds"];

     var adverbs = ["mildly", "mostly", "slightly", "somewhat", "very"];

     var adjectives = ["slimy", "green"];

});
