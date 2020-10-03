/*******************/
/* Import Packages */
/*******************/

// Develoka - Angka Terbilang
const angkaTerbilang = require('@develoka/angka-terbilang-js');

// Dikyarga - Angka Menjadi Terbilang
const angkaMenjadiTerbilang = require('angka-menjadi-terbilang');

// BosNaufal - Terbilang
var fs = require('fs');
function read(f) { return fs.readFileSync(f).toString(); }
function include(f) { eval.apply(global, [read(f)]); }
include('node_modules/terbilang-js/terbilang.js');

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