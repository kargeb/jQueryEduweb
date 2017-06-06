console.log("27 FUNKCJE ZWROTNE (callback)");

// Zastosowanie funkcji zwrotnych przy animowaniu elementow

(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

// Chodzi o to ze jak mamy obrazek ktory znika a PO tym zniknieciu chcielibysmy jeszcze dodac mu jakas klase cos z nim robiaca, TO NIE MOZEMY TEGO ZROBIC NORMLANIE PO KROPCE. bo ta klasa DODA SIE NATYCMIAST, ZARAZ PO KLIKNIECIU, (mozna to zobaczyc w podgladzie DOM) a nie dopiero po tym jak sie element schowa !             
        // NIEPOPRAWNIE ! klasa faded doda sie od razu a nie po zniknieciu elementu !    
            $(".rte img").fadeOut(1000).addClass("faded");  

// DLATWGO ROBIMY TO W TEN SPOSOB:
            $(".rte img").fadeOut(1000, function() {    // Dzięki dodaniu funkcji callback, mamy 
                $(this).addClass("faded");              // pewnosc ze to co w niej, wykona sie dopiero
            });                                         // po skonczeniu animacji w pierwszym parametrze
            
// UWAGA ! Po tej funkcji mozemy dalej dolaczac kolejne metody css ALE ZE SWIADOMOSCIA ze wykonaja sie ona rownoczesnie z pierwsza animacja !            
             $(".rte img").fadeOut(1000, function() {    
                $(this).addClass("faded");              
            }).addClass("jakasInna").addClass("koljenaKLasa");   
            
// DZIAŁA TO NA WSZYSTKICH METODACH DO TEJ PORY POZNANYCH !:
//      show, hide, toggle, fadeIn, fadeOut, fadeToggle, slideDown, slideUp, slideToggle            
            
// UWAGA ! FUNKCJA ANIMATE ROWNIEZ MOZE PRZYJAC FUNKCJE CALLBACK !! #######################
            
            $(".rte img").animate({               //  Działa idealnie
                width: "100%",
                opacity: 1
            }, 2000, function() {
               console.log("animacja wykonana"); // pokaze sie dopiero po wykonaniu animacji
            });
//           
// DOSKONAŁYM WYKORZYSTANIEM CALLBACK JEST CALKOWITE USUNIECIE ELEMENTU PO ODPOWIEDNIEJ ANIMACJI:
            $(".rte img").slideUp(2000, function(){
               $(this).remove(); 
            });
            
        });

    });

})(jQuery);


















