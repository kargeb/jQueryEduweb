console.log("10 DELEGACJA ZDARZEN");

// Jak dodawac zdarzenia zeby przypisywane byly roniwez do elemenetow dynamicznie pojawiajacych sie na stronie

(function($) {

    $(document).ready(function() {

        var ul = $(".rte ul");

        ul.find("li").on("click", function() {
//// Bardzo ciekawama metoda "index()" pokazujaca index elementu konkretnego w danym zbiorze 
            console.log("Klikniecie w li numer: " + $(this).index());            
        });
// UWAGA ! Powyższy kod NIE REAGUJE NA DYNAMICZNE DODNANIE NOWYCH ELEMENTÓW NA STRONIE !Gdy juz po wczytaniu strony dodamy sobie jakis nowy element html, TO TA FUNKCJA JUZ GO NIE ZOBACZY, bo zdarzenie bylo przypisane tylko raz w momencie zaladowania sie strony !
        
// Oto jak dodawac zdarzenia aby reagowaly na dynamiczna zmiane na stronie:
// Element do ktorego do dopisujemy MUSI BYC JUZ NA STRONIE ! Nie jest tak ze mozemy sobie go dodac pozniej ! Ale elementy pod nim juz spoko, moga znikac i pojawiac sie dowoli      
        
        ul.delegate("li", "click", function() {  //TRZEBA PODAC DODATKOWY PARAMTER "li" ! 
            console.log("Klikniecie w li numer: " + $(this).index());  // DZIAŁA !
        });
// USUWANIE ZDARZENIA ONDELEGATE:  (wszystkich zdarzen ! Gdybys chcial pojedyncze, to takl jak w przypadku poprzedniej lekcji trzeba je nazwac i wyslac do funkcji referencje)        
        ul.undelegate("click");
    
// UWAGA no i teraz najwazniejsze, MOZNA ZAPOMNIEC O FUNKCJI DELEGATE, poniewaz ona tez kożysta z "ON", i oto jak to wszystko mozna zrobic za pomoca wlasnie funckji "ON":
        
        ul.on("click", "li", function() {

            console.log("Klikniecie w li numer: " + $(this).index());  // DIZAŁA !!!
        });
// USUWAMY DOKLADNIE TAK JAK POPRZEDNIE UZYWAJAC FUNKCJI OFF !
// ALE UWAGA ! POZA ZWYKLYM WYWOLANIEM FUNKCJI OFF MOZNA ZOROBIC TAKI TRICK:
        ul.off("click", "**");
// W ten sposob usuniemy WSZYSTKIE ZDARZENIA DELEGOWANE, czyli albo korzystajace meteody on NA "ul" lub z DELEGATE, ale NIE USUNIEMY zwyklych zdarzen wywolywanych bezposrednio na elementach "li" !!        
    
    });

})(jQuery);


















