function Bintang(hasil){
    this.hasil = hasil;
    this.bintangKiri = function(){
        for(let a = 1; a <= this.hasil; a++){
            for(let b = 1; b <= a; b++){
                document.write("*");
            }
            document.write("<br>");
        }
    }
    this.bintangKanan = function(){
        for(let c = this.hasil ; c > 0 ; c--){
            for(let d = 1; d <= c; d++){
                document.write("&nbsp ");
            }
            for(let e = this.hasil; e >= c; e--){
                document.write("*");
            }
            document.write("<br>");
        }
    }

    this.bintangSamaKaki = function(){
        for(let f = this.hasil; f > 0; f--){
            for(let g = 1; g <= f; g++){
                document.write("&nbsp");
            }
            for(let h = this.hasil; h >= f; h--){
                document.write("*");
            }
            document.write("<br>");
        }
    }

    this.bintangKiriBawah = function(){
        for(let i = this.hasil; i > 0; i--){
            for(let j = 1; j <= i; j++){
                document.write("*");
            }
            document.write("<br>");
        }
    }
    this.bintangKananBawah = function(){
        for(let k = 1; k <= this.hasil ; k++){
            for(let L = 1 ; L <= k; L++){
                document.write("&nbsp ");
            }
            for(let m = this.hasil; m >= k ; m--){
                document.write("*")
            }
            document.write("<br>");
        }
    }
    this.bintangSamaKakiBawah = function(){
        for(let n = 1; n <= this.hasil; n++){
            for(let o = 1; o <= n; o++){
                document.write("&nbsp");
            }
            for(let p = this.hasil; p >= n; p--){
                document.write("*");
            }
            document.write("<br>");
        }
    }
    this.hitung = function(a, b){
        return a+b;
    }
}

let cetak = new Bintang(5);