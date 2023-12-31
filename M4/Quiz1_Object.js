/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/

ganjilGenapAsianGames = (date, data) => {
    //code here
    let tanggal = date % 2;
    let countMobil = 0;
    let countLolos = 0;
    if(date > 31 || date < 1){
        return `Tanggal yang dimasukkan tidak valid`;
    }
    for(let i = 0; i < data.length;i++){
        if(data[i].type == "Mobil"){
            countMobil++;
        }
        for(let j = 0; j < data[i].plat.length;j++){
            if(data[i].plat[j + 1] == " " && parseInt(data[i].plat[j]) != NaN){
                if(parseInt(data[i].plat[j]) % 2 == tanggal && data[i].type == "Mobil"){
                    countLolos++;
                }
            }
        }
    }
    return countMobil - countLolos;
    }
    
    console.log(ganjilGenapAsianGames(30, [{
      plat: 'B 1234 ABC',
      type: 'Mobil'
    }, {
      plat: 'A 2457 HE',
      type: 'Motor'
    }, {
      plat: 'AB 87 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Mobil'
    }])) // 1
    
    console.log(ganjilGenapAsianGames(26, [{
      plat: 'A 24 HE',
      type: 'Mobil'
    }, {
      plat: 'AB 871 RFS',
      type: 'Mobil'
    }, {
      plat: 'Z 9992 ERT',
      type: 'Mobil'
    }])) // 1
    
    console.log(ganjilGenapAsianGames(1, [{
      plat: 'A 24 WE',
      type: 'Mobil'
    }, {
      plat: 'AB 871 RFS',
      type: 'Mobil'
    }, {
      plat: 'Z 9992 XOXO',
      type: 'Mobil'
    }])) // 2
    
    console.log(ganjilGenapAsianGames(1, [{
      plat: 'A 2431 HE',
      type: 'Motor'
    }, {
      plat: 'AB 8711 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Motor'
    }])) // 0
    
    console.log(ganjilGenapAsianGames(32, [{
      plat: 'X 123 HAHA',
      type: 'Mobil'
    }])) // invalid dates
    
    console.log(ganjilGenapAsianGames(0, [{
      plat: 'X 123 HAHA',
      type: 'Mobil'
    }])) // invalid dates

    console.log(`\n`)

    /*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

economyChangeSummary = (tradeActivity) => {
    let duitJeff = 100000
    let duitLarry = 95000
    let duitJack = 90000

  }
  
  
 // console.log(economyChangeSummary([
   // ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
   // ['Larry Page+2%', 'Larry Page-1%'],
   // ['Jack Ma+4%'],
   // ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
  //]));
  /* 
    [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
    { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
    { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
    { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
    { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
  */
  console.log("==============================================================================");
  
  //console.log(economyChangeSummary([['Jeff Bezos-10%']]))
  /*
    [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
  */

    console.log(`\n`)

    //Soal 3
/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
  //CODE HERE
  let obj = {};
  for(let i = 0; i < studentsArr.length;i++){
    if(obj[studentsArr[i][0]] == undefined){
      obj[studentsArr[i][0]] = [];
      obj[studentsArr[i][0]].push(studentsArr[i])
    }
    else{
      obj[studentsArr[i][0]].push(studentsArr[i])
    }
  }
  return obj;
}
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/

console.log(`\n`);

/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  let destinasi = ["Yogyakarta", "Semarang","Surabaya","Denpasar"];
  let Pesawat = 275000;
  let Kereta = 250000;
  let Bis = 225000;
  if(emoney == "OVO"){
    Pesawat -= (Pesawat * 15/100);
    Kereta -= (Kereta * 15/100);
    Bis -= (Bis * 15/100);
  }
  else if(emoney == "Dana"){
    Pesawat -= (Pesawat * 10/100);
    Kereta -= (Kereta * 10/100);
    Bis -= (Bis * 10/100);
  }
  else if(emoney == "Gopay"){
    Pesawat -= (Pesawat * 5/100);
    Kereta -= (Kereta * 5/100);
    Bis -= (Bis * 5/100);
  }

  let tempArr = [];
  let tempStr = "";
  let newArr = [];
  for(let i = 0; i < arr.length;i++){
    for(let j = 0; j <= arr[i].length;j++){
      if(arr[i][j] == "-" || arr[i][j] == undefined){
        tempArr.push(tempStr);
        tempStr = "";
      }
      else{
        tempStr += arr[i][j];
      }
    }
    newArr.push(tempArr)
    tempArr = [];
  }

  let obj = {};
  let objArr = [];
  for(let a = 0; a < newArr.length;a++){
    obj = { 
    name: newArr[a][0],
    departureCity: newArr[a][1],
    destinationCity: newArr[a][2],
    transport: newArr[a][3],
    totalCost: 0
    }
    objArr.push(obj);
    obj = {};
  }

  let indexAwal = 0;
  let indexAkhir = 0;
  let index = 0
  for(let k = 0; k < objArr.length;k++){
    for(let l = 0; l < destinasi.length;l++){
      if(objArr[k].departureCity == destinasi[l]){
        indexAwal = l;
      }
      else if(objArr[k].destinationCity == destinasi[l]){
        indexAkhir = l
      }
    }
    index = Math.abs(indexAkhir - indexAwal);
    objArr[k].totalCost = index;
    index = 0;
  }

  for(let x = 0; x < objArr.length;x++){
    if(objArr[x].transport == "Pesawat"){
      objArr[x].totalCost *= Pesawat;
    }
    else if(objArr[x].transport == "Bis"){
      objArr[x].totalCost *= Bis;
    }
    else{
      objArr[x].totalCost *= Kereta;
    }
  }

  return objArr;
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];

console.log(`\n`);

/**
Delete Undefined Keys
=====================
Implementasikan function `deleteUndefinedKeys` untuk menghapus
key di dalam object yang memiliki value undefined.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki
value undefined. Tugas kamu adalah untuk menghapus key tersebut

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika tidak ada elemen di dalam `data`, maka tampilkan 'No data'

CONSTRAINTS
============
- DILARANG menggunakan built-in function .map, .filter

*/

function deleteUndefinedKeys(data) {
  //code here
  if(data.length == 0){
    return "No Data";
  }
  for(let i = 0; i < data.length;i++){
    for(let key in data[i]){
      let object = data[i];
      if(object[key] == undefined){
        delete object[key];
      }
    }
  }
  return data;
}

console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data