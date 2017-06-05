console.log("24 PRAKTYCZNY PROJEKT - Menu kontekstowe");

// Stworzymy specyficzne MENU ktore bedzie otwierane PRAWYM PRZYCISKIEM MYSZY ale wylacznie na LOGU NASZEJ STRONY i to zawsze centralnie pod kursorem. Bedzie mialo trzy opjce do wyboru, dotyczace tego w jaki sposob nasze logo zapisac na dysku (2 formaty oraz wersja skompresowana)

(function($) {

    function createContextMenu(config) {    // To tutaj tworzymy funcje do generowania menu
        
        var ul = $("<ul></ul>", {     // Dynamiczne tworzenie elementu UL
            "id": "contextmenu",        // Nadawanie mu parametrow
            "class": "contextmenu",
            "css": {                    // nadawanie styli css
                "display": "none"
            },
            on: {                       // OSTATNIA RZECZ dopisana na samym koncu, chodzi o to zeby
                click: function(e) {    // menu nie znikalo po kliknieciu w ktoras z jego opjcji,
                    e.stopPropagation(); // robimy to ZAPOBIEGAJAC przechwytywaniu zdarzenia przez
                }                       // RODZICOW naszego ul, i wlasnie to robi ta funkcja !
            }
        });
        
    // Stworzymy sobie teraz elementy LI, na PODSTAWIE zmiennej config ZA POMOCĄ PĘTLI EACH 
    // Mozna skoczyc do lekcji o petli each, ona jest pozniej i mozna przerobic poza kolejnoscia
        
        $.each(config, function(key, val) {
           
            var li = $("<li></li>", {
                "class": "contextmenu__item"
            });
            
            var a = $("<a></a>", {
                "class": "contextmenu__link",
                "text": key,
                "href": val
            });
            
            li.append(a).appendTo(ul);  // a załączamy do LI a LI dodajemy pod UL
            
        });
    
// To moze dziwne ale juz tutaj wstawimy nasze menu ! Ono i tak jest ukryte wiec mozna go dac na strone, a zwrocony "uchywyt" w returnie powoduje ze i tam mamy nad nim kontorle         
        $("body").append(ul);
        
        return ul;
    }
    
   $(document).ready(function() {

       var logo = $(".header__logo"),
           ul = null;   // TWORZYMY to tutaj, zeby mogla dzialac funkcja KASUJACA MENU

       var config = {                       // UWAGA ! Na dole tego skryptu jest caly kod HTML
           "Logo w formacie SVG": "#svg",   // Jak ma docelowo wygladac teo menu na stronie
           "logo w formacie PNG": "#png",
           "ZIP z logo": "#zip"
       };
              
       
       logo.on("contextmenu", function(e) {     // contexmenu, czuli zdarzenie prawrgo przycisku myszy
          
           e.preventDefault();  // zapobiegamy domyslnej czyli wywolywaniu sie menu przegladarki
// UWAGA swietna sprawa gdybysmy chcieli zapobiec zapisywaniu obrazkow z naszej strony
  
           
           ul = ul || createContextMenu(config);
           
/*  ZMIENIAMY TO ! ul tworzymy wyzej i przypsujemy null, dzieki czemu dziala linikja u gory
        var ul = $("#contextmenu"); // tworzymy ul z klasa contextmenu, jesli taki ul juz jest, to go po prostu przypiszemy do tej zmiennej, a jeli go nie ma to w nastepnbym kroku zostahnie utworzony ! Robimy to po to zeby nie tworzyc ich za kazdym razem gdy klilkniemy na logo !
        if(!ul.length) {
            var ul = createContextMenu(config); // zrobimy sobie generator menu a nie wpisywanie wszytskiego recznie
        } 
*/        
// Czyli w tym momencie nie ma znaczenia czy ul ZOSTAL WLASNIE STWORZONY w ifie czy my po prostu znalezlismy go na stronie !!!           
           
        ul.css({
            display: "", // robimy wartosc domyslna, bo w css ma juz ustawione absolute 
            top: e.pageY,   // ustawienie wysokosci na podstawie obiektu e
            left: e.pageX   // to samo z szerokoscia
        });
 // NA TEN MOMENT menu nam sie juz wyswietla, ale na samym dole strony. Musimy go teraz odpowiednio wypozycjonowac !
           
// UWAGA ! Świetnie mozna testowac takei pozycjonowanie w chromownym narzedziu programistoW ! Gdy w drzewie zaznaczymy konkretny element TO PO PRAWEJ STRONIE, w zasadzie na pierwszej pozycji bedzie "element.style" i tam dopisujemy ajkietylko style chcemy I ONE SIE DYNAMICZNIE NA NASZEJ STRONEI BEDA ZMIENIAC !            
       });
// Oczywiscie docelowa pozycje menu bedziemy wylawiac z obiektu e zdarzenia contextmenu. INTERESUJA NAS WLASCIWOSCI: pageX oraz page Y !         
//           console.log(e);
           
        $(document).on("click", function(e) {
    // inaczej moglibysmy po proru wyszukac na stronie "contextmenu"        
            ul.css("display", "none");
        
           
       });

    });

})(jQuery);

/*
<ul id="contextmenu" class="contextmenu">
    <li class="contextmenu__item">
        <a class="contextmenu__link" href="#svg">Logo w formacie SVG</a>
    </li>
    <li class="contextmenu__item">
        <a class="contextmenu__link" href="#png">Logo w formacie PNG</a>
    </li><li class="contextmenu__item">
        <a class="contextmenu__link" href="#zip">ZIP z logo</a>
    </li>
</ul> 
*/