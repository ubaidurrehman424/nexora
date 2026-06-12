'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./watchers-cfe7be58.js');
const store = require('./store-401bdb4d.js');
const getters = require('./getters-bc65a40b.js');
const mutations = require('./mutations-2e9c52fa.js');
require('./watchers-4cadea78.js');
require('./index-c3de642f.js');
require('./google-03835677.js');
require('./currency-71fce0f0.js');
require('./google-59d23803.js');
require('./utils-a9d13080.js');
require('./util-a15c420c.js');
require('./index-fb76df07.js');
require('./add-query-args-49dcb630.js');
require('./fetch-853b19c8.js');
require('./index-7ced8198.js');
require('./remove-query-args-b57e8cd3.js');
require('./mutations-d5d6ddf1.js');

const scUpsellCss = ":host{display:block}.confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}";
const ScUpsellStyle0 = scUpsellCss;

const ScUpsell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        mutations.trackOffer();
        mutations.preview();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const manualPaymentMethod = (_a = store.state.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return (index.h(index.Host, { key: '825ae2a4f3f84010cac7fd7f3785fd430308db10' }, index.h("slot", { key: '295c692a66a8d5a417f5624293efa4dab1a26af1' }), getters.isBusy() && index.h("sc-block-ui", { key: '0d880ea8736b2cecfe0662e993e0a0629e7ed4e0', style: { 'z-index': '30', '--sc-block-ui-position': 'fixed' } }), index.h("sc-dialog", { key: '8aab41e8939ea2db2cb23becf2039f7f0f6bd70b', open: store.state.loading === 'complete', style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, index.h("div", { key: '7e201705d4cd9bce69932c7dcd6bae8b44634817', class: "confirm__icon" }, index.h("div", { key: '4e06bdda114d9d4dcb1e3b0e9cf58cea56cc76e2', class: "confirm__icon-container" }, index.h("sc-icon", { key: '70120a9c028272f9ede9d806418b2be14197dd26', name: "check" }))), index.h("sc-dashboard-module", { key: '3373a97815eacdeb2d1e38d19ef54715a9452b13', heading: ((_c = (_b = store.state === null || store.state === void 0 ? void 0 : store.state.text) === null || _b === void 0 ? void 0 : _b.success) === null || _c === void 0 ? void 0 : _c.title) || wp.i18n.__('Thank you!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, index.h("span", { key: 'cf2c4e4bc3f177cd85acbacd8543b3d7fe2f6900', slot: "description" }, ((_e = (_d = store.state === null || store.state === void 0 ? void 0 : store.state.text) === null || _d === void 0 ? void 0 : _d.success) === null || _e === void 0 ? void 0 : _e.description) || wp.i18n.__('Your purchase was successful. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (index.h("sc-alert", { key: '394b429e4117f3fa12acfa44434758cf0998c29c', type: "info", open: true, style: { 'text-align': 'left' } }, index.h("span", { key: 'ad9f1de6f14eb86f16ee9e5e92b4a38aeac8523d', slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), index.h("div", { key: 'b112a0497b50ac9cdfa878d8bcf92cc41846f855', innerHTML: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions }))), index.h("sc-button", { key: '09b3f6c210b4ca818ab4a99e61067d1876c070be', href: (_g = (_f = window === null || window === void 0 ? void 0 : window.scData) === null || _f === void 0 ? void 0 : _f.pages) === null || _g === void 0 ? void 0 : _g.dashboard, size: "large", type: "primary", autofocus: true }, ((_j = (_h = store.state === null || store.state === void 0 ? void 0 : store.state.text) === null || _h === void 0 ? void 0 : _h.success) === null || _j === void 0 ? void 0 : _j.button) || wp.i18n.__('Continue', 'surecart'), index.h("sc-icon", { key: '905f641e22947da1af52198d8d150dfdce1b183f', name: "arrow-right", slot: "suffix" }))))));
    }
};
ScUpsell.style = ScUpsellStyle0;

exports.sc_upsell = ScUpsell;

//# sourceMappingURL=sc-upsell.cjs.entry.js.map