/******************************************************************
 *
 @ Item          NXT-YOU // Portfolio Website
 @ Version       1.0
 @ Author        Fabian Piper <fabianpiper@web.de>
 @ Website        https://nxt-you.de

 ******************************************************************/
import $ from 'jquery';
import {App} from "./app"

$(document).ready(async () => {
    "use strict";
    window.App = new App(false);
});
