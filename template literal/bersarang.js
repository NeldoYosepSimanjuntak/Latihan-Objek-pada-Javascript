const mahasiswa = {
    nama : "Neldo",
    semester : "8",
    mataKuliah : [
        "Pemrograman Web",
        "Jaringan Komputer",
        "Jaringan Komputer Lanjut"
    ]
};

function cetakMatkul(matkul) {
   return `<ol>
     ${matkul.map(mk => `<li> ${mk}</li>`)}
   </ol> `}

const cetak = `<div class="kartu">
<h2> Nama : ${mahasiswa.nama} </h2>
<span> Semester : ${mahasiswa.semester} </span>
<h4>Mata Kuliah : </h4> 
${cetakMatkul(mahasiswa.mataKuliah)}
</div>`;

document.body.innerHTML= cetak;