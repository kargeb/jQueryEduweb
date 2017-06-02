console.log("WYWOŁYWANIE ZDARZEŃ i TWORZENIE WŁASNYCH");

// Czyli o tym jak wywoływać zdarzenia nie bezpośrednio na danym elemencie ale z innego miejsca na stronie, np klikajac w button wywolac konkretne zdarzenie zarezerwowane dla linkow

(function($) {

    $(document).ready(function() {

        var links = $(".rte a"),
            imgs = $(".rte img");

        links.on("click", function(e) {

            e.preventDefault(); // zatrzymanie domyślnej akcji przegladarki

            console.log( $(this).attr("href") );    // tu jest pobieranie atrybutu, bedzie o tym jeszcze mowa w dalszej czesci kursu

        });
        
// Stworzymy funkcjonalnosc dla przycisku button, taka ze po jego klikniecu odpala sie WSZYSTKIE zdarzenia "CLICK" (przekazemy mu ze wlasnie o takie zdarzenie chodzi), dla wszytkich linkow na stronie
        $("#button").on("click", function() { // do buttona przypisujemy zwykle zdarzenie clck
           
            links.trigger("click"); // Wszystko rozbija sie o metode TRIGGER, to ona wywoluje na jakims konkretnym elemencie (lub ich zbiorze jak tutaj) zdarzenie, KTÓRE JUŻ WCZEŚNIEJ ZADEKLAROWALIŚMY i nazawaliśmy (CLICK)
        });
        
// TWORZENIE WLASNYCH ZDARZEŃ:
// zdarzenie podmieniające klase obrazków na stronie z "not-visible" na "visible
        imgs.on("showImages", function(){
            
            $(this).addClass("visible");
        });
        
//DODANIE ZDARZENIA na identycznej zasadzie jak powyżej czyli triggerem, czyli jedno zadanie wywołyjemy za pomocą drugiego, w tym przypadku GDY ZAŁADUJE SIĘ CAŁA STRONA.
        
        $(window).on("load", function() {
           
            $(".rte img").trigger("showImages");
// UWAGA ! Moglibysmy dodac klase wlasnie w tym miejscu i wszystko byloby ok, lae dzieki dodatkowemu zdarzeniu mozemy go urzywac wiele razy w roznych miejcsach w kodzie
            // trigger jest to podobno bardzo przydatna metoda szczegolnie wlasnie w przypadku wlasnych typow zdrazeń
        });

    });

})(jQuery);


















