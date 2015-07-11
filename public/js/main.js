$(document).ready(function() {

////////////////////////////////////////////////
	//JS SPECIFIC LAYOUT ADJ
	function forwidth(){
		var hei = $(window).height();
		var hei90 = hei*0.9;
		var winH = '.winH{ min-height:'+ hei +'px;}';
		var winHalf = '.winHalf{ min-height:'+ (hei/2) +'px;}';
		var winH90 = '.tester{margin-top:'+ (hei*0.1) +'px;}.winH90{ min-height:'+ hei90 +'px;}';
		var winHalf90 = '.winHalf90{ min-height:'+ (hei90/2) +'px;}';
		var styling = '<style>'+winH+winHalf+winH90+winHalf90+'</style>'

	    ////////////////////////
		//Ignore Cached Fonts
		var file = '<link rel="stylesheet" type="text/css" href="styles/style.css?v='+Math.random()+'">'

		$('.jsdump').html(styling+file);
	}
	forwidth();

    ////////////////////////
	//IF MOBILE

function isMobile() {
	if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/IEMobile/i)){
		return true; } else { return false; }
}
function iphone() {
	if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
		return true; } else { return false; }
}
var isTouchDevice = 'ontouchstart' in document.documentElement;

    ////////////////////////
	//GET VENDOR PREFIXES

var browser, webkit, touch;

var prefix = (function () {
	var styles = window.getComputedStyle(document.documentElement, ''),
		pre = (Array.prototype.slice
			.call(styles)
			.join('')
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
		)[1],
		dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
	return {
		dom: dom,
		lowercase: pre,
		css: '-' + pre + '-',
		js: pre[0].toUpperCase() + pre.substr(1)
	};
})();
browser = prefix.lowercase;

if (isTouchDevice) {
	touch = true;
}else{
	touch = false;
}
if (navigator.userAgent.indexOf('Safari') != -1){
	if (navigator.userAgent.indexOf('Chrome') == -1){
		webkit = 'safari';
	} else {
		webkit = 'chrome';
	}
}


////////////////////////////////////////////////
//SHARING
function changeLinks(){
        $("a.tshare").attr('href', "https://twitter.com/home?status=" + encodeURIComponent(document.URL));
        $("a.fshare").attr('href', "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=" + encodeURIComponent(document.URL));
    if (iphone()) {
        $("a.tshare").attr('href', "twitter://post?message=" + encodeURIComponent(document.URL));
    }
}
changeLinks();

    ////////////////////////
	//Add Text


	//var threeletterwords = [ "Toronto", "Vancouver", "about", "after", "again", "air", "all", "along", "also", "and", "another", "any", "are", "around", "away", "back", "because", "been", "before", "below", "between", "both", "but", "came", "can", "come", "could", "day", "did", "different", "does", "down", "each", "end", "even", "every", "few", "find", "first", "for", "found", "from", "get", "give", "good", "great", "had", "has", "have", "help", "her", "here", "him", "his", "home", "house", "how", "into", "its", "just", "know", "large", "last", "left", "like", "line", "little", "long", "look", "made", "make", "man", "many", "may", "men", "might", "more", "most", "must", "name", "never", "new", "next", "not", "now", "number", "off", "old", "one", "only", "other", "our", "out", "over", "own", "part", "people", "place", "put", "read", "right", "said", "same", "saw", "say", "see", "she", "should", "show", "small", "some", "something", "sound", "still", "such", "take", "tell", "than", "that", "the", "them", "then", "there", "these", "they", "thing", "think", "this", "those", "thought", "three", "through", "time", "together", "too", "two", "under", "use", "very", "want", "water", "way", "well", "went", "were", "what", "when", "where", "which", "while", "who", "why", "will", "with", "word", "work", "world", "would", "write", "year", "you", "your", "was", "able", "above", "across", "add", "against", "ago", "almost", "among", "animal", "answer", "became", "become", "began", "behind", "being", "better", "black", "best", "body", "book", "boy", "brought", "call", "cannot", "car", "certain", "change", "children", "city", "close", "cold", "country", "course", "cut", "dog", "done", "door", "draw", "during", "early", "earth", "eat", "enough", "ever", "example", "eye", "face", "family", "far", "father", "feel", "feet", "fire", "fish", "five", "food", "form", "four", "front", "gave", "given", "got", "green", "ground", "group", "grow", "half", "hand", "hard", "heard", "high", "himself", "however", "idea", "important", "inside", "keep", "kind", "knew", "known", "land", "later", "learn", "let", "letter", "life", "light", "live", "living", "making", "mean", "means", "money", "morning", "mother", "move", "near", "night", "nothing", "once", "open", "order", "page", "paper", "parts", "perhaps", "picture", "play", "point", "ready", "red", "remember", "rest", "room", "run", "school", "sea", "second", "seen", "sentence", "several", "short", "shown", "since", "six", "slide", "sometime", "soon", "space", "states", "story", "sun", "sure", "table", "though", "today", "told", "took", "top", "toward", "tree", "try", "turn", "united", "until", "upon", "using", "usually", "white", "whole", "wind", "without", "yes", "yet", "young", "already", "although", "America", "anything", "area", "ball", "beautiful", "beginning", "birds", "blue", "boat", "bottom", "box", "bring", "build", "building", "built", "care", "carefully", "carried", "carry", "center", "check", "class", "coming", "common", "complete", "dark", "deep", "distance", "doing", "dry", "easy", "either", "else", "everyone", "everything", "fact", "fall", "fast", "felt", "field", "finally", "fine", "floor", "follow", "foot", "friend", "full", "game", "getting", "girl", "glass", "goes", "gold", "gone", "happened", "having", "heart", "heavy", "held", "hold", "horse", "hot", "hour", "hundred", "ice", "Indian", "instead", "itself", "job", "kept", "language", "lay", "least", "leave", "list", "longer", "low", "main", "map", "matter", "mind", "moon", "mountain", "moving", "music", "needed", "notice", "outside", "past", "pattern", "person", "piece", "plant", "poor", "possible", "power", "probably", "problem", "question", "quickly", "quite", "rain", "ran", "real", "river", "road", "rock", "round", "sat", "scientist", "shall", "ship", "simple", "size", "sky", "slowly", "snow", "someone", "special", "stand", "start", "state", "stay", "stood", "stop", "stopped", "strong", "suddenly", "summer", "surface", "system", "taken", "talk", "tall", "ten", "themselves", "third", "tiny", "town", "tried", "voice", "walk", "warm", "watch", "weather", "whether", "wide", "wild", "winter", "within", "writing", "written", "age", "ask", "baby", "base", "beside", "bright", "business", "buy", "case", "catch", "caught", "child", "choose", "circle", "clear", "color", "copy", "correct", "difference", "direction", "dried", "easily", "edge", "egg", "eight", "energy", "England", "especially", "Europe", "exactly", "except", "explain", "famous", "farm", "fell", "figure", "flat", "fly", "forest", "free", "French", "fun", "George", "government", "grass", "grew", "hair", "happy", "heat", "history", "human", "inch", "information", "iron", "king", "larger", "late", "leg", "length", "listen", "lost", "lot", "lower", "machine", "mark", "maybe", "measure", "meet", "middle", "milk", "minute", "modern", "moment", "month", "mouth", "natural", "nearly", "necessary", "Chicago", "north", "object", "ocean", "oil", "pay", "per", "plan", "plane", "present", "product", "rather", "reach", "reason", "record", "running", "seems", "sent", "seven", "shape", "sides", "single", "skin", "sleep", "smaller", "soft", "soil", "south", "speak", "speed", "spring", "square", "star", "step", "store", "straight", "strange", "street", "subject", "suppose", "teacher", "thousand", "thus", "travel", "trip", "trouble", "unit", "village", "wall", "war", "week", "whose", "window", "wish", "women", "wood", "wrote", "yellow", "yourself"	];
	//var wordsWithLong = [ "Toronto", "Vancouver", "about", "after", "again", "along", "also", "another", "around", "away", "back", "because", "been", "before", "below", "between", "both", "came", "come", "could", "different", "does", "down", "each", "even", "every", "find", "first", "found", "from", "give", "good", "great", "have", "help", "here", "home", "house", "into", "just", "know", "large", "last", "left", "like", "line", "little", "long", "look", "made", "make", "many", "might", "more", "most", "must", "name", "never", "next", "number", "only", "other", "over", "part", "people", "place", "read", "right", "said", "same", "should", "show", "small", "some", "something", "sound", "still", "such", "take", "tell", "than", "that", "them", "then", "there", "these", "they", "thing", "think", "this", "those", "thought", "three", "through", "time", "together", "under", "very", "want", "water", "well", "went", "were", "what", "when", "where", "which", "while", "will", "with", "word", "work", "world", "would", "write", "year", "your", "able", "above", "across", "against", "almost", "among", "animal", "answer", "became", "become", "began", "behind", "being", "better", "black", "best", "body", "book", "brought", "call", "cannot", "certain", "change", "children", "city", "close", "cold", "country", "course", "done", "door", "draw", "during", "early", "earth", "enough", "ever", "example", "face", "family", "father", "feel", "feet", "fire", "fish", "five", "food", "form", "four", "front", "gave", "given", "green", "ground", "group", "grow", "half", "hand", "hard", "heard", "high", "himself", "however", "idea", "important", "inside", "keep", "kind", "knew", "known", "land", "later", "learn", "letter", "life", "light", "live", "living", "making", "mean", "means", "money", "morning", "mother", "move", "near", "night", "nothing", "once", "open", "order", "page", "paper", "parts", "perhaps", "picture", "play", "point", "ready", "remember", "rest", "room", "school", "second", "sentence", "several", "short", "shown", "since", "slide", "sometime", "soon", "space", "states", "story", "sure", "table", "though", "today", "told", "took", "toward", "tree", "turn", "united", "until", "upon", "using", "usually", "white", "whole", "wind", "without", "young", "already", "although", "America", "anything", "area", "ball", "beautiful", "beginning", "birds", "blue", "boat", "bottom", "bring", "build", "building", "built", "care", "carefully", "carried", "carry", "center", "check", "class", "coming", "common", "complete", "dark", "deep", "distance", "doing", "easy", "either", "else", "everyone", "everything", "fact", "fall", "fast", "felt", "field", "finally", "fine", "floor", "follow", "foot", "friend", "full", "game", "getting", "girl", "glass", "goes", "gold", "gone", "happened", "having", "heart", "heavy", "held", "hold", "horse", "hour", "hundred", "Indian", "instead", "itself", "kept", "language", "least", "leave", "list", "longer", "main", "matter", "mind", "moon", "mountain", "moving", "music", "needed", "notice", "outside", "past", "pattern", "person", "piece", "plant", "poor", "possible", "power", "probably", "problem", "question", "quickly", "quite", "rain", "real", "river", "road", "rock", "round", "scientist", "shall", "ship", "simple", "size", "slowly", "snow", "someone", "special", "stand", "start", "state", "stay", "stood", "stop", "stopped", "strong", "suddenly", "summer", "surface", "system", "taken", "talk", "tall", "themselves", "third", "tiny", "town", "tried", "voice", "walk", "warm", "watch", "weather", "whether", "wide", "wild", "winter", "within", "writing", "written", "baby", "base", "beside", "bright", "business", "case", "catch", "caught", "child", "choose", "circle", "clear", "color", "copy", "correct", "difference", "direction", "dried", "easily", "edge", "eight", "energy", "England", "especially", "Europe", "exactly", "except", "explain", "famous", "farm", "fell", "figure", "flat", "forest", "free", "French", "George", "government", "grass", "grew", "hair", "happy", "heat", "history", "human", "inch", "information", "iron", "king", "larger", "late", "length", "listen", "lost", "lower", "machine", "mark", "maybe", "measure", "meet", "middle", "milk", "minute", "modern", "moment", "month", "mouth", "natural", "nearly", "necessary", "Chicago", "north", "object", "ocean", "plan", "plane", "present", "product", "rather", "reach", "reason", "record", "running", "seems", "sent", "seven", "shape", "sides", "single", "skin", "sleep", "smaller", "soft", "soil", "south", "speak", "speed", "spring", "square", "star", "step", "store", "straight", "strange", "street", "subject", "suppose", "teacher", "thousand", "thus", "travel", "trip", "trouble", "unit", "village", "wall", "war", "week", "whose", "window", "wish", "women", "wood", "wrote", "yellow", "yourself"	];
	var words = [ "Toronto", "about", "after", "again", "along", "also", "another", "around", "away", "back", "because", "been", "before", "below", "between", "both", "came", "come", "could",  "does", "down", "each", "even", "every", "find", "first", "found", "from", "give", "good", "great", "have", "help", "here", "home", "house", "into", "just", "know", "large", "last", "left", "like", "line", "little", "long", "look", "made", "make", "many", "might", "more", "most", "must", "name", "never", "next", "number", "only", "other", "over", "part", "people", "place", "read", "right", "said", "same", "should", "show", "small", "some", "sound", "still", "such", "take", "tell", "than", "that", "them", "then", "there", "these", "they", "thing", "think", "this", "those", "thought", "three", "through", "time", "under", "very", "want", "water", "well", "went", "were", "what", "when", "where", "which", "while", "will", "with", "word", "work", "world", "would", "write", "year", "your", "able", "above", "across", "against", "almost", "among", "animal", "answer", "became", "become", "began", "behind", "being", "better", "black", "best", "body", "book", "brought", "call", "cannot", "certain", "change", "city", "close", "cold", "country", "course", "done", "door", "draw", "during", "early", "earth", "enough", "ever", "example", "face", "family", "father", "feel", "feet", "fire", "fish", "five", "food", "form", "four", "front", "gave", "given", "green", "ground", "group", "grow", "half", "hand", "hard", "heard", "high", "himself", "however", "idea", "inside", "keep", "kind", "knew", "known", "land", "later", "learn", "letter", "life", "light", "live", "living", "making", "mean", "means", "money", "morning", "mother", "move", "near", "night", "nothing", "once", "open", "order", "page", "paper", "parts", "perhaps", "picture", "play", "point", "ready", "rest", "room", "school", "second", "several", "short", "shown", "since", "slide", "soon", "space", "states", "story", "sure", "table", "though", "today", "told", "took", "toward", "tree", "turn", "united", "until", "upon", "using", "usually", "white", "whole", "wind", "without", "young", "already", "America", "area", "ball", "birds", "blue", "boat", "bottom", "bring", "build", "built", "care", "carried", "carry", "center", "check", "class", "coming", "common", "dark", "deep", "doing", "easy", "either", "else", "fact", "fall", "fast", "felt", "field", "finally", "fine", "floor", "follow", "foot", "friend", "full", "game", "getting", "girl", "glass", "goes", "gold", "gone", "having", "heart", "heavy", "held", "hold", "horse", "hour", "hundred", "Indian", "instead", "itself", "kept", "least", "leave", "list", "longer", "main", "matter", "mind", "moon", "moving", "music", "needed", "notice", "outside", "past", "pattern", "person", "piece", "plant", "poor", "power", "problem", "quickly", "quite", "rain", "real", "river", "road", "rock", "round", "shall", "ship", "simple", "size", "slowly", "snow", "someone", "special", "stand", "start", "state", "stay", "stood", "stop", "stopped", "strong", "summer", "surface", "system", "taken", "talk", "tall", "third", "tiny", "town", "tried", "voice", "walk", "warm", "watch", "weather", "whether", "wide", "wild", "winter", "within", "writing", "written", "baby", "base", "beside", "bright", "case", "catch", "caught", "child", "choose", "circle", "clear", "color", "copy", "correct", "dried", "easily", "edge", "eight", "energy", "England", "Europe", "exactly", "except", "explain", "famous", "farm", "fell", "figure", "flat", "forest", "free", "French", "George", "grass", "grew", "hair", "happy", "heat", "history", "human", "inch", "iron", "king", "larger", "late", "length", "listen", "lost", "lower", "machine", "mark", "maybe", "measure", "meet", "middle", "milk", "minute", "modern", "moment", "month", "mouth", "natural", "nearly", "Chicago", "north", "object", "ocean", "plan", "plane", "present", "product", "rather", "reach", "reason", "record", "running", "seems", "sent", "seven", "shape", "sides", "single", "skin", "sleep", "smaller", "soft", "soil", "south", "speak", "speed", "spring", "square", "star", "step", "store", "strange", "street", "subject", "suppose", "teacher", "thus", "travel", "trip", "trouble", "unit", "village", "wall", "week", "whose", "window", "wish", "women", "wood", "wrote", "yellow"];

	var context = words[Math.floor(Math.random() * words.length)];

	//Generate Text
	$(".real-text").html("\
		<div>\
			<h1>" + context + "</h1>\
		</div>\
	");

	function bigText(){
		// $('.real-text > div').bigtext({
		// 	minfontsize: 14
		// });
	}

	var first = "<textarea readonly maxlength='1' class='first h3 no1'>" + context.charAt(0) + "</textarea>";
	var last = "<textarea readonly maxlength='1' class='last h3 no"+ context.length +"'>" + context.slice(-1) + "</textarea>";
	var middle = "";
	for (i = 1; i < (context.length - 1); i++) {
	    middle += "<textarea class='hiddenMiddle h3'>" + context.charAt( i ) + "</textarea>";
	    middle += "<textarea maxlength='1' class='middle h3 no"+ ( i + 1 ) +"'></textarea>";
	}
	$(".what-text").html("<div>" + first + middle + last + "</div>");

	var empty;
	for (i = 1; i < (context.length - 1); i++) {

		$(".no" + (i+1)).mousedown( function(){
		    $(this).val("");
		});

		$(".no" + (i+1)).keyup( function(){
			empty = false;
			$( ".middle" ).each( function(){
				if ($(this).val() == "") {
					empty = true;
				}; 
			})
			if (!empty) {
				$("body").addClass("ready");
			};



			if ($(this).hasClass("no"+(context.length-1))) {
				setTimeout( function(){$(".checkIt").focus().select();}, 200 );
			}
			else if ($(this).val() !== "") {				    	
		    	$(this).nextAll(".middle").first().focus().select();
			};
		});
		$(".no" + (i+1)).keydown( function(){
		    $(this).val("");
		});
	}

	$('textarea').keypress(function(event) {
	    var ew = event.which;
	    // if(ew == 32) // Actions
	    //     return true;
	    // if(48 <= ew && ew <= 57) // Numbers
	    //     return true;
	    if(65 <= ew && ew <= 90)
	        return true;
	    if(97 <= ew && ew <= 122)
	        return true;
	    return false;
	});

	var submitted_word, original_word;
	function submitAction(){

		submitted_word = $('.no1').val();
		$(".middle").each( function(){
			submitted_word += $(this).val();
		});
		submitted_word += $('.last').val();
		$("input.submitted_word").val(submitted_word);
		original_word = context;
		$("input.original_word").val(original_word);

        $.ajax({
            type: 'POST',
            url: '/convert/font',
            data: { original_word: original_word, 
                    submitted_word: submitted_word }
        });

		$(".middle").each(function(index, el) {

			$("html").addClass("judged");
			    	
			$(this).addClass("answered");
			$(this).prev().addClass("answered");

			if ($(this).val() == $(this).prev().val()) {
				$(this).addClass("correct");
				$(this).prev().addClass("correct");
			}else{
				$(this).addClass("wrong");
				$(this).prev().addClass("wrong");
				$("html").addClass("error");
			};
			setTimeout( function(){$(".next").focus().select()}, 200 );

		});
       return false;
	}

 	$('.checkIt').mousedown(function() {
 		submitAction();
    }); 
 	
	$(".checkIt").keydown( function(e){
		var code = e.which;
		if(code==32||code==13||code==188||code==186){
			submitAction();
	    } 
	});

	$(".fader").click(function(event) {
		$("html").removeClass();
	});
	$(".widthsBox").click(function(event) {
		$("html").toggleClass('widths');
	});
	$(".downloadBox").click(function(event) {
		$("html").toggleClass('download');
	});
	$(".aboutBox").click(function(event) {
		$("html").toggleClass('about');
	});


////////////////////////////////////////////////
////////////////                 ///////////////
////////////////    LISTENERS    ///////////////
////////////////                 ///////////////
////////////////////////////////////////////////

////////////////////////////////////////////////
	//ON RESIZE
	var updateLayout = _.debounce(function(e) {
		forwidth();
		bigText();
	}, 500);
	window.addEventListener("resize", updateLayout, false);

////////////////////////////////////////////////
	//ON scroll throttle
	var scroll = _.throttle(function(e) {

	}, 500);
	window.addEventListener("scroll", scroll, false);


	//ON scroll
  	$(window).scroll(function(){ // scroll event 

	});

	$(window).load(function() {
		bigText();
	    $(".no2").focus().select();
	}); 
	$(window).bind("load", function() {
		setTimeout( function(){$("body").addClass("loaded");}, 200 );
	});
});
// `~*# The end.

