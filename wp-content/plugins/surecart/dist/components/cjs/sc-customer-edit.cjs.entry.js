'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./fetch-853b19c8.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
const index$1 = require('./index-7ced8198.js');
require('./remove-query-args-b57e8cd3.js');

const scCustomerEditCss = ":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}";
const ScCustomerEditStyle0 = scCustomerEditCss;

const ScCustomerEdit = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.customer = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    async handleSubmit(e) {
        var _a, _b;
        this.loading = true;
        try {
            const { email, first_name, last_name, phone, billing_matches_shipping, shipping_name, shipping_city, 'tax_identifier.number_type': tax_identifier_number_type, 'tax_identifier.number': tax_identifier_number, shipping_country, shipping_line_1, shipping_line_2, shipping_postal_code, shipping_state, billing_name, billing_city, billing_country, billing_line_1, billing_line_2, billing_postal_code, billing_state, } = await e.target.getFormJson();
            this.customer.billing_address = {
                name: billing_name,
                city: billing_city,
                country: billing_country,
                line_1: billing_line_1,
                line_2: billing_line_2,
                postal_code: billing_postal_code,
                state: billing_state,
            };
            this.customer.shipping_address = {
                name: shipping_name,
                city: shipping_city,
                country: shipping_country,
                line_1: shipping_line_1,
                line_2: shipping_line_2,
                postal_code: shipping_postal_code,
                state: shipping_state,
            };
            await index$1.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/customers/${(_a = this.customer) === null || _a === void 0 ? void 0 : _a.id}`, { expand: ['tax_identifier'] }),
                method: 'PATCH',
                data: {
                    email,
                    first_name,
                    last_name,
                    phone,
                    billing_matches_shipping: billing_matches_shipping === true || billing_matches_shipping === 'on',
                    shipping_address: this.customer.shipping_address,
                    billing_address: this.customer.billing_address,
                    ...(tax_identifier_number && tax_identifier_number_type
                        ? {
                            tax_identifier: {
                                number: tax_identifier_number,
                                number_type: tax_identifier_number_type,
                            },
                        }
                        : {}),
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = ((_b = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _b === void 0 ? void 0 : _b.length) ? e.additional_errors.map(err => err.message).join(', ') : (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (index.h("sc-dashboard-module", { key: 'a98f2574174a213f82aff1da5de2fd3d57c5ee40', class: "customer-edit", error: this.error }, index.h("span", { key: '4e971fb63300b57df168a89eb8d3465e63058f8d', slot: "heading" }, this.heading || wp.i18n.__('Update Billing Details', 'surecart'), ' ', !((_a = this === null || this === void 0 ? void 0 : this.customer) === null || _a === void 0 ? void 0 : _a.live_mode) && (index.h("sc-tag", { key: 'ff9ec704fd6881e080d1783a46e27cb6f1e7ceaa', type: "warning", size: "small" }, wp.i18n.__('Test', 'surecart')))), index.h("sc-card", { key: 'ffc117ad7dad4f2e422ca51734188f6ae457ea93' }, index.h("sc-form", { key: '3e38bcd2ef6b6cb99f216eb939b2b2497b9b1c04', onScFormSubmit: e => this.handleSubmit(e) }, index.h("sc-columns", { key: '7b3e2573f57e5a37549d9ff5a2cbb0bc9e544f45', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, index.h("sc-column", { key: '6924d8e9ca85967d49300d925a43ea13311737a5' }, index.h("sc-input", { key: '593c99a7473cf44be10e21091b166658c351652f', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.customer) === null || _b === void 0 ? void 0 : _b.first_name })), index.h("sc-column", { key: 'f9f712bdece7fbc4b7924f18b4686d9e4072cdf5' }, index.h("sc-input", { key: '6eef3b3553a9a61b8732bb0902750a8b4a7b6d74', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.customer) === null || _c === void 0 ? void 0 : _c.last_name }))), index.h("sc-column", { key: 'fdb1f1dd1fa58106712fa3bf80c85f98f1f2930a' }, index.h("sc-phone-input", { key: 'f254c078519533aa4699805eb482522579f0bd37', label: wp.i18n.__('Phone', 'surecart'), name: "phone", value: (_d = this.customer) === null || _d === void 0 ? void 0 : _d.phone })), index.h("sc-flex", { key: '5b4f01983228c854158f6b30483823519a74f3f5', style: { '--sc-flex-column-gap': 'var(--sc-spacing-medium)' }, flexDirection: "column" }, index.h("div", { key: '97b0da5fd51f1192ea2758b2ff73df738f5f8a49' }, index.h("sc-address", { key: 'a7bbeebb1efa7b29495448f645282587c2bb975f', label: wp.i18n.__('Shipping Address', 'surecart'), showName: true, address: {
                ...(_e = this.customer) === null || _e === void 0 ? void 0 : _e.shipping_address,
            }, showLine2: true, required: false, names: {
                name: 'shipping_name',
                country: 'shipping_country',
                line_1: 'shipping_line_1',
                line_2: 'shipping_line_2',
                city: 'shipping_city',
                postal_code: 'shipping_postal_code',
                state: 'shipping_state',
            } })), index.h("div", { key: '9bc391963a3a6e87fba721409c92f5cfc6d264f8' }, index.h("sc-checkbox", { key: '82ff06ed05e175c042376a0da259de7f47836973', name: "billing_matches_shipping", checked: (_f = this.customer) === null || _f === void 0 ? void 0 : _f.billing_matches_shipping, onScChange: e => {
                this.customer = {
                    ...this.customer,
                    billing_matches_shipping: e.target.checked,
                };
            }, value: "on" }, wp.i18n.__('Billing address is same as shipping', 'surecart'))), index.h("div", { key: 'fdefbbb70d9b1198b2bcdc632c8a6f281d28181d', style: { display: ((_g = this.customer) === null || _g === void 0 ? void 0 : _g.billing_matches_shipping) ? 'none' : 'block' } }, index.h("sc-address", { key: 'a5db072f80c8dde6436373579de6f527e0455236', label: wp.i18n.__('Billing Address', 'surecart'), showName: true, address: {
                ...(_h = this.customer) === null || _h === void 0 ? void 0 : _h.billing_address,
            }, showLine2: true, names: {
                name: 'billing_name',
                country: 'billing_country',
                line_1: 'billing_line_1',
                line_2: 'billing_line_2',
                city: 'billing_city',
                postal_code: 'billing_postal_code',
                state: 'billing_state',
            }, required: true })), index.h("sc-tax-id-input", { key: 'cfe575912b2f928a2ef4bc3bb8352a46fe9375f1', show: true, number: (_k = (_j = this.customer) === null || _j === void 0 ? void 0 : _j.tax_identifier) === null || _k === void 0 ? void 0 : _k.number, type: (_m = (_l = this.customer) === null || _l === void 0 ? void 0 : _l.tax_identifier) === null || _m === void 0 ? void 0 : _m.number_type })), index.h("div", { key: '63c655477269f99dbfa7739694d42add065943b5' }, index.h("sc-button", { key: 'ed58acf9ab50f7fb02898e4b2608ac0a3710602d', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && index.h("sc-block-ui", { key: '71fb6e532b16f94ff6a6c6b540b6ba14b51d39b8', spinner: true })));
    }
};
ScCustomerEdit.style = ScCustomerEditStyle0;

exports.sc_customer_edit = ScCustomerEdit;

//# sourceMappingURL=sc-customer-edit.cjs.entry.js.map