import $ from './vendor/jquery-scroll-animations';
import {wait} from "./utils";

export class Loader {

    constructor(selector, bodyScrollTarget = 'body') {
        this.selector = selector;
        this.loadingTimeout = 600;
    }

    async hide() {
        await wait(this.loadingTimeout).then(() => $(this.selector).addClass("hide-this"));
    }

    async show() {
        $(this.selector).removeClass("hide-this");
    }
}
