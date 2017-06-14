console.log("50 COOKIES -> PLIK Z PLUGINEM");

// ZWRÓĆ uwagę na nazwę pliku ! Właśnie taka jest konwencja, ze najpier podajemy biblioteke jquery, pozniej nazwe pluginu i pozniej JS, JESLI JEST TO PLIK ZMIMIFIKOWANY to jeszcze po cookies . min czyli
//  jquery.cookies(.min).js 

(function($, window, document, undefined) {

// ROBIMY FUNKCJE ktora bedzie zapisywala informacje O ZAAKCEPTOWANIU KOMUNIKATU, po czym przechowywac bedzie ja w TZW LOCAL STORAGE, na komputerze lokalnym (czyli sama bedzie ciasteczkiem), DZIEKI CZEMU JESLI RAZ ZGODZIMY SIE NA ZAPISYWANIE CIASTECZEK, NAWET PO ZAMKNIECIU PRZEGLADARKI TEN KOMUNIKAT JUZ SIE NIE POJAWI !!!    
// A robimy to wszystko w osobnej funkcji zeby sprawdzic CZY DANA PRZEGLADARKA WSPIERA W OGOLE LOCAL STORAGE (wspieraja wszystkei od IE 8 wiec to takie dla cwiczen)    
    function saveToLS(key, val) {
        
        if( !("localStorage" in window) ) return;   // jesli nie wspiera TO WYCHODZIMY Z FUNKCJI
        
        window.localStorage.setItem(key, val);  // jesli w spiera to zapisujemy dane w local storage
        
    }
    
// FUNCKJA ODCZYTUJACA LOCAL STORAGE, ktora sprawdza czy wyswietlac komunikat czy juz zostal zaakcepotwany    
    function readFromLS(key) {
      
        if( !("localStorage" in window) ) return;
        
        return window.localStorage.getItem(key);    // podajemu co ma odczytac z LS
        
    };
    
    
    $.fn.cookieAlert = function(userOptions) {
        
// OD RAZU SPRAWDZAMY CZY JEST W LS INFORMACJA O ZAAKCEPTOWANIU KOMNUNIKATU:        
        if( readFromLS("cookiesAccepted") === "1" ) {
            return this;     // Jesli jest ciasteczko to konczymy cala funkcje !
            // zwracamy THIS (czyli body) zeby mozna bylo po kropce dalej dzialac na innych funkcjach
        }
        
//  Korzystamy z extend zeby nadpisac zmienne domyslne ewentualnymi zmiennymi usera 
        var options = $.extend({}, $.fn.cookieAlert.defaults, userOptions);

// Bedziemy tworzyc DIVA dokladnie takiego jaki jest na dole
    // Tworzymy wszyskie jego skladniki:
        var div = $("<div></div>", {
            "class": options.containerClass // klase bierzemy bezposrednio z OPTIONS
        }).hide();  // przypisanie display: none
        
        var p = $("<p></p>", {
            "class": options.textClass,    
            "text": options.message
        });
        
        var span = $("<span></span>", {
            "class": options.closeClass
        });
        
// UWAGA ! Robimy ZAMYKANIE OKIENKA Z KOMUNIKATEM: ////////////////////
        span.on("click", function() {
        
            saveToLS("cookiesAccepted", 1); // ZMIENNA ZAPISYWANA W LOCAL STORAGE    
            
        // Zwijamy diva   
            div.slideUp(options.animSpeed, function() {
                div.remove();
            });
            
        });
        
        
// DODAJEMY ELEMENTY DO SIEBIE JEDEN PO DRUGIM:
        p.append(span);
        div.append(p);
        this.prepend(div);   // THIS to w naszym przypadku BODY bo na nim wywolyjemy plugin
    // W tym momencie nasz div jest JUZ WSTAWIONY NA STRONE ale jest ciągle ukryty HIDEm
        
        div.slideDown(options.animSpeed);   // pokazanie diva, aniomwane
        
        console.log("so my tui etz");
        
        return this;    // nie robimy return this.each bo tylko na jednym elemencie "body" bedziemy go wywolywac. UWAGA ! Fajny trik zeby sprawdzic na jakims elemencie jest wywolany:
        // this.is("body");

    };

// ROBIMY ZMIENNE DOMYŚLNE Z ZASIĘGIEM "GLOBALNYM"
    $.fn.cookieAlert.defaults = {
        message: "Ta strona wykorzystuje cookies.",
        animSpeed: 300,
        containerClass: "cookie",
        textClass: "cookie__text",
        closeClass: "cookie__close"
    };
    
})(jQuery, window, document);

/*
<!-- <div class="cookie">
    <p class="cookie__text center-content">Ta strona wykorzystuje pliki cookies.<span class="cookie__close"></span></p>
</div> -->

*/