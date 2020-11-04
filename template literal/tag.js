const nama = "Neldo";
const umur = "26";

function cetakNama(strings, ...values){
    let abc = "";
    strings.forEach((str, i) => {
        abc += `${str}${values[i] || "" } `;
    });
    return abc;
}

// cetakNama adalah sebuah function
const cetak = cetakNama`Hallo, nama saya adalah ${nama}
dan saya berumur ${umur} tahun`;

console.log(cetak);

// cara ke 2 

const mahasiswa ="Neldo Yosep Simanjuntak";
const semester ="8";

function cetakMahasiswa(fakultas, ...hasil){
    return fakultas.reduce((str, result, index) => `${str} ${result} ${hasil[index] || ""}`, "")
}

const cetakMhs = cetakMahasiswa `Hallo, nama saya ${mahasiswa} dan
saya semester ${semester}`; 
console.log(cetakMhs);


const provinsi = "Jakarta";
const gubernur = "Anies";

function pemerintahan(strings, ...values){
    return strings.reduce((string,b, a)=> `${string} ${b} <span class="jkt">${values[a] || ""} </span>`, "")
}

const cetakPemerintah = pemerintahan `pemerintahan Provinsi ${provinsi}
di pimpin seorang gubernur bernama ${gubernur}`;
document.body.innerHTML = cetakPemerintah;