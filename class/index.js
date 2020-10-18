class Kegiatan{
    constructor(nama, umur, energi){
        this.nama = nama;
        this.umur = umur;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `hai ${this.nama}, selamat makan `;
    }
}

let mhs = new Kegiatan("neldo", 26, 10);