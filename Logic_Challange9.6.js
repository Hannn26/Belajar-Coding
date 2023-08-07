function changeMe(arr) {
    // you can only write your code here!
    let obj = {};
    if(arr.length == 0){
        console.log(" ");
    }
    else{
        for( let i = 0;i < arr.length;i++){
            let nama = arr[i][0] + " " + arr[i][1];
            let umur = 2023 - arr[i][3];
            if(arr[i].length < 4){
                obj[nama] = {
                    firstName : arr[i][0],
                    lastName : arr[i][1],
                    gender : arr[i][2],
                    age : 'Invalid Birth Year'

                }
            }
            else{
                obj[nama] = {
                    firstName : arr[i][0],
                    lastName : arr[i][1],
                    gender : arr[i][2],
                    age : umur

                }
            }
        }
        console.log(obj);
    }
}
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  changeMe([]); // ""

console.log(`\n`)

  // Soal 2
  /*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

function shoppingTime(memberId, money) {
    // you can only write your code here!
    let changeMoney = money;
    let listPurchased = [];
    let daftarBarang = {};
    let receipt = {};
    daftarBarang = {
        'Sepatu Stacattu' : 1500000,
        'Baju Zoro' : 500000,
        'Baju H&N' : 250000,
        'Sweater Uniklooh' : 175000,
        'Casing Handphone' : 50000
    };
    if(money < 50000){
        return "Mohon maaf, uang tidak cukup";
    }
    else if(memberId != "" && money > 50000){
        for(const key in daftarBarang){
            let harga = daftarBarang[key];
            if(changeMoney >= harga){
                changeMoney -= harga;
                listPurchased.push(key);

            }
        }
        receipt = {
            'memberId' : memberId,
            'money' : money,
            'listPurchased' : listPurchased,
            'changeMoney' : changeMoney
        }
        return receipt;
    }
    else{
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  console.log(`\n`)

  // Soal 3
  /*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli 
(nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut 
berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, 
sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
    let receipt = [];
    let item = {};
    if(shoppers.length == 0){
        return [];
    }
    for(let i = 0; i < listBarang.length;i++){
        item = {
            product : listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0
        }
        receipt.push(item);
        for(let j = 0; j < shoppers.length;j++){
            if(shoppers[j].product == listBarang[i][0]){
                if(shoppers[j].amount > receipt[i].leftOver){
                    break;
                }
                receipt[i].leftOver -= shoppers[j].amount ;
                receipt[i].shoppers.push(shoppers[j].name);
                receipt[i].totalProfit += listBarang[i][1] * shoppers[j].amount;
            }
        }
    }
    return receipt;
}
    
    

    
  


  // TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]