//No 1. Melakukan Looping Menggunakan While
/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
*/

//Looping Pertama
let k = 0;
while(k<5){
    console.log(k);
    k++;
}

//Looping Kedua
k = 5;
while(k > 0){
    console.log(k);
    k--;
}

// No 2. Melakukan Looping Menggunakan For
/*
Problem
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. 
Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
*/

//Looping Pertama
k = 5;
for(let i = 0; i < k;i++){
    console.log(i);
}


//Looping Kedua
k = 0;
for(let j = 5 ; j > k; j--){
    console.log(j);
}

// 3. Angka Ganjil dan Genap
/*
Problem
Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
*/
let angka = 100;
for(let l = 1; l <= angka;l++){
    if(l % 2 == 0){
        console.log(`${l} adalah bilangan genap`);
    }
    else{
        console.log(`${l} adalah bilangan ganjil`);
    }
}

// No 4. counter kelipatan
/*
Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
Pada 3 perulangan baru ini periksa setiap angka counter:
Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
"3 kelipatan 3"dan seterusnya.
*/

//Loop Kelipatan 3
for(let a = 1; a <= 100; a += 2){
    if(a % 3 == 0){
        console.log(`${a} adalah kelipatan 3`);
    }
}

//Loop Kelipatan 6
for(let b = 1; b <= 100; b += 5){
    if(b % 6 == 0){
        console.log(`${b} adalah kelipatan 6`);
    }
}

//Loop Kelipatan 10
for(let c = 1; c <= 100; c += 9){
    if(c % 10 == 0){
        console.log(`${c} adalah kelipatan 10`);
    }
}