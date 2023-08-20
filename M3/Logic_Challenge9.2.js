//Soal 1
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    let hasil = true;
    for(let i = 2; i < angka;i++){
        if(angka % i == 0){
            hasil = false;
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false


console.log(`\n`)


//Soal 2
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let num = 1;
    if(angka1 > angka2){
        for(let i = 1; i < angka1;i++){
            if(angka1 % i == 0 && angka2 % i == 0){
                num = i;
            }
        }
    }
    else{
        for(let i = 1; i < angka2;i++){
            if(angka1 % i == 0 && angka2 % i == 0){
                num = i;
            }
        }
    }
    return num;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1

  console.log(`\n`)

//Soal 3
  function cariMedian(arr) {
    // you can only write your code here!
    let index = 0;
    let hitungan = 0;
    arr.sort(function(a, b){return a - b});
    index = Math.floor(arr.length / 2);
    if(arr.length % 2 != 0){
    
        return arr[index];
    }
    else{

        hitungan = (arr[index] + arr[index - 1])/2
        return hitungan;
    }

  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5

  console.log(`\n`)

  // Soal 4
/*
Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. 
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. 
Jika modus tidak ditemukan, function akan me-return -1. 
Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). 
Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.
*/
function cariModus(arr) {
    // you can only write your code here!
    let modus = -1;
    let nilaiIndex = -1;
    const obj = {};
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]] += 1;
        }
        else{
            obj[arr[i]] = 1;
        }
    }

    for(const key in obj){
        let nilai = obj[key]
        if(nilai > nilaiIndex){
            nilaiIndex = nilai;
            modus = key;
        }
    }

    if(nilaiIndex == arr.length || nilaiIndex == 1){
        return -1;
    }
    else{
        return modus; 
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  console.log(`\n`)

  // Soal 5
//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let daftarHuruf = "abcdefghijklmnopqrstuvwxyz";
    let hasil = "";
    for(let i = 0; i < kata.length; i++){
        for(let j = 0; j < daftarHuruf.length; j++){
            if(kata[i] == daftarHuruf[j]){
                hasil += daftarHuruf[j+1]
            }
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu