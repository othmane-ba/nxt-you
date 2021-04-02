/******************************************************************


 @ Item          Gravity // Coming Soon - Under Construction
 @ Version       3.6
 @ Author        Avanzare
 @ Website        http://themeforest.net/user/avanzare


 ******************************************************************/


/******************************************************************


 ------------------------
 -- TABLE OF CONTENTS --
 ------------------------

 --  1. Base
 --  2. Ajax - Subscribe
 --  3. Ajax - Contact
 --  4. Google Analytics


 ******************************************************************/


/** 1. Base
 *******************************************************************/

var blockProcess = true;
prevent_class_removal = true;
$(".hero .container-mid").addClass("block-overflow");

jQuery(window).on('load', function () {
    "use strict";

    setTimeout(function () {
        $("#page-loader").addClass("hide-this");

        setTimeout(function () {
            $(".background-content.page-enter-animated").addClass("show");

            setTimeout(function () {
                $(".front-content.page-enter-animated").addClass("show");

                setTimeout(function () {
                    blockProcess = false;
                    $(".grcs_bullet_nav").addClass("init");

                    setTimeout(function () {
                        if (prevent_class_removal == true) {
                            $(".hero .container-mid").removeClass("block-overflow");
                        }

                    }, 1000);

                }, 1000);

            }, 600);

            $(".social-icons li a").tooltip({
                container: 'body',
                delay: {"show": 150, "hide": 0}
            });

        }, 200);

    }, 600);


});

// Mobile Detect Variable
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// Add Class To Body When Mobile
if (isMobile.any()) {
    jQuery("body").addClass("is-mobile");
}


$(document).ready(function () {
    "use strict";


    /**    2. AJAX - SUBSCRIBE
     *****************************************************/

    $('.subscribe-form').submit(function () {

        var postdata = $('.subscribe-form').serialize();

        $.ajax({

            type: 'POST',
            url: 'assets/php/subscribe.php',
            data: postdata,
            dataType: 'json',
            success: function (json) {

                $('.subscribe-form').removeClass("error").removeClass("error-final");

                if (json.valid === 0) {

                    $('.subscribe-form').addClass("error");
                    $('.subscribe-form input').attr("placeholder", json.message);
                    $('.subscribe-form input').val('');

                    setTimeout(function () {
                        $('.subscribe-form').addClass("error-final");
                    }, 1500);

                } else {

                    $('.subscribe-form input,.subscribe-form button').val('').prop('disabled', true);
                    $('.subscribe-form input').attr("placeholder", json.message);
                    $('.subscribe-form').addClass("success");
                }
            }

        });

        return false;

    });


    /**    3. AJAX - CONTACT
     *****************************************************/

    $("#contact-form").submit(function (e) {

        e.preventDefault();
        var postdata = $(this).serialize();

        $.ajax({

            type: "POST",
            url: "assets/php/contact.php",
            data: postdata,
            dataType: "json",
            success: function (json) {

                $("#contact-form.error input, #contact-form.error textarea").removeClass("active");

                setTimeout(function () {

                    if (json.nameMessage !== "") {

                        $("#contact-form-name").addClass("active").attr("placeholder", json.nameMessage);
                        $("#contact-form").addClass("error");

                    }

                    if (json.emailMessage !== "") {

                        $("#contact-form-email").addClass("active").val("").attr("placeholder", json.emailMessage);
                        $("#contact-form").addClass("error");

                    }

                    if (json.messageMessage !== "") {

                        $("#contact-form-message").addClass("active").attr("placeholder", json.messageMessage);
                        $("#contact-form").addClass("error");

                    }

                }, 50);

                if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

                    $('#contact-form').removeClass("error").addClass("success");
                    $('#contact-form textarea, #contact-form input').attr("placeholder", "");
                    $('#contact-form textarea').attr("placeholder", json.succesMessage);
                    $('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);

                }

            }

        });

    });


});


/**    4. GOOGLE ANALYTICS
 *****************************************************/

if (option_analytics_tracking == "on") {

    var _gaq = _gaq || [];

    function loadtracking() {

        window._gaq.push(['_setAccount', option_analytics_tracking_id]);
        window._gaq.push(['_trackPageview']);
        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();

    }

    loadtracking();

}



