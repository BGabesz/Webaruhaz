class Kosar{
    constructor(){
        this.kosartomb=[];
        this.kosarElem=$(".kosar");
        console.log("sad");
    }
    belerak(adat){
        console.log(adat);
        this.kosartomb.push(adat);
        this.megjelenit();
        console.log("beleraktad");
    }
    megjelenit(){
        $("#kosaram").append("<table></table>");
        let szoveg;
        let osszAr=0;
        $("#kosaram").empty();
        //táblázatba rakni
        $("#kosaram").append("<table></table>");
        
        for (var i = 0; i < this.kosartomb.length; i++) {
            szoveg += "<tr id='"+i+"'></tr>";
//            console.log(this.kosartomb[i]);
                szoveg += "<td>";
                osszAr+= this.kosartomb[i].ar;
                console.log(osszAr);
                szoveg += this.kosartomb[i].nev;
                szoveg += "</td>";
                szoveg += "<td>";
                szoveg += this.kosartomb[i].ar;
                szoveg += "</td>";
                szoveg+="<td>";
                szoveg+="<button id='"+i+"'>X</button>";
                szoveg+="</td>";
                
        }
        $(".kosar span").html(osszAr+ " Ft");
//        $(".kosar osszar").html(osszAr);
        console.log("Osszar: ");
        console.log(osszAr);
        $("#kosaram").append(szoveg);
    }
}

