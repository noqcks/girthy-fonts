var cmd = require('child_process');
var fs = require('fs');

exports.ufo_to_otf = function(file_path){
  // cmd.spawnSync('ufo2otf', [file_path]);
  cmd.spawnSync('ufo2otf', [file_path]);
  fs.createReadStream('public/widths/edit/Widths-Edit.otf').pipe(fs.createWriteStream('public/widths/edit/Widths-Edit.woff'));

}