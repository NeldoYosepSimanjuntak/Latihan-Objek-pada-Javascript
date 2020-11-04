// ambil semua elemen video
// ubah menjadi sebuah array
const videos = Array.from(document.querySelectorAll('[data-duration]'));
// pilih hanya yang javascript Lanjutan saja

let jsLanjut = videos.filter(a => a.textContent.includes("JAVASCRIPT LANJUTAN"))
// ambil durasi dari masing-masing video 
.map(item => item.dataset.duration)
// ubah menjadi float dan jadikan menit menjadi detik
.map(waktu => {
    // kita ubah variabel 10:30 ini menjadi sebuah array seperti [10, 30]
    // kita pake split()
    const parts = waktu.split(":").map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1];
})
// jumlahkan semua detik
.reduce((total, detik) => total + detik, 0);

// ubah ke jam, menit, detik
// ke jam
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);

const detik = jsLanjut - menit * 60

// masukkan ke dalam DOM
const durasi = document.querySelector(".total-durasi");
durasi.textContent = `${jam} jam ${menit} menit ${detik} detik`

// total video
const Video = videos.filter(a => a.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const totalVideo = document.querySelector(".jumlah-video");
totalVideo.textContent = `${Video} video `;
