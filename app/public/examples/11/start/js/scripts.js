console.log("11 OBIEKT ZDARZNIA");

(function($) {

    $(document).ready(function() {

        var links = $(".rte a");

// Przypisalismy do zdarzenie klikniecia do wszystkich linkow umieszczonych w divie    
// Zmienna e mozemy nazwac DOWOLNIE, a w momencie zdarzenia mozemy sobie z obiektu w niej zawartego korzystac, a ma on w ciul bardzo istotnych zastosowan i wlasciwosci        
        links.on("click", function(e) {

            console.log(e);
// Bardzo duża większośc metod i właściwości tego obiektu e jest identyczna jak w czystym JS, jQuery standaryzuje tylko pewne z nich np:
        
//ZATRZYMANIE DOMYŚLNEJ AKCJI PRZEGLĄDARKI WYGLĄDA IDENTYCZNIE JAK W JS:
            e.preventDefault();
        });
        
        $(".header__search-field").on("keyup", function(e) {
           
            console.log(e.which);   // Wypisanie kodu znaku z klawiatury ktory został "puszczony"
// UWAGA ! Dawniej byly probrlmy z tymi kodami bo przegladarki czasami podawaly rozne w zaleznosci z ktorej sie korzystalo. JQUERY TO STANDARYZUJE ! I kożystając wlascie z wlasciwowci WHICH mamy PEWNOŚĆ że liczba ta bedzie zawsze identyczna dla odopwiedniego znaku. No bo jest jeszcze wlasicowsc "keyCode" ktora niby zwraca to samo ALE NIGDY NIE WIADOMO KIEDY ZWROCI COS INNEGO W INNEJ PRZEGLĄDARCE, dlatego korzystamy z WHICH
            
    // MAJĄC nasz dokladny kod znaku mozemy skorzystac z metody klasy STRING (nie majacej niz wspolnego z jQuery)        
            
            console.log( String.fromCharCode(e.which) ); // wysiwetlaja nam sie dokladnie takie litery, jakie wproweadzamy do konsoli 
        });

// UWAGA ! Kolejna ZNACZNA różnica między JQUERY a zwyklym JS:
// Gdy w JS delegowalismy zdarzenia to wlasciwosc CURRENTTARGET kierwala na parenta czyli zawsze bylo zwracane UL ! (trzeba bylo dopiero kozystac z wlasciwosci TARGET)        
        
        document.querySelector(".rte ul").addEventListener("click", function(e) {
            console.log(e.currentTarget);         // BEDA POKAZWYANE UL !
        }, false);
        
// W JQUERY CURRENTTARGET OD RAZU ZAWSZE POKAZUJE NA WŁAŚCIWY WSKAZANY ELEMENT ! (li)
        
        $(".rte ul").on("click", "li", function(e) {
           console.log(e.currentTarget);                // BEDĄ POKAZYWANE LI !
        });
        
    });

})(jQuery);


















