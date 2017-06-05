console.log("21 USUWANIE ELEMENTOW");

// usuwanie elementow ze strony internetowej

(function($) {

    $(document).ready(function() {

// Wyszukanie wszystkim elementow img w a oraz samych img i ich USUNIECIE  -> REMOVE
        $(".rte").find("a:contains(img), img").remove();     // pamietasz contains ? POWTARZAJ CHUJU !
        
// Usuniecie CALEJ TRESCI danych elementow ale POZOSTAWIENIE tych elementow na stronie
        $(".rte ul li").empty();
        $(".rte ul li").empty().append("<strong>duypa dupa</strong>");     // MOZNA ODRAZU COS DOPISAC ALBO WSTAWIC
//  MOZNA TO ZASTAPIC piszac po prostu  .html("");        

// METODA wysiwetlajaca cos w konsoli gdy nacisiemy na li 
        $(".rte ul li").on("click", function() {
           console.log("klilknales li o indexie: " + $(this).index() + 1 );
        });
        
// UWAGA ! Elementy usueniete przez REMOVE sa ZWRACANE ! A wiec mozna je przechwycic i sobie przechowac 
        
// U W A G A !!!  JEST TEŻ DRUGA METODA NA USUWANIE ELEMENTOW ! MAJA ZAJBIESTA ROZNICE:
        // REMOVE - usuwa wszystkie elementy ORAZ ZDARZENIA DO NICH DOPISANE
        // DETACH - usuwa wszystkie elementy ALE POZOSTAWIA PRZYPISANIE DO NICH ZDARZEN !
        
        var ul = $(".rte ul").detach();      // pozostawienie zdarzen !
   //     var ul = $(".rte ul").remove();     // wypieprzenie zdarzen !

        $("#button").on("click", function() {   // WSTAWIENIE NA CLIKC ! ZAJEBISTE !
            ul.appendTo(".rte");
        });
     
// JESZCZE JEDNO KONKRETNE ZASTSOWANIE DETACH !!
    // Jesli zmieniamy kilka styli na raz na danym elemencie to przegladarka dziala tak ze wszystkie koloro naklada po kolei na siebie, i to jest niewydajne, strata czasu i zasobow ! Dlatego mozna skorzystac wlasnie z DETACH i najpierw ten element usunac ze strony, dodac w tle style i zaraz potem dodac go praktycznie linijka pod linijka !
    //     var ul = $(".rte ul").detach;
    //      ul.css("color", "red").appendTo(".rte");  oczywiscie ma to sens przy w chj licznie styli 
        
        
    });
    
})(jQuery);


















