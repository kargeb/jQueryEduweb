console.log("39 DATA W JQUERY");

// Co to jest metoda DATA i na co ona nam pozawala

(function($) {

    $(document).ready(function() {
        
// Na podstawie tej zmiennej bedziemy powiekszali i zmniejszali nasz obrazek
// ale tak naprawde jest to chujowe rozwiazanie no bo gybysmy mieli wiecej obrazkow to, co ? do kazdego z nich trzebaby bylo tworzyc nowe zmienne ? Wlasnie m.in. do takich zadan przychodzi z pomoca ta metdoa "DATA"        
 //       var zoomed = false;

        $("#button").on("click", function() {

            var img = $(".rte img"),
                zoomed = img.data("zoomed");    // TUTAJ przypisaujemy stan zmiennej DATA, w przypadku pierwszego wywolania MA ONA WARTOSC UNDEFINED a wiec w ifie bedzie jako FALSE !

// DZIEKI "data" mozemy do elementu, albo zbioru elementow przypisac DOWOLNE DANE JAKIE TYLKO CHCEMY !            

            if(!zoomed) {

                img.stop().animate({
                    width: "100%",
                    opacity: 1
                }, 1000, function(){
                    $(this).data("zoomed", true);   // W TEN SPOSON po prostu przypisalismy do tego konkretngo elemntu, zmienna "zoomed" i dalismy jej true !
                });

                //zoomed = true;
                
            } else {

                img.stop().animate({
                    width: "300px",
                    opacity: 0.5
                }, 1000, function() {
    //                $(this).data("zoomed", false);  // ALBO TAK, czyli zmieniamy wartość ...
                    $(this).removeData("zoomed");   // ALBO TAK, czyli po prostu usuwamy zmienna 
                });

             //   zoomed = false;
                
            }
            
// INNY PSOSOB PRZYPISANIA WARTOSCI DO "DATA":
            img.data({
                "zoomed": true,
                "times": 1
            });
            
            utils.log(img.data("times"));
            
        });

    });

})(jQuery);


















