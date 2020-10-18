const objekLiteral = {
    nama:"neldo",
    jurusan : "Teknik Informatika",
    fakultas : "teknologi Industri",
};

// atau 

const mahasiswa = {
    nama : "neldo",
    jurusan :"teknik Informatika",
    fakultas : "Teknologi Industri",
    energi : 10,
    //membuat method yang isi nya function
    //properti isi nya nilai, kalo method isinya function
    makan : function(porsi){
        this.energi = this.energi + porsi
        console.log(`hai ${this.nama},selamat makan`);
    },

    main : function(cakra){
        this.energi -= cakra;
        console.log(`hai ${this.nama}, cakra sudah terisi penuh
        dan selamat bermain`);
    },

    tidur : function(jam){
        this.energi = this.energi + jam * 2;
        console.log(`hai ${this.nama}, energi akan di tambahkan,
        selamat Tidur !!!`);
    }
}

