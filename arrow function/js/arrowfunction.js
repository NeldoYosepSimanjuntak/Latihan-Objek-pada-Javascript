const h1 = document.createElement("h1");
const createText = document.createTextNode("Penggunaan arrow function pada javascript");
h1.appendChild(createText);
document.body.appendChild(h1);


/*penggunaan arrow function */
const upperizedNames = ["widy", 'alan', 'doy']
    .map (name => name.toUpperCase());
    console.log(...upperizedNames);

    //function expression pada arrow function

    const array = greet => console.log(`${greet}`);//greet merupakan parameter
    array("good morning semua");

//penggunaan arrow function dengan lebih 1 parameter
    const hitung = (a, b) => a + b;
    console.log(hitung(2,6));

    const manggil = (nama, ucapan) => console.log(`${ucapan} ${nama}`);
    manggil("selamat pagi", "neldo");

    const say = () => console.log("hallo Semua");
    say();

    //block body function pada arrow function

    const sapa = languange => {
        if(languange.toUpperCase() === "INDONESIA"){
            return "Selamat pagi";
        }else{
            return" good morning";
        }
    }
    console.log(sapa("indonesia"));

    