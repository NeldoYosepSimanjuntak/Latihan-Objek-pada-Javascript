const angka = [-1, 0,5,-2,6,7];
// const newAngka = [];
// menggunakan for
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

//penggunaan filter () dengan arrow function

const newAngka = angka.filter(a =>  a >= 3);
console.log(newAngka);

// penggunaan map()
const kaliDua = angka.map(b => b * 2);
console.log(kaliDua);

// reduce dengan menjumlahkan semua elemen array
let total = 0;
const jumlahArray = angka.reduce((accumulator, curr) => accumulator += curr, 0)
console.log(jumlahArray);

// method chaining
//cari angka di atas 5
// kali 2
// jumlahkan 

const hasil = angka.filter(a => a >= 5)
.map(a => a * 2)
.reduce((acc, cur) => acc + cur , 0)
console.log(hasil);