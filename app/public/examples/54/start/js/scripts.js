console.log("54 SORTOWANIE W PORTFOLIO");

// UWAGA NIE TRACIŁEM CZASU NA PRZERABIANIE KODU HTML ! WIEC TO NIE BEDZIE DZIAŁAĆ NA PLIKACH W FOLDERZE "START"

// OGLĄDNIJ SOBIE CAŁĄ TĄ LEKCJĘ JAK BĘDZOESZ CHCIAŁ POWOPRZYĆ JAK KORZYSTAĆ Z TEGO PLUGINU ! Nie jest to jakies trudne ALE W CHUJ RÓŻNYCH RZECZY TO WYTŁUMACZENIA

// KOLJENY Z GOTOWYCH PLUGINÓW z internetu, BARDZO PRZYDATNY gdy chcemy zrobić sobie portoflio
// Sprawia to ze gdy podzielimy sobie obrazy na naszej stronie wg. jakihs kategorii to klikajac na zakladki beda one w zajebisty sposob sie pokazywac

// STRONA Z PLUGINEM:
//      https://www.kunkalabs.com/mixitup/
// UWAGA ZMIENIL SIE ADRES OD MOMENTU WYDANIA TEGO KURSU !
// Ze strony przechodzimy na link kierujacy na git huba, wybieramy folder dist (pewnei od distribution) i wybieramy paczke oryginalna lub z minimalizowanym kodem, po czym klikamy w "raw" i kopiujemy to do pliku jaki bedziemy chcieli załaczyć na naszą stronę

// Kolejnosc załaczania:
    //<script src="/js/jquery-2.2.1.js"></script>
    //<script src="/examples/54/start/js/jquery.mixitup.min.js"></script>
    //<script src="/examples/54/start/js/jquery.lightbox.js"></script>
    //<script src="/examples/54/start/js/scripts.js"></script>



(function($) {

   $(document).ready(function() {

        $(".projects").find("a.projects__link").lightbox()
            .end()
            .mixItUp();

    });

})(jQuery);


















