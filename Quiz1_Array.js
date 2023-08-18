/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

function doubleReverse(arr) {
    //code here 
    let result = [];
    let tempStr = "";
    for(let a = arr.length - 1; a >= 0; a--){
        if(arr[a].length % 2 == 0){
            for(let b = arr[a].length - 1; b >= 0;b-- ){
                tempStr += arr[a][b];
            }
            arr[a] = tempStr;
            tempStr = ""
            
        }
        result.push(arr[a]);
    }
    return result;
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter

console.log(`\n`);

/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

function findNotRelative(arr1, arr2) {
    //code here
    let arr = arr1.concat(arr2);
    let obj = {};
    let result = [];
    for(let i = 0; i < arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1
        }
        else{
            obj[arr[i]] = 1
        }
    }
    for(const key in obj){
        for(let j = 0; j < arr1.length;j++){
            if(parseInt(key) == arr1[j] && obj[key] == 1){
                result.push(arr1[j])
            }
        }
    }
    return result;
  }
  
  console.log(findNotRelative([3, 6, 10, 12, 15], [1, 3, 5, 10, 16])); // [ 6, 12, 15]
  console.log(findNotRelative([10, 20, 36, 59], [5, 10, 15, 59])); //[20, 36]
  console.log(findNotRelative([1, 2, 3], [2, 1, 3])); //[]

  console.log(`\n`);

  /*
Minimum Distance Between Greatest Element

Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. 
Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. 
Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

minDistanceBetweenGreatest = (arr) => {
    // your code here
    let temp = 0;
    let tempArr = [];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] >= temp){
            temp = arr[i];
        }
    }

    for(let j = 0; j < arr.length; j++){
        if(arr[j] == temp){
            tempArr.push(j)
        }
    }

    let index = tempArr.length;
    if(index < 2){
        return 0
    }
    for(let k = tempArr.length - 1; k > 0; k--){
        if(tempArr[k] - tempArr[k -1] <= index){
            index = tempArr[k] - tempArr[k -1]
        }
    }

    console.log(tempArr)
    return index;
  }
  
  console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
  console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
  console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0

  console.log(`\n`);

  /*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

averageLengthWord = (words) => {
    //code here
    let Word = "";
    let wordsArr = [];
    let result = [];
    for(let i = 0; i <= words.length;i++){
        if(words[i] == " " || words[i] == undefined){
            wordsArr.push(Word);
            Word = "";
        }
        else{
            Word += words[i];
        }
    }
    let average = Math.round(wordsArr.join("").length / wordsArr.length);
    for(let j = 0; j < wordsArr.length;j++){
        if(wordsArr[j].length == average){
            result.push(wordsArr[j])
        }
    }
    return result;
  }
  
  console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
  console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
  console.log(averageLengthWord('I am diligent')); // []