console.log("30 ANIMACJE Z CSS");

//Jak korzystac w jQuery z SUPERPŁYNNYCH animacji CSS3

(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

// UWAGA ! U dołu nie zadziała przesuwanie w lewo ! left, right, top oraz bottom NIE ZADZIAŁAJĄ gdy element pozycjonowany jest statycznie ! Trzeba mu więc przypisać postion: relative !            
//            $(".rte img").animate({
//                left: "400px",        
//                opacity: 1
//            }, 1000);
//                                                                                TUTAJ DOPISANE RELATIVE
//    <img src="/images/picture.jpg" alt="" style="width: 300px; opacity: 0.5; position: relative;">            
            
// UWAGA ! NIE JESTEŚMY SKAZANIE NA ZMIANE POZYCJONAWANIA NA INNEGO NIC STATYCZNE !
// Można skorzystać z właściowści "x"
        
//            $(".rte img").animate({
//                x: "900px",        
//                opacity: 1
//            }, 500);        
// Tylko że znowu mamy problem, przeglądarka po prostu renderuje ten obrazek na nowo co jakąś zadaną wartość I ON NIE PRZECHODZI DO NOWEJ POZYCJI TAK PŁYNNIE JAKBYŚMY CHECLI, tylko widać że robi to skokowo
            
// Na szczeście MOŻEMY KOŻYSTAĆ Z ANIMACJI DOSTĘPNYCH W  CSS3 !!!             
            
// INTERESUJE NAS NASTĘUJĄCA STRONA  (TRANSIT)
//
//              http://ricostacruz.com/jquery.transit/            
//
// NA NIEJ PODOBNIE JAK NA POPRZEDNIEJ STRONIE możemy sobie testować na żywo dowolne animacje
// A SĄ NAPARWDE ZAJEBISTE A GOŚĆ W KURSIE O TYM NIE WSPOMNIAŁ ! MOŻNA CUDA KURWA ROBIĆ !
//            
// TUTAJ TEŻ trzeba popbrać ze styrony bilbioteke i podpiąć ją pod nasząstronę
// TUTAJ TEŻ trzeba popbrać ze styrony bilbioteke i podpiąć ją pod nasząstronę
//  <script src="/js/jquery-2.2.1.js"></script>
//  <script src="/examples/30/start/js/jquery.transit.min.js"></script>
//  <script src="/examples/30/start/js/scripts.js"></script>
            
// TERAZ ABY Z TEGO SKORZYSTAĆ WYSTARCZY ZAMIAST "ANIMATE" WPISAC "TRANSITION" !
            
            $(".rte img").transition({      // NO JEST W CHUJ LEPSZA PŁYNNOŚĆ 
                x: "400px",
 //               y: "400px",
                opacity: 1
            }, 1000, "linear");
        });
    });
})(jQuery);

// WARTO W CHUJ z tego transiotion korzystać, przede wszystkim na wersjach mobilnych ! Co prawda nie wszystkie funkcje CSS3 są tutaj dostępne ale większość jest, WIĘC SE TO KURWA OBCZAJ I KORZYSTAJ !


















