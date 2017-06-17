var express = require('express');
var router = express.Router();
var converter = require('../lib/convert');

var ufo_file = 'public/widths/edit/Widths-Edit.ufo';
var otf_file = 'public/widths/edit/Widths-Edit.otf';

var xml2js = require('xml2js');
var xml_builder = new xml2js.Builder({xmldec: {standalone: null, encoding: 'UTF-8'}});

var fs = require('fs');

var path = require('path');
var mime = require('mime');

var font_file_path = __dirname + "/../public/widths/edit/Widths-Edit.ufo"

function charWidth(letter){		    	
	var x;
	var data = fs.readFileSync(font_file_path + '/glyphs/' + letter + '.glif');
	xml2js.parseString(data, function (err, result) {
		if(err) console.log(err);			
		x = result.glyph.advance[0].$.width;
	})
	return x;
}

router.post('/font', function(req, res, next) {

	var original_word = req.body.original_word;
	var submitted_word = req.body.submitted_word;

	var org = original_word.substring(1, original_word.length-1);
	var sub = submitted_word.substring(1, original_word.length-1);

	for (var i = 0, len = org.length; i < len; i++) {
		if (org[i] !== sub[i]){
			o = charWidth(org[i]);
			s = charWidth(sub[i]);

			console.log(o);
			console.log(s);

			if (o > s) {
				console.log('bigger');
				
				var data = fs.readFileSync(font_file_path + '/glyphs/' + org[i] + '.glif');
		    	xml2js.parseString(data, function (err, result) {
					if(err) console.log(err);
    	
					result.glyph.advance[0].$.width = Number(result.glyph.advance[0].$.width) + 2;
					result.glyph.outline[0].contour[0].point[2].$.x = Number(result.glyph.outline[0].contour[0].point[2].$.x) + 2;
					result.glyph.outline[0].contour[0].point[3].$.x = Number(result.glyph.outline[0].contour[0].point[3].$.x) + 2;
					var xml = xml_builder.buildObject(result);

					fs.writeFileSync(font_file_path + '/glyphs/' + org[i] + '.glif', xml);
				})
			} else if (o < s){
				console.log('smaller');
				    	
				var data = fs.readFileSync(font_file_path + '/glyphs/' + org[i] + '.glif');
		    	xml2js.parseString(data, function (err, result) {
					if(err) console.log(err);
					    	
					result.glyph.advance[0].$.width = Number(result.glyph.advance[0].$.width) - 2;
					result.glyph.outline[0].contour[0].point[2].$.x = Number(result.glyph.outline[0].contour[0].point[2].$.x) - 2;
					result.glyph.outline[0].contour[0].point[3].$.x = Number(result.glyph.outline[0].contour[0].point[3].$.x) - 2;
					var xml = xml_builder.buildObject(result);

					fs.writeFileSync(font_file_path + '/glyphs/' + org[i] + '.glif', xml);
				})
			}
		}
	}



	// // parsing XML
	// fs.readFile(font_file_path + '/glyphs/' + letter + '.glif', function (err, data) {
	// 		if (err) {
	// 			throw err
	// 		}

	// 	xml2js.parseString(data, function (err, result) {
	// 		if(err) console.log(err);
			
	// 		// result.glyph.advance[0].$.width = Number(result.glyph.advance[0].$.width) + 1;
	// 		var xml = xml_builder.buildObject(result);

	// 		fs.writeFile(font_file_path + '/glyphs/' + letter + '.glif', xml, function(err) {
	// 			if(err) throw err;
	// 		});
	// 		res.end('done')
	// 	})
	// })

	// Convert UFO to OTF
	converter.ufo_to_otf(ufo_file);
	
	res.end('done')

});

router.post('/xml', function(req, res, next) {
});

module.exports = router;
