console.log("43 JSONP");

// Niestety nie przypomnial na czym polega JSONP
// Ale polega na tym ze mozemy pobierac dane Z INNEJ DOMENY NIZ NASZA

(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output");

        button.on("click", function() {

// UWAGA ! Nie jest to zapytanie strikte ajaxowe (?)            
            $.ajax({
// Ten adres jest skonfigurowany tak ze jak na koncu dopiszesz "?callback=dupa" to dostaniesz funkcje o nazwie dupa z przekazanymi do niej parametrami w standardzie JSON                
                url: "http://code.eduweb.pl/kurs-jquery/get_jsonp.php",
// Na ten moment nie powiedzie sie zapytanie ze wzgledu na te ACCESS ALLOW czyli ze nie mozna wysylac zapytan ajaxem do obcych domen. Ale mozemy to obejsc wlasnie dzieki JSONP:
                dataType: "jsonp",
// No i teraz sie udalo, dostalismy zawartosc. Uwaga ! Nie ma zadnych logów w conslo BO NIE JEST TO TYPOWE ZAPYTANIE AJAX, mimo że kożystamy z metody ajax
                jsonp: "callback",  // mozna wpisac tez "cb" jesli serwer by tego wymagal
//nie wiem o chuj chodzi i czemu akurat musi byc calback (?)                 
                success: function(data) {
                    output.text( JSON.stringify(data, null, 4) );
                }
            });

        });

    });

})(jQuery);


















