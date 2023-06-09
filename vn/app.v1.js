$(document).ready(function () {

    // Toggle sidenav
    $(document).on("click", "header .navbar-collopse", function () {
        $('.nav > li > a > span').toggleClass('hide');
        if ($(document).width() > 700) {
            $('body').toggleClass('minbar')
            $('body').removeClass('mobile-view')
        } else {
            $('.nav > li > a > span').removeClass('hide');
            $('body').removeClass('minbar')
            $('body').toggleClass('mobile-view')
        }
        $('ul.nav > li').removeClass('open');
        if ($('body').hasClass('minbar')) {
            $('aside nav').animate({
                width: 60
            }, {
                duration: 400,
                queue: false
            })
            $('.logo .img').animate({
                width: 60
            }, {
                duration: 400,
                queue: false
            })
        } else {
            $('.logo .img').animate({
                width: 220
            }, {
                duration: 400,
                queue: false
            })
            $('aside nav').animate({
                width: 220
            }, {
                duration: 400,
                queue: false
            })
        }
    });

    // Sidenav toggle active and open
    $(document).on("click", "ul.nav > li > a", function () {
        $('ul.nav > li').removeClass('active');

        var $li = $(this).closest('li');
        $li.addClass('active');
        if (!$li.hasClass('open')) {
            $('ul.nav > li.dropdown').removeClass('open');
            $('ul.nav > li.dropdown ul').animate({
                opacity: 0,
                "margin-left": "-5rem"
            }, 20);
        }

        if ($li.hasClass('dropdown')) {
            if (!$li.hasClass('open')) {
                $li.find('ul').animate({
                    opacity: 1,
                    // height: $li.find('ul').get(0).scrollHeight,
                    "margin-left": "0"
                }, 50);
            } else {
                $li.find('ul').animate({
                    opacity: 0,
                    "margin-left": "-5rem"
                }, 20);
            }
            $li.toggleClass('open');
        }
    });

    // Toggle Topbar active
    $(document).on('click', '.topbar-btn', function () {
        $(this).toggleClass('active');
    });

    $(document).mouseup(function (e) {
        var container = $('.topbar-btn .dropdown');
        var topbar = container.closest('.topbar-btn')
        if (!topbar.is(e.target) && topbar.has(e.target).length === 0 &&
            !container.is(e.target) && container.has(e.target).length === 0) {
            topbar.removeClass('active');
        }
    })

    // Toggle Iframe src - Paulo - 25/05
    $(document).on('click', '#mnEntrev', function () {
        loadIframe("meuIframe", "./noticias/entrevistas.html");
    });
    $(document).on('click', '#mnEsp', function () {
        loadIframe("meuIframe", "./noticias/esportes.html");
    });
    $(document).on('click', '#mnSal', function () {
        loadIframe("meuIframe", "./noticias/saude.html");
    });
    $(document).on('click', '#mnEst', function () {
        loadIframe("meuIframe", "./noticias/estudos.html");
    });
    $(document).on('click', '#mnSpe', function () {
        loadIframe("meuIframe", "./noticias/especial.html");
    });
    $(document).on('click', '#mnCu', function () {
        loadIframe("meuIframe", "./noticias/curiosidades.html");
    });
    $(document).on('click', '#mnTir', function () {
        loadIframe("meuIframe", "./noticias/tirinhas.html");
    });
    $(document).on('click', '#mnFak', function () {
        loadIframe("meuIframe", "./noticias/fake-news.html");
    });



    // Function loadIframe - Paulo - 25/05
    function loadIframe(iframeName, url) {
        var $iframe = $('#' + iframeName);
        if ($iframe.length) {
            $iframe.attr('src',url);
            return false;
        }
        return true;
    }
})
