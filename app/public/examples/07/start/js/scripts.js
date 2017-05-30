console.log("ZDARZENIE LOAD I ZAJEBISTA FUNKCJA TIME !");

(function($) {

//Poprzednio wykorzystywalismy zdarzenie READY ktore oznacza bodajrze zaladowanie wszystkich elementow html na stornie ALE NIE GWARANTUJE zaladowania wszytkihc obrazkow, dlatego wlasnie skorzystamy ze zdarznie LOAD. Zdarzebue READY nalezy do "document", zdarzenie LOAD należy do "window"
    
// UWAGA !! ZAJEBISTA FUNKCJA !!! TIME !!!
// dzięki niej dostajemy info ile czasu uplynelo miedzy jej jednym wywolaniem a drugim !
// CZAS ZOSTAJE OBLICZANY MIĘDZY WYWŁANIEM "time" A WYWOLANIEM "timeEnd", podanych z IDENTYCZNYMI partametrami     
    console.time("DOMContentLoaded");
    console.time("Window Loaded");
    
// UWAGA !!! ZAPAMIĘTAĆ BO TO KURWA WAŻNE !!!!!!!!!!!!
// Do tej pory wyszukiwalismy za pomoca funcji $ czyli jquery i moglkibysmy tam np dac klase $(".window"),  TERAZ ROBIMY COŚ INNEGO ! Nasz obiekt window przekazujemy do takiej funkcji I TWORZYMY Z NIEJ OBIEKT JQUERY i dzięki temu mmay w chuj funkcji dostępnych no i między innymi włąsnie zdarzenie LOAD !
    
    $(window).load(function() {                 //zdarzenie load
        
        console.timeEnd("Window Loaded");
        
    });
    
    $(document).ready(function(){               // zdarzneie window
        
        console.timeEnd("DOMContentLoaded");
        
    });
    
// OTO WYNIK:   DOMContentLoaded: 2.826904296875ms
//              Window Loaded: 386.651123046875ms
// Czyli zaweartość DOM zaladowala nam sie juz po 2 milisekundac i juz moglibymsy sobei na tych elementach operowac, A OBRAZEK zaladowal nam sie dopiero po 209     
    
// UWAGA ! KIedy korzystac z READY a kiedy z LOAD !
// Z regóły jak chcmey manipulowac drzewem to KORZYTAĆ Z READY ! ALE gdy bedziemy chcieli pobrac jakies wysokościu elementow, np wysokosc diva z obrazkiem NO TO WTEDY LOAD bo ready moze zwrocic nam 0 gdy obrazem sie jeszcze nie zaladuje !

})(jQuery);


















