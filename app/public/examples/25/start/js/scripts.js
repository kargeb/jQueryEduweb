// ##########################  ANIMACJE ##################################

console.log("25 POKAZYWANIE I UKRYWANIE ELEMENTOW");

// Animacje czyli cos, co robiac w JS chyba bysmy sie zajebali, a tak to jQuery robi to w banalny sposob, jednak zaczniemy jeszcze poki co od prostszych rzeczy

(function($) {

    $(document).ready(function() {

// Mamy tutaj bardzo klasyczna i czesta sytuacje, keidy na stronie mamy jakis tekst, a na jego koncu link z trescia "pokaz wiecej" i on po kliknieciu rozwija nam dalsza czesc. To wlasnie tutaj zrobimy

// ogolnie chodzi o to ze klikniecie w element z klasa "showMore" sprawia ze zmienia sie display na elemencie z klasa "more"        
        
        $("a.showMore").on("click", function(e) {

            e.preventDefault();

            var that = $(this),
                content = that.prev(".more");   // prev bo ten span jest przed linkiem a
            
          
            if(content.is(":hidden")) {     // :visible  gdy na odwrot
// JEST TO NOWY ATRYBUT o ktorym nie bylo mowione, on SPRAWDZA DISPLAY (chyba ?)
                content.show(1000);
// SHOW TEZ MAMY PIERWSZY RAZ, on zmienia DISPLAY na ODPOWIEDNIA wartosc (inline czy inne)      
                that.text("Pokaż mniej");
            } else {
                content.hide("fast");
                that.text("Pokaż więcej")
            }
// UWAGA ! meotdy SHOW i HIDE juz same w sobie pozwalaja na animajce ! Mozna jako atrybut wpisac SLOW lub FAST albo po prostu wpisac ilosc milisekund ile ma trwac ta operacja !
//  hide("slow")      show(200);
// akurat w naszym przypadku te parametry wplywaja zarowno na wysokosc jak i szerokosc elementu, i jak dzieje sie to w srodku paragarfu to chujowow to wyglada. Są do tego inne odpowiednie funkcje 
            
/*            
// podobne CO U GORY MOZNA ZROBNIC TOGGLEM !
            
            content.toggle();   // TYLKO TA JEDNA LINIJKA ! Ona (chyba) wykrywa o jaki atrybut chodzi i sobie go zmienia w zaleznosci od stanu w jakim go zastaje
// UWAGA ! Za pomoca samego toggle niestety nie mozna zamienic juz napisu !            
*/            
        });
        
// KOLEJNE FUNKCJE  ####################################################
            
   // W tych funkcjach, tak samo jak u gory, ALBO w STRINGU "slow" lub "fast" ALBO liczna milisekund 
   // UWAGA ! ZAJEBISTA SPRAWA ! Te wartosci "fast" oraz "slow" znajduja sie w jQuery w konkretnym miejscu a mianowicie w:
            //      $.fx.speeds
            //        Object {slow: 600, fast: 200, _default: 400}
    // NO I SEK W TYM ZE SAMO MOZESZ SOBIE ZAIMPLEMENTOWAC SWOJA SZYBKOSC:
            //    $.fx.speeds.wChujWolno = 1000;
    // I TERAZ MOZESZ SOBIE W TYCH FUNKCJACJ ANIMACYJNYCH WPISYWAC TA WARTOSC STRING :)
            // domyslne wartosci slow i fast tez mozesz napisac
            
// ROZWIJANIE ELEMENTU #### slideUp , slideDown ###################
        
            $("#button").on("click", function() {
    // Na stronei mamy pewien ukryty paragraf i to na nim teraz bedziemy dzialac           
                var hidden = $(".rte .hidden");
// UWAGA ! My mamy jeden element ale jakby bylo wiecej TO DZIALA TO NA KAZDY Z NICH                  
              
//                if (hidden.is(":hidden")) {
//                    hidden.slideDown(500);
//                } else {
//                    hidden.slideUp(3000);
//                }
                
                // TUTAJ TEZ MAMY TOGGLE ! ale POD NAZWA SLIDETOGGLE !          
                $.fx.speeds.wChujWolno = 3000;
                
                hidden.slideToggle("wChujWolno");       // DZIALA :) puste pole do defultowe 400
            });        

            var button2 = $("#button").clone().text("button2");            
            button2.appendTo(".rte");
    
// UKAZYWANIE ELEMENTU Z PRZEZROCZYSTOSCI #### fadeIn , fadeOut ###################        
        
            $(button2).on("click", function() {          
                
                var hidden = $(".rte .hidden");
//                
//                if (hidden.is(":hidden")) {
//                    hidden.fadeIn(500);
//                } else {
//                    hidden.fadeOut(3000);
//                }
            // TUTAJ TEZ JEST TOGGLE:
             //   hidden.fadeToggle(500);
                
// METODA FADETO ###################
                
                hidden.fadeTo(500, 0.5);  // DRUGI ARGUMENT mowi o tym do jakiego opacity ma sie to pokazac ! Gby bylo 1 no to efekt ten sa mco w fadeToggle ale gdy miedzy 0 i 1 no to mozna cos pokazac ale do pewnego stopnia zeby bylo zamglone
                
            }); 
    });

})(jQuery);


















