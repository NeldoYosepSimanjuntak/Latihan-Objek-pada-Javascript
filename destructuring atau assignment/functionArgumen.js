const mahasiswa = {
    nama: "Neldo",
    jurusan : "Teknik Informatika",
    universitas : "Universitas Gunadarma",
    nilai : {
        tugas : 85,
        uts : 80,
        uas : 90
    }
}

function cetakMahasiswa({nama, jurusan,universitas, nilai : {tugas,uts,uas}}){
    return `hallo, nama saya adalah ${nama}
    dan saya kuliah di jurusan ${jurusan} di
    ${universitas} dan nilai UAS saya ${uas}`;
}

const cetak = cetakMahasiswa(mahasiswa);
console.log(cetak);