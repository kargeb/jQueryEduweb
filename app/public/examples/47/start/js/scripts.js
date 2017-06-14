console.log("47 PRAKTYCZNY PROJEKCT: PRELOADER OBRAZOW");

// Wykorzystamy tutaj dodatkowe walsciwosci obiektu Deferred

(function($) {

// W TEJ LEKCJI CHODZI O TO zeby obrazki pobierane na naszej stronie POKAZYWANE BYLY DOPIERO PO CALKOWITYM POBRANIU, a nie wyswitlay sie jak piksele, jeden szybciej drugi wolniej
// POZA TYM bedziemy miec animowany PASEK STANU wczytywanie tych obrazkow       
    
    function preload(urls) {
        
        var dfd = $.Deferred(),
            length = urls.length,   // ile obrazkow zostalo przekazanych
            counter = 0;
            
// DLA kazdego przekazanego linku UTWORZYMY nowy obrazek        
        $.each(urls, function(i, url) {
           
            var img = $("<img>");   // utworzenie obrazka
            
            img.on("load", function() { // TA funckja wykona sie PO pobraniu obrazka
                
                counter++;  // Wzrasta po KAZDYM zaladowaniu sie obrazka
                
// ROBIMY ANIMOWANY PASEK STANU ,   notify powiazana jest z funckja progress
                dfd.notify(url, counter, length);
                
                
                if(counter === length) {
                    dfd.resolve(urls);  // TUTAJ WYWOŁUJEMY METODE RESOLVE która przekazuje "urls" DO PIERWSZEJ FUNKCJI W THEN W PRELOAD ! Dzięki temu że czekamy az COUNTER równy będzie ilości obrazków, pojawiają sie one DOPIERO PO WCZYTANIU WSZYSTKICH !
                }
                
            })

// OBSŁUGA BŁĘDÓW            
            img.on("error", function() {
                
                length--;   // zmiejsza sie za kazdym wystapieniem error (np zly adres obrazka)
                
                dfd.notify(null, counter, length); // odpalana animacja
                
 //             dfd.reject(); // Udpala funkjce BLEDOWA i przerywa dzialanie wszystkiego
                if(counter === length) {
                    dfd.resolve(urls);          // odpalana funkcja 1 czyli jakby DONE
                }
                
                
                
            });
            
            img.attr("src", url);   // TUTAJ mamy te obrazki w pamieci podrecznej
            
        });
        
        return dfd.promise();  // primise w razie W
    }
    
    $(document).ready(function() {

        function appendImage(url) {

            var img = $("<img>", {
                src: url,   // TUTAJ MAMY JUZ PEWNOSC ZE OBRAZKI SA POBRANE
                css: {
                    width: "25%",
                    float: "left",
                    opacity: 0
                }
            });

            $(".rte").append(img);
            img.animate({
                opacity: 1
            }, 500);

        }

        var imgs = [        // Specjalnie sa na serwerze zewnetrznym zeby sie chwile wczytywaly
            "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
            "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
        ];

// PIERWOTNY KOD PRZED ROZPOCZECIEM LEKCJI
//        $.each(imgs, function(i, url) {   // przeniesiona na dol do "preload"
//
//            appendImage(url);
//
//        });

// KORZYSTAMY Z OBIEKTU DEFERRED        
        preload(imgs).then(
            function(imgs) {                        // Jako DONE
// Tu jest praktycznie wszystko OK tylko nawet jak zaciagnie nie istniejacy obrazek to jest on wyswietlany jako blad na stronie, wiec wyswietlanie WYLACZNIE wczytanych obrazkow przeniesione jest do funcji progress, o dwie nizej
//                $.each(imgs, function(i, url) {   
//                    appendImage(url);         
//                });
            },  
            function() {                            // Jako FAIL
                $(".rte").append("<p>Wystąpił błąd</p>");
            },
            function(url, counter, length) {                            // Jako PROGRESS
                
                if(url) {
                    appendImage(url);   // W chuj ladniej to wyglada
                }
                
                var progress = $("#progress");  // div wypelniajacy pasek stanu
                
                progress.stop().animate({
                   width: (counter/length)*100 + "%"    // musimy dopisac % bo jquery pomysli ze to beda pixele 
                }, 300);
                
            }
        );
        
    });

})(jQuery);

//Div zluzacy do progress, jest w nim drugi div ktory zluzy do zapelniania zielonym paskiem
//    <div class="progress">
//        <div id="progress" class="progress__percentage"></div>
//    </div>

















