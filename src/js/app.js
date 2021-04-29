import $ from './vendor/jquery-scroll-animations';
import {Loader} from "./loader";
import {Analytics} from "./analytics";
import {isAnyMobile, wait} from "./utils";
import {Sphere} from "./sphere";
import {Cursor} from "./cursor";
import {Headline} from "./headline";
import {ContactForm} from "./contact-form";

const analyticsEnabled = false;

export class App {

    constructor() {
        this.isMobile = isAnyMobile();
        this.analytics = new Analytics(analyticsEnabled);
        this.loader = new Loader("#page-loader");
        this.sphere = new Sphere("canvas");
        this.cursor = new Cursor();
        this.headline = new Headline();
        this.form = new ContactForm("#contact-form", ".js-form-alert");
        this.init();
    }

    async init() {
        this.initAnalytics();
        await this.initPage();
        await this.sphere.init();
    }

    async initPage() {
        this.isMobile && $("body").addClass("body--mobile");
        await this.loader.hide().then(() => wait(600));
        this.headline.init();
        $(".js-page-enter-animated").addClass("show");

        // scroll animations
        const animationContainers = $('[data-animation]:not([data-animation-child]), [data-animation-container]');
        animationContainers.scrollAnimations();
    }

    initAnalytics() {
        this.analytics.enabled && this.analytics.load();
    }
}
