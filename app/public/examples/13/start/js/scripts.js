console.log("13 Przypisywanie i odczytywanie styli");

// JAK za pomocą jQuery pracowac ze stylami CSS

(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {
            
// UWAGA ! Jeśli w jednej funkcji kilkukrotnie korzystamy z elementu $(this), to mozna poprawic wydajnosc PRZYPISUJAC GO DO ZMIENNEJ, i do tej zmienej sie odwolywac !    
            
            var that = $(this); // PRZYPISANIE THIS DO ZMIENNEJ 
            
// PAMIĘTAJ ! Klikając na stronie prawym przyciskiem i wybierajac inspekt na buttonie, mozemy podejzec wszystkie jego wlasciwosci

// ODCZYTYWANIE STYLI ####################################################            
            
// UWAGA !! BARDZO WAŻNE ! Style nie muszą być ręcznie przypisane do danych elementów ! Np jak jakiś element nie ma FLOAT to I TAK MOŻEMY GO ODCZYTAĆ, a mianowicie jego domyślną waertość !              
            var bgColor = that.css("background-color");     // THAT zamiast THIS !
            
            that.css("background-color", "#ff0000");    // pamietaj o #
            
            console.log(bgColor);       // ZWRACA rgb(41, 213, 142)
// UWAGA zwrocona zostala notacja RGB ale ina przeglądarka moze zwrocic to w innej notacji ! Jquery jednak nie wszystko moze ustandaryzwoać !
var bgColorOld = window.getComputedStyle(this).backgroundColor;
// TAK WYGLĄDAŁO BY TO BEZ jQUERY ! I metoda jQuery CSS własnie z tej funkcji w swojej bibliotece korzytsa !            
            
// PRZYPISYWANIE STYLI ########################################################
                  
            that.css("background-color", "#ff0000");    // pamietaj o #   
// CSS Jest na tyle intekugentny ZE NIE MUSIMY PRZYPISYWAC np PX do rozmiaru czcionki ! On juz sam sie domysla ! Chyba ze chcemy inna notacja (12em) no to wtedy dopisac             
            that.css("font-size", 12);  
            
// UWAGA ! Style wproweadzane w ten sposob DOPISYWANE SA PROSTO DO KODU HTML, jako atrybut STYLE czyli MAJA PIERWSZENSTWO przed tymi stylami zapisanymi w arkusuz CSS !            

// MEOTDA CSS MOZE TAKZE PRZYJMOWAC FUNKCJE !
        // Tu jest to czego nie rozumiales ostatnio, ONA PO PRTOSTU PRZYJUMJE TEN PARAMETR i POTRZEBNY do pętli w razie pracy na wiekszej licznie elmentow, chuj z tym ze nigdzie z niego nie korzystasz, musisz go wpisac i czesc     
            that.css("font-size", function(i, value) {
            // musi byc parseInt no bo podaje w stringu   
               return parseInt(value) * 2; 
        });
// Zajebista sparwa, teraz po kazdym kliknieciu przycisku, powieksza sie na nim czcionka dwukrotnie !           
                
// UWAGA ! Mozna nawet korzystac z takich skrutow ! :
                
            that.css("font-size", "+=2");    // zajebiste ! // mozna jeszcze uzyc "-=2" ale juz mnozenie i dzielenie NIE JEST W TEN SPOOSB DOSTEPNE !
            
// PRZYPISYWANIE WIEKSZEJ LICZBY WLASCIWOSCI ##################################
        // Żeby to zrobnic musimy takiej metodzie PRZEKAZAC OBIEKT klucz: wartosc
            
            that.css({                          // Dział w chuj !
               "font-size": 20,
                "background-color": "green"
            });
            
// WRACANIE DO POPRZEDNIEJ WARTOŚCI ! ############
            
            that.css("font-size", "");  // wracanie do wartosci z arkusza stylow lub DOMYSLNEJ 
            
// UWAGA ! Tak jak podejrzewalem, nie zawsze takie bezposrednie przypisywanie jest dobre, lepiej po prostu utworzyc w arkusuz css klase odpowiednia i manipulowac tylko ta klasa         
        });

    });

})(jQuery);


















