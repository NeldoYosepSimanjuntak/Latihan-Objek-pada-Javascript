/* kenapa menggunakan closure?
    - untuk membuat function factories
    - untuk membuat private method 
    */

// berikut cara membuat closure pada javascript
// cara ke 1

function init(){
    // local variable
    let nama = "neldo"; 
    let umur = 26;
    // inner function (closure)
    function cetakNama(){
        // akses ke parent variable
        console.log(`hai ${nama}`);
        console.log(umur);
    }
    // untuk mengecek closure
    // console.dir(cetakNama);
    cetakNama();
}
init();

// atau
function bus(){
    return function(namaBus){
        console.log(namaBus);
    }
}
let cetakBus = bus();
cetakBus("prima Jasa");
cetakBus("arimbi");


function ucapkanSalam(waktu){
    return function(nama){
        console.log(`hai ${nama}, selamat ${waktu}`);
    }
}
let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("siang");
selamatPagi("neldo");
selamatSiang("simanjuntak");

// atau

function mahasiswa(){
    let namaMahasiswa = "Simanjuntak";
    function cetakMahasiswa(){
        console.log(namaMahasiswa);
    }
    return cetakMahasiswa;
}
let data = mahasiswa();
data();