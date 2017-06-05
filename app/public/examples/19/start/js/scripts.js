console.log("19 PRACA Z ATRYBUTAMI ELEMENTOW");

// Zmienianie atrubutow elementow HTML

(function($) {

    $(document).ready(function() {

        $("#openDiv").on("click", function(e) { // identyfikator elementu a (id="openDiv") 

// MAMY element a ktorego href="#divToOpen", oraz wlasnie ukrytego diva ktory ma identyczny identyfikator: id="divToOpen"             
            
            e.preventDefault();  // zapobiegamy przechodzeniu strony do gory po kliknieciu w link

// metoda ATTR Pozwala na ODCZYTYWANIE atrybutow !  #########################
            
            var divID = $(this).attr("href");   // pobranie atrybutu href z kliknietego elementu
            
            $(divID).css("display", "");  // zresetowanie wylowionego diva do wartosci domyslnej 
        });

// WSTAWIANIE atrybutow za pomoca ATTR #################################
        
        $(".rte a:has('img')").attr("title", "Powieksz obrazek");   // TUTUŁ DODANY !
        
// USUWANIE atrybutow za pomoca ATTR ########################
        // MOZNA USUNAC KILKA ! Wpisujac je koljeno po sapcji
        $(".rte a").removeAttr("title href");   // nie da sie juz w obrazek kliknac, DZIALA
        
// WSTAWIANIE kliku atrybutow na raz, czyli jako obiekt:
        $("img").on("click", function(){
          
        // BARDZO CIEKAWA MEOTDA -> "is"
        // sprawdza czy dany element posiada jakas wlasciwosc czy to klase czy atrubut:
        //   $(this).is(".klasa")  -> czy w ogole ma klase
        //   $(this).is("[width]")  -> czy w ogole ma parametr width
        //   $(this).is("[width='200']")  -> czy ma ten paramter rowny 200
// mozna z tego skorzytsac np w ten sposob:
            
            if( $(this).is("[width='300']") ) {       
                console.log("width jest wieksze od 200 !");
            }
            
            $(this).attr({          // WSTAWIANIE KILKU ATRYBUTOW JAKO OBIEKT !
                width: "300",
                height: "200"
            });  
        });
        
// DODAWANIE ATRYBUTOW AUTOMATYCZNIE PRZY TWORZENIU ELEMENTOW:
        var img = $("<img>", {              // STWORZENIE 
            src: "/images/picture.jpg",
            width: 300
        });
        
        $(".rte").append(img);              // DODOANIE
    });

})(jQuery);


















