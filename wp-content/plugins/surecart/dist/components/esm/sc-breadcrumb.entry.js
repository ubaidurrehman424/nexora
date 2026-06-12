import { r as registerInstance, h, a as getElement } from './index-25e5af33.js';

const scBreadcrumbCss = ":host{display:inline-flex}.breadcrumb-item{display:inline-flex;align-items:center;font-family:var(--sc-font-sans);font-size:var(--sc-font-size-small);font-weight:var(--sc-font-weight-semibold);color:var(--sc-breadcrumb-color, var(--sc-color-gray-600));line-height:var(--sc-line-height-normal);white-space:nowrap}.breadcrumb-item__label{display:inline-block;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-decoration:none;color:inherit;background:none;border:none;border-radius:var(--sc-border-radius-medium);padding:0;margin:0;cursor:pointer;transition:color var(--sc-transition-fast) ease}:host(:not(:last-of-type)) .breadcrumb-item__label{color:var(--sc-breadcrumb-item-label-color, var(--sc-color-gray-900))}:host(:not(:last-of-type)) .breadcrumb-item__label:hover{color:var(--sc-breadcrumb-item-label-hover-color, var(--sc-color-primary-500))}:host(:not(:last-of-type)) .breadcrumb-item__label:active{color:var(--sc-breadcrumb-item-label-active-color, var(--sc-color-gray-900))}.breadcrumb-item__label:focus{box-shadow:var(--sc-focus-ring)}.breadcrumb-item__prefix,.breadcrumb-item__suffix{display:none;flex:0 0 auto;display:flex;align-items:center}.breadcrumb-item--has-prefix .breadcrumb-item__prefix{display:inline-flex;margin-right:var(--sc-spacing-x-small)}.breadcrumb-item--has-suffix .breadcrumb-item__suffix{display:inline-flex;margin-left:var(--sc-spacing-x-small)}:host(:last-of-type) .breadcrumb-item__separator{display:none}.breadcrumb-item__separator{display:inline-flex;align-items:center;margin:0 var(--sc-spacing-x-small);user-select:none}";
const ScBreadcrumbStyle0 = scBreadcrumbCss;

const ScBreadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
        this.target = undefined;
        this.rel = 'noreferrer noopener';
        this.hasPrefix = undefined;
        this.hasSuffix = undefined;
    }
    handleSlotChange() {
        this.hasPrefix = !!this.el.querySelector('[slot="prefix"]');
        this.hasSuffix = !!this.el.querySelector('[slot="suffix"]');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (h("div", { key: '4b79c3c7fa9690a6a6764d9f3c060eb7c5a8185d', part: "base", class: {
                'breadcrumb-item': true,
                'breadcrumb-item--has-prefix': this.hasPrefix,
                'breadcrumb-item--has-suffix': this.hasSuffix,
            } }, h("span", { key: '77e4d0b0c426dab56a2e22855a37d990cc64dbf1', part: "prefix", class: "breadcrumb-item__prefix" }, h("slot", { key: '3e32322090483a7261f949762f3e177f3db73362', name: "prefix" })), h(Tag, { key: 'eaf2021791d3f6e193682fb6ab4dc6d0006154bf', part: "label", class: "breadcrumb-item__label breadcrumb-item__label--link", href: this.href, target: this.target, rel: this.rel }, h("slot", { key: '51e8f31215fb0448a21cd196d26fb3555a007c0d' })), h("span", { key: '9c9acdf10473207be02cdc67ccb43562bfa90790', part: "suffix", class: "breadcrumb-item__suffix" }, h("slot", { key: '2556f255c1043dff317d6051c80ba244c0ca304d', name: "suffix", onSlotchange: () => this.handleSlotChange() })), h("span", { key: 'dba168e91a980b94fe932f56075263ae5ad412fc', part: "separator", class: "breadcrumb-item__separator", "aria-hidden": "true" }, h("slot", { key: '4e688d4c15c131b33b02456482b6ee85386349fd', name: "separator", onSlotchange: () => this.handleSlotChange() }, h("sc-icon", { key: 'e25f6b58ef088caa681d1f737d41235b93779c56', name: "chevron-right" })))));
    }
    get el() { return getElement(this); }
};
ScBreadcrumb.style = ScBreadcrumbStyle0;

export { ScBreadcrumb as sc_breadcrumb };

//# sourceMappingURL=sc-breadcrumb.entry.js.map