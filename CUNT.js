var FUCK = 'urfac';
var ASS = 'sdfas';

var fs = require('fs');

var font_file_path = __dirname + "/public/widths/edit/Widths-Edit.ufo";
var xml2js = require('xml2js');
var xml_builder = new xml2js.Builder();


// for (var i = 0, len = FUCK.length; i < len; i++) {
// 	if (FUCK[i] !== ASS[i]){
// 	// console.log(FUCK[i])		
// 		console.log(charWidth(FUCK[i]));
// 	}
// }


// function charWidth(letter){		    	
// 	var x;
// 	// fs.readFileSync(font_file_path + '/glyphs/' + letter + '.glif', function(err, data) {
// 		// if(err) console.log(err);
// 		var data = fs.readFileSync(font_file_path + '/glyphs/' + letter + '.glif');
// 		xml2js.parseString(data, function (err, result) {
// 			if(err) console.log(err);
// 			// console.log(result.glyph.advance[0].$.width);
			
// 			x = result.glyph.advance[0].$.width;
// 			// return result.glyph.advance[0].$.width;		
// 		})
// 	return x;
// 	// })
// }


var data = fs.readFileSync(font_file_path + '/glyphs/' +'a' + '.glif');
xml2js.parseString(data, function (err, result) {
	if(err) console.log(err);

	// console.log(result)
	result.glyph.advance[0].$.width = Number(result.glyph.advance[0].$.width) + 2;
	result.glyph.outline[0].contour[0].point[2].$.x = Number(result.glyph.outline[0].contour[0].point[2].$.x) + 2;
	result.glyph.outline[0].contour[0].point[3].$.x
	// var xml = xml_builder.buildObject(result);

	// //THIS IS WHERE I'm FAILING
	// fs.writeFile(font_file_path + '/glyphs/' + 'a' + '.glif', xml, function(err) {
	// 	if(err) throw err;
	// });
})