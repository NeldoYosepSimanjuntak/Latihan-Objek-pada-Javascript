function Kegiatan(nama, umur, energi){
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;
};

Kegiatan.prototype.makan = function(porsi) {
    this.energi += porsi;
    return`hai ${this.nama}, selamat makan !!!`;
}

Kegiatan.prototype.main = function(tenaga){
    this.energi -= tenaga;
    return `hai ${this.nama} , selamat bermain!!!`;
}

const play = new Kegiatan("neldo", 26, 10);