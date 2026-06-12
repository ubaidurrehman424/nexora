import { r as registerInstance, h } from './index-25e5af33.js';
import { i as intervalString } from './price-1ff6aa07.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './currency-a0c9bff4.js';

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.currencyCode = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (h("sc-dashboard-module", { key: '4a35e1114f863dfc79fa4694e2941a594535af36', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, h("sc-card", { key: '77414bee1502459d44fd69e40bf4524118717396' }, h("sc-form", { key: '9519d021e34e84d91d02c26351d5f6a55a69be0d', onScSubmit: e => this.handleSubmit(e) }, h("sc-price-input", { key: '9bec5ccec951d14d53e886e2c138b0ba72ab455e', label: "Amount", name: "ad_hoc_amount", currencyCode: this.currencyCode, autofocus: true, required: true }, h("span", { key: '58ab6d75deaa8c9d38564938f6403b48f1479580', slot: "suffix", style: { opacity: '0.75' } }, intervalString(this.price))), h("sc-button", { key: 'cbc32465ecb3991997344b9e36c05a0f0a0f1e3e', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", h("sc-icon", { key: '5506388e1ebab66cea771c15a1efdb061a1629bf', name: "arrow-right", slot: "suffix" })))), this.busy && h("sc-block-ui", { key: '34b2fbbd163b67f8bdbea04ab9a210486ecbc386', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

export { ScSubscriptionAdHocConfirm as sc_subscription_ad_hoc_confirm };

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.entry.js.map