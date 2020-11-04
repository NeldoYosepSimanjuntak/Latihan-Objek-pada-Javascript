const lagu = {
    judul : "In The End",
    artis : "Linkin Park"
    // feat : "jay-Z"
}

const cetak = `<div class="musik">
<ul>
    <li>${lagu.judul}</li>
    <li>${lagu.artis} ${lagu.feat ? `(feat : ${lagu.feat})` : ''} </li>
    
</ul>
</div>
`;
document.body.innerHTML = cetak;
