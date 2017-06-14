console.log("49 KONFIGURACJA PLUGINU");

// JAK DODAWAC OPCJE do plauginow, przy och wywolywaniu lub nawet wczesniej. JEST TO NIEZWYKLE ZAJEBISCIE WAZNA WLASCIWOSC zeby mozna sobie wlasnie bylo dodawac wlasne ustawienia do pluginow
// Pracujemy na przykladzie z poprzedniej lekcji

(function($, window, document, undefined) {

   $.fn.highlight = function(userOptions) { // Zmienna userOptions dla OPCJI uzytkownika
       
// Deklarujemy wartosci domyslne       
       var defaults = {         // W PRZYPADKU AKTERNATYWY WYCINAMY TO
           shortColor: "red",   // I DAJEMY POD PLUGINEM !
           longColor: "green"
       };

// UWAGA ! BARDZO CIEKAWA METODA ! Robi ona tak ze wszystkie parametry jakie do niej przesylamy SĄ SKŁADANE W JEDEN i gdy wartości się powtarzają TO TE PRZESŁANE NA DALSZYCH MIEJSCACH (CZYLI BARDZIEJ Z PRAWEJ) MAJĄ PIERWSZEŃSTWO PRZED TYMI Z POCZĄTKU !       
       var options = $.extend({}, defaults, userOptions);
// Czyli u nas wartosci z userOptions NADPISZĄ TAKIE SAME z defaults ! Ten obiekt na pierwszym miejscu JEST OPCJIONALNY, on po prostu zbiera to wszystko kurwa co tam narosło z prawej strony   

       console.log(options);    //Object {shortColor: "blue", longColor: "green"} // OK
       
        return this.each(function() {

            var that = $(this),
                text = that.text();

            if(text.length > 100) {
//              that.css("color", "red");
                that.css("color", options.longColor);   // kozystamy z naszych opcji
            } else {
//              that.css("color", "green");
                that.css("color", options.shortColor);  // kozystamy z naszych opcji
            }

        });

   };

// ALTERNATWA ! Przypisujemy nasze domyslne zmienne PROSTO DO FUNKCJI jako OBIEKT ! No bo pamietaj ze w JS wszystko prawie jest obiektem wiec mozna do funkcji HIGHLIGHT przypisac wlasnie taki obiekt z wlasciwoscami domyslnymi i pozniej bezposrednio do niego sie odwolywac ! Dokladnie tak jak w linijce 56 ALTERNATYWIE    
    
// ALT    $.fn.highlight.defaults = {         // W PRZYPADKU AKTERNATYWY WYCINAMY TO
// ALT          shortColor: "red",   // I DAJEMY POD PLUGINEM !
// ALT          longColor: "green"
// ALT      };
    
    
    
    $(document).ready(function() {

        $(".rte p, .rte li").highlight({
            shortColor: "blue"  // chcemy aby bylo to przekazywane jako obiekt
        });

// UWAGA ! Mozna zrobic tak ze od razu nadpiszemy sobie domyslne wartosci DEFAULTS, bezposrednio na tym obiekcie, i nie trzeba bedzie ich za kazdym razem przypisaywac w momnecie wywolania highlight !
        
// ALTERNATYWA ! // KORZYSTAMY Z OBIEKTU BEZPOSREDNIO PRZYPISANEGO DO FUNCKJI           
// ALT       $.fn.highlight.defaults.shortColor = "blue";
// ALT       
// ALT       $(".rte p, .rte li").highlight();
        
        
    });

})(jQuery, window, document);


















