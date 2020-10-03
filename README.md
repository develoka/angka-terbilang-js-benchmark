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
| [@develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js)     | 473,566 ops/sec | 384,371 ops/sec | 289,601 ops/sec | 218,829 ops/sec |
| [dikyarga/angka-menjadi-terbilang](https://github.com/dikyarga/angka-menjadi-terbilang) | 113,633 ops/sec   | 104,313 ops/sec   | 86,764 ops/sec    | 75,704 ops/sec    |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js)           | 190,818 ops/sec   | 123,329 ops/sec   | 76,851 ops/sec    | 52,241 ops/sec    |

## Device Info

```
Intel(R) Core(TM) i5-4300U CPU @ 1.90GHz
CPU 4
Memory 8GiB
SSD
```