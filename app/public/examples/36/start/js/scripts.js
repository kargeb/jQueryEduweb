console.log("36  FORMULARZE - ODCZYTYWANIE PZYPISYWANIE WARTOŚCI");

// Odczytywanie pol formularza oraz ustawianie im nowych wartości

(function($) {

    $(document).ready(function() {

        var form = $(".contact-form"),
            fields = form.find("input:not(:submit), select, textarea"); //(inputy ale nie z submit)
// Czyli pobrane zostaly wszystkie mozliwe pola poza guzikiem do wyslania
        
// Bedziemy sprawdzac czy po opuszczeniu danego pola zostalo cokowliek do niego wpisane
        
// UWAGA ! Zdarzenie BLUR wystepuje PO WYSKOCZENIU Z DANEGO POLA FORMULARZA !        
        fields.on("blur", function() {
           
            var field = $(this);
            
// field.val POZWALA WYCIAGNAC ZAWARTOŚC DANEGO POLA FORMULARZA
// .trim jest to funkcja pomocnicza czyli tzw utilities, KASUJE ONA WSZYSKIE BIALE ZNAKI na poczatku oraz na koncu pobranej zawartosci, najczesciej chodzi o usuniecie zbednych spacji ale pozbywa sie takze znakow tabulatora lub nowej linii
            
//            if( $.trim(field.val()) === "") {               
//                field.addClass("form-field--invalid");
//            } else {
//                field.removeClass("form-field--invalid");
//            }
// Pieknie dziala, po opuszczeniu pustego pola, pojawia sie w okol niego czerwona ramka, i najebanie spacji tez nie pomaga, musi byc autentyczna zawartosc     
            
// Powysze instrukcje uproscimy za pomoca TOGGLECLASS 
            // Pierwszy argument to klasa ktora ma znikac i pojawiac sie, A DRUGI TO ZMIENNA LOGICZNA, jesli bedzie TRUE to klasa wskoczy a jak FALSE to remove
            field.toggleClass("form-field--invalid", $.trim(field.val()) === "");
        });
        

    });

})(jQuery);


















