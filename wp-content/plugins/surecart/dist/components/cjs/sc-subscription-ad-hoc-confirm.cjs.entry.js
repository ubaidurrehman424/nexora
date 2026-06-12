'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const price = require('./price-da3cab3d.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./currency-71fce0f0.js');

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.currencyCode = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs.addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (index.h("sc-dashboard-module", { key: '4a35e1114f863dfc79fa4694e2941a594535af36', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, index.h("sc-card", { key: '77414bee1502459d44fd69e40bf4524118717396' }, index.h("sc-form", { key: '9519d021e34e84d91d02c26351d5f6a55a69be0d', onScSubmit: e => this.handleSubmit(e) }, index.h("sc-price-input", { key: '9bec5ccec951d14d53e886e2c138b0ba72ab455e', label: "Amount", name: "ad_hoc_amount", currencyCode: this.currencyCode, autofocus: true, required: true }, index.h("span", { key: '58ab6d75deaa8c9d38564938f6403b48f1479580', slot: "suffix", style: { opacity: '0.75' } }, price.intervalString(this.price))), index.h("sc-button", { key: 'cbc32465ecb3991997344b9e36c05a0f0a0f1e3e', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", index.h("sc-icon", { key: '5506388e1ebab66cea771c15a1efdb061a1629bf', name: "arrow-right", slot: "suffix" })))), this.busy && index.h("sc-block-ui", { key: '34b2fbbd163b67f8bdbea04ab9a210486ecbc386', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

exports.sc_subscription_ad_hoc_confirm = ScSubscriptionAdHocConfirm;

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.cjs.entry.js.map