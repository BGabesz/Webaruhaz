class   Termek {

    constructor(elem, adat,index) {
        this.elem = elem;
        this.nev = this.elem.children("h3");
        this.kep = this.elem.children("img");
        this.leiras = this.elem.children("p");
        this.ar = this.elem.children("span");
        this.gomb=this.elem.children(".kosarba");
        this.adat = adat;
        this.adat.index=index;
        this.setAdatok(this.adat);
        
        this.gomb.on("click", () => {
            this.kattint();
        });
        
    }
    setAdatok(ertekek){
        this.nev.html(ertekek.nev);
        this.kep.attr("src", ertekek.kep);
        this.leiras.html(ertekek.leiras);
        this.ar.html(ertekek.ar);
    }
       kattint() {
//        console.log("kosarbavan: "+this.adat.nev+this.adat.index);
        let esemeny = new CustomEvent("kosarbaRak", {detail: this.adat});
        window.dispatchEvent(esemeny);
    }
//    gomb() {
//        $(".JobbGomb").on("click", function () {
//            aktIndex++;
//            console.log("Kattint");
////            Nagykartya.setAdatok(KepAdatok[aktIndex]);
//
//        });
}


