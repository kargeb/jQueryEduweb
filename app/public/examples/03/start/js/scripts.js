console.log("03 zaawansowane selektory");

// Znajac podstawowe selektory teraz bedziemy wyszukiwac juz po nieco bardziej zaawnasowanych cechach

(function($) {

   $(document).ready(function() {

       // WYSZUKWANIE PO ATRYBUTACH !!!
       
       var withTitle = $("[title]");    // ATRYBUTY ZA POMOCA NAWIASOW KWADRATOWYCH 
       
       var blank = $("a[href='#']");  // wyszukiwanie po konkrtenych właściwościach atrybutów 
       // UWAGA ! Bez "a" TEZ BEDZIE !
       
       var eduweblinks = $(".rte a[href*='eduweb']");   // *= CZYLI ZE TAKA CZĘŚĆ ZNAJDUJE SIE w ktoryms z linkow
       
       var zoomLink = $("a[title~='Powieksz']");    // podobnie jak u gory ALE MUSI BYC ODDZIELONE SPACJĄ OD INNYCH SŁOW !!!
       
       var pictureLink = $("a[href$='.jpg']");   // tak jak wyzej ALE KOŃCZY SIĘ na .jpg !!!
       
       // PRAKTYCZNY PRZYKLAD - wyszukanie wszystkich nieaktywnych linkow na stornie
       var notBlank = $("a[href!='#']");    // ODWROTNOŚĆ var blank ! Czyli znajdz wszystko poza linkami z haszem samym (bardzo wygodny selektor !) 
    
       //2 PRAKTYCZNBY PRZYKLAD - wyszukanie wszystkcih linkow ZEWNETRZNYCH
       var externalLinks = $("a[href^='http']");    // ^= oznacza ZACZYNAJACYCH SIE OD, tym przypadku http czyli kierujacych na zewntarz !
       
       var notTitle = $("h2:not('.page-title')");   // :not czyli WSZYSTKIE OPRÓCZ, a wiec wszystkie naglowki h2 tylko nie te z klasa page-title
       
       var buttonDisabled = $("button:disabled");   //disabled jest to PSEUDOKLASA dla przysikow no i tym mozemy wlasnie wyszukac te wylaczone !
       
// UWAGA ! Ogolonie to selektorow jest jeszcze w chuj wiecej, ale mozna przyjac przede wwszystkim ze dzialaja WSZYSTKIE te wykorzystywane w CSS3 !!!        
       
       buttonDisabled.hl();

    });

})(jQuery);