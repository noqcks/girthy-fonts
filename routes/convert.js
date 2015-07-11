var express = require('express');
var router = express.Router();
var converter = require('../lib/convert');

var ufo_file = 'public/widths/edit/Widths-Edit.ufo';
var otf_file = 'public/widths/edit/Widths-Edit.otf';

var xml2js = require('xml2js');
var xml_builder = new xml2js.Builder();

var fs = require('fs');

var path = require('path');
var mime = require('mime');

var font_file_path = "/public/widths/edit/Widths-Edit.ufo"

router.post('/font', function(req, res, next) {

	var original_word = req.body.original_word;
	var submitted_word = req.body.submitted_word;

	var org = original_word.substring(1, original_word.length-1);
	var sub = submitted_word.substring(1, original_word.length-1);

	function charWidth(letter){
		console.log(font_file_path + '/glyphs/' + letter + '.glif');
		    	
		fs.readFile(font_file_path + '/glyphs/' + letter + '.glif', function (err, data) {
	 		xml2js.parseString(data, function (err, result) {
				if(err) console.log(err);
				console.log(result.glyph.advance[0].$.width);
				    	
				return result.glyph.advance[0].$.width;
			})
		})
	}


	for (var i = 0, len = org.length; i < len; i++) {
		if (org[i] !== sub[i]){
			var o = charWidth(org[i]);
			var s = charWidth(sub[i]);

			// console.log(o);
			// console.log(s);

		}
	}

	// // parsing XML
	// fs.readFile(font_file_path + '/glyphs/' + letter + '.glif', function (err, data) {
	// 	if (err) {
	// 		throw err
	// 	}

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
