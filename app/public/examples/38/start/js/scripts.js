console.log("38 PLACEHOLDER");

//  Placeholder to po prostu tekst w polu formularza ktory wycieniowana czcionka opisuje co tam trzeba wpisac, "imie", "nazwisko" itp, jak sie cos w tym miejscu wpisze to oczywsice ma ten placeholder zniknac, ale jak sie znowu pozostawi to pole puste to ma sie na nowo pojawic

// Wszystkie nowsze przegadarki wspieraja w html parametr PLACEHOLDER ktory w zasadzie wszystko zalatwia, tylko tez spierdolony IE 9 nie wspiera tego, wiec tutaj napiszemy sobie POLYFILL ktory nam nadpisze ta funkcjonalnosc od zera

// UWAGA ! W HTMLU mozemy tworzyc wlasnie atrybity poprzez "data-atrybut", no i wlasnie tutaj doddamy sobie "data-" przed placeholder zeby on nic nie robil tylko byl dostepny do pobrania

(function($) {

    $(document).ready(function() {

        var form = $(".contact-form"),
            fields = form.find("[data-placeholder]");

// Chcemy pobrac z kazdego wartosc data-placehloder i wstawic ja do pol
        fields.each(function() {
           
            var field = $(this),
                placeholder = field.attr("data-placeholder");
            
            field.val(placeholder).addClass("placeholder"); // Wstawilismy odpowiedni tekst A TAKZE przyciemnilismy jego cznionke za pomoca zdefiniowanej wczesniej klasy "placeholder"
            
// KOLEJNE ZDARZENIE zwiazane z formularzem,
    // FOCUS odpala sie w MOMENCIE KLIKNIECIA w pole formularza !
            
            field.on("focus", function() {
               
                var val = field.val();
                
                if( val === placeholder ) {     // Jesli zawartość pola jest identyczna jak placeholder ...
                    field.val("").removeClass("placeholder");   // to wywal zawartość i usuń klase zmieniajaca kolor
                }
            });
            
// Teraz jeszcze obsluga sytacji gdy opuszczamy pole a ono pozostaje puste !
            
            field.on("blur", function() {
               
                var val = field.val();
                
                if ( $.trim(val) === "" ) {     // JEsli pole jest puste (same biale znaki tez wykrywa)...
                    field.val(placeholder).addClass("placeholder");     //... wpisujemy placeholder wraz z klasa
                }  
            });
            
// MINUTA 8 !!!!!!!!! zrobinie zeby placeholdery nie byly traktowane jako vartosci pol !            
            
        });

    });

})(jQuery);


















