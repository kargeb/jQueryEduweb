console.log("40 DATA W ATRYBUTACH HTML5");

//W jaki sposób jQuery DATA potrafi wspolpracowac z atrybutami HTML

// Oto czesc pliku HTML, dotyczaca obrazka
//    <img src="/images/picture.jpg" alt="" style="width: 300px; opacity: 0.5;" data-speed="1000" data-size="100%" data-opacity="1">

(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            var img = $(".rte img"),
//                speed = parseInt( img.attr("data-speed") ), // Trzeba parsowac bo zwracany jest ZAWSZE string
//                size = img.attr("data-size"),
//                opacity = parseInt( img.attr("data-opacity") );
            
// UWAGA ! Jeśli w kodzie HTML mamy jakies atrybuty ZACZYNAJACE SIE OD "data-..." TO MOZEMY JE POBIERAC Z KODU WLASNIE POPRZED "data()" ! Bez zaadnych "attr"                
                speed = img.data("speed"),
                size = img.data("size"),
                opacity = img.data("opacity");

//UWAGA ! Ta metoda DATA jest na tyle inteligenta ZE POTRAFI SAMA DOMYSLEC SIE JAKI TYP DANYCH POBIERA ! Czyli w jej przypadku nie bedzie to za kazdym razem string, jak zobaczy sama liczbe to domysli sie ze chozi o number, a gdy spotka TRUE lub FALSE to kapnie sie ze to typ BOOLEAN ! Nie trzeba robis pasreIntow jak u góry.            

            utils.log(typeof speed);
            utils.log(typeof size);
            utils.log(typeof opacity);
            
// UWAGA ! Data przypisana w skrypcie MA PIERWSZEŃTWO przed ta zapisana w HTMLu ! Więc jeśli mamy takei same DATY no to pierwszenstwo ma ta zapisana bezposrenido w kodzie :
            img.data("speed", 5000);    // 5000 - MA PIERWSZENSTWO (nie chodzi o to ze jest deklarowana nizej )   
            
// JESLI POZNIEJ USUNIEMY DATE ZA POMOCA REMOVE, to z powrtoem brana jest ta z HTMLa (no bo ona tam jest caly czas) 
            img.removeData("speed");    // TRUE
            
            
// CZYLI ! Jeśli metoda DATA nie znajdzie w calym skrypcie deklaracji zmiennej przed metode DATA no to idzie pozniej do kodu HTML i tam szuka czy jest moze taki atrybut            
            
// Jeśli faktycznie chcemy calkiem usunac DATE, rowniez z HTMLa no to trzeba uzyc:
            img.removeAttr("data-speed");
            
            utils.log( img.data("speed"), true ); // "undefined" tutaj TRUE czysci wszystko inne w polu widoku
            
            
            img.stop().animate({    // CZYLI WLASNIE W TEN SPOSIB MOZNA WYKORZYSTAC WLASNE ATRYBUTY
                width: size,        // zeby tworzyc sobie swoje wlasne opcje juz z poziomu kodu HTML
                opacity: opacity
            }, speed);

        });

    });

})(jQuery);


















