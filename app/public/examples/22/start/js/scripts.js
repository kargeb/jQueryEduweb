console.log("22 ODCZYTYWANIE I USTAWIANIE WYMIAROW");

// odczuytywanie i ustawianie rozmiarow elementow na stronie, WAZNIEJSZE jest ODCZYTYWANIE no bo ustawiac to mozna w css i w sumie juz wiemy jak to robic

(function($) {

    $(document).ready(function() {

//  FIGURE ma w css ustawione  padding, margin i border, jest to istotne w tej lekcji
        var figure = $(".rte figure");  
          
        var fWitdh = figure.width(),    // Szerokosc na stronie BEZ paddingu i bordera
            fHeight = figure.height(),  // Wysokosc JW
            fInnerWidth = figure.innerWidth(),      // Szerokosc Z PADDINGIEM bez bordera
            fInnerHeight = figure.innerHeight(),    // Wysokosc JW
        // CAŁKOWITE ROZMIARY ELEMENTU:  (wykorzystywane NAJCZĘŚCIEJ !!!)          
            fOuterWidth = figure.outerWidth(),      // Szerokosc Z PADDINGIEM i BORDEREM
            fOuterHeight = figure.outerHeight(),    // Wysokosc JW
    // UWAGA ! jak dodamy true do OUTERow do dostaniemy wartości Z MARGINESEM:
            fOuterWidthMargin = figure.outerWidth(true),      // Szerokosc Z PADDINGIEM i BORDEREM
            fOuterHeightMargin = figure.outerHeight(true);     
        
// Stworzona jest w pliku UTILS taka funkcjonalnosc ze wszystkie te wartosci u dolu pokaza sie na stronie w specjalnym oknie
        
            utils.log("Szerokość: " + fWitdh);
            utils.log("Wysokość: " + fHeight);
            utils.log("Szerokość wewenętrzna: " + fInnerWidth);
            utils.log("Wysokość wewnętrzna: " + fInnerHeight);
            utils.log("Szerokość zewnętrzna: " + fOuterWidth);
            utils.log("Wysokość zewnętrzna: " + fOuterHeight);
            utils.log("Szerokość zewnętrzna z marginesem: " + fOuterWidthMargin);
            utils.log("Wysokość zewnętrzna z marginesem: " + fOuterHeightMargin);
        
// TYMI SAMYMI METODAMI MOŻEMY TEŻ USTAWIAŃ WIELKOŚĆ ELEMENTÓW ############################
            
            figure.width(300);  // bez paddingu i bordera WIEC TO NIE JEGO REALNA WIELKOSC
            figure.innerWidth(300);  // mniejszy niz u gory bo w tych 300 jest jeszcze paddinig
            figure.outerWidth(300); // najmniejszy bo w 300 jest i padding i border 
        
    });

})(jQuery);


















