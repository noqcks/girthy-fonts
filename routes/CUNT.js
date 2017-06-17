var FUCK = 'urfac';
var ASS = 'sdfas';

var fs = require('fs');

for (var i = 0, len = FUCK.length; i < len; i++) {
	if (FUCK[i] !== ASS[i]){
		console.log(charWidth(FUCK[i]));
	}
}


function charWidth(letter){		    	
	fs.readFile(font_file_path + '/glyphs/' + letter + '.glif', function (err, data) {
		if(err) console.log(err); 	
			xml2js.parseString(data, function (err, result) {
			if(err) console.log(err);
			// console.log(result.glyph.advance[0].$.width);
			
			return result.glyph.advance[0].$.width;
			// return result.glyph.advance[0].$.width;		
		})
	})
}