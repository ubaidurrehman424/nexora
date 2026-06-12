'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const scHeadingCss = ":host{display:block}.heading{font-family:var(--sc-font-sans);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.heading--small .heading__title{font-size:var(--sc-font-size-small);text-transform:uppercase}.heading__text{width:100%}.heading__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense);white-space:normal}.heading__description{font-size:var(--sc-font-size-normal);line-height:var(--sc-line-height-dense);color:var(--sc-color-gray-500)}";
const ScHeadingStyle0 = scHeadingCss;

const ScHeading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'medium';
    }
    render() {
        return (index.h("div", { key: '935099e0b4b8135479ea1121b7ce2f1fdb8a135e', part: "base", class: {
                'heading': true,
                'heading--small': this.size === 'small',
                'heading--medium': this.size === 'medium',
                'heading--large': this.size === 'large',
            } }, index.h("div", { key: '538a45869b74fcdcb1839a6d2e74c0a81dec677e', class: { heading__text: true } }, index.h("div", { key: 'c4d5f199f846f4ffe94365c65650068b0e64d83f', class: "heading__title", part: "title" }, index.h("slot", { key: '978a8505a926ad3c01cb2ff10496d2987bf2c187' })), index.h("div", { key: '819d2e6425807741eda9a7c81796fd760585ef3a', class: "heading__description", part: "description" }, index.h("slot", { key: '842457d70a287604da2e03856249e6d2c4b46328', name: "description" }))), index.h("slot", { key: 'b905a6e1f76a3fda3d9d2cf4e10f6a663101edb0', name: "end" })));
    }
    get el() { return index.getElement(this); }
};
ScHeading.style = ScHeadingStyle0;

const ScOrderConfirmComponentsValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkout = undefined;
        this.hasManualInstructions = undefined;
    }
    handleOrderChange() {
        var _a;
        if ((_a = this.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment) {
            this.addManualPaymentInstructions();
        }
    }
    addManualPaymentInstructions() {
        var _a, _b;
        if (this.hasManualInstructions)
            return;
        const details = this.el.shadowRoot
            .querySelector('slot')
            .assignedElements({ flatten: true })
            .find(element => element.tagName === 'SC-ORDER-CONFIRMATION-DETAILS');
        const address = document.createElement('sc-order-manual-instructions');
        (_b = (_a = details === null || details === void 0 ? void 0 : details.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore) === null || _b === void 0 ? void 0 : _b.call(_a, address, details);
        this.hasManualInstructions = true;
    }
    componentWillLoad() {
        this.hasManualInstructions = !!this.el.querySelector('sc-order-manual-instructions');
    }
    render() {
        return index.h("slot", { key: '47a86d761e5c5c23569e103a2d15ab9f7ef2e405' });
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "checkout": ["handleOrderChange"]
    }; }
};

exports.sc_heading = ScHeading;
exports.sc_order_confirm_components_validator = ScOrderConfirmComponentsValidator;

//# sourceMappingURL=sc-heading_2.cjs.entry.js.map