jQuery( function($){

    /*----------------------/
    /* PAGE SCROLLING
    /*---------------------*/

    // navigation scrolling
    $('#main-nav, .hero-left').localScroll({
        duration: 1000,
        easing: 'easeInOutExpo'
    });

    // scroll to top
    if( $(window).width() > 992 ) {
        $(window).scroll( function() {
            if( $(this).scrollTop() > 300 ) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').click( function(e) {
            e.preventDefault();

            $('body, html').animate({
                scrollTop: 0
            }, 800, 'easeInOutExpo');
        });
    }

    // parallax
    if($('.parallax-window').length > 0) {
        $('.parallax-window').parallax({
            imageSrc: 'assets/img/testimonial-bg.png',
            zIndex: 0
        });
    }
    $("div.navbar-fixed-top").autoHidingNavbar();
    
    /* ---------------------------------------------- /*
        * E-mail validation
        /* ---------------------------------------------- */

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        /* ---------------------------------------------- /*
        * Contact form ajax
        /* ---------------------------------------------- */

        $('#contact-form').submit(function (e) {

            e.preventDefault();

            var c_name = $('#c_name').val();
            var c_email = $('#c_email').val();
            var c_message = $('#c_message ').val();
            var response = $('#contact-form .ajax-response');

            if ((c_name == '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email))) {
                response.fadeIn(500);
                response.html('<i class="fa fa-warning"></i>Hmmm...something is not quite right. Please check for errors and try again.');
            }

            else {
                $.ajax({
                    url: "http://mailersample-babcocksolutions.rhcloud.com/index.php/mailer",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({
                        name: c_name, email: c_email, message: c_message
                    }),
                    type: "POST"


                }).done(function (data) {
                    $('#contact-form .ajax-hidden').fadeOut(500);
                    response.html('<i class="contact-response">Thank you, your message was received. I will contact you shortly.</i>').fadeIn(500);

                });
                
            }

            return false;
        });

    });
    // navbar close on click
    $('.nav a').on('click', function () {
        $(".navbar-toggle").click() //bootstrap 3.x by Richard
    });

});
