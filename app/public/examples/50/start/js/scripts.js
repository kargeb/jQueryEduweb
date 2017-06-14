console.log("50 PRAKTYCZNY PROJEKT: POWIADOMIENIE O COOKIES");

// Stworzymy komunikat na gorze strony, ktory powiadamia o cookies i pozwala sie zamknac za pomoca krzyzyka i po przeladowaniu strony juz sie nie pokazuje

//UWAGA ! Stowrzymy specjlany plugin który będzie W OSOBNYM PLIKU !  

// Poszczególne pliki ze skryptami zalaczamy w takiej koljenosci:
    //  <script src="/js/jquery-2.2.1.js"></script>
    //  <script src="/examples/50/start/js/jquery.cookies.js"></script>
    //  <script src="/examples/50/start/js/scripts.js"></script>

// Bedziemy chcieli dodac takiego oto diva:
/*
<!-- <div class="cookie">
    <p class="cookie__text center-content">Ta strona wykorzystuje pliki cookies.<span class="cookie__close"></span></p>
</div> -->

*/

(function($) {

   $(window).on("load", function() {

        $("body").cookieAlert({           
            textClass: "cookie__text center-content" // NADPISUJEMY opcje domyslne  
        });

   });

})(jQuery);


















