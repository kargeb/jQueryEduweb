console.log("31 PRAKTYCZNY PROJEKT: ACCORDION");

// Czyli roziwjalne Pytania i Odpowiedzi

(function($) {

    var collapseAll = true;     // ZMIENNA DO TWORZERNIA OPJCONALNOSCI W FUNKCJONOWANIU
    
   $(document).ready(function() {

        var titles = $(".accordion__title"),
            texts = $(".accordion__text");   // mozna je ukrys juz tutaj .hide();

        
       texts.hide();    // urkucie wszystkich odpowiedzi
       
       titles.on("click", function() {
           
// TUTAJ JEST OSTATNIA RZECZ JAKA ROBILISMY a wiec, zrobienie tak, ze jak wyswietlamy jeden opis T OWSZYSTKIE POZOSTALE AUTOMATYCZNIE SIE CHOWAJA            
   //        titles.removeClass("accordion__title--active");      // usuniecie kolorowania
  //         texts.stop().slideUp(300);                           // zwiniecie wszystkich
                                        // Tutaj mozna by to niby filtowac po :visible ale po chuj
          
// UWAGA ! Ta funkcjonalnosc u gory mozna potraktowac JAKO OPCJE DO WYBORU ! I zamknac ja w funkcji ktora ja aktywuje albo nie ! Cos dokladnie takiego:           
           
           if(collapseAll) {
                titles.removeClass("accordion__title--active");   
                texts.stop().slideUp(300);                           
           }
// BAARDZO CIEKAWA SPRAWA Z TA OPCJONALNOSCIA, no bo jesdna zmiana zmiennej i dany program dziala CALKOWICIE INACZEJ !           

           var that = $(this),
               text = that.next(".accordion__text"),    // mozna byloby tez samo next()
               isVisible = text.is(":visible"); // czyli mozna to juz na tym etpaie przyspiac i spokoj
                                                // na odwrot byloby is(":hidden")    
    // Nadanie kolorowania menu, na podstawie dodawania i usuwania klasy
    // W tej formie nie dziala to dobrze, bo gdy szybko klikniemy kilka razy to kolo zmienia sie, NIE CZEKAJAC NA TO AZ ZWINIE SIE LUB ROZWIENIE MENU !
 //          that.toggleClass("accordion__title--active");    
           
// Jest sposob zeby sobie z tym poradzic:   TOGGLE MOZE PRZYJAC DRUGI ARGUMENT !!!
// Jest to agrument ligiczny ! Gdy jest TRUE to toggle sie wykona a jak false TO NIE
// no i kozystamy z tego ze za kazdym kliknieciem mamy inna wartosc w "isVisible"  
// Toggle bedzie dzialas tylko wtedy gdy opis bedzie wyswietlony a wiec NIEWIDOCZNY -> !isVisible           
           that.toggleClass("accordion__title--active", !isVisible);
           
           if(!isVisible) {                     // Juz dziala chowanie i pokazwyanie na klick
               text.stop().slideDown(300);
           } else {
               text.stop().slideUp(300);
           }
                
       });

       
    });

})(jQuery);


















