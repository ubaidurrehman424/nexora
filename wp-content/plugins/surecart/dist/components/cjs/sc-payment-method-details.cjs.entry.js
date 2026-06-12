'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const ScPaymentMethodDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.paymentMethod = undefined;
        this.editHandler = undefined;
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (index.h("sc-card", { key: '5d651c5f39fcf7583819c5008810687b261e9a64' }, index.h("sc-flex", { key: '571408bd4eac6c7d792f1b113bf832d17490668c', alignItems: "center", justifyContent: "flex-start", style: { gap: '0.5em' } }, index.h("sc-payment-method", { key: 'ef3a232e7e5dcf40a404313398d4c44d520175e1', paymentMethod: this.paymentMethod }), index.h("div", { key: 'eb0c177db20b0988164a5dacf50577660aafe3e8' }, !!((_b = (_a = this.paymentMethod) === null || _a === void 0 ? void 0 : _a.card) === null || _b === void 0 ? void 0 : _b.exp_month) && (index.h("span", { key: 'cdd01ce0114e75bc8ef29a040b7f9ad390743e63' }, 
        // Translators: %d/%d is month and year of expiration.
        wp.i18n.sprintf(wp.i18n.__('Exp. %d/%d', 'surecart'), (_d = (_c = this.paymentMethod) === null || _c === void 0 ? void 0 : _c.card) === null || _d === void 0 ? void 0 : _d.exp_month, (_f = (_e = this.paymentMethod) === null || _e === void 0 ? void 0 : _e.card) === null || _f === void 0 ? void 0 : _f.exp_year))), !!((_h = (_g = this.paymentMethod) === null || _g === void 0 ? void 0 : _g.paypal_account) === null || _h === void 0 ? void 0 : _h.email) && ((_k = (_j = this.paymentMethod) === null || _j === void 0 ? void 0 : _j.paypal_account) === null || _k === void 0 ? void 0 : _k.email)), index.h("sc-button", { key: '114b809f9b8dc27bb95fe69310775b721d13857e', type: "text", circle: true, onClick: this.editHandler }, index.h("sc-icon", { key: '65519fc51b08cd60eb9264ef07f2ce1b45b2a69d', name: "edit-2" })))));
    }
};

exports.sc_payment_method_details = ScPaymentMethodDetails;

//# sourceMappingURL=sc-payment-method-details.cjs.entry.js.map