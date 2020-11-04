// destructuring Objek

function kalkulasi(a,b){
    return{
        tambah : a + b,
        kurang : a - b,
        kali : a * b,
        bagi: a / b
    }
}


const{kali,bagi,tambah,kurang} = kalkulasi(2, 3);
console.log(tambah);

// destructuring array

function plusMinus(c, d){
    return [c + d, c - d];
}

const [plus,minus] = plusMinus(2,5);
console.log(plus);