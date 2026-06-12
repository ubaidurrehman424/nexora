'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./watchers-cfe7be58.js');
const store = require('./store-401bdb4d.js');
const mutations$1 = require('./mutations-d5d6ddf1.js');
const watchers = require('./watchers-4cadea78.js');
const mutations = require('./mutations-2e9c52fa.js');
const getters = require('./getters-bc65a40b.js');
require('./add-query-args-49dcb630.js');
require('./utils-a9d13080.js');
require('./index-c3de642f.js');
require('./index-fb76df07.js');
require('./google-03835677.js');
require('./currency-71fce0f0.js');
require('./google-59d23803.js');
require('./util-a15c420c.js');
require('./fetch-853b19c8.js');
require('./index-7ced8198.js');
require('./remove-query-args-b57e8cd3.js');

const scUpsellSubmitButtonCss = "sc-upsell-submit-button{position:relative;display:block}sc-upsell-submit-button .wp-block-button__link{position:relative;text-decoration:none}sc-upsell-submit-button .wp-block-button__link span sc-icon{padding-right:var(--sc-spacing-small)}sc-upsell-submit-button .wp-block-button__link [data-text],sc-upsell-submit-button .wp-block-button__link sc-spinner{display:flex;align-items:center;justify-content:center}sc-upsell-submit-button .sc-block-button--sold-out,sc-upsell-submit-button .sc-block-button--unavailable{display:none !important}sc-upsell-submit-button.is-unavailable .sc-block-button__link{display:none !important}sc-upsell-submit-button.is-unavailable .sc-block-button--unavailable{display:initial !important}sc-upsell-submit-button.is-sold-out .sc-block-button__link{display:none !important}sc-upsell-submit-button.is-sold-out .sc-block-button--sold-out{display:initial !important}sc-upsell-submit-button sc-spinner::part(base){--indicator-color:currentColor;--spinner-size:12px;position:absolute;top:calc(50% - var(--spinner-size) + var(--spinner-size) / 4);left:calc(50% - var(--spinner-size) + var(--spinner-size) / 4)}sc-upsell-submit-button [data-text],sc-upsell-submit-button [data-loader]{transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}sc-upsell-submit-button [data-loader]{opacity:0;visibility:hidden}sc-upsell-submit-button.is-disabled{pointer-events:none}sc-upsell-submit-button.is-busy [data-text]{opacity:0;visibility:hidden}sc-upsell-submit-button.is-busy [data-loader]{opacity:1;visibility:visible}sc-upsell-submit-button.is-out-of-stock [data-text]{opacity:0.6}";
const ScUpsellSubmitButtonStyle0 = scUpsellSubmitButtonCss;

const ScUpsellSubmitButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getUpsellProductId() {
        var _a;
        return ((_a = store.state.product) === null || _a === void 0 ? void 0 : _a.id) || '';
    }
    async handleAddToOrderClick(e) {
        e.preventDefault();
        mutations.accept();
    }
    render() {
        return (index.h(index.Host, { key: '312c13a59cb9d6debf1965dcfc3cae8be4143ae9', class: {
                'is-busy': getters.isBusy(),
                'is-disabled': store.state.disabled,
                // TODO: change this to out of stock error message.
                'is-sold-out': (watchers.isProductOutOfStock(this.getUpsellProductId()) && !watchers.isSelectedVariantMissing(this.getUpsellProductId())) || (mutations$1.state === null || mutations$1.state === void 0 ? void 0 : mutations$1.state.code) === 'out_of_stock',
                'is-unavailable': watchers.isSelectedVariantMissing(this.getUpsellProductId()) || (mutations$1.state === null || mutations$1.state === void 0 ? void 0 : mutations$1.state.code) === 'expired',
            }, onClick: e => this.handleAddToOrderClick(e) }, index.h("slot", { key: '993f199a226383fcde5f2bd67077c0b302d6c759' })));
    }
    get el() { return index.getElement(this); }
};
ScUpsellSubmitButton.style = ScUpsellSubmitButtonStyle0;

exports.sc_upsell_submit_button = ScUpsellSubmitButton;

//# sourceMappingURL=sc-upsell-submit-button.cjs.entry.js.map