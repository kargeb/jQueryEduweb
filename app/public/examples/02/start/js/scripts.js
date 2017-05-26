console.log("2 podstawy selektorow"); 

// Przeder wszystkim to gosc napisal sobie wlasna biblioteke  utils.js  i zalaczyl ja zaraz pod jQuery,  jest tam miedzu innymi funckja hl(), ktora podswietla na czerwowo wszytkie przekazane do niej elementy na stronie

// UWAGA ! Są bilbioteki takie ze tez kozystaja ze znaku dolara, wiec zeby miec pewnosc ze $ bedzie oznaczac jQuery i nic innego, przekazujemu obiekt jQuery do funkcji a funcja jako parametr przyjmuje wlascnie znaczek $ !

(function($) {

// Chcemy pracowac z kodem dopiero jak zaladuje sie cala strona !
// W zwyklym JS zrobilibsymy to tak:
//    
//      document.addEventListener("DOMContentLoaded", function() { 
//
//      });
//
// W jQuery robimy to tak:
    
// jQuery JEST FUNKCJA ! Wiec wlasnie tak bedziemy korzystac, ze znaczku doloara i podajac jakies argumenty w nawiasach !    

    $(document).ready(function() { 

// Chcemy wyszukac wszystkie paragrafy na stornie, w zwyklym JS:
//
//  var paragraphs = document.querySelectorAll("p");         
//
// w jQuery:
        
    var paragraphs = $("p");
// Nie dosc ze wszystkie paragrafy zostana wyszukane to jeszcze zostanie zwrocony obiekt jQuery ktory ma w sobie w chuj przydatnych metod i wlasciwosci        
    
// WIEC TAK WYSZUKUJE SIE NAJPROSTSZYCH ELEMENTOW CSS (w tym przypadku to wrecz HTML) na stronie, oto dalsze przyklady:
        
    var headings = $(".heading");
        
    var button = $("#button");
        
    var links = $(".rte a");
        
// CZYLI jak widac mozna wyszukiwac po identycznych selektorach jak w CSS i na takich samych zasadach (jak w links ze wyszkuaj wszystkie "a" ale tylko w klasie .rte)
    
    var lis = $(".rte ul > li");  // wszystkie dzieci ul ktore sa li
        
    var pap = $(".rte p + p");  // wszystkie paragrafy ZA paragrafem, czyli jak raz gdzies wystapi p no to juz wszystkie po nim beda brane poza nim samym
        
    var paul = $(".rte ul ~ p"); // wszystkie paragrafy na tym samym poziomie co ul, ale znajdujace sie po nimm (tutaj to bedzie ostatni p na indexie)

    var text = $(".rte p, .rte ul, .rte .headings"); // poszczegolne kryteria MOŻNA ŁĄĆZYĆ przecinkami i robic cuda juz     
    
        
    text.hl(); 
// Tutaj korzystamy z tej BILBIOTEKI utils.js,  opisanej na poczatku, dzieki czemu podswietlamy wszystkie wylowione elementy na stronie !
        
//  UWAGA !! JESZCE raz trzeba powtorzyc ze funkcja $ zwraca OBIEKT jQuery, ktory ma w chuj waznych wlasiwosci, no i jedna z nich jest LENGHT czyli pokazanie ile dokladnie elementow udalo sie namierzc !
        
    console.log(headings.length);       // ILE ZNALAZLO HEADINGS  5
        
    console.log(paragraphs.length);     // ILE ZNALAZO PARAGRAFOW  6
        
        
    });

})(jQuery);



