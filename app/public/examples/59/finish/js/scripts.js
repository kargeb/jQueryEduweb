(function($) {

   $(document).ready(function() {

        var button = $("#button"),
            button2 = $("#button2");

        button.on("click", function() {

            utils.log("Zdarzenie click");

        });

        button.on("click.myPlugin", function() {

            utils.log("Zdarzenie click.myPlugin");

        });

        button2.on("click", function() {

            button.off("click.myPlugin");

        });

    });

})(jQuery);


















