console.log("46 ZASADA DZIAŁANIA DEFERRED");

// Jest to specjalny obiekt i zoabczymy jak on dziala
// Jeszcze bedzie mowa czyms takim jak promises

(function($) {

// U dołu najzwyklejsza funkcja która wykonuje się po czasie przekazanym jako parametr. A co gdyby te consollogi mozna bylo deklarowac w czasie wywoływania tej funkcji a nie w jej deklaracji ? Dotego wlasnie służy ten obiekt DEFERRED     
   
///// ZWYKLA DEKLARACJA I WYWOLANIE
//    
//    function getName(ms) {
//        setTimeout(function() {
//            var name = prompt("Podaj swoje imię");
//            if(name) {
//                console.log("Podane imię to: " + name);
//            } else {
//                console.log("Nie podano imienia");
//            }
//        }, ms);
//    }
//
//    $(document).ready(function() {
//        getName(3000);
//    });

  
//// DEFERRED /////////////////    
    
 function getName(ms) {

     var dfd = $.Deferred();    // MUSIMY TAKA ZMIENNA ZADEKLAROWAĆ I PRZEDE WSZYSTKIM JA ZWROCIC NA KONCU TEJ FUNKCJI !
     
     setTimeout(function() {
         
            var name = prompt("Podaj swoje imię");
         
            if(name) {
              dfd.resolve(name);    // W PRZYPADKU POMYŚLNEGO REZULATTU
              //  console.log("Podane imię to: " + name);
            } else {
              dfd.reject();     // W PRZYPADKU BŁĘDNEGO REZULTATU
              //  console.log("Nie podano imienia");
            }
// UWAGA ! Jest jeszcze opjca NOTIFY ! Która pozwala śledzić progres danego skryptu, i omówiona zosatnie w kolejnej lekcji         
        }, ms);
     
// UWAGA ! Są też odpowiedniki metod resolve, reject i notify Z DODATKIEM With NA KOŃCU ! Czyli np "resolveWith". I W TAKIEJ FUNCKJI pierwwszy podany parametr to JEST OBIEKT na ktory kierować będzie słowo "THIS"  w deklaracji tej funkcji podczas wywołania jej w DONE !!! (no i odpowiednio w FAIL oraz w PROGRESS)    
     
     return dfd.promise();  // Dzięki PROMISE zapobiegamy wywoalniu na dfd funkcji RESOLVE lub REJECT
     
    }

    
    $(document).ready(function() {
        
// UWAGA ! getName MUSI ZWRACAĆ OBIEKT DEFERRED ! Inaczej wywali blad !!!        
        getName(3000).done(function(name) {
// FUNCKJA DONE wykona sie gdy na obiekcie dfd WYKONANA ZOSTANIE FUNKCJA RESOLVE             
           console.log("Podane imię to : " + name); 
        }).fail(function() {
// FUNCKJA FAIL wykona sie gdy na obiekcie dfd WYKONANA ZOSTANIE FUNKCJA FAIL             
            console.log("Nie podano imienia");
        }).always(function() {
// FUNCKJA ALWAYS jest opcjonalna I WYKONUJE SIE ZAWSZE niezaleznie od fail i done !!!  
           console.log("Nie wiem co sie stalo :)"); 
        });
// GDYBYSMY u góry zadeklarowali jeszcze funkcje NOTIFY to tutaj bylby jeszcze ".progress' !!!!

// UWAGA ! Funkjca THEN: //////////
//
// Wszystko to u góry moglibysmy zastapic poprzez jedną funkcję THEN w taki sposób
//      var dfd2 = getName(300);    // To jest alternatywa, mozna zrobic jak u gory tez        
//    
//      dfd2.then(fn1, fn2, fn3);   // Gdzie W dokladnie takiej kolejności: fn1 zastepuje DONE, fn2 zastepuje FAIL a fn3 zastepuje PROGRESS no i ta trzecia jest oczywiscie nie obowiazkowa !    
    
// UWAGA ! Zwróć uwagę że nasz obiekt DFD jest zwracany PO KAZDYM WYWOLANIU FUNKCJI done, fail, alway ITD, dlatego mozemy laczyc je po kropce. No i w zwiazku z tym mozemy napisac cos takiego:
        
        setTimeout(function(){  //Gdy bedzie promise() to tutaj wywali blad, ale 
             dfd.reject();      // skrypt dalej bedzie sie wykonywac poprawnie
        }, 1000);
    
// Gdybysmy teraz odpali skyrpt PO 1 SEKUNDZIE WYWOŁAŁA BY SIĘ FUNKCJA FAIL, oraz ALWAYS ALE NIGDY NIE WYKONALABY SIE JUZ DONE NAWET PO WPISANIU DO PROMPTA POPRAWNYCH DANYCH !
// Wiec aby ustrzec sie przed tym ze cos nam moze zepsuc nasza procedure, KORZYSTAMY Z METODY PROMISE() w momencie ZWRACANIA OBIEKTU DEFERRED !
// Dzięki PROMISE() ZAPOBIEGAMY wykonaniu na obiecie DFD zaówno funkcji RESOLVE jak i REJECT !    
    });
    
})(jQuery);


















