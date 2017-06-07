console.log("34 METODA MAP");

//  Meotda MAP ktora TEŻ DZIAŁA JAK PĘTLA 
// Ogólnie to dzięki niej możemy wyławiać wartości z jakihś zbiorów I ODRAZU ZAPISYWAĆ JE JAKO ZBIOR ELEMENTÓW ALBO TABLICĘ !

(function($) {

   $(document).ready(function() {

        var links = $(".rte a");

// chcemy zapisac tutaj wszystkie linki jakie znajduja sie w links       
       var urls = links.map(function(i, elem) {
          
           var href = $(elem).attr("href"); 
           
           if(href !== "#") {   // nie chcemy pustych
                return href;
           }
       });
// OTRZYMALIŚMY JAKO WYNIK zbiór linków KÓTRE SĄ W FORMIE OBIEKTÓW i można z nich wyłuskiwać dowolne inne właściwości !       
    //   utils.log(urls);

// To było MAP na Zbiorze obiektów, a teraz MAP na zwykłej tablicy:
       
       var numbers = [1, -3, 10, -44, 3, 50, 2, -6];
       
       var positive = $.map(numbers, function(val, i) { // TYLKO DODATNIE
          
           if(val > 0) {
               return val;
           }
       });
       
       utils.log(positive);

// TROCHE NIE DO KOŃCA ROZUMIEM, ale wygląda na to ze WSZYSTKO ROZBIJA SIE O TEN RETURN ! I właśnie to co on zwraca to zapisywane jest jako nowa wartośc w zbiorze albo w tablicy       
    });

})(jQuery);


















