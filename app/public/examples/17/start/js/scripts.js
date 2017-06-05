console.log("17 WSTAWIANIE ELEMENTOW");

// JAK WSTAWIAC NOWO UTWORZONE ELEMNTY NA STRONE, jest na to WIELE sposobow 

(function($) {

    $(document).ready(function() {

        var button = $("<button></button>", {
            "text": "Wyślij",
            "class": "button"
        });

        $(".rte").append(button);

// W APPEND mozna od razu z palca dodawac elementy w STRINGU, nie ma potzreby tworzyc ich w zmienych i dopiero  pozniej je zalacza:
        $(".rte").append("<p>dupa dupa</p>");

// MOZNA ZROBIC NA ODWORD NIZ W APPEND, to obiektowi powiedziec do czego ma sie przypisac:
        button.appendTo("ul");
// UWAGA ! Element zostanie przypisany DO OWSZYSTKICH ELEMENTOW ktore znajdzie appenTo:
        //button.appendTo("p");   // wszedzie kurwa butony
        
// APPEND dodaje element NA KONCU znalezionego elementu, MOZNA GO TEZ WSTAWIC NA POCZATKU:
        $(".rte").prepend(button);  // wstawiony button na poczatku diva
// No i na odwrot tez mozna
        button.prependTo(".rte");
        
// Dwie kolejne metody to wstawianie elementu PRZED albo ZA konkretnym elementyem
        button.insertAfter("#button");  // PO przycisku z id=button
        button.insertBefore("#button");  // PRZED przyciskiem z id=button
        
// Wstawianie elementow PO KAZDYM WYSZUKANYM ELEMENCIE
        $(".rte p").after("<hr>");
// Wstawianie elementow PRZED KAZDYM WYSZUKANYM ELEMENTEM
        $(".rte p").after("<hr>");
        
//        var hr = $("<hr>");       // ten spoosb robi to sam co u gory, ale widze ze  musisz to 
//        (hr).appendTo(".rte p");  // robic zmienna bo czystego kodu HTML nie przyjmuje
        
    });

})(jQuery);


















