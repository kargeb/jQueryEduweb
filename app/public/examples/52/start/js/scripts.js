console.log("52 PRAKTYCZNY PROJEKT: LIGHTBOX !!! ");

// Robimy najwiekszy, najbardziej skomplikowny porojekt w calym kursie
// LIGHTBIX to po porstu podlag obrazka w osobnym oknie, ktore zaslania cala strone, no i mozna go bedzie zamknac poprzez klikniecie na niego, lub poza nim LUB KLAWISZEM ESC !
// POZA TYM ten duzy obrazek bedzie umieszczonby na tzw OVERLAY czyli czarym tle ktory zasloni cala strone
// Będzie on również w pełni kompatybilny z paginacją na stronie
// No bo prazujemy wlasnie na pliku w ktorym robilismy paginacje

(function($) {

    $(document).ajaxStart(function(event, jqXHR, options) {

        var preloader = $("#preloader");

        if(!preloader.length) {
            preloader = $("<div></div>", {
                "id": "preloader",
                "class": "preloader"
            }).appendTo("body");
        }

        $("#preloader").fadeIn(500);

    });

    $(document).ajaxComplete(function() {

        $("#preloader").fadeOut(500);

    });

    $(document).ready(function() {

        var projects = $("#projects"),
            links = $("a.pagination__link"),
// PRJECTSLINKS to sa wlasnie linki DO DUZYCH OBRAZKOW            
            projectsLinks = $("a.projects__link");

        projects.on("click", "a.pagination__link", function(e) {

            e.preventDefault();

            var page = $(this).attr("href");

            projects.load(page + " .projects, .pagination", function() {

                $("html, body").animate({
                    scrollTop: projects.offset().top - 30
                }, 300);

// BARDZO WAZNA LINIJKA, dzieki ktorej po skorzystaniu z paginacji, lightbox bedzie dalej dzialal na wszystkich obrazkach                
                $("a.projects__link").lightbox();
                
            });

        });
        
// DOŁACZANIE PLUGINU LIGHTOBXA
        projectsLinks.lightbox();

    });

})(jQuery);


















