console.log("05 FILTORWANIE");

// Tutaj dowiemy sie jak filtorwac NA ZNALEZIONCH JUZ OBIEKTACH NA STRONIE, czyli wyszukiwac tych ktore dokladnie chcemy

(function($) {

   $(document).ready(function() {

        var rte = $(".rte");   // u nas tylko jeden div do bedzie

// W CHUJ WAŻNA METODA "find
// jest to metoda zaimplementowana w jQUERY ! Czyli mozemy z niej korzystać TYLKO NA OBIEKTACH JQUERY ! Nie mozna byloby z niej korzystac w czystym JS !
       
       var links = rte.find("a");  // Wyszukanie wszystkich linkow w obiekcie rte
       
// Wyszukujemy w zwortocnbym obiekcie rte wszystkich elementów zawierajacych element "a" ! MOŻNA KORZYTSAĆ ZE WSZYSTKICH SELEKTORÓW KTÓRE BYŁY POKAZYWANE POPRZEDNIO ! Nawet tych najbardziej zaawnasoanych 
       
// TEŻ WAŻNA METODA, podobna do find, ALE UWAGA ! fin WYSZUKUJE to co jest zadamy w danm "obszarze", a metoda FILTER filtruje JUŻ NA ZNALEZIONYCH OBIEKTACH ! A więc już musisz mieć wyłowione konkretne obikety, elementy, aby móc użyć na niej metody FILTER !
       var externalLinks = links.filter("[href^='http']");
       
// UWAGA ! BARDZO WAŻNE !!! Niektóre funkcje w jQuery np takie jak "filter" mogą poza stringami przyjomować też FUNKCJE !!! Oto jak to działa:
       
       // Torche to POPIERDOLONE z początku ...
       
       var longP = rte.find("p").filter( function(i, elem) {
       
           // nie czaje kurwa tej funkcji.. przyjmuje i jako index kolejnych elementow no bo musi tak przyjmowac widocznie i chuj ... a elementy to te na ktorych wywoluje sie filter ...
           
           // pozniej kurwa jesli masz wylowiony element i dasz do do funkcji dolara to z automatu on zamienia sie na obiekt jQuery i mozna wykonywac na nim funkcjje ! To jest prawdopodbnie bardzo potezne narzedzie
           
           // pozniej funkcja text() sprawia ze zwrocony zostaje CALY TEKST zawarty w wylowionym elemencie ! a lenght no to juz po prostu sprawdza ile w tym tekscie jest znakow
           
           return $(elem).text().length > 100;
           
           // UWAGA !!! ZAMIAST "$(elem)" MOŻNA UŻYĆ $(THIS) !!!!!!!
           
       });
       
// KOLEJNE METODY FILTRUJĄCE:
// pracujemy na "links" czyli obiekcie wylowionym u góry
       
       //METODA not
        var notBlankLinks = links.not("[href='#']");    //wylowienie wszystkich poza tymi ktore pasuja do selektora
       
       //Metoda first
       var first = links.first();   // zwrocenie pierwszego elementu ze zbioru
       
       //Metoda last 
       var last = links.last(); // zwrocenie pierwszego elementu ze zbioru
       
       //Metoda eq
       var thirdA = links.eq(2);    // wylowienie TRZECIEGO elementu z links
       var fromEnd = links.eq(-2);  // wylowienie trzeciego OD KOŃCA !!!
// KAŻDĄ ztych metod można by zastąpić w ten sposób:  links.filter(":eq(2)");  !!!!       
       //Metoda has
       var pA = $("p").has("a");    // wszystkie "a" w znalezionych "p"

      //Metoda SLICE
       var notFirstLink = $(".rte a").slice(2); //zwrocne wszystkie linki POZA PIERWSZYM  ! Uwaga bo tutaj numerowanie od 1 nie od 0 ! No i pamiętać ze to jest kurwa ta zjebana slice, czyli jak dasz 3 to nie ze wszystkie poza 3 tylko kurwa od 3 do konca !!!
       
       notFirstLink.hl();
       
 //      window.dupa = rte;
       
    });

})(jQuery);


















