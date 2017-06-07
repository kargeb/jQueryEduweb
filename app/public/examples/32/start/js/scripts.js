console.log("32 PETLA EACH DLA ZBIOROW");

// W tej cześci pokazene bedzie klilka petli zaimplementowanych w jQuery
// each DLA ZNIOROW oznacza ze dziala ona na KILKU elementach wylowionych za pomoca wyszukiwajek jquery

(function($) {

   $(document).ready(function() {

        var links = $(".rte a:has(img)");       
       
// UWAGA ! JQUERY juz za naszymi plecami kozystalo z takich petil !
       
//      links.addClass()   -> To wyrazenie wykonywane bylo DLA WSZYSTKICH ELEMENTOW W ZBIORZE !
//      links.width()  ->  to juz bylo robione TYLKO DLA PIERWSZEGO ELEMENTU !
//      links.width(100)  ->    ale te JUZ NOWU DLA WSZYSTKICH ELEMENTOW W ZBIORZE !
       
       links.each(function(){   //   Nie przekazujac zadbych parametorow do petli EACH
          $(this) ...           //   To co zrobione w funkcji wykonanie zostanie DLA KAZDEGO
       });                      // ELEMENTU Z OSOBNA !
       
// Bedziemy chcieli z kazdego elementu a pobrac jego alt i wkleic do title:       
       
       links.each(function(i, elem) {    // TUTAJ pod ELEM tez bedzie elelemnt THIS
          
           var that = $(elem),
               alt = that.find("img").attr("alt");  // widzisz jakie proste ? 
                                                    // find do elementow, attr do atrybytow
           
// PODAJAC DRUGI ARGUMENT DO ATTR USTAWIAMY JEGO NOWA WARTOSC !           
           that.attr("title", that.attr("title") + " - " + alt);
           
       });

//  TO TYLE, bardzo prosta sprawa ! Jeśli chcesz pracować na zbiorze jakihś elementów i z każdym znich coś porobić to po prostu korzystaj z EACH i chuj
    });

})(jQuery);


















