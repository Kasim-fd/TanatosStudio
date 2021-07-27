$(document).ready(function() {
    // Trigger The Nice Scroll Plugin
    $('html').niceScroll({
        zindex: "9999",
        cursorcolor: "#f7600e",
        cursorwidth: "11px",
        cursorborder: "1px solid transparent"
    });

    // The Bergur Menu
    const menu = $('.menu');
    const nav = $('.links');
    
    menu.on('click', function() {
        menu.toggleClass('open');
        nav.toggleClass('active');
    });

    // Go To The Next Section Button
    const nextSectionBtn = $('.go-down');
    const nextSection = $('.features');

    nextSectionBtn.click(function() {
        $('html').animate({
            scrollTop: nextSection.offset().top
        })
    });

    // The Portfolio

    const portBtns = $('.portfolio .buttons button');

    portBtns.on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.portfolio .container').hide().removeClass('active');
        $($(this).data('port')).fadeIn(500).css('display', 'flex').addClass('active');
    });

    // The Portfolio Imgs Overlay

    const portImgs = $('.portfolio .port-img .overlay');

    portImgs.on('click', function() {
        $(this).addClass('active').removeClass('unactive').parent().siblings().children().removeClass('active').addClass('unactive');
    });

    // Show Btns

    const show = $('.show-btns')

    show.click(function() {
        $('.portfolio .buttons').fadeToggle();
    });

    // The Testimonials Slider

    const prev = $('.testimonials .fa-chevron-left');
    const next = $('.testimonials .fa-chevron-right');
    
    function chekClients() {
        if ($('.testimonials .client:first').hasClass('active')) {
            prev.hide();
        } else {
            prev.show()
        }

        if ($('.testimonials .client:last').hasClass('active')) {
            next.hide();
        } else {
            next.show()
        }
    }

    chekClients();

    next.click(function() {
        $('.testimonials .client.active').fadeOut(700, function() {
            $(this).removeClass('active').next().addClass('active').fadeIn(700);
            chekClients()
        });
        chekClients()
    });

    prev.click(function() {
        $('.testimonials .client.active').fadeOut(700, function() {
            $(this).removeClass('active').prev().addClass('active').fadeIn(700);
            chekClients()
        });
        chekClients()
    });

    // The Team Hover

    const members = $('.team-member')

    members.click(function() {
        $(this).addClass('active').siblings('.team-member').removeClass('active');
    });
});