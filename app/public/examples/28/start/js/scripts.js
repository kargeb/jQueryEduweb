console.log("28 KOLEJKOWANIE ANIMACJI");

// Naczym polega kolejkowanie animacji, bardzo ciekawy temat w kontekscie animacji

(function($) {

    $(document).ready(function() {

        var p = $(".rte p").hide(); // Najpierw pobraniea a pozniej od razu ukrycie
                                    // metoda hide dodatkowo od razu zwaraca nam ten obiekt do zmiennej
        $("#start").on("click", function() {

            if( p.is(":hidden") ) {
                p.slideDown(1000);
            } else {
                p.slideUp(1000);
            }
// Niby wszystko u gory gra, ALE gdy szybko klikamy na przycisk 2 razy, to musimy poczekac az skonczy sie jedna animacja o pozniej druga. Na tym polega kolejkowanie - koljne animacje wpadaja w kolejke i czekaja az skonczy sie jedna zanim zacznie sie druga
            
// NALEZY ZATRZYMAC dana animacje w momencie uruchomienia innej na tym samym elemencie, no i robi sie to za pomoca funkcji STOP()
                if( p.is(":hidden") ) {         // Teraz gdy klikniemy drug raz na przycisk
                    p.stop().slideDown(1000);   // to nie czekamy do konca pierwszej animacji
                } else {                        // tylko odrazu zaczyna sie zwijanie
                    p.stop().slideUp(1000);
                }
    
// PARAMETRY METODY STOP() ###########
            
        // W tym kodzie funkcja ANIMATE ZACZEKA w kolejce az skonczy sie sildeDown, wykona sie po niej    
            p.stop().slideDown(3000).animate({      //slideDown sama kozysta z funkcji animate
                "font-size": "+=4px"
            }, 500);
            
            
// ZAMIAST CALLBACK MOZNA ZROBIC INNĄ RZECZ ! :   (u dołu  czyli QUEUE)
        // Tutaj najpierw wykona sie slideDown, pozniej css a pozniej animate            
             p.stop().slideDown(3000, function() {                          // STARE CALLBACK
                 p.css("color", "red")                                      // STARE CALLBACK
             }).animate({      //slideDown sama kozysta z funkcji animate   
                "font-size": "+=4px"
            }, 500);           
            
// SKORZYSTANIE Z QUEUE:  UWAGA ! Funckja ANIMATE nie zacznie sie wykonywac, dopóki NIE WYWOŁA SIĘ FUNKCJA DEQUEUE !!!
// ZAMIAST DEQUEUE() !! MOZNA PRZEKAZAC INNA FUNKCJE JAKO PARAMETR I PRZEJDZIEMY TEZ DALEJ (next)    
             p.stop().slideDown(3000)       // UWAGA ! Tutaj pracujemy cały czas na "p" bo jest tylko
                 .queue(function(){         // jeden ALE W NORMLANEJ PRACY lepiej operowac na $(this)
                 p.css("color", "red");     // zeby operowac na JEDNYM elemencie A NIE NA WSZYSTKICH
                 p.dequeue();
                })
                 .animate({      //slideDown sama kozysta z funkcji animate   
                "font-size": "+=4px"
            }, 500);                
            
// JESZCZE INNY WARIANT QUEUE I ANIMATE !! :  funkjca NEXT oraz przekazanie kilku parametrów do ANIMATE      
             p.stop().slideDown(3000)       
                 .queue(function(next){             // ZAMIAST dequeue mozna przrekazac tutaj inna funkcje
                 p.css("color", "red");         // ktora po wykonaniu, spowoduje wywoalnie sie 
                // p.dequeue();                   // dalszych ANIMATE a wiec altermatywa DEQUEUEU  (next)
                next();   
                })
                 .animate({      
                "font-size": "+=4px"
                }, {                            // UWAGA ZAMIAST TEJ LINIJKI: }, 500);
                 duration: 500,                 // MOZNA PODAC OBIEKT KONFIGURACYJNY no i tutaj wpisanie
                 queue: true                   // queue: flase oznazcza ze TO ANIMATE WYKONA SIE OD RAZU
             });                                // PO WYWOŁANIU TEGO ELEMENTU a więc RÓWNOCZEŚNIE Z slideDOWN !
           
// UWAGA ! Tych parametrów dla ANIMATE jest troche i sa one w dokumentacji jQuery oficjalnej 
            // POD KLUCZEM   ANIMATED OPTIONS !!!
        });
        
        $("#stop").on("click", function() {
           
            p.stop();   // Po kliknieciu zatrzymujemy AKTUALNA animacje elementu, ta ktora trwa w momencie klikania przysisku !  (tekst sie wylewa na stronie bo nie ma "overflow: hidden")
            
           p.stop(true); // PIerwszy parametr TRUE powoduje zatrzymanie WSZYSTKICH ANIMACJI ELEMENTU, zarówno tych trwających JAK I NASTĘPUJĄCYCH PO NIM !
            
            p.stop(true, true); // Drugi parametr mowi o tym CZY MIMO ZATRZYMANIA ANIMACJI PRZEJSC DO KONCOWYCH WARTOSCI, czyli wstawic efekt koncowy animacji ! Więc w tym przypadku on wykasuje cala kolejke animacji ale efekt koncowy tej pietwszej bedzie widoczny
            
            p.stop(false, true); // Tutaj pierwszy parametr mowi zeby NIE KASOWAC KOLEJKI, czyli wykonaja sie wszystkie animacje, ale w momencie klikniecia, animacja aktulana zostaje przerywana i od razu przechodzi do efektu koncowego (po czym juz w normalnym trybie odpala sie nastepna);
            
            p.finish(); // Zatrzymanie aktulanej animacji I WSZYSTKICH POZOSTALYCH ALE WYKONANIE ICH WSZYSTKICH EFEKTOW KONCOWYCH !!! Czyli wszystko co ma sie wykonac to sie wykona ale bez animowania !   (Czyli po prostu takie: dobra skoncz pierdolic i pokazuj wyniki)
            
            p.clearQueue(); // DOKONCZENIE TYLKO AKTUALNIE TRWAJACEJ ANIMACJI, zatrzymanie wszystkich kolejnych czejących w kolejce 
            
        });
        

    });

})(jQuery);


















