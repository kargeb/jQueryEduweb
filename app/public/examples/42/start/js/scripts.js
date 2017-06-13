console.log("42 AJAX: SKROTOWE METODY"); 

// Poprzednio uczyluismy sie jak wysylac zapytania za pomoca jQuery.ajax, tutaj pokazane zostana prostsze sposoby na przesylanie zapytan

(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output"),
            form = $(".contact-form");

        button.on("click", function() {

// OTO JAK NAJPROSCIEJ WYSLAC ZPAYTANIE GET (jak sama nazwa wskazuje) POD JAKIS ADRES:
        // Pierwszy parametr to adres URL - gdy nie ma nic to wysylany jest pod ten sam co strona
        //  Drugi paramter TO FUNKCJA SUCCESS    
            $.get("", function(data) {  
                output.text(data);      // dostaniemy zrodlo strony
            });                         
 MAMY TYLKO 3 LINIJKI KODU ! W samym JS byloby to w chuj wiecej !            
            
// Skrótowy zapis funkcji wysylajacej zapytanie o JSON
            // Czyli bez pieprzenia, za pomoca tej funkcji po prostu dajemy znac serwerowi ze oczekujemy JSONa
            $.getJSON("http://code.eduweb.pl/kurs-jquery/get_json.php", function(data) {
               console.log(data);   // Odpowiedz ZPARSOWANA ZOSTALA jako JSON
            });
            
// Nastepna BARDZO CIEKAWA METODA GETSCRIPT ! Wykonuje ona zapytanie, gdzie oczykuje dostac skrypt z kodem JS, jak go dostanie to  z automatu tworzy w HTMLu znacznik SCRIPT i tam umiesza ten pobrany skrypt
            // Pojawia sie na koncu HEAD w pliku html, po wykoniu od razu znika (przynajmniej z tego co ja widze)
// Czyli jest to sposob na asynchroniczne pobietanie skryptow na strone            
            $.getScript("http://code.eduweb.pl/kurs-jquery/js/hello.js");            
            
        });

// OSTATNIA skrotwa metoda pokzana tutaj to $.POST czyli przesłanie danych na serwer za pomoca metody POST. Przeslemy nia dane prsto z forumlarza na naszej stronie !
        
        form.on("submit", function(e) {
           
            e.preventDefault();
            
            var data = form.serialize();    // czyli robimy z tego klucz i wartosc dla wszystkich
            
// Pierwszy atrybut to adres wiec wyciagamy go z form z atrubutu "action"
// pozniej przesylamy dane zserializowane a poziej deklarujemy funkcje obslugujaca sukces
            $.post(form.attr("action"), data, function(data) {
                utils.log(data, true);    
            
// Oto co zostalo przeslane:                
//    Array
//        (
//            [email] => dupa@dupa.pl
//            [imie] => dupak
//            [temat] => support
//            [wiadomosc] => Panie pomoz kurwa !
//        )
            });
            
// Jak widzimy W BARDZO PROSTY SPOOSB mozemy przesylac tego typu zapytania W DOSLOWNIE KILKU LINIJKACH ! A w zwyklym  JS to ja pierdole ... ile kodu ...            
            
        });
        
    });

})(jQuery);


















