console.log("44 GLOBALNA KONFIGURACJA");

// Jak dziala globalna konfiguracja w jQuery
// Czyli taka ze w jednym miejscu ustalamy powtarzajace sie parametry polaczenia

(function($) {

// UWAGA ! Takie globalne ustaiwenia dzialaja na WSZYSTKICH FUNKCJACH AJAXA z jakich bedziemy korzystac, nawet tych skrótowych, A TAKŻE NA SKRYPTACH KTÓRE SOBIE NP POBIERZENY Z INTERNETU, wiec trzeba sie bardzo ostroznie z tym obchodzic, wprowadzac tylko elementy do ktorych jestesmy 100% przekonani, a tak naprawde to najlepiej z tego nie korzytsac jesli nie ma takiej potrzeby. Aczkowliek AJAX ma w ciul roznych ustawien i czasami oplaca sie cos w ten sposob wpisac
    $.ajaxSetup({
        url: "http://code.eduweb.pl/kurs-jquery/get_json.php",
        cache: false // to sparwia ze nie bedziemy pobierac zadnych danych z cache
    });
    
// UWAGA ! MOZNA TEZ GLOABLNIE USTAWUAC EVENTY !!! :  ##########################################
    
//    .ajaxComplete()   ->  Wykona sie za kazdym razem kiedy uda sie wyslac zapytanie ajax (niezaleznie od otrzymanej odpowiedzi, czy blad czy nie)
//    .ajaxError()  ->    Odpali sie w momencie bledu
//    .ajaxSend()   ->    Odpali sie gdy zostanie wyslane
//    .ajaxStart()    ->  To w momencie gdy zapytanie bedzie wysylane
//    .ajaxStop() ->  to gdy przerwiemy takie zapytanie
//    .ajaxSuccess()  -> to gdy zapytanie wykona sie poprawnie 
    
// ######################################################################################

// Odpali sie na ZA KAZDYM RAZEM gdy zapytanie ajax bedzie wysylane 
    // JEST TO GIF ! Który pokazuje animacje ladowania sie po kazdym kliknieciu w button
    $(document).ajaxStart(function(event, jqXHR, options){  //opcje to te dane typu URL, METHOD lub DataType
        
        var preloader = $("#preloader");    // Szukamy czy on jest juz na stronie ...
        
        if(!preloader.length) { // ... a jesli go nie ma no to tworzymy go tutaj jako DIV
            preloader = $("<div></div>", {
                "id": "preloader",
                "class": "preloader"
            }).appendTo("body")
        }
        
        $("#preloader").fadeIn(500);    // pokazujemy go bo on domyslnie w stylach jest ukryty
        
    });
    
// TUTAJ ZDARZENIE które będzie nam CHOWAĆ TEN GÓRNY PRELOADER po zakończeniu zapytania:
    $(document).ajaxComplete(function() {   // NIE TRZEBA PRZEKAZYWAC TYCH PARAMETRÓW CO U GÓRY ! Mozna je przekazywac ale jesli z nich nigdzie nie przekazujemy TO NIE MA TAKIEJ ABSOLUTNIE POTRZEBY !
       
        $("#preloader").fadeOut(500);
        
    });
    
// NO I WŁAŚNIE TAK MOZNA NA OBIEKCIE "DOCUMENT" DODAWAĆ ZDARZENIA KTÓRE BĘDĄ SIĘ WYWOŁYWAĆ ZA KAŻDYM RAZEM GDY PÓJDZIE JAKIEŚ WYWOŁANIE AJAX !!!!!!

    //UWAGA ! Można zablokować wywoływanie się takich zdarzeń, wpisując w ustawienia globalne danego żądania "global:false" !    
    
    
    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

            $.ajax({
//                url: "http://code.eduweb.pl/kurs-jquery/get_json.php",    - przeniesione
                method: "GET",
                dataType: "text",   // nie chchemy zeby jqUery zamienilao nam tekstu na oiekty
                success: function(data, status, jqXHR) {
                    output.text(data);
                }
            });

        });

    });

})(jQuery);


















