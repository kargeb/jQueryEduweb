console.log("16 TWORZENIE ELEMENTÓW (HTML)");

// Jak tworzyc elleemtny HTML w jQuery i wstawiac je na strone

(function($) {

    $(document).ready(function() {

// STARA METODA W CZYSTYM JS:        
        var buttonOld = document.createElement("button");
        buttonOld = $(buttonOld); // nadanie wszystkich wlasciwosci obiektu jQuery

// NOWA METODA W CZYSTYM JQUERY:
        
        var button = $("<button></button>");    // NAJWAZNIEJSZE SA OSTRE NAWIASY <> !
    // Uwaga mozna tez zapisac w inny sposob:  ("<button>") lub ("<button /") - bedzie TO SAMO !
        // JEST to od razu obiekt jQuery majacy wszystkie odpowiednie wlasicowosci i metody
        // jQuery pod spodem korzysta z tego co o gory - "createElement"
        
// MOZNA STWORZYC OD RAZU CALY ELEMENT WRAZ Z JEGO SKŁADNIKAMI:
        var button2 = $("<button class='button' disabled>Kliknij mnie</button>");
// w tym przypadku jQuery nie korzysta juz z createElement ale z INNERHTML,
// NIE JEST TO NAJLEPSZY SPOSOB bo lepiej stworzyc sam element i pozniej do niego pododwac reszte
        
// Tak jak poprzednio JEST TO CALY CZAS OBIEKT jQUERY A WIEC MOZNA:
        
        button2.addClass("button--inactive");
        
        console.log(button2);   // obydwie klasu sie znajduja w nim
        
// JESZCZE JEDEN SPOSÓB, juz taki w chuj konkretny, czyli wstawienie elementu i jednoczesnie TEKSTU, WŁAŚCIWOSĆi a nawet ZDARZEŃ za jednym zamachem !
// podajemy po prostu DRUGI parametr który jest IBIEKTEM klucz wartosc:        
        var link = $("<a></a>", {
            href: "http://eduweb.pl",
            text: "Kliknij mnie",
            on: {
                click: function() {
                    alert("Klikniety !");
                }
            }
        });
// JEST TO DOSC SKOMPLIKOWACE, wiec np zdarzenia ON nie musiz dodawac tak jak u gory ale po prostu po stworzeniu obiektu dodac do niego po ludzku zdarzenie
        // link.on ....
        
        
// WSZYSKICH POWYŻSZYCH ELEMENTÓW NIE MA JESZCZE NA STRONIE !, trzeba je dopiero dodać:
        $("body").append(link);     // DZIAŁĄ ! Pojawia sie na koncu strony
        
        
    });

})(jQuery);


















