'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scCardCss = ":host{display:block;--overflow:visible}.card{font-family:var(--sc-font-sans);overflow:var(--overflow);display:block}.card:not(.card--borderless){padding:var(--sc-card-padding, var(--sc-spacing-large));background:var(--sc-card-background-color, var(--sc-color-white));border:1px solid var(--sc-card-border-color, var(--sc-color-gray-300));border-radius:var(--sc-card-border-radius, var(--sc-input-border-radius-medium));box-shadow:var(--sc-shadow-small)}.card:not(.card--borderless).card--no-padding{padding:0}.title--divider{display:none}.card--has-title-slot .card--title{font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense)}.card--has-title-slot .title--divider{display:block}::slotted(*){margin-bottom:var(--sc-form-row-spacing)}::slotted(*:first-child){margin-top:0}::slotted(*:last-child){margin-bottom:0 !important}";
const ScCardStyle0 = scCardCss;

const ScCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.noDivider = undefined;
        this.borderless = undefined;
        this.noPadding = undefined;
        this.href = undefined;
        this.loading = undefined;
        this.hasTitleSlot = undefined;
    }
    componentWillLoad() {
        this.handleSlotChange();
    }
    handleSlotChange() {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (index.h(Tag, { key: '1ab8cc6eae97832945b76f7f579401f01ebe82e9', part: "base", class: {
                'card': true,
                'card--borderless': this.borderless,
                'card--no-padding': this.noPadding,
            } }, index.h("slot", { key: '91f3aeece8c2f09ffaec1fa237b50ea62a106f37' })));
    }
    get el() { return index.getElement(this); }
};
ScCard.style = ScCardStyle0;

const scDashboardModuleCss = ":host{display:block;position:relative}.dashboard-module{display:grid;gap:var(--sc-dashboard-module-spacing, 1em)}.dashboard-module>*,.dashboard-module ::slotted(*){min-width:0}.heading{font-family:var(--sc-font-sans);display:flex;flex-wrap:wrap;gap:1em;align-items:center;justify-content:space-between}.heading__text{display:grid;flex:1;gap:calc(var(--sc-dashboard-module-spacing, 1em) / 2)}@media screen and (min-width: 720px){.heading{gap:2em}}.heading__title{font-size:var(--sc-dashbaord-module-heading-size, var(--sc-font-size-x-large));font-weight:var(--sc-dashbaord-module-heading-weight, var(--sc-font-weight-bold));line-height:var(--sc-dashbaord-module-heading-line-height, var(--sc-line-height-dense));white-space:nowrap}.heading__description{font-size:var(--sc-font-size-normal);line-height:var(--sc-line-height-dense);opacity:0.85}";
const ScDashboardModuleStyle0 = scDashboardModuleCss;

const ScDashboardModule = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.error = undefined;
        this.loading = undefined;
    }
    render() {
        return (index.h("div", { key: '917255e15eb8a70b7624348542becca0d246f98c', class: "dashboard-module", part: "base" }, !!this.error && (index.h("sc-alert", { key: '900c7b1fa4c47c19ef9a47a860900e2e98c0ada3', exportparts: "base:error__base, icon:error__icon, text:error__text, title:error__title, message:error__message", open: !!this.error, type: "danger" }, index.h("span", { key: '4916b142c91b9029f4b6aebe2c5e5cb5f18d5426', slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), index.h("div", { key: '35f58ef6dabedbe0c0ccbba15845b5e18bada963', class: "heading", part: "heading" }, index.h("div", { key: '638530cd8c8f8960bb77a1b052b35f1c9acdf27c', class: "heading__text", part: "heading-text" }, index.h("div", { key: 'f64f1fb1ad8babfd538de6e758dd9559d33eae24', class: "heading__title", part: "heading-title" }, index.h("slot", { key: '6c5684381669e11eb84b910ce2790d396666dcf2', name: "heading", "aria-label": this.heading }, this.heading)), index.h("div", { key: '99f986f36e90af78ace444040838b10d68d5812f', class: "heading__description", part: "heading-description" }, index.h("slot", { key: '430949e636afb13dd6d8114a8b581ce3de4d8a0d', name: "description" }))), index.h("slot", { key: 'a85991d806c15cda4fd7924eaf50af56fae49882', name: "end" })), index.h("slot", { key: '81c9da168bb7d28b6328f7e357628f9ba4e27eaa' })));
    }
};
ScDashboardModule.style = ScDashboardModuleStyle0;

exports.sc_card = ScCard;
exports.sc_dashboard_module = ScDashboardModule;

//# sourceMappingURL=sc-card_2.cjs.entry.js.map