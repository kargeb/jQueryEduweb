console.log("37 SERIALIZACJA FORMULARZA");

//Jak jQuery pomaga w serializacji formularza I CO TO WŁAŚCIWIE JEST
// ZAJEBIŚCIE WAŻNE JEST, aby formularz który ma przesyłać dane na serwer MIAŁ ATRYBUT "NAME" !!!
// No i serializowanie to jest łączeni tego atrybutu "NAME" z jego wartością czyli name = paeł, email = dupa@dupa.pl

(function($) {

    $(document).ready(function() {

        var form = $(".contact-form");

        form.on("submit", function(e) {

            e.preventDefault();

// JEST TO NIEZWYKLE PROSTE ! Wystarczy skorzytsać tylko z tej jednej metody "serialized" i juz mamy zserialiowane nejmu z ich wartościami
            
         //   var serialized = form.serialize();
            
// UWAGA ! Jest jeszcze druga forma tej metody, PRZERABIAJĄCA WSZYSTKO PIĘKNIE NA OBIEKTY z wartoścami "name" oraz "value"            
            
            var serialized = form.serializeArray();
            
            utils.log(serialized);
        });
        
// PO CO WŁAŚCIWIE TA SERIALIZACJA ? No bo wysyłając AJAXEM dane, ROBIMY TO WŁAŚNIE W TAKIEJ FORMIE        

    });

})(jQuery);


















