'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const animationRegistry = require('./animation-registry-b597d2f4.js');
const pageAlign = require('./page-align-5a2ab493.js');
const index$1 = require('./index-fb76df07.js');

const scToggleCss = ":host{display:block;font-family:var(--sc-font-sans);--sc-toggle-padding:var(--sc-spacing-medium)}::slotted([slot=summary]){display:flex;align-items:center;flex-direction:flex-start;gap:var(--sc-spacing-x-small)}.details{border-radius:var(--sc-border-radius-medium);background-color:var(--sc-toggle-background-color, var(--sc-color-white));overflow-anchor:none}.details__radio{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;background-color:var(--sc-input-background-color);color:transparent;border-radius:50%;border:solid var(--sc-toggle-border-width, var(--sc-input-border-width)) var(--sc-toggle-border-color, var(--sc-input-border-color));background-color:var(--sc-input-background-color);display:inline-flex;color:transparent;width:var(--sc-toggle-radio-size, var(--sc-radio-size));height:var(--sc-toggle-radio-size, var(--sc-radio-size));transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.details__radio svg{width:100%;height:100%}.details--open .details__radio{color:var(--sc-color-white);border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.details:not(.details--borderless){border:solid 1px var(--sc-toggle-border-color, var(--sc-color-gray-200))}.details--disabled{opacity:0.5}.details__header{display:flex;align-items:center;border-radius:inherit;padding:var(--sc-toggle-header-padding, var(--sc-toggle-padding));user-select:none;cursor:pointer;color:var(--sc-toggle-header-color, var(--sc-input-label-color));gap:0.75em}.details__header:focus{box-shadow:var(--sc-focus-ring)}.details__header:focus-visible{box-shadow:var(--sc-focus-ring)}.details--disabled .details__header{cursor:not-allowed}.details--disabled .details__header:focus-visible{outline:none;box-shadow:none}.details__summary{flex:1 1 auto;display:flex;align-items:center}.details__summary-icon{flex:0 0 auto;display:flex;align-items:center;transition:var(--sc-transition-medium) transform ease}.details--open .details__summary-icon{transform:rotate(90deg)}.details__content{padding:var(--sc-toggle-content-padding, var(--sc-toggle-padding));padding-top:calc(var(--sc-toggle-content-padding, var(--sc-toggle-padding)) / 4)}.details--shady .details__body{border-top:solid var(--sc-input-border-width) var(--sc-input-border-color);background:var(--sc-toggle-shady-color, var(--sc-color-gray-50))}.details--shady .details__content{padding-top:var(--sc-toggle-content-padding, var(--sc-toggle-padding))}";
const ScToggleStyle0 = scToggleCss;

const ScToggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scShow = index.createEvent(this, "scShow", 7);
        this.scHide = index.createEvent(this, "scHide", 7);
        this.open = false;
        this.summary = undefined;
        this.disabled = false;
        this.borderless = false;
        this.shady = false;
        this.showControl = false;
        this.showIcon = true;
        this.collapsible = true;
    }
    componentDidLoad() {
        this.body.hidden = !this.open;
        this.body.style.height = this.open ? 'auto' : '0';
    }
    /** Shows the details. */
    async show() {
        if (this.open || this.disabled) {
            return undefined;
        }
        this.open = true;
        index$1.speak(wp.i18n.__('Summary Shown', 'surecart'));
    }
    /** Hides the details */
    async hide() {
        if (!this.open || this.disabled || !this.collapsible) {
            return undefined;
        }
        this.open = false;
        index$1.speak(wp.i18n.__('Summary Hidden', 'surecart'));
    }
    handleSummaryClick() {
        if (!this.disabled) {
            if (this.open) {
                this.hide();
            }
            else {
                this.show();
            }
            this.header.focus();
        }
    }
    handleSummaryKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (this.open) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            this.hide();
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            this.show();
        }
    }
    async handleOpenChange() {
        if (this.open) {
            this.scShow.emit();
            await animationRegistry.stopAnimations(this.body);
            this.body.hidden = false;
            this.body.style.overflow = 'hidden';
            const { keyframes, options } = animationRegistry.getAnimation(this.el, 'details.show');
            await animationRegistry.animateTo(this.body, animationRegistry.shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
            this.body.style.height = 'auto';
            this.body.style.overflow = 'visible';
        }
        else {
            this.scHide.emit();
            await animationRegistry.stopAnimations(this.body);
            this.body.style.overflow = 'hidden';
            const { keyframes, options } = animationRegistry.getAnimation(this.el, 'details.hide');
            await animationRegistry.animateTo(this.body, animationRegistry.shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
            this.body.hidden = true;
            this.body.style.height = 'auto';
            this.body.style.overflow = 'visible';
        }
    }
    render() {
        return (index.h("div", { key: 'c9320c44869a759006746ec77575ea2c2cd2ac57', part: "base", class: {
                'details': true,
                'details--open': this.open,
                'details--disabled': this.disabled,
                'details--borderless': this.borderless,
                'details--shady': this.shady,
                'details--is-rtl': pageAlign.isRtl(),
            } }, index.h("header", { key: '5f0d8d7070d5e3ee4465e5474f01f740eda5fb1c', ref: el => (this.header = el), part: "header", id: "header", class: "details__header", role: "button", "aria-expanded": this.open ? 'true' : 'false', "aria-controls": "content", "aria-disabled": this.disabled ? 'true' : 'false', tabindex: this.disabled ? '-1' : '0', onClick: () => this.handleSummaryClick(), onKeyDown: e => this.handleSummaryKeyDown(e) }, this.showControl && (index.h("span", { key: '50b6035e24fb42c4ba3f73f7bf992661f9475df2', part: "radio", class: "details__radio" }, index.h("svg", { key: 'd9ef7ace72f1cee9e6fc1cc9c81922e0a635fd73', viewBox: "0 0 16 16" }, index.h("g", { key: '361c0af550cfa368d452fb480b8c77db79c6aab5', stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, index.h("g", { key: 'bca741dcd1623daa438ce9814fda8b846463142c', fill: "currentColor" }, index.h("circle", { key: 'ff797838e0b9bd75f59e40b9228ed01714970469', cx: "8", cy: "8", r: "3.42857143" })))))), index.h("div", { key: 'baf6a7be0a6314e43e8d7a2d87a9b881c9a8f49a', part: "summary", class: "details__summary" }, index.h("slot", { key: 'bbc47c6801b907981dd3cbc2758d465be28f297c', name: "summary" }, this.summary)), this.showIcon && (index.h("span", { key: 'b1ffe9eef4af59193367d13da862393296950b94', part: "summary-icon", class: "details__summary-icon" }, index.h("slot", { key: 'abdb5d5b29d084bae0ac46685c3b16a910cf57e3', name: "icon" }, index.h("sc-icon", { key: 'e4bea8e3edf7ad14652ca526bb01d8e893a86a86', name: "chevron-right" }))))), index.h("div", { key: '1ed7a41b283a5a25ff695e065c80531b45646f20', class: "details__body", ref: el => (this.body = el), part: "body" }, index.h("div", { key: '3f99e1dcc41e11b39e2182fe2801b67d70790a8a', part: "content", id: "content", class: "details__content", role: "region", "aria-labelledby": "header" }, index.h("slot", { key: 'b7f4e9031e6318b56c910bc7ea459a3d3dd5e6d5' })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
animationRegistry.setDefaultAnimation('details.show', {
    keyframes: [
        { height: '0', opacity: '0' },
        { height: 'auto', opacity: '1' },
    ],
    options: { duration: 250, easing: 'ease' },
});
animationRegistry.setDefaultAnimation('details.hide', {
    keyframes: [
        { height: 'auto', opacity: '1' },
        { height: '0', opacity: '0' },
    ],
    options: { duration: 250, easing: 'ease' },
});
ScToggle.style = ScToggleStyle0;

exports.sc_toggle = ScToggle;

//# sourceMappingURL=sc-toggle.cjs.entry.js.map