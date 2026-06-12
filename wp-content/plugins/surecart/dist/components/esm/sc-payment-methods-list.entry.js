import { r as registerInstance, h, a as getElement } from './index-25e5af33.js';
import './fetch-9e15a95d.js';
import { o as onFirstVisible } from './lazy-deb42890.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import { a as apiFetch } from './index-824c562b.js';
import './remove-query-args-938c53ea.js';

const scPaymentMethodsListCss = ":host{display:block;position:relative}.payment-methods-list{display:grid;gap:0.5em}.payment-methods-list sc-heading a{text-decoration:none;font-weight:var(--sc-font-weight-semibold);display:inline-flex;align-items:center;gap:0.25em;color:var(--sc-color-primary-500)}.payment-id{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}";
const ScPaymentMethodsListStyle0 = scPaymentMethodsListCss;

const ScPaymentMethodsList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.query = undefined;
        this.heading = undefined;
        this.isCustomer = undefined;
        this.canDetachDefaultPaymentMethod = false;
        this.paymentMethods = [];
        this.loading = undefined;
        this.busy = undefined;
        this.error = undefined;
        this.hasTitleSlot = undefined;
        this.editPaymentMethod = false;
        this.deletePaymentMethod = false;
        this.cascadeDefaultPaymentMethod = false;
    }
    /** Only fetch if visible */
    componentWillLoad() {
        onFirstVisible(this.el, () => this.getPaymentMethods());
        this.handleSlotChange();
    }
    handleSlotChange() {
        this.hasTitleSlot = !!this.el.querySelector('[slot="title"]');
    }
    /**
     * Delete the payment method.
     */
    async deleteMethod() {
        var _a;
        if (!this.deletePaymentMethod)
            return;
        try {
            this.busy = true;
            (await apiFetch({
                path: `surecart/v1/payment_methods/${(_a = this.deletePaymentMethod) === null || _a === void 0 ? void 0 : _a.id}/detach`,
                method: 'PATCH',
            }));
            // remove from view.
            this.paymentMethods = this.paymentMethods.filter(m => { var _a; return m.id !== ((_a = this.deletePaymentMethod) === null || _a === void 0 ? void 0 : _a.id); });
            this.deletePaymentMethod = false;
        }
        catch (e) {
            alert((e === null || e === void 0 ? void 0 : e.messsage) || wp.i18n.__('Something went wrong', 'surecart'));
        }
        finally {
            this.busy = false;
        }
    }
    /**
     * Set the default payment method.
     */
    async setDefault() {
        var _a, _b, _c;
        if (!this.editPaymentMethod)
            return;
        try {
            this.error = '';
            this.busy = true;
            (await apiFetch({
                path: `surecart/v1/customers/${(_b = (_a = this.editPaymentMethod) === null || _a === void 0 ? void 0 : _a.customer) === null || _b === void 0 ? void 0 : _b.id}`,
                method: 'PATCH',
                data: {
                    default_payment_method: (_c = this.editPaymentMethod) === null || _c === void 0 ? void 0 : _c.id,
                    cascade_default_payment_method: this.cascadeDefaultPaymentMethod,
                },
            }));
            this.editPaymentMethod = false;
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
        try {
            this.busy = true;
            this.paymentMethods = (await apiFetch({
                path: addQueryArgs(`surecart/v1/payment_methods/`, {
                    expand: ['card', 'customer', 'billing_agreement', 'paypal_account', 'payment_instrument', 'bank_account'],
                    ...this.query,
                }),
            }));
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.busy = false;
        }
    }
    /** Get all paymentMethods */
    async getPaymentMethods() {
        if (!this.isCustomer) {
            return;
        }
        try {
            this.loading = true;
            this.paymentMethods = (await apiFetch({
                path: addQueryArgs(`surecart/v1/payment_methods/`, {
                    expand: ['card', 'customer', 'billing_agreement', 'paypal_account', 'payment_instrument', 'bank_account'],
                    ...this.query,
                    per_page: 100,
                }),
            }));
        }
        catch (e) {
            console.error(this.error);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    renderLoading() {
        return (h("sc-card", { noPadding: true }, h("sc-stacked-list", null, h("sc-stacked-list-row", { style: { '--columns': '4' }, "mobile-size": 500 }, [...Array(4)].map(() => (h("sc-skeleton", { style: { width: '100px', display: 'inline-block' } })))))));
    }
    renderEmpty() {
        return (h("div", null, h("sc-divider", { style: { '--spacing': '0' } }), h("slot", { name: "empty" }, h("sc-empty", { icon: "credit-card" }, wp.i18n.__("You don't have any saved payment methods.", 'surecart')))));
    }
    renderPaymentMethodActions(paymentMethod) {
        const { id, customer } = paymentMethod;
        // If this is a string, don't show the actions.
        if (typeof customer === 'string')
            return;
        // If this is the default payment method and it cannot be detached, don't show the actions.
        if (customer.default_payment_method === id && !this.canDetachDefaultPaymentMethod)
            return;
        return (h("sc-dropdown", { placement: "bottom-end", slot: "suffix" }, h("sc-icon", { role: "button", tabIndex: 0, name: "more-horizontal", slot: "trigger" }), h("sc-menu", null, customer.default_payment_method !== id && h("sc-menu-item", { onClick: () => (this.editPaymentMethod = paymentMethod) }, wp.i18n.__('Make Default', 'surecart')), h("sc-menu-item", { onClick: () => (this.deletePaymentMethod = paymentMethod) }, wp.i18n.__('Delete', 'surecart')))));
    }
    renderList() {
        return this.paymentMethods.map(paymentMethod => {
            const { id, card, customer, live_mode, billing_agreement, paypal_account } = paymentMethod;
            return (h("sc-stacked-list-row", { style: { '--columns': billing_agreement ? '2' : '3' } }, h("sc-payment-method", { paymentMethod: paymentMethod }), h("div", { class: "payment-id" }, !!(card === null || card === void 0 ? void 0 : card.exp_month) && (h("span", null, wp.i18n.__('Exp.', 'surecart'), card === null || card === void 0 ? void 0 :
                card.exp_month, "/", card === null || card === void 0 ? void 0 :
                card.exp_year)), !!paypal_account && (paypal_account === null || paypal_account === void 0 ? void 0 : paypal_account.email)), h("sc-flex", { "justify-content": "flex-start", "align-items": "center", style: { '--spacing': '0.5em', 'marginLeft': 'auto' } }, typeof customer !== 'string' && (customer === null || customer === void 0 ? void 0 : customer.default_payment_method) === id && h("sc-tag", { type: "info" }, wp.i18n.__('Default', 'surecart')), !live_mode && h("sc-tag", { type: "warning" }, wp.i18n.__('Test', 'surecart'))), this.renderPaymentMethodActions(paymentMethod)));
        });
    }
    renderContent() {
        var _a;
        if (!this.isCustomer) {
            return this.renderEmpty();
        }
        if (this.loading) {
            return this.renderLoading();
        }
        if (((_a = this.paymentMethods) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return this.renderEmpty();
        }
        return (h("sc-card", { "no-padding": true }, h("sc-stacked-list", null, this.renderList())));
    }
    handleEditPaymentMethodChange() {
        // reset when payment method edit changes
        this.cascadeDefaultPaymentMethod = false;
    }
    render() {
        return (h("sc-dashboard-module", { key: '7ed3aa0adc292d2de918f5e875c0d92e98b30784', class: "payment-methods-list", error: this.error }, h("span", { key: '1fa32c9e1e3005ea8878a402b41b7fc4e172e332', slot: "heading" }, h("slot", { key: '0107209bef6602b3652c41dcdf31357904e1e71a', name: "heading" }, this.heading || wp.i18n.__('Payment Methods', 'surecart'))), this.isCustomer && (h("sc-flex", { key: 'ef8cfcddf31bac68b7f4aedc9e708ce44acde831', slot: "end" }, h("sc-button", { key: '1350a20cebcb23c268423cafefc05486ff57e271', type: "link", href: addQueryArgs(window.location.href, {
                action: 'index',
                model: 'charge',
            }) }, h("sc-icon", { key: '43060969eaa5d71ac747f5d1f8928b24ba5b5eab', name: "clock", slot: "prefix" }), wp.i18n.__('Payment History', 'surecart')), h("sc-button", { key: 'f125437d3d049a9881f865d2178c7f72bee31c86', type: "link", href: addQueryArgs(window.location.href, {
                action: 'create',
                model: 'payment_method',
            }) }, h("sc-icon", { key: '06cb97950efe20da89890046e9c3b78fd523b9ff', name: "plus", slot: "prefix" }), wp.i18n.__('Add', 'surecart')))), this.renderContent(), h("sc-dialog", { key: '046eec64d813e28ed0b4ca0aecd54b4a6fa74cb0', open: !!this.editPaymentMethod, label: wp.i18n.__('Update Default Payment Method', 'surecart'), onScRequestClose: () => (this.editPaymentMethod = false) }, h("sc-alert", { key: 'e8e93ecb8343ba05189e17227ff229dfe9872f77', type: "danger", open: !!this.error }, this.error), h("sc-flex", { key: 'df363bd6fc57164fe70b94d5a33b407f634abbec', flexDirection: "column", style: { '--sc-flex-column-gap': 'var(--sc-spacing-small)' } }, h("sc-alert", { key: '33ffd14afc91aad44e1687f0c56b69fd141a0ee8', type: "info", open: true }, wp.i18n.__('A default payment method will be used as a fallback in case other payment methods get removed from a subscription.', 'surecart')), h("sc-switch", { key: '96badb3fbe4100d790d9452f3b0fed0618ee060f', checked: this.cascadeDefaultPaymentMethod, onScChange: e => (this.cascadeDefaultPaymentMethod = e.target.checked) }, wp.i18n.__('Update All Subscriptions', 'surecart'), h("span", { key: '2578955b4bcd9db2bce98a49570f9ca47d088306', slot: "description" }, wp.i18n.__('Update all existing subscriptions to use this payment method', 'surecart')))), h("div", { key: '5ad74b5d8747694d7f26b77ee16566ac851a7aad', slot: "footer" }, h("sc-button", { key: 'ad2c208a057d93d876a5ab34cc39e34f825603c9', type: "text", onClick: () => (this.editPaymentMethod = false) }, wp.i18n.__('Cancel', 'surecart')), h("sc-button", { key: '349bb70a70d73808a01b59acce6e5b9f212a634c', type: "primary", onClick: () => this.setDefault() }, wp.i18n.__('Make Default', 'surecart'))), this.busy && h("sc-block-ui", { key: '0eecba0c0a719bc7dd7f806d850fc3fe3a67d0ac', spinner: true })), h("sc-dialog", { key: 'a320b8c1d11eff58ff738b0c014435c4f20addc3', open: !!this.deletePaymentMethod, label: wp.i18n.__('Delete Payment Method', 'surecart'), onScRequestClose: () => (this.deletePaymentMethod = false) }, h("sc-alert", { key: 'dbaa401225f4a6d06631c3e41f6caff8620380cb', type: "danger", open: !!this.error }, this.error), h("sc-text", { key: '7a142e8e1a65d3179dd9bf45bfad90ddc143fd4b' }, wp.i18n.__('Are you sure you want to remove this payment method?', 'surecart')), h("div", { key: 'ccd56f700060788062dd027a346eec4598f68e04', slot: "footer" }, h("sc-button", { key: '5fdd90a8df122ab3a22317ca510e0d24026c116f', type: "text", onClick: () => (this.deletePaymentMethod = false) }, wp.i18n.__('Cancel', 'surecart')), h("sc-button", { key: '06b4535e425092782a558cbf9341dcbe29010513', type: "primary", onClick: () => this.deleteMethod() }, wp.i18n.__('Delete', 'surecart'))), this.busy && h("sc-block-ui", { key: 'e7b08207235d1eed5a1ad82ce5c31412e251631e', spinner: true })), this.busy && h("sc-block-ui", { key: '346ff2d9618d7605850306ee6d4b55ac81269fbd', spinner: true })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "editPaymentMethod": ["handleEditPaymentMethodChange"]
    }; }
};
ScPaymentMethodsList.style = ScPaymentMethodsListStyle0;

export { ScPaymentMethodsList as sc_payment_methods_list };

//# sourceMappingURL=sc-payment-methods-list.entry.js.map