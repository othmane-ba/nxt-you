import $ from 'jquery';
import {wait} from "./utils";

export class Loader {

    constructor(selector) {
        this.selector = selector;
        this.loadingTimeout = 600;
    }

    async hide() {
        await wait(this.loadingTimeout).then(() => $(this.selector).addClass("hide-this"));
    }
}
