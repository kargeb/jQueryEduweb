console.log("52 PRAKTYCZNY PROJEKT: LIGHTBOX - PLUGIN !!! ");

// Istotne jest to ze W KAZDYM LI mamy srodlo malego obrazka ALE TAKZE LINK DO JEGO DUZEJ WERSJI  <a href="/images/project-1.jpg"
// Kod pierwszego LI na koncu tego pliku jest


(function($, window, document, undefined) {

    var win = $(window),
        doc = $(document);


/////////////  CZĘŚĆ DOTYCZĄCA LIGHTBOX ///////////////////////
    
    function createLightbox() {
    // To co przy OVERLAY, szukamy ligtbixa na stronie    
        var lightbox = $("#lightbox");  
    // i jak go nie ma to tworzymy go:    
        if(!lightbox.length) {
            lightbox = $("<div></div>", {
                "id": "lightbox",
                "class": "lightbox"
            }).appendTo("body");
            
            var close = $("<span></span>", {    // to ten maly krzyzyk
                "class": "lightbox__close",     // w prawym gornym rogu
                "on": {
                    "click": function() {
                        closeOverlay();
                        closeLightbox();
                    }
                }
            });
            
            lightbox.append(close);
        } 
        return lightbox;
    };
    
    function closeLightbox() {
        
        var lightbox = $("#lightbox");
        lightbox.fadeOut(500);
    }
    
/////////////  CZĘŚĆ DOTYCZĄCA OVERLAY ////////////////////////    
    
    function createOverlay() {
// Szukamy czy jest juz na stronie taki element        
        var overlay = $("#lightbox-overlay");
// JEŻELI NIE MA TO GO TUTAJ TWORZYMY:        
        if(!overlay.length) { 
            overlay = $("<div></div>", {
                "id": "lightbox-overlay",       // ID do wyszukiwania
                "class": "lightbox-overlay",    // klasa do stylowania
                on: {                       // Przypisanie zdarzenia zamykajacego
                        "click": function() {
                        closeOverlay();     // zamkniecie overlay
                        closeLightbox();    // dopisane pod koniec lekcji
                    }
                }
            }).appendTo("body");
        }
 // ZWRACAMY GO i juz nas nie obchodzi czy jest znaleziony czy stworzony        
        return overlay;
    }
    
    
// POKAZYWANIE OVERLAY:    
    function showOverlay() {
// Uwaga ! Tworzymy do tego osbna funkcje zeby sobie w niej RAZ stworzyc nasz overlay a pozniej juz tylko go uaktywniac ! Na tym wlasnie polega dobre programowanie ze poszczegolne elementy odlaczamy od siebie (no kurwa tak mniej wiecej)        
        var overlay = createOverlay();  // Tworzymy lub odnajdujemy nasz overlay
        
// Istotne jest ze jest ten overlay pozycjonowanby ABSOLUTNIE (trzeba se przupomiec kurs CSS)
// Ustalamu rozmiary OVERLAY, NA CAŁĄ OBJĘTOŚĆ STRONY
        overlay.css({
            width: doc.width(),      // ze zmiennej z przypisanym document 
            height: doc.height()
        });
        overlay.fadeIn(500);
    }
    
// CHOWANIE OVERLAY:
    function closeOverlay() {
// ZDARZENIE klikniecia TWORZYMY W MOMENCIE TWORZENIA OVERLAY w funkcji createOverlay
        var overlay = $("#lightbox-overlay");
        overlay.fadeOut(500);
    }
    
///////////////////  PO CZESCI OVERLAY ///////////////////////////////////    
    
    function showLightbox(imgURL) {
      
        showOverlay();
        
        var lightbox = createLightbox();    // Znaleziony lub stworzony (na ten moment jeszcze nie widoczny, bo ma domyślnie ustawiony CSS na display: none)
        
        lightbox.css({
            "width": 500,
            "height": 400,
    // Te scrolle w dol i w lewo to na wypadek przesuniecia strony, a 200 i 250 to po prostu polowy wymiarow tego lightboxa, ustawione ponad tym komentem        
            "top": (win.height() / 2) + doc.scrollTop() - 200,
            "left": (win.width() / 2) + doc.scrollLeft() - 250
    // TŁO tego lightboxa TO PO PROSTU GIF dlatego tak sie ladnie rusza        
        });
        
        var img = $("<img>", {
            "class": "lightbox__img"
        });

// DZIĘKI ZDARZENIU LOAD funkcja wykona sie dopiero po pelnym wczytaniu obrazka !
// Robilismy juz to w PRELOADERZE        
        img.on("load", function() {
           
// To jest na wypadek gdyby lightbox BYL JUZ WCZESNIEJ OTWORZONY, wtedy poprzedni obrazek kasujemy i przyczepiamy nowy            
            lightbox.find("img").remove()
    // O .end() nie bylo mowy, ONA COFA KOLEJKE WYWOLAN DO NATYWNEGO ELEMENTU, czyli w tym przyapdku cofa wszystko do "lightbox", gdyby nie bylo end no to pracowalibysmy dalej na tym usunietym obrazku ! Mozna byloby zamiast tego napisac w nowej linii lightbox.append( ... ),  ale tutaj zorbilismy to w jednej lini wlasnie za pomoca END            
                .end() 
                .append( img.hide() );
            
// UWAGA ! BARDZO ISTOTNA RZECZ ! JQUERY pozwala nam na odczytywanie wymiarow obrazka NAWET WTEDY GDY JEST ON UKRYTY ! W zwyklym JS mogloby to nie zadzialac !
            var width = img.width(),    // odczytamy to mimo ukrycia
                height = img.height();
            
// Czyli na ten moment MAMY OBRAZEK JUZ WCZYTANY I ZNAMY JEGO WYMIARY
            lightbox.animate({
                "width": width,
                "height": height,
                "top": (win.height() / 2) + doc.scrollTop() - (height / 2),
                "left": (win.width() / 2) + doc.scrollLeft() - (width / 2)                
            }, 500, // Wszystko pieknie dziala, teraz tylko pokazac obrazek:
                    function() {
                    img.fadeIn(500);    // Pokazany, zajeiscie
            });
            
            
        });
        
// imgURL jest to parametr przekazany bezposerdnio do tej funkcji (showLightbox)        
        img.attr("src", imgURL);
        
        lightbox.fadeIn(500);
        
        
    }
    
// DODATKOWA FUNKCJINALNOSC:    ///////////////////////////////////////////////////////
//jak mamy wyswietlony lightbox, to gdy zmieniamy rozmiar okna to on jest ucinany, a my chcemy zeby on sie proporcionalnie zmniejszal
    
    function resizeLightbox() {

    // NIE MUSIMY ICH SZUKAC, te metody i tak je zwracaja jesli sa juz utworzone 
        var overlay = createOverlay(), 
            lightbox = createLightbox();
        
    // Overlay po prostu ustawimy na nowo    
        overlay.css({
           "width": doc.width(),
            "height": doc.height()
        });
        
    // tutaj juz sobie korzystamy z dostepnych funkcji zeby wziasc akt rozmiar    
        var width = lightbox.outerWidth(),
            height = lightbox.outerHeight();
        
        lightbox.css({
           "width": width,
            "height": height,
            "top": (win.height() / 2) - (height / 2) + doc.scrollTop(),
            "left": (win.width() / 2) - (width / 2) + doc.scrollLeft()  
        });
        
    }
    
    win.on("resize", resizeLightbox);
///////////////////////////////////////////////////////////////////////////    
// ZAMYKANIE NA KLIKNIECIE ESC : ////////////////////
    win.on("keyup", function(e) {
       
        if(e.which === 27) {    // Bylo juz o metodzie WHICH
            closeOverlay();
            closeLightbox();
        }  
    });
////////////////////////////////////////////////////////    
    
    
    $.fn.lightbox = function() {

        return this.each(function() {

            var that = $(this),
                imgURL = that.attr("href"); // ADRESY DUZYCH OBRAZKOW

            that.on("click", function(e) {

                e.preventDefault(); // Zapobiegamy otworzenia obrazka w zwyklej chamskiej podstronie html

                showLightbox(imgURL);

            });

        });

    };

})(jQuery, window, document);

//<div id="projects">
//
//    <ul class="projects">
//        <li class="projects__item">
//            <div class="projects__thumb">
//                <img src="/images/project-1-thumb.jpg" alt="" class="projects__pic">
//                <a href="/images/project-1.jpg" class="projects__link projects__link">
//                    <i class="fa fa-search"></i> Zobacz
//                </a>
//            </div>
//        </li>