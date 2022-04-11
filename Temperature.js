class Temperature{
    constructor(c) {
        this.c = c;
    }
    getF(){
        return this.c * 1.8 +32;
    }
    getK(){
        return this.c + 273;
    }
}
let t = new Temperature(25);
document.write(`${t.c} do C = ${t.getF()} do F`);
document.write('<br>');
document.write(`${t.c} do C = ${t.getK()} do K`);