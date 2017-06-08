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
        
// TO BYŁO ODCZYTYWANIE A TERAZ WSTAWIANIE DANYCH DO FORMULARZY 
    // Zrobimy tak ze tekst powyzej 50 znakow bedzie przycinany do tej dlugosci
        
// Filterem wyciagamy sobie z pobraych elementow tylko interesujaca nas "textarea"
    //ZDARZENIE CHANGE jest bardzo podobne do ZDARZENIA BLUR, tyle że blur reaguje NA KAŻDE OPUSZCZENIE FORMULARZA, a CHANGE reaguje TYLKO WTEDY GDY ZAJDA W NIM JAKIEŚ ZMIANY ! Więc gdy klikniemy w formularz nic nie zmienimy i klikniemy w inne miejsce TO BLUR SIE WYWOŁA A CHANGE NIE !    
        fields.filter("textarea").on("change", function() {
           
            var textarea = $(this);
            
            if(textarea.val().length > 50) {    // Jeżeli długośc stringu większa niż 50 znaków ...
                textarea.val( textarea.val().slice(0, 50) );    // Obetnij do 50 i wstaw
    // CZYLI FUNKCJA VAL SŁUŻY ZARÓWNO DO WSTAWIANIA JAK I ODCZYTYWANIA ZAWARTOŚCI FORMULARZY !        
        // Zajebiście działa, teraz jak tylko wpiszemy w texaera wiecej niz 50 to automatycznie ucina jak tylko klikniemy poza
            }
            
        });
        
// WALIDACJA ZROBIONA TO TERAZ TRZEBA ZROBIC WYSYŁANIE:
    // ROBIMY TO ZDARZENIEM "SUBMIT", które wywołuje się gdy naciśniemy na przycisk inicjujący submit
        
        form.on("submit", function(e) {
            
            var hasErrors = false;  // zmienna informujaca o bledach, domylsnie zakladamy ze ich nie ma
            
            fields.each(function(i, elem) {
               
                var field = $(elem),
                    empty = $.trim(field.val()) === "";
                
                field.toggleClass("form-field--invalid", empty);    // gdy niepoprawna to zmiana klasy...
                
                if(empty) {
                    hasErrors = true;   // ... i wstawienie info ze takie bledy sa
                }
                
            });
            
            if(!hasErrors) {
                form.submit();  // gdy bez bledow to wyslij
            } else {
                e.preventDefault();     // jak z bledami to zatrzymaj domyslna akcje przegladarki
            }
            
        });

// CZYLI NAJWAŻNIEJSZE INFOMRACJE Z TEJ LEKCJI:
        // - metoda VAL służy o dp pdczytywania fomrularzy jak i do wstawiania tam wartości
        // Zdarzenia:
            //          - blur - wtedy gdy opuscimy dane pole formularza
            //          - change - gdy opuścimy dane pole ALE TYLKO GDY ZAJDĄ W NIM ZMIANY
            //          - submit - gdy skorzystamy z type="submit" w HTMLu
    });

})(jQuery);


















