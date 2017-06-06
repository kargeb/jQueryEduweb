console.log("26 ANIMACJA WŁAŚCIWOŚCI CSS");

// We wcześniejszej lekcji bylo o animowaniu przezroczystosci i hovera, TUTUAJ nauczumu sie animoac DOWOLNA, jaka tylko istenieje, wlasciwosc CSS

(function($) {
    /*
    .animate()
    */
    $(document).ready(function() {

        var button = $("#button"),
            img = $(".rte img");

// Nasz obrazek bedziemy chciecli plynnie zmiejszyc i zwiekszyc jego opacity        
        
        button.on("click", function() {

// FUNKCJA ANIMATEL: Pierwszy argument to obiekt z informacjami co chcemy zmieniac i do jakiej wartości, drugi to CZAS w jaki ma sie to wykonac. Wszystkie właściowści będą się zmieniać równocześnie właśnie przez tyle ile dalismy w druim parametrze.            
            img.animate({
                "width": "100%",
                "width": "toggle",  // Z toggle obrazek bedzie sie plynnie pojawial i znikal !
                "width": "+=100",   // obrazek bedzie sie powiekszal z kazdym kliknieciem
                "opacity": "+=0.1", // przezroczystosc zmniejszana za kazdym klikniecie,
                "opacity": 0.9
            }, 500);
        });
        
// UWAGA ! ISTOTNE ! Jeżeli chcesz wyszukac na stronie np wszystkie lemenety animowane to jest taki specjlany sleektor jak :
                          :animated  
// Możesz tez sparwdzic czy jakis konkretny element jest animowany:
                         is(:animated)   
        

    });

})(jQuery);


















