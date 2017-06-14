console.log("48 PODSTAWY TWORZENIA PLUGINÓW");

// Jak tworzyć własne rozszerzenia dla biblioteki jQuery

// WINDOW i DOCUMENT przekazujemy zeby MIMIFIKATOR przy zmianie objetosci kodu mogl zamienic sobie je na W lub D, gdybysmy ich nie przekazali, wszedzie musialoby byc document jako zmienna !
// UNDEFINED przekazujemy aby w naszym kodzie na 100% oznacznalo ono ZAWSZE UNDEEFINED, zeby  uniknac przypadku ze jakis debil umyslnie lub przez przypadek cos do undefined sobie przypisze (undefined = zmienna), zmieni jej wartosc na TRUE i rozpierdoli nam pol kodu

(function($, window, document, undefined) {

// PRZY PLUGINACH UWAZAJ ZEBY NIE NADPISAC JUZ JQUEROWSKICH METOD ! (np addClass)    
    
// OTO JAK TWORZYMY PLUGINY ! Musi fto byc funkcja no bo wlasnie wywolujemy ja jak funkjce.
    $.fn.highlight = function() {   // MOZE ale NIE MUSI przyjomowac parametrow
// fn oznacza tutaj ze dzialamy BEZPOŚREDNIO NA PROTOTYPIE jQuery !      
        
// UWGA ! WAZNE ! THIS kieruje tutaj wlasnie na SET ELEMENTOW na ktorych jest wywolywany plugin ! I nie trzeba dawac go w $, jQuery robi to juz za nas        
    //    this.css("background-color", "green");
      
// UWAGA ! W pluginach podobno ZAJEBISCIE CZESTO BEDZIEMY DZIALAC WLASNIE NA PETLI EACH ! Zawsze wtedy gdy bedziemy chcieli zrobic jakies warunki ! No i wtedy RETURN dajemy przed this.each NO BO EACH zwaraca THIS i od razu leci to do returna        
        
        return  this.each(function(){
           
            var that = $(this),  // TUTAJ JUZ THIS Z $ ! 
                text = that.text();
            
            if(text.length > 100) {
                that.css("color", "red");
            } else {
                that.css("color", "green");
            }
               
        });
        
// UWGA ! PAMIETAJ ! Zawsze zwracaj w returnie THIS zeby mozna bylo po . dodawac kolejne metody na elementach (czyli zeby mozna bylo je laczyc tak jak standardowe funkcje w jQuery)        
     //   return this;
// UWAGA ! Gdy będziesz korzystać z EACH w pluginach, a podobno kozysta sie w chuj, TO RETURN MOZNA DAC PRZED EACH I BEDZIE TEN SAM EFEKT ALE OCZYWISCIE KROTSZY ZAPIS !        
        
    };
    
    $(document).ready(function() {

// OTO JAK WYWOLUJEMY PLUGINY ! Tak jak metody ! Czyli po dwololnym "secie" czyli zbiorze elementow, mozemy sobie taki plagin wywolac na nich        
        $(".rte p, .rte li").highlight().css("font-size", "24px");
// CSS po kropce działa DLATEGO ze nasz plugin ZWARACA THIS !
    });

})(jQuery, window, document);


















