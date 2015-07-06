var cmd = require('child_process');

exports.ufo_to_otf = function(file_path){
  cmd.spawnSync('ufo2otf', [file_path]);
}