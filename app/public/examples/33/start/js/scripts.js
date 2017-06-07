console.log("33 OGOLNA PETLA EACH");

// Poprzednia lekcja mowila o EACH wykonywanej na zbiorach, tutaj wykorzystamy te petle do pracowania na tablicach i obiektach

(function($) {

   $(document).ready(function() {

        var objects = [     // TABLICA Z OBIEKTAMI
            {
                "name": "Jan",
                "age": 33
            },
            {
                "name": "Agata",
                "age": 20
            },
            {
                "name": "Tomasz",
                "age": 50
            },
            {
                "name": "Karolina",
                "age": 20
            },
            {
                "name": "Anna",
                "age": 42
            }
        ];

        var age20 = null;   // zmienna do zapisania wyniku

// Szukamy obiektu ktory nie bedzie mial NAME=AGATA ale bedzie miec AGE=20       
//        for(var i = 0; i < objects.length; i++) {
//
//            if(objects[i].name === "Agata") {
//                continue;       // Przerywa obieg petli
//            }
//
//            if(objects[i].age === 20) {
//                age20 = objects[i];
//                break;          // przerywa cala petle
//            }
//
//        }
       
//       $.each();  ->  W TEN SPOSOB URUCHAMIAMY TA PETLE W SPOSOB OGOLNY A NIE NA ZBIORZE !

        $.each(objects, function(i, obj) {  // Pierwszy par to obiekt na ktorym bedziemy pracowac
                                            // NAZWY PARAMETROW W FUNKCJI MOGA BYC DOWOLNE !
            if(obj.name === 'Agata') {
// BARDZO WAŻNE ! Nie mozemy tutaj skorzystac z CONTINUE no bo to jest zwykla funkcja a nie petla ! Ale doskonale zastepuje to RETURN ! No bo on tez przerywa tylko ten konkretny obieg a nastepne leca juz dalej normalnie ->  CONTINUE == RETURN                
                return true;                
            }
            
            if(obj.age === 20) {
                age20 = obj;
// UWAGA ! Dokladnie ta sama sytuacja co u góry, ZAMIAST BREAK UZYWANY RETURN FALSE ! To przerywa dzialanie calej funkcji !   BREAK == FALSE                
                return false;
            }  
        });  
       
// UWAGA ! Tutaj juz nie ma o tym mowy ALE WARTO ZAJRZEĆ DO LEKCJI Z MENU KONTKESTOWYM ! No bo tam pokazany jest wariant tej petli, jako pracujacej NA OBIEKCIE, gdzie w funkcji jako parametry podawane sa KEY oraz VALUE ! No i to na tych zmiennych pracuje sie w ciele petli       
                                            
        utils.log(age20);       // wyswietlenie obiektu w ramce na stornie

// NA KONIEC TAKA CIEKAWOSTKA RACZEJ, Te petle robia dokladnie to samo ale PIERWSZEGO SPOSOBU NIE WSPIERAJA STARE EXPLORERY więc zawsze lepiej robic to za pomoca jQuery (ale kogo obchodza IE ) ? 
       
       [1, 2, 4].forEach(function(i, elem) {
          // 
       });
       
       $.each([1, 2, 4], function(i, elem) {
           //
       });
       
    });

})(jQuery);


















