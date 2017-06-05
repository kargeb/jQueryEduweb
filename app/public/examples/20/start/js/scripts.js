console.log("20 MANIPULACJA KOLEJNOSCIA ELEMENTÓW");

// Manipulacja elementami na stronie oraz oplatanie elementami innych elementow 

(function($) {

    $(document).ready(function() {

        var button = $("#button");

        button.on("click", function() {
            console.log("Kliknięty!");
        });
// Jak widac, mozna sobie osobny SPANik wjebac do buttona i na nim cos dzialac dodatkowo
        button.find("span").on("click", function(e) {
            console.log("Kliknięty span!");
        });

// UWAGA ! WAZNE ! Wszystkie te metody wstawiaja dany element W NOWE miejsce ! (przesuwaja ze starego) 
        
    // PRZESUWANIE ELEMENTU:
//        $(".rte").prepend(button);  // przesuniecie na gore z dolu
        
    // KLONOWANIE ELEMENTU
        $(".rte").prepend( button.clone() );
        
// UWAGA ! WAZNE W CHUJ !!! W tak klonowanym elemencie NIE KOPIUJA SIE JEGO ZDRAZENIA< czyli na dolnym buttonie beda komunikaty w conoli a na gorynem NIE !
// AKE TYLKO DOPISUJAC PARAMETR "true" sprawiamy ze TE ZDARZENIA TEZ SIE KOPIUJA !!!
        $(".rte").prepend( button.clone(true) );    
// MALO TEGO, jest jeszcze drugi paramter, DOMYSLNIE USTAWIONY NA true ! Ktory decyduje o tym CZY DZIECI TEGO ELEMENTU TEZ MAJA DZIEDZICZYN ZDARZENIA, a wiec na false, nie bedzie nam dzialac SPAN 
        $(".rte").prepend( button.clone(true, false) );   
        
// ZASTAPONIENIE wszystkich wybranych elementow INNYM ELEMENTEM:
/*        
    $("<div>Zastapienie</div>").replaceAll(".rte p");  // konkret
        // METODA ODWROTNA robiaca to samo, ALE W SUMIE LEPSZA BO MOZE PRZYJMOWAC FUNKCJE 
    $(".rte li").replaceWith("<p>dupa dupa</p>");    // tez spoko
        
    // SKORZYSTANIE Z FUNKCJI przekazanej do replaceWidth:   (wykona sie ona dla kazdego p z osobna)
    $(".rte p").replaceWith(function() {            // zamiana tylko p na div ale z zachowaniem tresci
       return "<div>" + $(this).text() + "</div>"; 
    });  
  
    
// OPLATANIE ELEMENTOW W INNE:
        $(".rte p").wrap("<div></div>");  // zamkniecie kazdego p w diva
    */    
    // Skorzystanie z funkcji !
        $(".rte p").wrap(function(i) {      // Szybckie dodanie diva z rosnaca klasa, dzieki czemu
           return $("<div></div>", {        // mozemy w szybki sposob cos tutaj se pooznaczac
              "class": "text-" + (i + 1)
           }); 
        });

        $(".rte p").unwrap();   // ODWOLYWANIE POWYZSZEJ METODY, czyli usuwanie rodzicow p (divow)
        
// BARDZO CIEKAWA METODA WYCIAGAJACA DANE ELEMENTY I ZAPINAJACE JE W JEDEN:
        $(".rte p").wrapAll("<div></div>");     // UWAGA BO TA METODA WYCIAGA p Z DANYCH MIEJSC NA STRONIE I W JEDNYM MIEJSCU WPIEPRZA JE W JEDEN DIV ! Czyli moze zmienic sie uklad strony !
        
// OPLATANIE ELEMENTOW WEWNTARZ danych elementow (a nie ich samych jak wyzej)
        $(".rte ul li").wrapInner("<strong>");  // PAMIETAJ ZE JEDNYM ZNACZNIKIEM TEZ MOZNA TO WPISAC
        
    });

})(jQuery);


















