console.log("41 AJAX: WYSYŁANIE ZAPYTAŃ");

// korzystanie z AJAXA intuicjnie za pomoca jQUERY, przesyłanie danych bez przeladowywania strony

(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

// Naciskajac na ten BUTTON chcemy wyslac zapytanie pod jakis adres i pozniej wyswietlic je w naszym oknie        
        
        button.on("click", function() {

// w jQuery mozemy wykonywac zapytania na wiele sposobow, zaczniemy od bardziej trywialnych a pozniej przerobimy takie juz uproszczone
            
// W takiej formie jak u dołu ZAPYTANIE ZOSTAJE OD RAZU WYSLANE ! Nic tutaj nie konfigurujemy zeby to pozniej wyslac, tylko wszystko wysylane jest z miejsca            
// Mozna to wyslac tak:   ->    $.ajax("url", obiektKonfiguracyjny)
// Ale mozna tez odrazu stworzyc obiekt wraz z adresem:
            $.ajax({
// Tutaj jest to co w kursie JS ze nie mozemy z localhosta pytac do serwera np EDUWEB no chyba ze EDUWEB by bylo odpowiednio skonfigurowane                
    //            url: "/40",                    // jak chcemy blad to -> "http://eduweb.pl",
                url: "http://code.eduweb.pl/kurs-jquery/get_json.php",  
// UWAGA ! u góry wyslalismy zapytanie pod zewnetrzny serwer i to dziala DLATEGO ZE JEST ON ODPOWIEDNIO SKONFIGUROWANY ! No i teraz gdy zobaczymy TYP zwracanej zawartosci to BEDZIE TO OBCECT ! A wszystko dlatego ze dostalismy odpowiedz z nagłowkiem:
                //  Response Headers : 
                //      Content-Type: application/json !!
// NO I JQUERY WIDZAC TAKI NAGLOWEK BEZ ZADNEJ NASZEJ INGERENCJI PRZEKSZTALIL DANE W OBIEKTY A NIE JAKO ZWYKLY STRING !! (jQuery zrobilo to za pomoca metody JSON.parse)
                
                type: "GET",  // UWAGA ! GET jest domyslnie wiec nie musilibysmy tego pisac
    //          method: "GET"   ->  TO JEST DOKLADNIE TO SAMO CO "type"\
    // FUNKCKJA WYKONYWANA W PRZYPADKU POPRAWNEGO PRZESLANIA DANYCH !
                
// UWAGA ! Jesli mimo zwracanego naglowka application/json NIE CHCEMY tego otrzymywac jako obiekt ALE JAKO ZWYKLY TEKST, mozemy to wymusic wpisujac :
                dataType: "text",       // dostaniemy String
                
// WYSYALNIE DANYCH:
                data: { //    "http://code.eduweb.pl/kurs-jquery/get_json.php?imie=Tomasz&wiek=22".
                    imie: "Tomasz",
                    wiek: 22
                },
// Jak widzimy dane zostaly dodane na koncu adresu, GDYBYSMY SKORZYSTALI Z METODY POST, przeslane zostalyby juz w inny sposob                
                     
// UWAGA ! W funckji SUCCESS obiekt THIS bedzie pokazywac na obiekt jqXHR, ALE MOZNA TO ZMIENIC zeby this pokazywal np na BUTTON, no i robi sie to tak:                
                context: button,    // TUTAJ MOWIMY ZE NA THISA CHCEMY BUTTONA !
                success: function(data, status, jqXHR) {  // dtaa - dane, jqXHR to ten obiekt JS z danymi
                    console.log("grejt sukces");
                    console.log(typeof data);   // String
                    output.text(data);
                    console.log(status);    // "success"
// WYSYLAJAC w ten sposb zapytanie GET dostaniemy po prostu CALE ZRODLO STRONY to ktorej to zapytanie kierowalismy, NIE ROZNI SIE TO NICZYM OD TEGO O CO PROSI PRZEGLADARKA gdy wpisujemy adres w pasek i dajemu enter  
                    
// TUTAJ WYKORZSTAMY CONTEXT !:
                    this.attr("disabled", "disabled");  // NIEAKTYWNY PO WYSLANIU ZADANIA 
                },
// FUNCKJA ERROR wykonuje sie jak wydarzy sie jakis blad                
                error: function(jqXHR, status, errorThrown) { // PAMIETAJ KURWA ZE NAZWY SA DOWOLNE !
                    console.log("Wystąpił błąd");
                    console.log(status);
                    console.log(errorThrown);
                },
// UWAGA ! 3 FUNCKJA ! Jest to COMPLETE i wykonuje sie ZAWSZE ! Niezaleznie czy mielismy sukces czy blad
// mozna z niej korzystac ale niekoniecznie, nie zawsze sie przydaje
                complete: function(jqXHR, status) {
                    console.log("Żądanie zakończone");
                    console.log(status);
                    console.log(jqXHR);
                }
            });
// UWGA ! Reszta tych wszystkich wartosci jest opisana w dokumentacji jQuery AJAX Settings            
        });

    });

})(jQuery);


















