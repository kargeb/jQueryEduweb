console.log("53 SLIDER OBRAZÓW");

// W internecie JEST W CHUJ ŚWIETNYCH PLUGINÓW, i bardzo warto je załączać na swoją stronę. Ten tutaj cp będziemy robić to
//  bxslider.com !
// Tam jest dokladna instrukcja co trzeba ściągnąc i jak załączyć, zarówno skrypty jak i część kodu HTML, A TAKZE PLIK ZE STYLAMI CSS
// UWAGA ! Trzeba zwrócić uwagę że do tego slidera możemy przekazać pełno opcji, I SĄ ONE OPISANE NA STRONIE W ZAKŁADCE "OPTIONS"
// TO JEST PFOCJALNY KOD HTML SLIDERA:
        //<ul class="bxslider">
        //  <li><img src="/images/pic1.jpg" /></li>
        //  <li><img src="/images/pic2.jpg" /></li>
        //  <li><img src="/images/pic3.jpg" /></li>
        //  <li><img src="/images/pic4.jpg" /></li>
        //</ul>
// U DOŁU tego skryptu JEST WKLEJONY JEDEN MODŁUŁ HTML NASZEGO SLIDERA, który został nieco przemieniony

// Zaczynając prace ze sliderem warto zauważyć ŻE WSZYSTKIE TE LI (obrazki które mają się przesuwać) SĄ JEDEN POD DRUGIM !

(function($) {

    $(document).ready(function() {
        
// JUŻ SAMO wstawienie tego wywolania pluginu sprawia ze on dziala, ale momzemy skorzystac jeszcze z opcji go dostrajających        
        $(".bxslider").bxSlider({
// Slider ma dołączone na dole linki "nex" i "prew", my ich nie chcemy WIEC SKORZYSTAMY Z OPCJI ! Szukamy na stronie w OPTIONS sekcji "Controls" i tam dokladnie jest napisane co trzeba wstawić:
            controls: false,
// KOLEJNE OPCJE:
        // Automatyczne przewijanie slajdów    
            auto: true,
        // Co ile ma sie przesuwać koljeny    
            pause: 3000
            
            
        });

        $("a.projects__link").lightbox();

    });

})(jQuery);
/*

<div class="slider">
    <ul class="bxslider">
        <li class="slider__slide" style="background-image: url(/images/slider1.jpg);">
            <div class="slider__text">
                <h3 class="slider__heading">Stworzymy Twoją markę</h3>
                <a href="#" class="slider__link">Dowiedz się więcej</a>
            </div>
        </li>

*/















