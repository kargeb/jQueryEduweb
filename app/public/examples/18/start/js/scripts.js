console.log("18 PRACA Z TRESCIA ELEMENTOW");

// Jak pracowac z trescia na stronie A TAKZE z elementami HTML znajdujacym sie na niej

(function($) {

    $(document).ready(function() {
        
        var button = $("#button"),
            text = button.text();   // POBRANIE SUCHEGO TEKSTU (tresci) Z DANEGO ELEMENTU HTML

// METODA "TEXT" ########################################################
        
        console.log(text);
// Zakladamy ze ten przycisk raz otwoera jakis panel, a raz go zmayka
        button.on("click", function() {
// TWORZYMY ZMIENIAJACY SIE TEKST NA PRZYCSIKU, za kazdym kliknieciem poda inna wartosc, albo zamknij albo otworz
            if(button.text() === text) {
                button.text("Zamknij");     // TAK PRZYPSUJE SIE TRESC W ELEMENTACH !
            } else {                        // czyli dokladnie z pomoca tej samej metody co odczyt
                button.text(text);
            }

// metoda TEXT również może przyjmować FUNKCJE jako parametr:
            $(".rte p").text( function(i, oldText) {
               
                return oldText.toUpperCase();   // zamiana wszystkich liter na WIELKIE
            });
          
// UWAGA ! Tutaj w linicje 9 pobralismy tylko jeden element, ALE gdyby ich bylo wiecej, to metoda TEXT zwraca CALY POLACZONY TEKST ZE WSZYSTKICH TYCH ELEMENTOW ! Nawet jesli maja w sobie jakies inne znacnziki html, TO ZOSTAJA ONE WYCIETE i tekst z nich rowniez jest Zwracany w tej meodzie
            
            var combined = $(".rte p").text();      // Dokladnie to sie stalo, 
            console.log(combined);                  // caly teskt zpstal w zmiennej zwrocony
// Gdybysmy wtawili tekst na tej zasadzie, TO TEZ ZOSTANIE ON WSTAWIONY DO WSZYSTKICH WYSZUKANYCH ELEMENTOW !            
        });

// METODA "HTML" ##########################################################
    // Zwriocenie STRINGU z DOKLADNIE TAKIM KODEM HTML JAKI JEST W PLIKU, czyli ze wszystkimi znacznikami oraz z zawartoscia tekstowa    
        var firstHTML = $(".rte ul li:first").html();
        
        console.log(firstHTML); //  Lorem <a href="#">ipsum</a> dolor sit amet.
        
// UWAGA !!! ZAJEBISCIE WAZNE ROZNICE MIEDZY text I html !:
// 1.
        // metoda TEXT wywolana na zbiorze kilku elementow, ŁĄCZY nam wszystkie znalezione zawartosci w JEDEN i to zwraca !
        // metoda HTML ZWRACA NAM W TAKIM PRZYPADKU ZWARTOSC TYLKO PIERWSZEGO ELEMENTU ZE ZBIORU !!!!        
// 2.
        // TEXT nie pobiera zadnych znacznikow HTML a przy wstawianiu, nawet jesli sa w stringu, TO WPISUJE JE TAK JAK SA W KODZIE ! Czyli wszystkie znacnziki wypisze na stronie nie przerabiajac ich 
        // HTML pobiera CALA ZAWARTOSC elmentu, lacznie ze znacnzikami, i gdy za jej pomoca wstawiamy teskt NO TO WSZYSTKIE ZNACZNIKI BEDA PRZEROBIONE NA html'a !
        
        $(".rte ul li:last").text(firstHTML);   // Lorem <a href="#">ipsum</a> dolor sit amet.
        $(".rte ul li:last").html(firstHTML);   // Lorem ipsum dolor sit amet.
        
        $(".rte ul li:last").text("<strong>dupa</strong>");   // TA SAMA ZASADA CO U GÓRY
        $(".rte ul li:last").html("<strong>dupa</strong>");   // TA SAMA ZASADA CO U GÓRY
        
// CIEKAWOSTKA taka
    // u dolu jest skrypt ktory pobiera element z wyszukiwarki i zwaraca on wynik
        var search = decodeURIComponent( window.location.search.split("=").pop());
//odczytujemy to co jest wpisane w pasku adresu przegladarki, rozbijamy splitem poprzez znak spacji, i popem pobieramy druga czesc (czyli oddzielamy search od reszty), DECODE jest potrzebne no bo np spacja jest zapisaywana w pasku jako %20, bo i u nas trzeba to rozkodowac        
        $("#search").text(search);

    // I TERAZ UWAGA ! metoda TEXT robi nam z tego zawsze string nie pozwalajac zeby cos nam sie na stronie wstawilo jakis HTML
    // a meteda HTML w tym miejscu UMOZLIWILABY WSTAWIENEI NA STRONE SKRYPTU WPISANEGO W PASEK ADRESU ! I monzabyloby ROZJEBAC cala strone wpisujac kod skryptu do paska przegladrkai ! DLTAEGO ZAWSZE JAK COS POBIERASZ Z PASKA ADRESU TO ROB TO METODA T E X T !!!!!!!    
        
// search=<script>alert("hacked!")</script> - wpisanie tego w pasek i pobranie za pomoca metody html:   $("#search").html(search);    -> wysiwetla na stronie ALERT        
        
    });

})(jQuery);


















