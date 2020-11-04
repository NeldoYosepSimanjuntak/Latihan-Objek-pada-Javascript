// objek

const mhs = {
    nama:"neldo",
    umur:26
}
// harus sama dengan yang di deklarasikan
const{nama, umur} = mhs;
console.log(nama);

// return value pada function
function jualan(){
    return["lazada", "blibli"];
}
const [cetak1, cetak2] = jualan();
console.log(cetak1);


// penggunaan rest parameter

const barang = ["makanan", "minuman", "pakaian", "sepatu"];
const [warung1, ...values] = barang;
console.log(values);

// cara ke assignment tanpa nama
// harus sama dengan yang di deklarasikan
// kekurangan untuk data yang simple saja
({jurusan, fakultas} = {jurusan:"Teknik Informatika", fakultas:"teknologi industri" });
console.log(jurusan);
console.log(fakultas);

const kendaraan = {
    id: 123,
    jenis: "motor"
}

function getIdKendaraan({id, jenis}){
    return jenis;
}

console.log(getIdKendaraan(kendaraan));

const pemerintahan = {
    provinsi: "Jakarta",
    gubernur: "Anies",
    negara: "Afrika"
}

const {provinsi, gubernur, negara="Indonesia"} = pemerintahan;
console.log(negara);