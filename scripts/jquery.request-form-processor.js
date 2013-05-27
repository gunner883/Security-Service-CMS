$(document).ready(function () {

    // Remove the overlay div when clicking on the fade in area.
    $('.request-form-notification').click(function () {
        $(this).fadeOut("slow", function () { $(this).remove(); });

        var pathname = window.location.pathname;
        window.location.replace(pathname);
        return false;
    });

});