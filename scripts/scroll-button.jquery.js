$(document).ready(function () {

    $.each($(".navigation-button"), function () {
        var $container = $(this).parent().find(".container :first");
        var $content = $(this).parent().find(".content :first");
        var $direction = $(this).attr("data-direction");
        var $button = $(this);

        if ($content.height() > $container.height()) {
            $button.mousedown(function () {
                //alert("inside click");
                animateContent($direction, $container, $content);
            }).mouseup(function () {
                $content.stop();
            });

            $button.mousedown(function () {
                animateContent($direction, $container, $content);
            }).mouseup(function () {
                $content.stop();
            });
        }
    });
});

function animateContent(direction, container, content) {
    //alert("got here");
    var animationOffset = container.height() - content.height();
    if (direction == 'up') {
        animationOffset = 0;
    }

    content.animate({
        "marginTop": animationOffset + "px"
    }, "fast");
}