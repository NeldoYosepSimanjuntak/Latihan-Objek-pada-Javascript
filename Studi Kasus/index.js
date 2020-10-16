function Bus(supir,  jurusan, penumpang,kas){
    this.supir = supir;
    this.jurusan = jurusan;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    };

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert("Penumpang masih kosong");
            return false;
        }

        for(let i = 0; i <= this.penumpang.length; i++){
            if(this.penumpang[i] === namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang
            }
        }
        
    }
}

const primaJasa = new Bus("joko", ["kp.rambutan", "Merak"], [], 0);