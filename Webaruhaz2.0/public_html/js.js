$(function () {
    const kosaramban = new Kosar();
    const Termekek = [];
    $.ajax(
            {url: "termekek.json",
                success: function (result) {
                    console.log("res");
                    console.log(result[1]);
                    for (var i = 0; i < result.length; i++) {
                        Termekek.push(result[i]);
                    }
                    console.log("ajax hivasban");
                    console.log(Termekek);
                    megjelenit();
                    
                }
            }
    );

    function megjelenit() {
        
        console.log("hi");
        console.log(Termekek.length);
        const szuloElem1 = $("#termekek");
        const sablon1 = $(".termek");
        const kosar = $(".kosar");
        const kosaram = $("#kosaram");
        for (var i = 0; i < Termekek.length; i++) {
            let ujElem = sablon1.clone().appendTo(szuloElem1);
            const termek = new Termek(ujElem, Termekek[i], i);
        }
//        let ujElem1 = sablon1.clone().appendTo(kosar);
//        const kosarTermek = new Termek(ujElem1, Termekek[0], 0);
        sablon1.remove();
        
    }
    
        
        $(window).on("kosarbaRak",(event)=>{
        bele= kosaramban.belerak(event.detail);
        aktIndex=event.detail.index;
        console.log("event");
        console.log(event);
   
    });

});


