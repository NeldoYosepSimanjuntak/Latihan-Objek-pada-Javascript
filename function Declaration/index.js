function buatFunctionDeclaration(nama, umur, fakultas,jurusan){
    let mhs = {}
    mhs.nama = nama,
    mhs.umur = umur,
    mhs.fakultas = fakultas,
    mhs.jurusan = jurusan
    return mhs;
}

const maba = buatFunctionDeclaration("Neldo", 26, "Teknologi Industri", "Teknik Informatika");