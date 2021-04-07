import $ from 'jquery';
import {Loader} from "./loader";
import {Analytics} from "./analytics";
import {asyncTimeout, isAnyMobile, wait} from "./utils";
import {Sphere} from "./sphere";

const analyticsEnabled = false;

export class App {

    constructor() {
        this.isMobile = isAnyMobile();
        this.analytics = new Analytics(analyticsEnabled);
        this.loader = new Loader("#page-loader");
        this.sphere = new Sphere("canvas");
        this.init();
    }

    async init() {

        this.isMobile && $("body").addClass("is-mobile");

        this.initContactForm("#contact-form")
        this.initAnalytics();
        await this.initPage();
        await this.sphere.init();
    }

    async initPage() {
        await this.loader.hide().then(() => wait(600));
        $(".page-enter-animated").addClass("show");
    }

    initAnalytics() {
        this.analytics.enabled && this.analytics.load();
    }

    initContactForm(selector) {

        $(selector).submit(function (e) {

            e.preventDefault();
            const postdata = $(this).serialize();

            $.ajax({

                type: "POST",
                url: "api/contact.php",
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
    }

}
