console.log("23 POLOZENIE ELEMENTOW W DOKUMENCIE");

// Odczytywanie polozenia elementów W PRZESTRZENI dokumnetu a wiec np jak dalego od gory dokumnetu albo jego lewej krawedzi, znajduje sie dany element

(function($) {

    $(document).ready(function() {

        var title = $(".page-title");   // pobranie wysiwetlania tytulu strony
        
// ODCZYTYWANIE POLOZENIA ELEMENTU WZGLEDEM CALEGO DOKUMNETU:         
        
        var offSet = title.offset();    // Odleglosc od GORNEJ i LEWEJ krawedzi strony. ZWROCONA JAKO OBIEKT, z wlasnie takimi 2 wlasciwosciami -> Object {top: 410, left: 89.5}
        
// ODCZYTYWANIE POLOZENIA ELEMENTU GDY JEST USTAWIONY WZGLEDEM JAKIEGOS INNEGO:     
        
        var caption = $(".rte figure figcaption");  // to jest ten napis CHILLOUT W PRACY
     
        var pos = caption.position();   // Zwraca do co offset ALE WZGLEDEM RODZICA U JAKIEGO SIE ZNAJDUJE JAKO RELATIVE, rowniez jako obiekt -> Object {top: 449.234375, left: 903.765625}
        
// SPRAWDZANIE OBIEKTU WZGLEDEM KTOREGO DANY ELEMENT JEST POZYCJONUJACY:
        
        var offsetParent = caption.offsetParent();  // sprawdzenie wzgledem jakiego obiektu pozycjonuje sie caption
            
        console.log(offSet);
        console.log(pos);   // zwracane wartosci moga byc liczbami z reszta ulamkowa !
        console.log(offsetParent); // [figure, prevObject: jQuery.fn.init(1), context: document]
        
// ODCZYTYWANIE USTAWIEN SUWAKOW W DANEJ CHWILI NA STRONIE:
        
        var body = $("body");
        
        var scrollLeft = body.scrollLeft(),
            scrollTop = body.scrollTop();
        
        console.log(scrollLeft);    // tutaj 0 no bo strona nie ma dolnego suwaka
        console.log(scrollTop);     // tutaj w zaleznosci od polozenia suwaka pionowego

    // UWAGA ! Dzięki tym samym metodom MOZEMY USTAWIAC POLOZENIE STRONY:
        
        body.scrollTop(1000);   // DZIAŁA, ale nie po odświerzeniu strony tylko trzeba wpisac adres strony jeszcze raz
        
// MOZNA TO TERAZ  WSZYSTKO POLACZYC I PO WEJSCIU NA STRONE KIEROWAC OD RAZU NA WYSOKOSC JAKIEGOS KONKRETNEGO ELEMENTU NA NIEJ:
        //              $(offsetParent).offset().top
        body.scrollTop( $(".rte figure").offset().top );
    });

})(jQuery);


















