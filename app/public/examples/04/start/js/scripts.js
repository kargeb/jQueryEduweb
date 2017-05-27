console.log("04 Niestandardowe selektory");

// W tej lekcji będą selektory juz typowo dostepne tylko we jQuery, w CSS juz z nicjh nie mozna korzystac 

(function($) {

   $(document).ready(function() {

    // Wyszukanie na stronie wszyskich buttonow, ale NIE TYLKO <BUTTON> ale tez takich jak np submit type="button", bo zwykle $("button") nie znajdzie tych drugich !
        var button = $(":button");

    // selektor a który zwaierwa W TEKŚCIE zawartość "minima" ! Nie jest to zbyt optymalna forma bo najpier musi znalezc wszystkie <a> a poniej je porownac ale jak mala strona albo jednorazowa operacja to sopko   
        var contains = $("a:contains('minima')");
       
    // wyszukanie DRUGIEGO elementu takiego typu ! No bo indeksy sa numerowane od 0, czyli tutaj wyszukamy drugą kropke na stronie   
       var secondLi = $(".rte ul li:eq(1)");
       
    // wyzszukanie elementów PARZYSTYCH
       var evenLi = $(".rte ul li:even");
       
    // wyzszukanie elementów NIEPARZYSTYCH   
        var oddLi = $(".rte ul li:odd");
    
    // wyszukanie wszystich ale zwrocenie PIERWSZEGO znalezionego
       var firstP = $("p:first");
       
    // ZAJEBISCIE WAZNY SELEKTOR ":has" czyli wyszukuj selektor zawierajacy jakis inny ! Mozna dodawac do tego dodatkowe atrybuty w tych wyszukiwanych selektorach   
       var liWithLink = $(".rte li:has(a)");
       var liWithLinkTitle = $(".rte li:has(a[title])");
       
    // Zwrocenie WSZYSTKICH headerow, naglowkow, od h1 do h6
       var headers = $(":header");
       
    // wyszukanie wszystkich headerow KTÓRYCH RODZICEM JEST KLASA .rte    
        var headings = $(":header:parent(.rte)");
       
       headings.hl();
       
// UWAGA ! Oczywiście tych selektorow jest w chuj więcej ! Pełną listę masz na oficjalnej dokumentacji API jQuery pod tym linkiem:
       
//                https://api.jquery.com/category/selectors/
       
   });

})(jQuery);