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
| [@develoka/angka-terbilang-js](https://github.com/develoka/angka-terbilang-js)     | 3,033,891 ops/sec | 2,304,711 ops/sec | 1,748,600 ops/sec | 1,339,721 ops/sec |
| [dikyarga/angka-menjadi-terbilang](https://github.com/dikyarga/angka-menjadi-terbilang) | 116,710 ops/sec   | 103,075 ops/sec   | 85,881 ops/sec    | 77,056 ops/sec    |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js)           | 188,457 ops/sec   | 130,263 ops/sec   | 80,033 ops/sec    | 54,130 ops/sec    |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js)           | 1,843,987 ops/sec   | 1,791,951 ops/sec   | 1,327,440 ops/sec    | 1,050,543 ops/sec    |
| [BosNaufal/terbilang-js](https://github.com/BosNaufal/terbilang-js)           | 423,788 ops/sec   | 291,578 ops/sec   | 170,460 ops/sec    | 1,103,812 ops/sec    |

## Device Info

```
Intel(R) Core(TM) i5-4300U CPU @ 1.90GHz
CPU 4 Core
Memory 8GiB
SSD
```