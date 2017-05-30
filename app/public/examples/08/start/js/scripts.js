console.log("08 PRZYPISYWANIE FUNKCJI DLA ZDARZEŃ");

(function($) {

    $(document).ready(function() {  // READY samo w sobie jest juz zdarzeniem

// ROBI SIĘ TO W CHUJ PROSTO !
        $("li").click(function() {   // Znalezienie wszystkich li (no jakie to proste), i przypsanie do nich WSZYSTKICH zdarzenia CLICK, czyli rekacji na klkniecie ktoregos z nich
            alert("Klikniety!");      // TYLE
        });
        
// A TAK MUSIAŁOBY TO WYGLĄDAĆ W STANDARDOWYM JS:   
        // var lis = document.querySelectorAll("li");
        // for(var i = 0; i < lis.length; i++) {
        //     lis[i].addEventListener("click", function() {
        //         alert("Kliknięty");
        //     });
        // }                   // JO JEBIE !!!!!!!!!!

// UWAGA !!!!!!!!!!!!!  MOŻNA ZDARZENIE PRZYPSIAĆ NA 3 SPOSOBY ! Jeden tak jak u góry ale jest odradzany ! Najlepiej korzytstać z ufnkcji "on" ! mimo ze jest jeszzce funkcji "bind" ale dzięki ON można ...       
        
        $(".rte").children("p").last().bind("dblclick contextmenu", function() {        // ON
            
            alert("Klikniety PODWOJNIE lub PRAWYM");
            
        });
        
// NAJLEPIEJ KORZYSTAĆ Z ON        
//        $("#button").on("dblclick contextmenu", function() {        // ON
//            
//            alert("Klikniety");
//            
//        });
        
// UWAGA ! W CHUJ WĄŻNE ! OTO JAK MOŻNA PRZYPISAĆ KILKA RÓŻNYCH ZDARZEŃ DO JEDNEGO ELEMENTU:
// TO CO PRZEKAZUJEMY TO JEST O B I E K T klucz:wartość !!!! Czyli kluczem jest rodzaj zdarzneia a wartością fuynkcja ! 
        
        $("#button").on({   // oczuwiscie dgyby to nie byl indywidualny identyfokator
                                // to dopisalibysmy te zdarzenia do wszyskich takich
            "dblclick": function() {            //elementow na stronie
                alert("Klikniety podwojnie");
            },
            "contextmenu": function() {
                alert("Klikniety prawym przyciskiem");
            }
        });
    });

// UWAGA TEN OPIS MOŻNA SKRÓCIĆ, pamiętając o zasadzie w jQUery że z reguły funkcje wywoływane na obikecie ZWRACAJĄ WŁĄSNIE TEN OBIEKT, czyli mozna za pomocą łączenia łańcuchowego (czyli po prostu kropkami) połączyć ze soba poszczególne zdarzenia
    
//    $("#button").on("dblclick", fn.on("contextmenu", fn2;   // -> ŁAŃCUCHOWY ZAPIS
    
// JESZCZE JEDEN BARDZO CIEKAWY SPOSÓB: "ONE"
// Dzięki temu zapisow dane zdarzenie MOŻNA ODPALIĆ TYLKO JEDEN RAZ, poźniej już nie chuja
    
        $("#button").one("click", function() {      // Wwoła sięTYLKO RAZ !
            
            console.log( $(this) );  // THIS dajemy do jQuery bo inaczej bedzie to zwykly element
        });
    
// UWAGA ! No więc najlepiej korzystać z funkcji  ON oraz ONE, bo najlepsze jest to że metoda BIND SAMA W IMPLEMENTACJI KORZYSTA Z METODY "ON"     
    
})(jQuery);


















