/* For include() */
var fs = require('fs');
function read(f) { return fs.readFileSync(f).toString(); }
function include(f) { eval.apply(global, [read(f)]); }

/*******************/
/* Import Packages */
/*******************/

// Develoka - Angka Terbilang
// https://github.com/develoka/angka-terbilang-js
const angkaTerbilang = require('@develoka/angka-terbilang-js');

// Dikyarga - Angka Menjadi Terbilang
// https://github.com/dikyarga/angka-menjadi-terbilang
const angkaMenjadiTerbilang = require('angka-menjadi-terbilang');

// BosNaufal - Terbilang
// https://github.com/BosNaufal/terbilang-js
include('node_modules/terbilang-js/terbilang.js');

// DimasKiddo - Angka Terbilang NodeJS
// https://github.com/dimaskiddo/angka-terbilang-nodejs
const angka = require('@dimaskiddo/angka-terbilang-nodejs')

// rimara14 - terbilang
// https://github.com/rimara14/terbilang
const terbilangRimara = require("angka-terbilang/dist/number-to-string");

/*******************/
/* Run Benchmarks  */
/*******************/

// Import the benchtable module
var BenchTable = require('benchtable');

// Create benchtable suite
var suite = new BenchTable();

suite
  // Add functions for benchmarking
  .addFunction('@develoka/angka-terbilang-js', s => angkaTerbilang(s))
  .addFunction('dikyarga/angka-menjadi-terbilang', s => angkaMenjadiTerbilang(s))
  .addFunction('BosNaufal/terbilang-js', s => terbilang(s))
  .addFunction('DimasKiddo/angka-terbilang-nodejs', s => angka.toTerbilang(s))
  .addFunction('rimara14/terbilang', s => terbilangRimara.default(s))

  // Add inputs
  .addInput('Ratusan Ribu', ['618277'])
  .addInput('Ratusan Juta', ['120019212'])
  .addInput('Ratusan Milyar', ['999120019212'])
  .addInput('Ratusan Triliun', ['865999120019212'])

  // Add listeners
  .on('cycle', event => {
    console.log(event.target.toString());
  })
  .on('complete', () => {
    console.log('Fastest is ' + suite.filter('fastest').map('name'));
    console.log(suite.table.toString());
  })

  // Run async
  .run({ async: false });