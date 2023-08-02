// No 1
/*
Problem :
Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
*/

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

console.log(word + " " + second + " " + third + " " + fourth + " " + sixth + " " + seventh);

// ---------------------------------------
console.log(' ');
// ---------------------------------------

// No 2. Index Accessing - 1 by 1
/* 
Problem
Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.

Hints
Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
tersebut!
*/  

let kata = 'wow JavaScript is so cool';
let exampleFirstWord = kata[0] + kata[1] +kata[2];
let exampleSecondWord = kata[4] + kata[5] + kata[6] + kata[7];
let exampleRandomWord = kata[8] + kata[1] + kata[3] + kata[21] + kata[1] + kata[1] + kata[24];
console.log('First Word: ' + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Random Word: " + exampleRandomWord);

// ---------------------------------------
console.log(' ');
// ---------------------------------------

// No 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4,8);
let exampleRandomWord3 = word3.substring(15);

console.log('First Word: ' + exampleFirstWord3);
console.log("Second Word: " + exampleSecondWord3);
console.log("Random Word: " + exampleRandomWord3);

// No 4. Breaking Sentence (yet Again) and Count Each Length
/*Problem
Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
*/

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word3.substring(4,8);
let exampleRandomWord4 = word3.substring(15);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let randomWordLength = exampleRandomWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('Random Word: ' + exampleRandomWord4 + ', with length: ' + randomWordLength);