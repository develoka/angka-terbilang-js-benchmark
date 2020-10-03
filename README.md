# Angka-terbilang-js-benchmark

Benchmark untuk membandingkan performa package [@develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js) terhadap package node lain yang serupa. Benchmark dilakukan menggunakan [Benchtable](https://github.com/izuzak/benchtable)

## Instalasi

```
npm install
```

## Menjalankan Benchmark

```
npm run bench
```

## Hasil

| Package                          | Angka Ratusan Ribu      | Angka Ratusan Juta      | Angka Ratusan Milyar    | Angka Ratusan Triliun   |
|----------------------------------|-------------------|-------------------|-------------------|-------------------|
| [@develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js)     | 8,620,087 ops/sec | 8,158,512 ops/sec | 8,405,430 ops/sec | 8,400,032 ops/sec |
| [dikyarga/angka-menjadi-terbilang](https://github.com/dikyarga/angka-menjadi-terbilang) | 115,191 ops/sec   | 102,782 ops/sec   | 87,106 ops/sec    | 78,586 ops/sec    |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js)           | 176,747 ops/sec   | 148,422 ops/sec   | 90,717 ops/sec    | 58,782 ops/sec    |

## Device Info

```
Intel(R) Core(TM) i5-4300U CPU @ 1.90GHz
CPU 4
Memory 8GiB
```