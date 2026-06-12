import { r as registerInstance, h, H as Host } from './index-25e5af33.js';
import './watchers-1cb09819.js';
import { s as state } from './store-289e460c.js';
import { a as isBusy } from './getters-1477d792.js';
import { t as trackOffer, p as preview } from './mutations-b6e8fe80.js';
import './watchers-08aa2fd2.js';
import './index-18f5a1bc.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './utils-f84b2118.js';
import './util-dfbf863e.js';
import './index-c5a96d53.js';
import './add-query-args-0e2a8393.js';
import './fetch-9e15a95d.js';
import './index-824c562b.js';
import './remove-query-args-938c53ea.js';
import './mutations-7458343f.js';

const scUpsellCss = ":host{display:block}.confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}";
const ScUpsellStyle0 = scUpsellCss;

const ScUpsell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackOffer();
        preview();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const manualPaymentMethod = (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return (h(Host, { key: '825ae2a4f3f84010cac7fd7f3785fd430308db10' }, h("slot", { key: '295c692a66a8d5a417f5624293efa4dab1a26af1' }), isBusy() && h("sc-block-ui", { key: '0d880ea8736b2cecfe0662e993e0a0629e7ed4e0', style: { 'z-index': '30', '--sc-block-ui-position': 'fixed' } }), h("sc-dialog", { key: '8aab41e8939ea2db2cb23becf2039f7f0f6bd70b', open: state.loading === 'complete', style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, h("div", { key: '7e201705d4cd9bce69932c7dcd6bae8b44634817', class: "confirm__icon" }, h("div", { key: '4e06bdda114d9d4dcb1e3b0e9cf58cea56cc76e2', class: "confirm__icon-container" }, h("sc-icon", { key: '70120a9c028272f9ede9d806418b2be14197dd26', name: "check" }))), h("sc-dashboard-module", { key: '3373a97815eacdeb2d1e38d19ef54715a9452b13', heading: ((_c = (_b = state === null || state === void 0 ? void 0 : state.text) === null || _b === void 0 ? void 0 : _b.success) === null || _c === void 0 ? void 0 : _c.title) || wp.i18n.__('Thank you!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, h("span", { key: 'cf2c4e4bc3f177cd85acbacd8543b3d7fe2f6900', slot: "description" }, ((_e = (_d = state === null || state === void 0 ? void 0 : state.text) === null || _d === void 0 ? void 0 : _d.success) === null || _e === void 0 ? void 0 : _e.description) || wp.i18n.__('Your purchase was successful. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (h("sc-alert", { key: '394b429e4117f3fa12acfa44434758cf0998c29c', type: "info", open: true, style: { 'text-align': 'left' } }, h("span", { key: 'ad9f1de6f14eb86f16ee9e5e92b4a38aeac8523d', slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), h("div", { key: 'b112a0497b50ac9cdfa878d8bcf92cc41846f855', innerHTML: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions }))), h("sc-button", { key: '09b3f6c210b4ca818ab4a99e61067d1876c070be', href: (_g = (_f = window === null || window === void 0 ? void 0 : window.scData) === null || _f === void 0 ? void 0 : _f.pages) === null || _g === void 0 ? void 0 : _g.dashboard, size: "large", type: "primary", autofocus: true }, ((_j = (_h = state === null || state === void 0 ? void 0 : state.text) === null || _h === void 0 ? void 0 : _h.success) === null || _j === void 0 ? void 0 : _j.button) || wp.i18n.__('Continue', 'surecart'), h("sc-icon", { key: '905f641e22947da1af52198d8d150dfdce1b183f', name: "arrow-right", slot: "suffix" }))))));
    }
};
ScUpsell.style = ScUpsellStyle0;

export { ScUpsell as sc_upsell };

//# sourceMappingURL=sc-upsell.entry.js.map