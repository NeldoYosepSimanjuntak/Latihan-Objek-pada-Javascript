// cara 1
// tidak efektif, bisa diakalin dengan cara ke 2

function primaJasa(supir, penumpang, jurusan, harga){
    let bus = {}
    bus.supir = supir;
    bus.penumpang = penumpang;
    bus.jurusan = jurusan;
    bus.harga = harga;
    bus.penumpangNaik = function(naik){
        bus.penumpang.push(naik);
        console.log(`hai ${naik} , 
        selamat menikmati perjalanan`);
    },
    bus.penumpangTurun = function(turun, harga){
        for(let i = 0; i <= bus.penumpang.length; i++){
            if(bus.penumpang[i] === turun){
                bus.penumpang[i] = undefined;
                bus.harga += harga;
            }
        }
    }
    return bus;
}

let neldo = primaJasa("anton",[] , "rambutan-merak", 0);

// cara ke 2
// membuat method
const objekFunctionDeclaration = {
    makan : function(porsi){
        this.energi += porsi;
        console.log(`hai ${this.nama}, selamat makan !!!`);
    },

    tidur : function(jam){
        this.energi += jam * 2;
        console.log(`hai ${this.nama}, energi telah di tambahkan
        selamat tidur `);
    }
}

function buatFunctionDeclaration(nama, umur, fakultas,jurusan, energi){
    let mhs = {}
    mhs.nama = nama,
    mhs.umur = umur,
    mhs.fakultas = fakultas,
    mhs.jurusan = jurusan,
    mhs.energi = energi,
    mhs.makan = objekFunctionDeclaration.makan,
    mhs.tidur = objekFunctionDeclaration.tidur
    
    return mhs;
}

const anakTeknik = buatFunctionDeclaration("Putra", 31, "Teknologi Industri", "Teknik Industri", 10)
const maba = buatFunctionDeclaration("Neldo", 26, "Teknologi Industri", "Teknik Informatika", 20);