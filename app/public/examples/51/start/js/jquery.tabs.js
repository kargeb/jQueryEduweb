console.log("51 PRAKTYCZNY PROJEKT: ZAKŁADKI  -  PLUGIN");

(function($, window, document, undefined) {

    $.fn.tabs = function() {

        return this.each(function() {   // dajemye each mimo ze pracujemy TYLKO NA JEDNYM ZBIORZE

            var that = $(this),
                tabsNav = that.find(".tabs-nav__item"),
                tabsItems = that.find(".tabs__item"),
                activeClass = "tabs-nav__item--active"; // korzystamy co chwile wiec robimy zmienna

            // podswietlenie przysisku pierwszej zakladaki
            tabsNav.first().addClass(activeClass);  // zmienna activeClass zamiast pelenej nazwy  
            // Ukrywamy teskt wszystkich zakladek poza pierwsza
            tabsItems.not(":first").hide();
            
            tabsNav.on("click", function() {
                
                var tabNav = $(this),
                    index = tabNav.index(); // Tak bedziemy odrozniac poszczegolne zakladki i dopasowywac je do opowiedniej zawartosci do wyswietlenia
            
        // MA TO WPADŁEM SAM ! :) Zapobieganie opnownemu wczytywaniu aktywnej zakladaki, gdy sie w nia jeszcze raz kliknie
                if( tabNav.hasClass(activeClass) ) {
                    return;
                }
                
                
                tabsNav.removeClass(activeClass);   // usuwamy wyroznienie ZE WSZYSTKICH zakladek
                tabNav.addClass(activeClass);   // dodajemy wyroznienie tylko do kliknietej zakladki
                
//                tabsItems.hide();   // Ukrycie WSZYSTKICH zakladkowych divów  
//                tabsItems.eq(index).fadeIn(300);    // ODKRYCIE DIVA odpowiadajacego INDEXOWI
                // TO CO U ZGÓŁRY TYLKO PROŚCIEJ ! :
                tabsItems.hide()
                    .eq(index).fadeIn(600); // to przelamanie do nowej linii wylacznie estettyczne !
                
                
            });

        });

    };

})(jQuery, window, document);

// KOD HTML: Bardzo istotne jest ze zawartość poszczegónych zakładek JEST NAPISANA JEDNA POD DRUGA !
    //<div id="tabs" class="tabs">
    //
    //    <ul class="tabs-nav">
    //        <li class="tabs-nav__item">Web Design</li>
    //        <li class="tabs-nav__item">DTP</li>
    //    </ul>
    //    <div class="tabs__item> ... </div>"     -> jedna zawartosc zakladki
    //    <div class="tabs__item> ... </div>"     -> druga zawartosc zakaldki
    //</div>