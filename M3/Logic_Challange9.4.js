/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    let gabung = "";
    let myArr = [];
    for(let i = 0; i <= angka;i++){
        for(let j = 0; j <= angka; j++){
            if(i*j == angka){
                gabung = i.toString() + j.toString();
                myArr.push(gabung.length);
            }
        }
    }

    myArr.sort(function(a, b){return a - b});
    return myArr[0];
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2

console.log(`\n`)

  //DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    let daftarHuruf = "abcdefghijklmnopqrstuvwxyz";
    let arrIndex = new Array;

    //Mengubah index dari parameter sesuai dengan index daftarHuruf, lalu masukkan dalam sebuah array.
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < daftarHuruf.length; j++){
            if(str[i] == daftarHuruf[j]){
                arrIndex.push(j)
            }
        }
    }

    //Sorting array
    let temporary = 0;
    for(let a = 0; a < arrIndex.length;a++){
        for(let b = 0; b < (arrIndex.length - a -1); b++){
            if(arrIndex[b] > arrIndex[b+1]){
                temporary = arrIndex[b];
                arrIndex[b] = arrIndex[b+1];
                arrIndex[b+1] = temporary;
            }
        }
    }

    // Mengembalikan str yang sudah disorting
    let hasil = ""
    for(let c = 0; c < arrIndex.length;c++){
        hasil += daftarHuruf[arrIndex[c]];
    }

    return hasil;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
  
console.log(`\n`)

//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let hasil = "";
    for(let i = 0; i < kalimat.length;i++){
        if(kalimat[i] == kalimat[i].toUpperCase()){
            hasil += kalimat[i].toLowerCase()
        }
        else if(kalimat[i] == kalimat[i].toLowerCase()){
            hasil += kalimat[i].toUpperCase()
        }
        else{
            hasil += kalimat[i]
        }
    }

    return hasil;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

  console.log(`\n`)

  // Soal 4
  /*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
    // you can only write your code here!
    for(let i = 0; i < num.length;i++){
        if(num[i] == 'a' || num[i] == 'A'){
            if(num[i + 4] == 'b' || num[i + 4] == 'B'){
                return true
            }
            else{
                return false;
            }
        }
        else if(num[i] == 'b' || num[i] == 'B'){
            if(num[i + 4] == 'A' || num[i + 4] == 'a'){
                return true
            }
            else{
                return false;
            }
        }

    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
