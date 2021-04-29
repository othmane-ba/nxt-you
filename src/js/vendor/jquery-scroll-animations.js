/**
 * jQuery ScrollAnimations
 * @version 1.0.1
 * @author Westley Mon @cavemon, Mindgruve @mindgruve
 * @copyright (c) 2017 Mindgruve / Westley Mon
 * @license MIT License
 */
import $ from 'jquery';


var pluginName = "scrollAnimations",
    /**
     * This SearchHintOptions object can be overridden during initialization
     * @type {{offset: number}}
     */
    defaults = {
        offset: 0.5
    };

var timer;

/**
 * ScrollAnimations - applies an animate class to elements when scrolled into the viewport
 *
 * @author Westley Mon <wmarchment@mindgruve.com>
 * @version 1.0.1
 *
 * @param {jQuery} element jQuery instance of selected elements
 * @param {ScrollAnimationsOptions} options Custom options will be merged with the defaults
 * @constructor
 */
function ScrollAnimations(element, options) {
    if (element) {
        this.element = element;
        this.animationElements = [];
        this.triggerPoint = null;
        this.lastScrollPos = -1;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        window.onload = this.init();
    }
}

ScrollAnimations.prototype = {

    init: function () {
        var _this = this;

        var $els = $(this.element);

        window.requestAnimationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame
            || function (f) {
                setTimeout(f, 1000 / 60)
            };

        //setup all items
        _this.setup($els);

        // start an interval to update the page rather than onscroll
        _this.updatePage();

        $(window).on('resize', function () {
            _this.resize();
        });
    },

    resize: function () {
        var _this = this;

        clearTimeout(timer);

        timer = setTimeout(function () {
            _this.setTriggerpoint();
        }, 50);
    },

    setTriggerpoint: function () {
        this.triggerPoint = window.innerHeight * this.options.offset;
    },

    setup: function (items) {
        this.setTriggerpoint();

        var $this = $(items),
            $children = $this.find('[data-animation-child]');

        if ($children.length) {

            // setup children
            $children.each(function () {
                var $child = $(this);
                var $delay = $child.attr('data-animation-delay');

                $child.css({
                    '-webkit-animation-delay': $delay,
                    '-moz-animation-delay': $delay,
                    '-ms-animation-delay': $delay,
                    '-o-animation-delay': $delay,
                    'animation-delay': $delay
                });
            });

        } else {

            var $delay = $this.attr('data-animation-delay');

            // setup single item
            $this.css({
                '-webkit-animation-delay': $delay,
                '-moz-animation-delay': $delay,
                '-ms-animation-delay': $delay,
                '-o-animation-delay': $delay,
                'animation-delay': $delay
            });

        }

        this.animationElements.push($this);

    },

    updatePage: function () {
        var _this = this;

        this.animateElements();

        requestAnimationFrame(this.updatePage.bind(this));
    },

    animateElements: function () {
        var _this = this;
        var scrollPos = window.pageYOffset;

        // have we scrolled since the last rAF?  if not, return.
        if (scrollPos === this.lastScrollPos) return;

        this.lastScrollPos = scrollPos;

        $(_this.animationElements).each(function () {
            var $this = $(this),
                $children = $this.find('[data-animation-child]');

            if ($this.hasClass('animated') || (scrollPos < $this.offset().top - _this.triggerPoint))
                return; // don't continue if its already been animated or scroll position hasn't hit the trigger point yet

            if ($children.length) {

                $this.addClass('animated');

                // animate the children
                $children.each(function () {
                    $(this).addClass('animated').addClass($(this).attr('data-animation'))
                });

            } else {

                // animate the single item
                $this.addClass('animated').addClass($this.attr('data-animation'));

            }
        });


    }

};

$.fn[pluginName] = function (options) {
    return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
            $.data(this, "plugin_" + pluginName,
                new ScrollAnimations(this, options));
        }
    });
};

export default $;
