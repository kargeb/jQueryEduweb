console.log("45 PRAKTYCZNY PROJEKT: AJAXOWA PAGINACJA");

//Niezwykle prosta i niezwykle przydatna rzecz z ktorej mozesz skorzytsac rowniez we wlasnych projektach. PAGINACJA czyli przeskakiewanie na podstronach, jak masz kilka np od 1-3

(function($) {

    var doc = $(document);  // document zapisany do zmiennej po kilka razy sie odwolujemy

    doc.ajaxStart(function(event, jqXHR, options) {

        var preloader = $("#preloader");    // Kod z poprzedniej lekcji
                                            // który tworzy, pokazuje i chowa
        if(!preloader.length) {             // preloader
            preloader = $("<div></div>", {
                "id": "preloader",
                "class": "preloader"
            }).appendTo("body");
        }

        $("#preloader").fadeIn(500);

    });

    doc.ajaxComplete(function() {

        $("#preloader").fadeOut(500);

    });

    doc.ready(function() {

        var projects = $("#projects"),
            links = $("a.pagination__link");    // linki z numerami stron (paginacji)

//Zrobimy tak ze pobierzemy sobie wszystkie potrzebne infomracje z danych podstron i wyswietlimy je na tej glownej        
        
// TUTAJ ROBIMY DELEGACJE !!! /////////////////////////////////////////        
        
// ZAMIAST:         links.on("click", function(e) {
            projects.on("click", "a.pagination__link", function(e) {
           
            e.preventDefault();
            
            var page = $(this).attr("href"); 
            
// METODA LOAD, wstawia zwartośc ze wstawionego (jako parametr) linku, prosto w obiekt na jakim zostala wywolana ! U nas do diva z klasa "project"
            
// UWAGA ! jesli zrobimy to tak, to do naszej strony zostanie dolepiona CAŁA STRONA Z TEGO LINKU ! Czyli powtórzy nam się NAGŁÓWEK a także STOPKA i to będzie wyglądać jakby jesdna strona wcsinęłą się w drugą !              
//            projects.load(page, function()
// Zeby temu zapobiec ta funkcja LOAD przyjmuje w pierwszym parametrze JAKI DOKLADNIE ELEMENT STRONY MA WKLEIC !, tyko ze nie bedzie to osobny parametr ALE wchodzic to będzie do Stringu przesłanego w pierwszym parametrze !
// Jak widac u dołu mozna sobie po koleji dolaczac kolejne elementy stronym rozdzielajac je spacjami
            
// POD ZMIENNA PAGE UKRYWA SIE href czyli np -> "/45?page2" Czyli jest to string który po prostu laczymy z tymi elemenami ktore chcemy pobrac (wazne zeby po spacji)     
            
// UWAGA ! To zadziała, ALE TYLKO RAZ ! Dzieje sie tak dlatego że w LINIJCE 33 mamy przypisane linki Z AKTUALNEJ STRONY ! Gdy po paginacji wstawiane zostają nowe, STRONA ZOSTAJE PRZELADOWANA bo nie moze namierzyć tych "uchytów" ! 
// DLATEGO SKORZYSTAMY Z DELEGOWANIA ! I nie bedziemy przypisywać kliknieca na linki będące na stronie, TYLKO DO DIVA PROJECTS który jest na niej cały czas, nawet po paginacji (on nie jest zamieniany, metoda LOAD podmienia jedynie jego TREŚĆ )            
            
            projects.load(page + " .projects, .pagination", function() {
// Tutaj zrobimy sobie animowane przewijanie na gore wyswietlonych elementów
        // bodajemy  $("html, body") a nie samo body bo roznie to dziala na przegladarkach roznych  
                $("html, body").animate({
            // scrollTop czyli cyba po prostu przescrolowanie w górę                     
                    scrollTop: projects.offset().top - 30   //idealnie dziala    
                }, 300);
            });
            
        });

    });

})(jQuery);


















