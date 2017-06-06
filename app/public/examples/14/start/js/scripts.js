console.log("14 Praca z klasami CSS");

// Jeśli nie jestesmy zmuszeni robic inaczej niz w poprzednim przykladzie to lepiej jest przypisywac danym elementom dynamicznie klase niz zmieniac mu w kodzie html poszczegolne elementy

// 3 METODY: ADDCLASS, REMOVE CLASS i TOGGLECLASS

(function($) {

    $(document).ready(function() {

        var button = $("#button");

        button.on("click", function() {

                button.addClass("button--inactive mojaKlasa"); // DODANIE KLASY
// MOZNA DODWACA KILKA NA RAZ, wlasnie w ten sposob, wpisujac je po spacji !
            
                button.removeClass("button"); // USUNIECIE KLASY
    
// Caly kod pod spodem mozna zamienic jedna metoda - TOGGLECLASS            
            if(button.hasClass("button--inactive")) {
                button.removeClass("button--inactive");
            } else {
                button.addClass("button--inactive");
            }
            
            button.toggleClass("button--inactive");

// TUTAJ TEZ ZAMIAST STRINGA MOZNA DAC FUNKCJE JAKO ARGUMENT
            
// w tej funkcji chodzi o to ze mozna na podstawie nazwy jednej funkcji dodac inna po prostu dopisujac do tej nazwy jakas koncowke. Czyli tutaj to nazwy klasy button dopisujemy --inactive, ktora zmienia mu kolor, dopisujac do nazwy koncowke i aktywujac tym samym inna klase            
            function getInaciveClasss(i, currentClass) {
// DALEJ TEGO KURWA NIE ROZUMIEM, skoro to jest nowa funkcja do skurwysyna to po jakiego chuja kurwa jego mac to "i" ???????????????                
                var firstClass = currentClass.split(" ")[0];
                
                console.log(firstClass);
                
                return firstClass + "--inactive";   
            }
            
            
            button.addClass(getInaciveClasss);
            
            
        });

    });

})(jQuery);


















