// Soal 1
/*
Diberikan function attack(), damageCalculation().

Function damageCalculation() akan menerima 2 parameter yaitu numberOfAttacks dan damagePerAttack
Function attack() akan menerima 1 parameter yaitu damage
[IMPLEMENTASI] Gunakan function damageCalculation() untuk menghitung damage yang diterima 
gunakan function attack() untuk mensimulasikan setiap attack dengan rumus damage - 2 disetiap attack.

[CONTOH] damageCalculation(3, 10) akan mengembalikan nilai 24

Karena attack akan dikurangi 2, maka setiap attack akan menghasilkan damage 8
*/

function attack (damage) {
    // Code disini
    return damage - 2
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini;
    let totalDamage = numberOfAttacks*attack(damagePerAttack);
    return totalDamage;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90

  console.log(`\n`)

  /*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string,
implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    let ranged = [];
    let melee = [];
    let result = [];
    let nama = "";
    for(let i = 0; i < str.length;i++){
        if(str[i] == '-' && str[i+1] == 'R'){
            ranged.push(nama)
            i += 7
            nama = ""
        }
        else if(str[i] == '-' && str[i+1] == 'M'){
            melee.push(nama)
            i += 6
            nama = ""
        }
        else{
            nama += str[i]
        }
    }
    result.push(ranged);
    result.push(melee);
    return result;
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []