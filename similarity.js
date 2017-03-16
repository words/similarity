#! /usr/bin/env node

//const distance = require('leven');
const program = require('commander');
const package = require('./package.json');
const similarity = require('./index.js');

program
  .version(package.version)
  .usage('[words1] [word2]')
  .parse(process.argv);

if (program.args.length < 1) {
  program.help();
} else {
  const args = program.args; 
  console.log(similarity(args[0], args[1]));
}

process.exit(0);
