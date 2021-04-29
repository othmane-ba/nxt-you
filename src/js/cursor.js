export class Cursor {
    constructor() {
        this.elem = $(".pointer");
        this.pointer = {
            primary: $(".red-bg"),
            large: $(".pointer-large"),
            small: $(".pointer-small"),
            img: $(".pointer-right"),
            zoom: $(".pointer-zoom"),
            open: $(".pointer-open")
        }
        this.className = {
            primary: "black",
            large: "large",
            small: "small",
            img: "right",
            zoom: "zoom",
            open: "open"
        }
        this.init();
    }

    init() {
        $(document).mousemove((n) => {
            this.elem.css("left", n.clientX + "px");
            this.elem.css("top", n.clientY + "px");
        });
        Object.keys(this.pointer).forEach(key => {
            this._registerPointerClassToggle(this.pointer[key], this.className[key]);
        })
    }

    _registerPointerClassToggle(elem, className) {
        elem.on("mouseenter", () => {
            this.elem.addClass(className)
        })
            .on("mouseleave", () => {
                this.elem.removeClass(className)
            })
    }
}
