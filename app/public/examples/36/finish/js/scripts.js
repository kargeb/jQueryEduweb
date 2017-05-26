(function($) {

    $(document).ready(function() {

        var form = $(".contact-form"),
            fields = form.find("input:not(:submit), select, textarea");

        fields.on("blur", function() {

            var field = $(this);

            // if( $.trim(field.val()) === "" ) {
            //     field.addClass("form-field--invalid");
            // } else {
            //     field.removeClass("form-field--invalid");
            // }

            field.toggleClass("form-field--invalid", $.trim(field.val()) === "");

        });

        fields.filter("textarea").on("change", function() {

            var textarea = $(this);

            if(textarea.val().length > 50) {
                textarea.val( textarea.val().slice(0, 50) );
            }

        });

        form.on("submit", function(e) {

            var hasErrors = false;

            fields.each(function(i, elem) {

                var field = $(elem),
                    empty = $.trim(field.val()) === "";

                field.toggleClass("form-field--invalid", empty);

                if(empty) {
                    hasErrors = true;
                }

            });

            if(!hasErrors) {
                form.submit();
            } else {
                e.preventDefault();
            }

        });

    });

})(jQuery);


















