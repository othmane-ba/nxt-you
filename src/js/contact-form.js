import $ from "./vendor/jquery-scroll-animations";

export class ContactForm {

    static ERROR_ICON = "ti-na";
    static SUCCESS_ICON = "ti-check";

    constructor(formSelector, alertSelector) {
        this.elem = $(formSelector);
        this.alertElem = $(formSelector).find(alertSelector);
        this.alertTitleElem = this.alertElem.find(".js-form-alert-title");
        this.alertIconElem = this.alertElem.find(".js-form-alert-icon");
        this.alertListElem = this.alertElem.find(".js-form-alert-list");
        this.init();
    }

    init() {
        const that = this;
        this.alertElem.hide();
        this.elem.submit(function (e) {
            e.preventDefault();
            const formData = $(this).serialize();
            that.send(formData);
        })
    }

    send(data) {

        const onSuccess = () => {
            this.elem.removeClass("form--error").addClass("form--success");
            this.elem.find("input, button, textarea").prop('disabled', true);
            this.alert(ContactForm.SUCCESS_ICON, "The message was sent successfully")
        }

        const onError = ({responseText}) => {
            const json = JSON.parse(responseText);
            this.elem.removeClass("form--success").addClass("form--error");
            // this.elem.find(".form__group__control").each(function () {
            //     if (Object.keys(json.errors).some(key => key === $(this).attr("name"))) {
            //         $(this).addClass("form__group__control--error")
            //     }
            // });
            this.alert(
                ContactForm.ERROR_ICON,
                "One or more fields have an error. Please review and try again.",
                Object.values(json.errors)
            )
        }
        this.elem.addClass("form--active");
        return $.post("api/contact.php", data)
            .done(onSuccess.bind(this))
            .fail(onError.bind(this))
            .always(() => {
                this.elem.removeClass("form--active");
                //   this.elem.find(".form__group__control").removeClass("form__group__control--error");
            })
    }

    alert(icon, text, messages = []) {
        this.alertListElem.empty();
        this.alertElem.show();
        this.alertIconElem.removeClass(ContactForm.SUCCESS_ICON, ContactForm.ERROR_ICON)
        this.alertIconElem.addClass(icon);
        this.alertTitleElem.text(text);
        if (messages.length > 0) {
            const ul = $(document.createElement("ul"));
            messages.forEach((message) => {
                ul.append(`<li>${message}</li>`)
            })
            this.alertListElem.append(ul)
        }
    }
}
