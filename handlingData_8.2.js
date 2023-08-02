/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input1 = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling1(input){
    let panjangArr = input.length;
    let data = ``;

    for(let i = 0; i <= panjangArr-1; i++ ){
        data += `\nNomor ID: ${input[i][0]}\nNama Lengkap: ${input[i][1]}\nTTL: ${input[i][2]} ${input[i][3]}\nHobi: ${input[i][4]}\n`;
    }
    return data;
}

console.log(dataHandling1(input1))

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

//pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull loh
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung","Pria","21/05/1989", "SMA Internasional Metro");


function dataHandling2(input) {
    let data = input.slice(4,5);
    let newArr = new Array();
    let bulanStr = data.toString();
    let bulan = bulanStr.slice(3,5);
    console.log(input);
    switch(bulan){
        case "01":
          console.log("Januari");
          break;
         
        case "02":
          console.log("Februari");
          break;

        case "03":
          console.log("Maret");
          break;
        
        case "04":
          console.log("April");
          break;
         
        case "05":
          console.log("Mei");
          break;
         
        case "06":
          console.log("Juni");
          break;
         
        case "07":
          console.log("Juli");
          break;
         
        case "08":
          console.log("Agustus");
          break;
         
        case "09":
          console.log("September");
          break;
         
        case "10":
          console.log("Oktober");
          break;
         
        case "11":
          console.log("November");
          break;
         
        case "12":
          console.log("Desember");
          break;
         
        default:
          console.log("Bulan yang kamu pilih tidak tepat");
          break;
      }
    newArr.push(bulanStr.slice(0,2),bulan,bulanStr.slice(6));
    console.log(newArr);
    console.log(newArr[0] + "-" + newArr[1] + "-" + newArr[2]);
    return input[1].substring(0,15);

}

console.log(dataHandling2(input));

/**
* keluaran yang diharapkan (pada console)
*
* ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
* Mei
* ["1989", "21", "05"]
* 21-05-1989
* Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
*/