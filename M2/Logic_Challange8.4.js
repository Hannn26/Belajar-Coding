//soal 1
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    let reverse = "";
    for(let i = kata.length - 1; i >= 0; i--){
      reverse = reverse + kata[i];
    }

    if(reverse == kata){
        return true;
    }
    else{
        return false;
    }

  }
  
  // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
  
  
  //soal 2
  /*
  Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. 
  Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. 
  Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. 
  Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. 
  Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
  
  note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
  note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
  */
  
  function angkaPalindrome(num) {
    // you can only write your code here!
    b = true;
    while(b == true){
        let numStr = num.toString()
        let reverse = "";
        if (numStr == 9){
            b = false;
            return 11;
        }
        else if(numStr.length < 2 ){
            b = false;
            return num+1;
        }
        else{
            for(let i = numStr.length - 1; i >= 0; i--){
                reverse = reverse + numStr[i];
                }

            if(reverse == numStr){
                b = false;
                return reverse;
            }
            else{
                num++;
                reverse = "";
            }
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

//Soal No 3

  function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let count = 1
    for(let i = 0; i <= kalimat.length - 1; i++){
        if(kalimat[i] == " "){
            count++;
        }
    }
    return count;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

// Soal No 4

  function pasanganTerbesar(num) {
    // you can only write your code here!
    let numStr = num.toString();
    let newArr = new Array();
    for(let i = 0; i < numStr.length;i++){
        if(numStr.length - i == 1){
            break;
        }
        else{
            newArr.push(parseInt(numStr[i]+numStr[i+1]));
        }
    }
    newArr.sort(function(a, b){return b - a});
    return newArr[0];

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99