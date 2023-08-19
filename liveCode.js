/*function countDistanceLetterRecursive(sentence, letter) {
  if(sentence[0] == letter){
    return 1;
  }
  else{
    let sentenceSliced = sentence.slice(1)
    return 1 + countDistanceLetterRecursive(sentenceSliced, letter);
  }

}
//the quick brown fox, 'o' => the quick bro (totalnya 13)
console.log(countDistanceLetterRecursive('12104123', '1')); // 1
console.log(countDistanceLetterRecursive('the quick brown fox', 'o')); // 13
console.log(countDistanceLetterRecursive('hahaha', 'a')); // 2

console.log(`\n`)
*/

//Soal 4
/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.
Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6
RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!


function countSolo(arr) {
  let count = 0;
  arr.sort(function(a, b){return a - b})
  let obj = {};
  for(let i = 0; i < arr.length;i++){
    if(obj[arr[i]]){
      obj[arr[i]] += 1
    }
    else{
      obj[arr[i]] = 1
    }
  }
  for(const key in obj){
    if(obj[key] == 1){
      count += parseInt(key);
    }
  }
  
  return count;

}

console.log(countSolo([5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([3, 6, 3, 6, 1, 1, 2, 1])) // 2
console.log(countSolo([3, 3, 3, 3, 4, 5, 8, 10, 11])) // 38
*/

/*
****************
Advanced Seating
****************
trainSeating adalah sebuah function yang menerima parameter berupa 
array of object.
Yang harus mengeluarkan hasil sebuah object yang memiliki isi key 
berdasarkan jenis gerbong penumpang.
Yang berisi daftar nama penumpang dan tempat duduk penumpang.

Contoh input dan output bisa dilihat di test case.


*/
/*function trainSeating(arr) {
  let obj = {};
  let result = {};
  let temp = {};
  for(let i = 0; i < arr.length; i++){
    if(result[arr[i].gerbong] == undefined){
      result[arr[i].gerbong] = [];
      temp = {
        nama: arr[i].nama,
        seat: arr[i].seat
      }
      result[arr[i].gerbong].push(temp);
    }
    else{
      temp = {
        nama: arr[i].nama,
        seat: arr[i].seat
      }
      result[arr[i].gerbong].push(temp)
    }
    
  }
  return result;

}

console.log(trainSeating([{
    nama: "Awtian",
    gerbong: "VVIP",
    seat: 'A1'
  },
  {
    nama: "Klonoa",
    gerbong: "VIP",
    seat: 'V1'
  },
  {
    nama: "Azizy",
    gerbong: "VVIP",
    seat: 'A2'
  },
  {
    nama: "Crash",
    gerbong: "Regular",
    seat: 'R1'
  },
  {
    nama: "Sena",
    gerbong: "Regular",
    seat: 'R3'
  },
  {
    nama: "Heri",
    gerbong: "Regular",
    seat: 'R10'
  },
  {
    nama: "Retsu",
    gerbong: "VIP",
    seat: 'V2'
  },
  {
    nama: "Hiruma",
    gerbong: "VVIP",
    seat: 'A666'
  },
  {
    nama: "Tsubasa",
    gerbong: "VIP",
    seat: 'V6'
  }
]));
/*
Output :
{
  VVIP:
   [ { nama: 'Awtian', seat: 'A1' },
     { nama: 'Azizy', seat: 'A2' },
     { nama: 'Hiruma', seat: 'A666' } ],
  VIP:
   [ { nama: 'Klonoa', seat: 'V1' },
     { nama: 'Retsu', seat: 'V2' },
     { nama: 'Tsubasa', seat: 'V6' } ],
  Regular:
    [ { nama: 'Crash', seat: 'R1' },
      { nama: 'Sena', seat: 'R3' },
      { nama: 'Heri', seat: 'R10'} ]
}
*/

/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/
/*
var max = 5 //input bisa berubah ubah
//code here tanpa fungsi, lgsg console.log aja
for(let i = max; i > 1; i--){
  console.log(i.toString().repeat(i))
}

for(let i = 1; i <= max; i++){
  console.log(i.toString().repeat(i))
}
*/

//Soal 1

function jarakTerdekat(arr) {
    //code here
    let index = []
    for(let i = 0; i < arr.length;i++){
      for(let j = 0; j < arr[i].length; j++){
        if(arr[i][j] == "X"){
          index.push(j)
          index.push(i)
        }
      }
    }
    if(index.length < 4 || index.length > 4){
      return 0
    }
    let result = Math.abs(index[2] - index[0]) + Math.abs(index[3] - index[1]);
    return result;
  }
  
  console.log(jarakTerdekat([
    ['','','','','','','','','','X'],
    ['','','','','','','','','X',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ])) //2
  
  console.log(jarakTerdekat([
    ['','','X','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','X',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ])) //10
  
  console.log(jarakTerdekat([
    ['','X','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','','X'],
  ])) //14
  
  console.log(jarakTerdekat([
    ['','','X','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
    ['','','','','','','','','',''],
  ])) //0
  