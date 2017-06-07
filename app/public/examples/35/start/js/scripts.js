console.log("35 METODA GREP");

// "Ostatnia z metod KTÓRA ITERUJE czyli działa jak pętla"

(function($) {

   $(document).ready(function() {

        var numbers = [1, -3, 10, -44, 3, 50, 2, -6];

//  Tak ja poprzednio, chcemy wyłowić tylko te dodatnie
       
       var positive = $.grep(numbers, function(val) {   // UWAGA ! NIE TRZEBA PODAWAĆ i JAK SIĘ NIE
                                                        // KORZYSTA ! (W CZAS POWIEDZIANE KURWA)
            return val > 0;
       
       }, true);    // UWAGA! MOZNA DAC TRZECI PARAMETR, kóry jesli jest TRUE 
                    // TO ZWRACA PRZECIWNE WYNIKI -> [-3,-44,-6]
       
       utils.log(positive);     // [1,10,3,50,2]
       
//  MAP zwraca taki wynik przy takim samym ciele 
//       -> [true,false,true,false,true,true,true,false]
       
    });

})(jQuery);


















