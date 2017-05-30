console.log("06 FILTORWANIE HIERARHICZNE");

// HIERARCHICZNE to nic innego jak wyszukiwanie wzglede polozenia jakiegos elementu, czyli po childrenach parentach itp

(function($) {

   $(document).ready(function() {

        var ul = $(".rte ul");

       //Chcemy pobrać wszystkie li, moznaby to zrobic tak:
       var another = ul.find("li");
       //ale zrobimy to inaczej:
       var lis = ul.children("li");
       // w ten sposob mówimy ze chcemy wyszukac TYLKO BEPOŚREDNICH elementów, czyli bezpośrednie dzieci elementu ul ! (jak np ktores z "li" dasz w diva no to juz go nie namierzy a metoda find ZNAJDZIE WSZYSTKIE
       // UWAGA ! w metodzie find musielibysmy to zrobić tak : find("> li"); !
       
       // Wylowienie pierwszegi
       var firstLi = lis.first();
       
       // NEXT
       // wylowienie nastepnego elementu, DOWOLNEGO ELEMENTU, niezlaeznie czy to bedzie kolejne li czy p 
       firstLi.next();
       
       // wylowienie nasteopnego elementu ALE JUZ KONKRETNIE TAKIEGO JAK W NAWIASIE ! mozna tam wpisywac elementy, klasy lub identyfikatory 
       var test = firstLi.next("li");
       // UWGAA  ! MUSZĄ BYĆ NA TYM SAMYM POZIOMIE ! Czyli to nie przejdzie w tym przypadku:  firstLi.next("p");
       // UWAGA ! Mozna je laczyc !!
       var drugi = firstLi.next().next("li");
       
       // Dokładnie na tej samej zasadzie dziala PREV 
       var poprzedni = drugi.prev().prev();
       
       //nextAll()   prevAll()
       // Wyszukanie WSZYSTKICH elementow na tym samym poziomie, przed nim albo po nim
       var nextAll = firstLi.nextAll(); 
       
       //nextUntil
       // Wyszukanie wszystkich elementow po podanych ale do eleemntu podanego jako parametr
       var nextUntil = firstLi.nextUntil(":last-child"); // wszystkie li poza pierwszym i ostatnim
       
       var cuda = firstLi.nextUntil(firstLi.next().next().next()); // DZUAŁĄ ! :)
       
// POZOSTAŁE PRZYDATNE FUNKCJE
       // rodzic elementu, czyli w naszym przypadku element UL
       var parent = firstLi.parent();
       
       // wyszukanie WSZYSTKICH rodzicow, zgodnie z hiehrarhia, czyli tutaj bylby to ul pozniej div i jeszcze body i html ! (ciekawe to nawet), okazuje sie ze fajnie pokazalo jeszcze dodatkowych rodzicow zawartych juz w tym frameworku co pracujemy na nim
       var parents = firstLi.parents();
       
       //Wiadomo, znalezienie az do konkrtenego elementu, tutaj bedzie to SAMO ul no bo nie bierze pod uwage tego wpisanego w parametr
       var parentsUntil = firstLi.parentsUntil(".rte");
       
       //Wyszukanie najblizszego elementu W GÓRĘ ! Ale chodzi chyba tylko o rodziców bo nie wyszukuje po sąsiadach
       var closestDiv = firstLi.closest("div").children("h3").closest("div"); // dziala
       var closestp = firstLi.closest("div").children("h3").closest("p"); // nie dziala
       
       closestDiv.hl();
       
       window.dupa = parentsUntil;
       window.kupa = lis;
       window.pierszy = firstLi;

       
       
    });

})(jQuery);


















