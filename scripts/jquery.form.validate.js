(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#request-info-form").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },                    
                },
                messages: {
                    name: " *",
                    email: " *"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
            //form validation rules
            $("#contact-info-form").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                },
                messages: {
                    name: " *",
                    email: " *"
                },
                submitHandler: function (form) {
                    form.submit();
                }
            });

        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);