const KEY = {
    SET_ACCOUNT: "_setAccount",
    TRACK_PAGE_VIEW: "_trackPageview"
}

export class Analytics {

    constructor(enabled, gaq) {
        this.enabled = enabled;
        this.gaq = gaq || [];
        this.trackingId = "UA-XXXXXXXX-X"; //TODO
    }

    load() {
        this.gaq.push([KEY.SET_ACCOUNT, this.trackingId]);
        this.gaq.push([KEY.TRACK_PAGE_VIEW]);

        const ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    }
}
