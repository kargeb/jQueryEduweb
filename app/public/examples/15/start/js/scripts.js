console.log("15 Praktyczny projekt - gwiazdkowa ocena");

//1. zrobienie wizualnej zmiany gwiazdek po najechaniu
//2. zrobie za pomoca jQuery zeby po zaznaczeiu gwiazki, zaznaczalo sie rowniez odpowiednie pole radio, dzieki czemu mozna bedzie zaznaczyc konkretna ocene i ja wyslac

(function($) {

   $(document).ready(function() {

        var stars = $("#rating .rating__star"),     // pobranie spanow
            radios = $(":radio[name='rating']");    // pobranie radiow

// Na poczatku robimy zaznaczanie gwiazdek po najechaniu. Moglibysmy to zrobim zdarzeniami myszy po najechaniu i zjechaniu ALE skorzytamy z bardzo fajnego "skruotwca" ktory jest zajebisty i nazywa sie "hover", pierwszy parametr jaki przyjmuje wykonuje sie gdy najezdzamy msyza, a drugi gdzy z tego elementu zjezdzamy
       
       stars.hover(
            function() {    // NAJECHANIE  (moze przyjac event e ale nie trzeba go nam)
                
// CHCEMY ZROBIC TAK zeby zaznaczyc NIE TYLKO konkretny element ale takze wszystkie przed nim
                var that = $(this);
// Metoda PREVALL zalatwia nam CALA SPRAWE z oznaczaniem wszystkim elementow przed wybranym   
                that.prevAll().andSelf().addClass("rating__star--hovered");
// PREVALL zanzacza wszystkie poza tym zaznaczonym ! DODAJEMY METODE "ANDSELF" dzieki ktorej zaznaczony zostaje tez najechany wlasnie elemenet !
            },
            function() {    // ZESKOCZENIE
                var that = $(this);
                that.prevAll().andSelf().removeClass("rating__star--hovered");  //removeClass
            }
       );
// Trzeba teraz zrobic zeby po klikniecu zostaly te gwiazki, trzeba stworzyc IDENTYCZNA klase jak rating__star--hovered, i ja dodac do gwiazdek, NIE MOZE BYC TAK CO PRZY NAJECHANIU no bo zostaje usuwana za kazdym zjechaniem
       stars.on("click", function(){
          
           var that = $(this),
               index = that.index();  // metoda do ukrytego radia, zwraca index elemenu
// Trzeba jeszcze zrobic funkcjonalnosc zeby mozna bylo zmieniac te gwiazdki klikniecu w nie jeszcze raz. Czyli po kliknieciu USUWAMY klase "rating__star--sekected" ze wszystkich gwiazdek, a linijka u dolu OD RAZU doda je na nowo tam gdzie maja byc
// SIBLINGS, juz byla mowa, zaznacza CALE RODZENSTWO poza zaznaczonym elementem;
           that.siblings().removeClass("rating__star--selected");
           that.prevAll().andSelf().addClass("rating__star--selected");
           
// TERAZ ROBIMY ZAZNACZANIE UKRYTEGO RADIA !           
    // EQ to taka odwrocona "index" czyli ZWRACA ELEMENT o podanym indexie, MOGLIBYSNY skorzytac z "filter" ale gdy elementy sa ulozone w hierarhi ladnie jeden pod drugim no to index + eq bedzie lepsze
           // prop pozwala nam ZAZNACZYC dane radio 
           radios.eq(index).prop("checked", true);
           
// UWAGA WAZNE !!
    // Nie moglibysmy u gory srobic czegos takiego: 
        //  radios.eq(index).checked = true
    // BO TO DZIALA TYLKO NA NATYWNYCH ELEMENTACH a my tutaj mamy zaladowany OBIEKT JQUERY, ktory NIE MA TAKIEJ METODY ! 
    // Ale ZAWSZE mozna taki natywny element wylowic w ten sposób:
        //  radios.eq(index)[0]   !!!
    // Po dokladnie takiej operacji, mamy wylowiony natywny element no i teraz mozna tak:
        //  radios.eq(index)[0].checked = true;  !!!
       });
// POZOSTAŁĄ częśc robi juz za nas HTML czyli jak zaznacvzymy odpowiednie radio to on metoda GET wysyla dany parametr CO WIDOCZNE JEST W PASKU ADRESU       
    });

})(jQuery);