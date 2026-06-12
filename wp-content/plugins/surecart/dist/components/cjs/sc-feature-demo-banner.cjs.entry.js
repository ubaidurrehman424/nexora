'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scFeatureDemoBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";
const ScFeatureDemoBannerStyle0 = scFeatureDemoBannerCss;

const ScFeatureDemoBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.url = 'https://app.surecart.com/plans';
        this.buttonText = wp.i18n.__('Upgrade Your Plan', 'surecart');
    }
    render() {
        return (index.h("div", { key: '6a70328b4d1e461384756bb9e53ffe47f5727f6c', class: { 'sc-banner': true } }, index.h("p", { key: 'd6c02f7c74a3f978865072c95b2526a96c9e04e7' }, index.h("slot", { key: '32a7d5bec649f662634b5b3430d67a27adfe1c94' }, wp.i18n.__('This is a feature demo. In order to use it, you must upgrade your plan.', 'surecart')), index.h("a", { key: 'f4ed69b2787e845e74ac588be9421d8b296ea739', href: this.url, target: "_blank" }, index.h("slot", { key: '2afd66ff381ae5e6ce448a25b987d96b68c5e514', name: "link" }, this.buttonText, " ", index.h("sc-icon", { key: '3ccf8d50e7fe10ead99762de976e20252dc8d738', name: "arrow-right" }))))));
    }
};
ScFeatureDemoBanner.style = ScFeatureDemoBannerStyle0;

exports.sc_feature_demo_banner = ScFeatureDemoBanner;

//# sourceMappingURL=sc-feature-demo-banner.cjs.entry.js.map