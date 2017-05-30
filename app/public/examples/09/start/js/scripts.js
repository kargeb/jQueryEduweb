console.log("09 USUWANIE FUNKCJI ZDARZEŃ");

(function($) {

    $(document).ready(function() {

        // Nie nalezy korzytsac z metody bind ale nie zaszkodzi wiedziec
        $("#button").bind("click", function() {

            alert("Klinięty!");
            
    // aby wyjebac zdarznei wystarczy przypisac funkcje z parametrem zdarzenia:
            $(this).unbind("click");
// Czyli po klikniecu w button, zdarzenie przestanie działań, czyli tak jak w metodzie ONE
        });
        
// DLA FUNKCJI "ON" BEDZIE IDENCZTYNIE TYLE ZE Z URZYCIEM "OFF"
        
        $("#button").on("dblclick", function() {

            alert("Klinięty!");
            
            $(this).off("click");
// UWAGA !!!!!!!! Korzystając z "off" wyjebujemy WSZYSTKIE ZDARZENIA Z metody ON ! Dzieje się tak bo korzytsamy z funkcji anonimowej i nie możemy ich rodzielić.
// MUSIMY STWORZYĆ NAZWANĄ FUNKCJĘ ŻEBY OSOBNO JĄ DEZAKTYWOWAĆ    
        });        
        

        
        function message() {
            
            alert("Klikniety!");
            
            $(this).off("contextmenu", message); // ODWOŁANIE POJEDYNCZEJ FUNKCJI ON !!!!!!!!
                                                    // w tym przypadku robi to SAMA, ALE MOŻNA
        }                                       // ZAWSZE USUNAC JA Z INNEGO POZIOMU, JAK U DOŁU:
        
/////////////////////////////   moje cuda działające !        
        $("li").click(buttDisable);   /// jak nacisniesz dowolne "li" wywolanie funkcji ...
            
        function buttDisable() {        // ... usuwajacej zdarzenie konkretme z buttona
            $("#button").off("contextmenu", message);
        }        
/////////////////////
        
        $("#button").on("contextmenu", message).on("contextmenu", function() {
            
            alert("calkiem innosc funkcji");
            
        });
        
    });

})(jQuery);


















