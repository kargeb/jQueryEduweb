console.log("29 EASING ANIMACJI");

//JAK ZMIENIAC EASING (izing) ANIMACJI i co to kurwa jest easing

(function($) {    
    
    $(document).ready(function() {

// UWAGA ! EASING jest to sposób W JAKI WYKONUJE SIĘ DANA ANIMACJA ! Jej wygląd ! 
// EASING podaje się JAK OTRZECI PARAMETR w funkcji ANIMATE !
// są 2 rodzaje w jQuery:  domyśłny - SWING oraz drugi - LINEAR, i miedzy nimi akurat nie ma jakiejs zajebistej roznicy, w sumie to w ogole jej kurwa nie widac        
        
// TO NIE JEST PRZYPISANE TYLKO DLA ANIMATE ! Ze wszystkich poprzednich metod rowniez mozemny wpierdalać easing, robi sie to jako drugi parametr:
//                                  slideDown(500, "linear"),
// show, hide, toggle, fadeIn, fadeOut, fadeToggle, slideDown, slideUp, slideToggle
        
//UWAGA ! MOŻEMY dodwać sobie DODATKOWE EASINGI do naszej strony, i przede wszystkich trzeba wejść tyutaj:
//          
//                  http://gsgd.co.uk/sandbox/jquery/easing/
//
// NA TEJ STORNIE MOZNA SOBIE NA ZYWO TESTOWAC DOWOLNY WYBRANY EASING A JEST ICH W CHUJ       
//        
// NO I PRZEDE WSZYSTKIM TRZEBA Z TEJ STRONY ŚĆIĄNĄĆ SOBIE BIBLIOTEKE (plugin) i podpiąćją do naszego kodu !!!
// Podpinamy ją POD JQUERY ale PRZED NASZYM SKRYPTEM !!!      
        
//  <script src="/js/jquery-2.2.1.js"></script>
//  <script src="/examples/29/start/js/jquery.easing.1.3.js"></script>
//  <script src="/examples/29/start/js/scripts.js"></script>

// Po załączeniu tej biblioteki, wystarczy na stronie wyszukac odpoiwadający nam EASING i po prostu wpisać jego nazwe jako parametr, TO WSZYSTKO !        
        $("#button").on("click", function() {

            $(".rte img").animate({
                width: "100%",
                opacity: 1
            }, 2000, "easeOutBounce", function() {      // Działa, petarda
                console.log("Animacja wykonana");
            });

        });

    });

})(jQuery);


















