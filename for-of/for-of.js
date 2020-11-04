const mahasiswa = ["sandhika galih", "Putra dermawan", "Neldo","naruto"];

// cara biasa dengan forEach
// mahasiswa.forEach(m => console.log(m));

// cara dengan for biasa
// for(let i = 0; i < mahasiswa.length; i++){
//     console.log(mahasiswa[i]);
// }

// cara for of

for(const a of mahasiswa){
    console.log(a);
}
// for of pada string

const nama = "Neldo";
for(const n of nama){
    console.log(n);
}

const kendaraan = ["honda", "yamaha","suzuki"];
// entries() adalah sebuah method pada javascript
for(const [y, z] of kendaraan.entries()){
    console.log(`hai ini adalah kendaraan ${z} ke ${y + 1}`)
}

// dengan nodeList

const liNama = document.querySelectorAll(".nama");
for(const c of liNama){
    console.log(c.innerHTML);
}

// penggunaan arguments

let jumlah = 0;
function jumlahAngka(){
    for( const x of arguments){
        jumlah += x;
    }
    return jumlah;
}
console.log(jumlahAngka(1 , 2, 3));