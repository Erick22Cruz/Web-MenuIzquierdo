jQuery(document).ready(function ($) {
    $("body").niceScroll({cursorcolor: "#8d8c8c"});

    var overlay = $(".overlay");
    var toggleButtomMenu = $("#toggleButtomMenu");
    var menu = $(".menuLeft");

    //Hacer cambio de iconos dependiendo si el menu esta show o hide
    toggleButtomMenu.on("click", function () {
        if (toggleButtomMenu.hasClass("fa-close")) {
            menuLeft.Hide();
        } else {
            menuLeft.Show();
        }
    });

    overlay.on("click", function () {
        menuLeft.Hide();
    });

    var timeAnimation = 200;//velocidad de la animacion Show/Hide, expresado en milisegundos
    var menuLeft = {
        Hide: function () {
            menu.animate({
                left: -150
            }, timeAnimation);
            toggleButtomMenu.animate({
                left: 0
            }, timeAnimation);
            toggleButtomMenu.removeClass("fa-close");
            toggleButtomMenu.addClass("fa-reorder");
            menuLeft.PageOverlayHide();
        },
        Show: function () {
            menu.animate({
                left: 0
            }, timeAnimation);
            toggleButtomMenu.animate({
                left: 150
            }, timeAnimation);
            toggleButtomMenu.addClass("fa-close");
            toggleButtomMenu.removeClass("fa-reorder");
            menuLeft.PageOverlayShow();
        },
        PageOverlayShow: function () {
            overlay.fadeIn(timeAnimation);
        },
        PageOverlayHide: function () {
            overlay.fadeOut(timeAnimation);
        }
    };
});