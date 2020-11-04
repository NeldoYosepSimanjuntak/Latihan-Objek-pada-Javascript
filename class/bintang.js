class Bintang{
    constructor(hasil){
        this.hasil = hasil;
    }
    bintangKiri(){
        for(let a = 0; a < this.hasil; a++){
            for(let b = 0; b <= a; b++){
                document.write("*");
            }
            document.write("<br>");
        }
    }
    bintangKanan(){
        for(let c = 0; c < this.hasil; c++){
            for(let d = this.hasil ; d >= c; d--){
                document.write("&nbsp ");
            }
            for(let e = 0; e <= c; e++){
                document.write("*")
            }
            document.write("<br>");
        }
    }

    bintangSamaKaki(){
        for(let f = 0; f < this.hasil; f++){
            for(let g = this.hasil; g >= f; g--){
                document.write("&nbsp");
            }
            for(let h = 0; h <= f; h++){
                document.write("*");
            }
            document.write("<br>");
        }
    }

    bintangKiriBawah(){
        for(let i = 1; i <= this.hasil ; i++){
            for(let j = this.hasil; j >= i; j--){
                document.write("*");
            }
            document.write("<br>");
        }
    }
    bintangKananBawah(){
        for(let k = 1; k <= this.hasil; k++){
            for(let l = 1; l <= k; l++){
                document.write("&nbsp ");
            }
            for(let m = this.hasil; m >= k; m--){
                document.write("*");
            }
            document.write("<br>");
        }
    }

    bintangSamaKakiBawah(){
        for(let n = 1; n <= this.hasil; n++){
            for(let o = 1; o <= n ; o++){
                document.write("&nbsp");
            }
            for(let p = this.hasil; p >= n; p--){
                document.write("*");
            }
            document.write("<br>");
        }
    }
}
const cetak = new Bintang(5);