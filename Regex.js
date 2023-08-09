// Soal 1
function hapusSimbol(str) {
    // you can only write your code here!
    let result = str.match(/\w/g);
    let hasil = '';
    for(let i = 0; i < result.length;i++){
        hasil += result[i];
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100

  console.log(`\n`)

  // Soal 2
  /*
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string. Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut di dalam kalimat tersebut. Gunakan regex untuk melatih kemampuan regex.
*/
function cariPelaku(str) {
    // you can only write your code here!
    let result = str.match(/abc/g);
    return result.length;
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2