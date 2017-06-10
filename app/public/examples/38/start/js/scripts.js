console.log("38 PLACEHOLDER");

// UWAGA jako ze chrome wspiera placeholdera, to przez to ze mamy linijke 15 to ten skrypt nie odpali sie w chromie, jak chcesz sie nim pobawic to musisz wykomentowac ta instrukcje sprawdzajaca

//  Placeholder to po prostu tekst w polu formularza ktory wycieniowana czcionka opisuje co tam trzeba wpisac, "imie", "nazwisko" itp, jak sie cos w tym miejscu wpisze to oczywsice ma ten placeholder zniknac, ale jak sie znowu pozostawi to pole puste to ma sie na nowo pojawic

// Wszystkie nowsze przegadarki wspieraja w html parametr PLACEHOLDER ktory w zasadzie wszystko zalatwia, tylko tez spierdolony IE 9 nie wspiera tego, wiec tutaj napiszemy sobie POLYFILL ktory nam nadpisze ta funkcjonalnosc od zera

// UWAGA ! W HTMLU mozemy tworzyc wlasnie atrybity poprzez "data-atrybut", no i wlasnie tutaj doddamy sobie "data-" przed placeholder zeby on nic nie robil tylko byl dostepny do pobrania

(function($) {
    
// TO JEST OSTATNIA FUNKCJONLANOSC, NAPISANA NA KONCU LEKCJI:
    // Chcemy sprawdzic czy dana przegladarka wspiera placeholder (ma wlasne rozwiazanie) czy jednak musi skorzystac z tego co tutaj napisalismy (IE 9)
    if ("placeholder" in document.createElement("input")) {
        console.log("dupa");// Tworzymy nowy inputi sprawdzamy czy ma taka wlasciwosc
        return; // Jezeli true TO PRZERYWAMY PROGRAM wlasnie za pomoca RETURN !
        }       // jesli nie bedzie placeholdera, no to returnu tez nie bedzie i wykona sie caly poznizszy kod

    $(document).ready(function() {

        var form = $(".contact-form"),
            fields = form.find("placeholder]");

// Chcemy pobrac z kazdego wartosc placehloder i wstawic ja do pol
        fields.each(function() {
           
            var field = $(this),
                placeholder = field.attr("placeholder");
            
            field.val(placeholder).addClass("placeholder"); // Wstawilismy odpowiedni tekst A TAKZE przyciemnilismy jego cznionke za pomoca zdefiniowanej wczesniej klasy "placeholder"
            
// KOLEJNE ZDARZENIE zwiazane z formularzem,
    // FOCUS odpala sie w MOMENCIE KLIKNIECIA w pole formularza !
            
            field.on("focus", function() {
               
                var val = field.val();
                
                if( val === placeholder ) {     // Jesli zawartość pola jest identyczna jak placeholder ...
                    field.val("").removeClass("placeholder");   // ... to wywal zawartość i usuń klase zmieniajaca kolor
                }
            });
            
// Teraz jeszcze obsluga sytacji gdy opuszczamy pole a ono pozostaje puste !
            
            field.on("blur", function() {
               
                var val = field.val();
                
                if ( $.trim(val) === "" ) {     // JEsli pole jest puste (same biale znaki tez wykrywa)...
                    field.val(placeholder).addClass("placeholder");     //... wpisujemy placeholder wraz z klasa
                }  
            });           
            
        });
        
// Zrobienie zeby przy wyslaniu formularza ON NIE TRAKTOWAL tych placeholderow jak faktycznych danych
        
        form.on("submit", function() {
           
            fields.each(function() {    // wykoanie petli na kazdym z pol
               
                var field = $(this),
                    placeholder = field.attr("placeholder"),
                    val = field.val();
                
                if( val === placeholder ) {
                    field.val("");
                }
                
            });
// W momencie wyslania, pola zawierajace placeholder zostana wyczyszczone             
        });

    });

})(jQuery);


















