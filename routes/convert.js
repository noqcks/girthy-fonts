var express = require('express');
var router = express.Router();
var converter = require('../lib/convert');

var ufo_file = './fonts/Widths.ufo';
var otf_file = './fonts/Widths.otf';

var xml2js = require('xml2js');
var xml_builder = new xml2js.Builder();

var path = require('path');
var mime = require('mime');

/* Convert UFO to OTF */
router.get('/font', function(req, res, next) {
  converter.ufo_to_otf(ufo_file);
  res.download(otf_file);
});

router.post('/xml', function(req, res, next) {
  var user_letter = req.body.user_letter;
  var constant_letter = req.body.constant_letter;
  console.log(user_letter);
  console.log(constant_letter);
  // parsing XML
  // fs.readFile(font_file_path + '/glyphs/'+ letter + '.glif', function (err, data) {
  //   if (err) {
  //     throw err
  //   }

  //   xml2js.parseString(data, function (err, result) {
  //     if(err) console.log(err);

  //     result.glyph.advance[0].$.width = Number(result.glyph.advance[0].$.width) + 1;
  //     var xml = xml_builder.buildObject(result);

  //     fs.writeFile(font_file_path + '/glyphs/b.glif', xml, function(err) {
  //       if(err) throw err;
  //     });
  //     res.end('done')
  //   })
  // })
});

module.exports = router;
