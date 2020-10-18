const methodMahasiswa = {
    maba: function(masuk){
        this.semester.push(masuk);
        console.log(`hai ${this.nama}, selamat datang`);
    }
}

function universitas(nama, npm, jurusan, matkul, semester){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.npm = npm;
    mahasiswa.jurusan = jurusan;
    mahasiswa. matkul = matkul;
    mahasiswa.semester = semester;
    return mahasiswa; 
}

let maba = universitas("neldo", 1234, "Akuntansi", "pajak", []);