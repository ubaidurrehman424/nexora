import { r as registerInstance, h, H as Host, c as createEvent, a as getElement } from './index-25e5af33.js';
import { o as onChange$1, s as state$1, u as updateFormState } from './mutations-2cf25d6d.js';
import { l as lockCheckout, b as unLockCheckout, c as clearCheckout } from './mutations-9a4deffa.js';
import { o as onChange, s as state } from './store-02394e82.js';
import { c as createOrUpdateCheckout, d as updateCheckout, e as expand, f as finalizeCheckout, g as fetchCheckout, h as createCheckout } from './index-54572542.js';
import { g as getCurrentCustomer, h as hasAddressData, i as isAddressEmpty } from './index-8be0dc9e.js';
import { c as currentFormState } from './getters-4bb6cc1b.js';
import './watchers-832bd2ee.js';
import { s as state$2, f as getAvailableProcessor } from './getters-b7d4ed94.js';
import { s as state$3 } from './watchers-c7bbc6b2.js';
import { s as shippingAddressRequired, f as fullShippingAddressRequired } from './getters-cdc341db.js';
import { v, c as checkoutMachine, s as state$4 } from './store-b1758b00.js';
import './fetch-9e15a95d.js';
import { a as apiFetch } from './index-824c562b.js';
import { s as speak } from './index-c5a96d53.js';
import { c as createErrorNotice, r as removeNotice, a as createInfoNotice } from './mutations-7458343f.js';
import { a as addQueryArgs, g as getQueryArgs } from './add-query-args-0e2a8393.js';
import { p as parseFormData } from './form-data-76641f16.js';
import { r as removeQueryArgs, g as getQueryArg } from './remove-query-args-938c53ea.js';
import './index-18f5a1bc.js';
import './utils-f84b2118.js';
import './google-a86aa761.js';
import './currency-a0c9bff4.js';
import './price-1ff6aa07.js';
import './util-dfbf863e.js';
import './address-b8e2e4c8.js';

const ScCheckoutAutofillProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.maybeApplyProfile();
        this.removeUserListener = onChange('loggedIn', loggedIn => {
            if (!loggedIn) {
                // A later login on the same checkout should re-apply.
                this.appliedForCheckoutId = undefined;
                return;
            }
            this.maybeApplyProfile();
        });
        this.removeCheckoutListener = onChange$1('checkout', () => this.maybeApplyProfile());
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.removeUserListener) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.removeCheckoutListener) === null || _b === void 0 ? void 0 : _b.call(this);
    }
    async maybeApplyProfile() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!state.loggedIn)
            return;
        const checkoutId = (_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.id;
        if (!checkoutId)
            return;
        if (this.appliedForCheckoutId === checkoutId)
            return;
        this.appliedForCheckoutId = checkoutId;
        try {
            const customer = await getCurrentCustomer(state$1.mode);
            const patch = {};
            // The shipping/billing fields on Customer are typed as `string | Address`; here they
            // are expanded into Address objects via the `expand` param, so this cast is safe.
            const shippingAddress = customer === null || customer === void 0 ? void 0 : customer.shipping_address;
            const billingAddress = customer === null || customer === void 0 ? void 0 : customer.billing_address;
            if (hasAddressData(shippingAddress) && isAddressEmpty((_b = state$1.checkout) === null || _b === void 0 ? void 0 : _b.shipping_address)) {
                patch.shipping_address = shippingAddress;
            }
            if (hasAddressData(billingAddress) && isAddressEmpty((_c = state$1.checkout) === null || _c === void 0 ? void 0 : _c.billing_address)) {
                patch.billing_address = billingAddress;
            }
            if ((customer === null || customer === void 0 ? void 0 : customer.first_name) && !((_d = state$1.checkout) === null || _d === void 0 ? void 0 : _d.first_name)) {
                patch.first_name = customer.first_name;
            }
            if ((customer === null || customer === void 0 ? void 0 : customer.last_name) && !((_e = state$1.checkout) === null || _e === void 0 ? void 0 : _e.last_name)) {
                patch.last_name = customer.last_name;
            }
            if ((customer === null || customer === void 0 ? void 0 : customer.phone) && !((_f = state$1.checkout) === null || _f === void 0 ? void 0 : _f.phone)) {
                patch.phone = customer.phone;
            }
            // Respect the customer's saved billing-matches-shipping preference so the checkout
            // toggle reflects their profile instead of the checkout default.
            if (typeof (customer === null || customer === void 0 ? void 0 : customer.billing_matches_shipping) === 'boolean' && ((_g = state$1.checkout) === null || _g === void 0 ? void 0 : _g.billing_matches_shipping) !== customer.billing_matches_shipping) {
                patch.billing_matches_shipping = customer.billing_matches_shipping;
            }
            // Nothing to apply — skip the lock entirely.
            if (!Object.keys(patch).length)
                return;
            lockCheckout('customer-profile-autofill');
            try {
                state$1.checkout = (await createOrUpdateCheckout({ id: (_h = state$1.checkout) === null || _h === void 0 ? void 0 : _h.id, data: patch }));
            }
            finally {
                unLockCheckout('customer-profile-autofill');
            }
        }
        catch (e) {
            // Convenience feature — don't block checkout; clear the flag so a later trigger can retry.
            this.appliedForCheckoutId = undefined;
            console.error(e);
        }
    }
    render() {
        return (h(Host, { key: '7b4a4103b672ec8cc8418f63f50590a9f97f581b' }, h("slot", { key: '44495fa4b9fc3b0722a2f1c3fd707fa356a7b59d' })));
    }
};

const scCheckoutStockAlertCss = ":host{display:block}sc-table{height:auto}h4{display:block;margin:0;font-weight:var(--sc-font-weight-bold);font-size:var(--sc-font-size-medium)}.stock-alert{--body-spacing:var(--sc-spacing-x-large);--width:500px}.stock-alert__image{width:50px;height:50px;object-fit:cover;margin-right:10px;display:block}.stock-alert__product-info{display:flex;flex-direction:column;gap:var(--sc-spacing-xx-small)}.stock-alert__variant{color:var(--sc-color-gray-500);font-size:var(--sc-font-size-small)}.stock-alert__quantity{color:var(--sc-color-gray-500);font-weight:var(--sc-font-weight-bold);display:flex;align-items:center;justify-content:flex-end;gap:var(--sc-spacing-xx-small)}";
const ScCheckoutStockAlertStyle0 = scCheckoutStockAlertCss;

const ScCheckoutStockAlert = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scUpdateLineItem = createEvent(this, "scUpdateLineItem", 7);
        this.stockErrors = [];
        this.busy = undefined;
        this.error = undefined;
    }
    /** Get the out of stock line items. */
    getOutOfStockLineItems() {
        var _a, _b;
        return (((_b = (_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) || []).filter(lineItem => {
            var _a, _b, _c;
            const product = (_a = lineItem.price) === null || _a === void 0 ? void 0 : _a.product;
            // this item is not out of stock, don't include it.
            if ((lineItem === null || lineItem === void 0 ? void 0 : lineItem.purchasable_status) !== 'out_of_stock')
                return false;
            // check the variant stock.
            if ((_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _b === void 0 ? void 0 : _b.id) {
                return ((_c = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _c === void 0 ? void 0 : _c.available_stock) < lineItem.quantity;
            }
            return (product === null || product === void 0 ? void 0 : product.available_stock) < lineItem.quantity;
        });
    }
    /**
     * Build line items with adjusted quantities for out-of-stock items.
     *
     * Returns all line items, with out-of-stock items adjusted to max available stock.
     */
    getStockAdjustedLineItems() {
        var _a, _b;
        // Get the IDs of out-of-stock line items and their adjusted quantities.
        const outOfStockItemsMap = new Map();
        this.getOutOfStockLineItems().forEach(lineItem => {
            var _a, _b, _c;
            const product = (_a = lineItem.price) === null || _a === void 0 ? void 0 : _a.product;
            const adjustedQuantity = ((_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _b === void 0 ? void 0 : _b.id) ? Math.max(((_c = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _c === void 0 ? void 0 : _c.available_stock) || 0, 0) : Math.max((product === null || product === void 0 ? void 0 : product.available_stock) || 0, 0);
            outOfStockItemsMap.set(lineItem.id, adjustedQuantity);
        });
        // Build the complete line items array with all items, adjusting only the out-of-stock ones.
        return (((_b = (_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) || []).map(lineItem => {
            var _a, _b;
            const adjustedQuantity = outOfStockItemsMap.get(lineItem.id);
            return {
                id: lineItem.id,
                price_id: (_a = lineItem.price) === null || _a === void 0 ? void 0 : _a.id,
                quantity: adjustedQuantity !== undefined ? adjustedQuantity : lineItem.quantity,
                ...(((_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _b === void 0 ? void 0 : _b.id) ? { variant: lineItem.variant.id } : {}),
            };
        });
    }
    /**
     * Update the checkout line items stock to the max available.
     */
    async onSubmit() {
        try {
            this.busy = true;
            state$1.checkout = (await updateCheckout({
                id: state$1.checkout.id,
                data: {
                    line_items: this.getStockAdjustedLineItems().filter(lineItem => !!lineItem.quantity),
                },
            }));
        }
        catch (error) {
            const additionalErrors = ((error === null || error === void 0 ? void 0 : error.additional_errors) || []).map(error => error === null || error === void 0 ? void 0 : error.message).filter(n => n);
            this.error = `${(error === null || error === void 0 ? void 0 : error.message) || wp.i18n.__('Something went wrong.', 'surecart')} ${(additionalErrors === null || additionalErrors === void 0 ? void 0 : additionalErrors.length) && ` ${additionalErrors.join('. ')}`}`;
        }
        finally {
            this.busy = false;
        }
    }
    render() {
        // stock errors.
        const stockErrors = (this.getOutOfStockLineItems() || []).map(lineItem => {
            var _a, _b, _c;
            const product = (_a = lineItem.price) === null || _a === void 0 ? void 0 : _a.product;
            const available_stock = ((_b = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _b === void 0 ? void 0 : _b.id) ? (_c = lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant) === null || _c === void 0 ? void 0 : _c.available_stock : product === null || product === void 0 ? void 0 : product.available_stock;
            return {
                name: product === null || product === void 0 ? void 0 : product.name,
                variant: lineItem === null || lineItem === void 0 ? void 0 : lineItem.variant_display_options,
                image: lineItem === null || lineItem === void 0 ? void 0 : lineItem.image,
                quantity: lineItem.quantity,
                available_stock,
            };
        });
        // we have at least one quantity change.
        const hasOutOfStockItems = stockErrors === null || stockErrors === void 0 ? void 0 : stockErrors.some(item => (item === null || item === void 0 ? void 0 : item.available_stock) < 1);
        return (h(Host, null, h("sc-dialog", { open: !!stockErrors.length && currentFormState() === 'draft', noHeader: true, onScRequestClose: e => e.preventDefault(), class: "stock-alert" }, h("sc-dashboard-module", { class: "subscription-cancel", error: this.error, style: { '--sc-dashboard-module-spacing': '1em' } }, h("sc-flex", { slot: "heading", "align-items": "center", "justify-content": "flex-start" }, h("sc-icon", { name: "alert-circle", style: { color: 'var(--sc-color-primary-500' } }), hasOutOfStockItems ? wp.i18n.__('Out of Stock', 'surecart') : wp.i18n.__('Quantity Update', 'surecart')), h("span", { slot: "description" }, hasOutOfStockItems
            ? wp.i18n.__('Some items are no longer available. Your cart will be updated.', 'surecart')
            : wp.i18n.__('Available quantities for these items have changed. Your cart will be updated.', 'surecart')), h("sc-card", { "no-padding": true }, h("sc-table", null, h("sc-table-cell", { slot: "head" }, wp.i18n.__('Description', 'surecart')), h("sc-table-cell", { slot: "head", style: { width: '100px', textAlign: 'right' } }, wp.i18n.__('Quantity', 'surecart')), stockErrors.map((item, index) => {
            const isLastChild = index === stockErrors.length - 1;
            return (h("sc-table-row", { style: {
                    '--columns': '2',
                    ...(isLastChild ? { border: 'none' } : {}),
                } }, h("sc-table-cell", null, h("sc-flex", { justifyContent: "flex-start", alignItems: "center" }, (item === null || item === void 0 ? void 0 : item.image) && h("img", { ...item.image, class: "stock-alert__image" }), h("div", { class: "stock-alert__product-info" }, h("h4", null, item.name), (item === null || item === void 0 ? void 0 : item.variant) && h("span", { class: "stock-alert__variant" }, item.variant)))), h("sc-table-cell", { style: { width: '100px', textAlign: 'right' } }, h("span", { class: "stock-alert__quantity" }, h("span", null, item === null || item === void 0 ? void 0 : item.quantity), " ", h("sc-icon", { name: "arrow-right" }), " ", h("span", null, Math.max(item === null || item === void 0 ? void 0 : item.available_stock, 0))))));
        })))), h("sc-button", { slot: "footer", type: "primary", loading: this.busy, onClick: () => this.onSubmit() }, wp.i18n.__('Continue', 'surecart'), h("sc-icon", { name: "arrow-right", slot: "suffix" })), this.busy && h("sc-block-ui", { spinner: true }))));
    }
};
ScCheckoutStockAlert.style = ScCheckoutStockAlertStyle0;

const checkoutTestCompleteCss = ".confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}sc-dialog::part(overlay){backdrop-filter:blur(4px)}";
const ScCheckoutTestCompleteStyle0 = checkoutTestCompleteCss;

const ScCheckoutTestComplete = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scOrderPaid = createEvent(this, "scOrderPaid", 7);
        this.scSetState = createEvent(this, "scSetState", 7);
        this.showSuccessModal = false;
        this.manualPaymentMethod = undefined;
        this.checkoutStatus = undefined;
        this.successUrl = undefined;
    }
    /**
     * Watch for paid checkout machine state.
     * This is triggered by Stripe, Paypal or Paystack when payment succeeds.
     */
    handleConfirmOrderEvent() {
        if (this.checkoutStatus === 'test_mode_restricted') {
            this.confirmOrder();
        }
    }
    /** Confirm the order. */
    async confirmOrder() {
        var _a;
        this.manualPaymentMethod = (_a = (state$2.manualPaymentMethods || [])) === null || _a === void 0 ? void 0 : _a.find(p => p.id === state$3.id);
        this.showSuccessModal = true;
        clearCheckout();
    }
    handleSuccessModal() {
        if (this.showSuccessModal) {
            setTimeout(() => {
                var _a;
                (_a = this.continueButton) === null || _a === void 0 ? void 0 : _a.focus();
            }, 50);
        }
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (h(Host, { key: '3c0c52fb69aacbf3bf4fb797586c7a2432c1f790' }, h("slot", { key: 'd63060fd4eb7e78e7a658bbd8d17c0cf8707e473' }), h("sc-dialog", { key: '01e59224ca7271e9bd5c7457e374f097e4276a73', open: !!this.showSuccessModal, style: { '--body-spacing': 'var(--sc-spacing-xxx-large)', '--width': '400px' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, h("div", { key: '039b32ae7d4c69f45ee0269422cac7154e333ec3', class: "confirm__icon" }, h("div", { key: '1a9da9a6d06ab049b13e26dfc59a89e79de54a87', class: "confirm__icon-container" }, h("sc-icon", { key: '3e4b7bd0355bd487dfb6c8064353adb79f348b14', name: "check" }))), h("sc-dashboard-module", { key: '3be338aee9787680a67a7dc62fb1f7c835702f98', heading: wp.i18n.__('Test checkout successful!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, h("span", { key: 'b0ae504ecc5c5ba5bc9f2bd7808cfa3b1ec7b088', slot: "description" }, wp.i18n.__('This is a simulated test checkout, and no orders were processed. To perform a test order, please contact your store administrator. ', 'surecart')), !!((_a = this.manualPaymentMethod) === null || _a === void 0 ? void 0 : _a.name) && !!((_b = this.manualPaymentMethod) === null || _b === void 0 ? void 0 : _b.instructions) && (h("sc-alert", { key: 'a3781ca62e40a451874384561f69d4443efec91e', type: "info", open: true, style: { 'text-align': 'left' } }, h("span", { key: 'ead7333597d5ba39dafc5ec79713a3311ac8f316', slot: "title" }, (_c = this.manualPaymentMethod) === null || _c === void 0 ? void 0 : _c.name), h("div", { key: '98fd27422acf9b9f822a96735828b99660e02ebe', innerHTML: (_d = this.manualPaymentMethod) === null || _d === void 0 ? void 0 : _d.instructions }))), h("sc-button", { key: 'fae99645209c19f410aea3814cb15da84e2f714f', href: (_e = window === null || window === void 0 ? void 0 : window.scData) === null || _e === void 0 ? void 0 : _e.home_url, size: "large", type: "primary", ref: el => (this.continueButton = el) }, wp.i18n.__('Go to Homepage', 'surecart'), h("sc-icon", { key: '11c366e99b08f2197a044734c748d98d6a29aa35', name: "arrow-right", slot: "suffix" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checkoutStatus": ["handleConfirmOrderEvent"],
        "showSuccessModal": ["handleSuccessModal"]
    }; }
};
ScCheckoutTestComplete.style = ScCheckoutTestCompleteStyle0;

const ScCheckoutUnsavedChangesWarning = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.state = undefined;
    }
    /**
     * Add event listener for beforeunload.
     */
    componentDidLoad() {
        window.addEventListener('beforeunload', e => this.warnIfUnsavedChanges(e), { capture: true });
    }
    /**
     * Warn if status is updaing, finalizing, paying or confirming.
     */
    warnIfUnsavedChanges(e) {
        if (['updating', 'finalizing', 'confirming'].includes(this.state)) {
            console.log({ e });
            e.preventDefault();
            e.returnValue = wp.i18n.__('Your payment is processing. Exiting this page could cause an error in your order. Please do not navigate away from this page.', 'surecart');
            return e.returnValue;
        }
    }
};

const ScFormComponentsValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = undefined;
        this.taxProtocol = undefined;
        this.hasAddress = undefined;
        this.hasTaxIDField = undefined;
        this.hasBumpsField = undefined;
        this.hasTaxLine = undefined;
        this.hasBumpLine = undefined;
        this.hasShippingChoices = undefined;
        this.hasShippingAmount = undefined;
        this.hasInvoiceDetails = undefined;
        this.hasInvoiceMemo = undefined;
        this.hasTrialLineItem = undefined;
        this.hasCustomerPhone = undefined;
    }
    handleOrderChange() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // bail if we don't have address invalid error or disabled.
        if (this.disabled)
            return;
        // make sure to add the address field if it's not there.
        if (shippingAddressRequired()) {
            this.addAddressField();
        }
        // add order bumps.
        if ((_c = (_b = (_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.recommended_bumps) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length) {
            this.addBumps();
        }
        if (!!((_d = state$1.checkout) === null || _d === void 0 ? void 0 : _d.tax_amount)) {
            this.addTaxLine();
        }
        // add shipping choices.
        if (((_e = state$1.checkout) === null || _e === void 0 ? void 0 : _e.shipping_enabled) && ((_f = state$1.checkout) === null || _f === void 0 ? void 0 : _f.selected_shipping_choice_required)) {
            this.addShippingChoices();
        }
        if (!!((_g = state$1.checkout) === null || _g === void 0 ? void 0 : _g.shipping_amount)) {
            this.addShippingAmount();
        }
        // automatically add invoice details if we have an invoice.
        if (!!((_h = state$1.checkout) === null || _h === void 0 ? void 0 : _h.invoice)) {
            this.addInvoiceDetails();
            this.addInvoiceMemo();
        }
        // automatically add trial line item if we have a trial amount.
        if (!!((_j = state$1.checkout) === null || _j === void 0 ? void 0 : _j.trial_amount)) {
            this.addTrialLineItem();
        }
    }
    handleHasAddressChange() {
        if (!this.hasAddress)
            return;
        this.handleShippingAddressRequired();
    }
    componentWillLoad() {
        var _a, _b;
        this.hasAddress = !!this.el.querySelector('sc-order-shipping-address');
        this.hasTaxIDField = !!this.el.querySelector('sc-order-tax-id-input');
        this.hasBumpsField = !!this.el.querySelector('sc-order-bumps');
        this.hasTaxLine = !!this.el.querySelector('sc-line-item-tax');
        this.hasShippingChoices = !!this.el.querySelector('sc-shipping-choices');
        this.hasShippingAmount = !!this.el.querySelector('sc-line-item-shipping');
        this.hasInvoiceDetails = !!this.el.querySelector('sc-invoice-details');
        this.hasInvoiceMemo = !!this.el.querySelector('sc-invoice-memo');
        this.hasTrialLineItem = !!this.el.querySelector('sc-line-item-trial');
        this.hasCustomerPhone = !!this.el.querySelector('sc-customer-phone');
        // if eu vat is required, add the tax id field.
        if (((_a = this.taxProtocol) === null || _a === void 0 ? void 0 : _a.tax_enabled) && ((_b = this.taxProtocol) === null || _b === void 0 ? void 0 : _b.eu_vat_required)) {
            this.addTaxIDField();
        }
        // if razorpay is available, add the customer phone field.
        if (getAvailableProcessor('razorpay')) {
            this.addCustomerPhone();
        }
        this.handleOrderChange();
        this.removeCheckoutListener = onChange$1('checkout', () => this.handleOrderChange());
        this.removePaymentRequiresShippingListener = onChange$1('paymentMethodRequiresShipping', () => this.handleOrderChange());
    }
    disconnectedCallback() {
        this.removeCheckoutListener();
        this.removePaymentRequiresShippingListener();
    }
    handleShippingAddressRequired() {
        var _a;
        if (!((_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.shipping_address_required))
            return;
        // get the address
        const address = this.el.querySelector('sc-order-shipping-address');
        if (!address)
            return;
        // require the address.
        address.required = true;
        // if we have a customer name field, require that.
        const customerName = this.el.querySelector('sc-customer-name');
        if (!!customerName) {
            customerName.required = true;
            return;
        }
        // if we have a customer first name field, require that.
        const customerFirstName = this.el.querySelector('sc-customer-firstname');
        const customerLastName = this.el.querySelector('sc-customer-lastname');
        // if we have a customer first name field, require that.
        if (!!customerFirstName) {
            customerFirstName.required = true;
            // if we have a customer last name field, require that.
            if (!!customerLastName) {
                customerLastName.required = true;
            }
            return; // we're done here.
        }
        // require the name and show the name input.
        address.requireName = true;
        address.showName = true;
    }
    addAddressField() {
        if (this.hasAddress) {
            return;
        }
        const payment = this.el.querySelector('sc-payment');
        const shippingAddress = document.createElement('sc-order-shipping-address');
        payment.parentNode.insertBefore(shippingAddress, payment);
        if (fullShippingAddressRequired()) {
            const billingAddress = document.createElement('sc-order-billing-address');
            billingAddress.label = wp.i18n.__('Billing Address', 'surecart');
            payment.parentNode.insertBefore(billingAddress, payment);
        }
        else {
            shippingAddress.label = wp.i18n.__('Address', 'surecart');
        }
        this.hasAddress = true;
    }
    addTaxIDField() {
        if (this.hasTaxIDField)
            return;
        const payment = this.el.querySelector('sc-payment');
        const taxInput = document.createElement('sc-order-tax-id-input');
        payment.parentNode.insertBefore(taxInput, payment);
        this.hasTaxIDField = true;
    }
    addCustomerPhone() {
        if (this.hasCustomerPhone)
            return;
        const payment = this.el.querySelector('sc-payment');
        if (!payment)
            return;
        const customerPhone = document.createElement('sc-customer-phone');
        customerPhone.label = wp.i18n.__('Phone', 'surecart');
        customerPhone.required = true;
        payment.parentNode.insertBefore(customerPhone, payment);
        this.hasCustomerPhone = true;
    }
    addBumps() {
        if (this.hasBumpsField)
            return;
        const attachReferenceElement = this.el.querySelector('sc-order-billing-address') || this.el.querySelector('sc-payment');
        const bumps = document.createElement('sc-order-bumps');
        attachReferenceElement === null || attachReferenceElement === void 0 ? void 0 : attachReferenceElement.parentNode.insertBefore(bumps, attachReferenceElement.nextSibling);
        this.hasBumpsField = true;
    }
    addTaxLine() {
        var _a;
        if (this.hasTaxLine)
            return;
        const total = this.el.querySelector('sc-line-item-total[total=total]');
        const tax = document.createElement('sc-line-item-tax');
        if (!total)
            return;
        if (((_a = total === null || total === void 0 ? void 0 : total.previousElementSibling) === null || _a === void 0 ? void 0 : _a.tagName) === 'SC-DIVIDER') {
            total.parentNode.insertBefore(tax, total.previousElementSibling);
        }
        else {
            total.parentNode.insertBefore(tax, total);
        }
        this.hasTaxLine = true;
    }
    addShippingChoices() {
        if (this.hasShippingChoices)
            return;
        const payment = this.el.querySelector('sc-payment');
        const shippingChoices = document.createElement('sc-shipping-choices');
        payment.parentNode.insertBefore(shippingChoices, payment);
        this.hasShippingChoices = true;
    }
    addShippingAmount() {
        var _a;
        if (this.hasShippingAmount)
            return;
        let insertBeforeElement = this.el.querySelector('sc-line-item-tax');
        const total = this.el.querySelector('sc-line-item-total[total=total]');
        if (!total)
            return;
        if (!insertBeforeElement) {
            insertBeforeElement = ((_a = total === null || total === void 0 ? void 0 : total.previousElementSibling) === null || _a === void 0 ? void 0 : _a.tagName) === 'SC-DIVIDER' ? total.previousElementSibling : total;
        }
        const shippingAmount = document.createElement('sc-line-item-shipping');
        insertBeforeElement.parentNode.insertBefore(shippingAmount, insertBeforeElement);
        this.hasShippingAmount = true;
    }
    addInvoiceDetails() {
        if (this.hasInvoiceDetails)
            return;
        let lineItems = this.el.querySelector('sc-line-items');
        const invoiceDetails = document.createElement('sc-invoice-details');
        lineItems.parentNode.insertBefore(invoiceDetails, lineItems);
        // Add sc-line-item-invoice-number inside sc-invoice-details.
        const invoiceNumber = document.createElement('sc-line-item-invoice-number');
        invoiceDetails.appendChild(invoiceNumber);
        // Add sc-line-item-invoice-due-date inside sc-invoice-details.
        const invoiceDueDate = document.createElement('sc-line-item-invoice-due-date');
        invoiceDetails.appendChild(invoiceDueDate);
        // Add invoice sc-line-item-invoice-receipt-download inside sc-invoice-details.
        const invoiceReceiptDownload = document.createElement('sc-line-item-invoice-receipt-download');
        invoiceDetails.appendChild(invoiceReceiptDownload);
        // Add sc-divider inside sc-invoice-details.
        const divider = document.createElement('sc-divider');
        invoiceDetails.appendChild(divider);
        this.hasInvoiceDetails = true;
    }
    addInvoiceMemo() {
        if (this.hasInvoiceMemo)
            return;
        const orderSummary = this.el.querySelector('sc-order-summary');
        const invoiceDetails = document.createElement('sc-invoice-details');
        // Add sc-divider inside sc-invoice-details.
        orderSummary.parentNode.insertBefore(invoiceDetails, orderSummary.nextSibling);
        // Add sc-invoice-memo inside sc-invoice-details.
        const invoiceMemo = document.createElement('sc-invoice-memo');
        invoiceDetails.appendChild(invoiceMemo);
        this.hasInvoiceMemo = true;
    }
    addTrialLineItem() {
        if (this.hasTrialLineItem)
            return;
        const subtotal = this.el.querySelector('sc-line-item-total[total=subtotal]');
        const trialItem = document.createElement('sc-line-item-trial');
        if (!subtotal)
            return;
        // Insert the trial item before the coupon form.
        subtotal.parentNode.insertBefore(trialItem, subtotal.nextSibling);
        this.hasTrialLineItem = true;
    }
    render() {
        return h("slot", { key: 'ea6f9a51754dab6da3040591247f99f561f22acb' });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "hasAddress": ["handleHasAddressChange"]
    }; }
};

const ScFormErrorProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.maybeAddErrorsComponent();
    }
    maybeAddErrorsComponent() {
        var _a, _b;
        if (!!this.el.querySelector('sc-checkout-form-errors'))
            return;
        const errorsComponent = document.createElement('sc-checkout-form-errors');
        (_b = (_a = this.el.querySelector('sc-form')) === null || _a === void 0 ? void 0 : _a.prepend) === null || _b === void 0 ? void 0 : _b.call(_a, errorsComponent);
    }
    render() {
        return h("slot", { key: '6651af051808f65a7a34693d89afdfd9e8a99c1c' });
    }
    get el() { return getElement(this); }
};

const ScFormStateProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scSetCheckoutFormState = createEvent(this, "scSetCheckoutFormState", 7);
        /** Holds our state machine service */
        this._stateService = v(checkoutMachine);
        this.checkoutState = checkoutMachine.initialState;
    }
    /** Set the state. */
    setState(name) {
        const { send } = this._stateService;
        updateFormState(name);
        return send(name);
    }
    /** Watch for checkout state changes and emit to listeners. */
    handleCheckoutStateChange(state) {
        this.scSetCheckoutFormState.emit(state.value);
    }
    /** Init the state service. */
    componentWillLoad() {
        // Start state machine.
        this._stateService.subscribe(state => (this.checkoutState = state));
        this._stateService.start();
    }
    /** Remove state machine on disconnect. */
    disconnectedCallback() {
        this._stateService.stop();
    }
    /** Allow children to set the form state. */
    handleSetStateEvent(e) {
        this.setState(e.detail);
    }
    /** Update the state when the order is paid. */
    async handlePaid() {
        this.setState('PAID');
    }
    render() {
        // handle expired.
        if (this.checkoutState.value === 'expired') {
            return (h("sc-block-ui", null, h("div", null, wp.i18n.__('Please refresh the page.', 'surecart'))));
        }
        return h("slot", null);
    }
    static get watchers() { return {
        "checkoutState": ["handleCheckoutStateChange"]
    }; }
};

const scLoginProviderCss = ":host{display:block}";
const ScLoginProviderStyle0 = scLoginProviderCss;

const ScLoginProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scSetLoggedIn = createEvent(this, "scSetLoggedIn", 7);
        this.scSetCustomer = createEvent(this, "scSetCustomer", 7);
        this.loggedIn = undefined;
        this.order = undefined;
        this.notice = undefined;
        this.open = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    /** Listen for open event. */
    handleLoginPrompt() {
        this.open = true;
    }
    /** Focus on first input. */
    handleLoginDialogChange(val) {
        if (val) {
            setTimeout(() => {
                this.loginForm.querySelector('sc-input').triggerFocus();
            }, 100);
        }
    }
    handleLoggedInChange(val, prev) {
        if (prev === false && val) {
            this.notice = true;
        }
    }
    handleOrderChange(val, prev) {
        if ((val === null || val === void 0 ? void 0 : val.updated_at) !== (prev === null || prev === void 0 ? void 0 : prev.updated_at)) {
            this.notice = false;
        }
    }
    /** Handle form submit. */
    async handleFormSubmit(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.error = null;
        const { login, password } = await e.target.getFormJson();
        try {
            this.loading = true;
            const { name, email } = (await apiFetch({
                method: 'POST',
                path: 'surecart/v1/login',
                data: {
                    login,
                    password,
                },
            }));
            this.scSetLoggedIn.emit(true);
            this.scSetCustomer.emit({ name, email });
            this.open = false;
        }
        catch (e) {
            console.error(e);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        return (h(Host, { key: 'f909df3439e1cf6361d14bb6f3b597c6ae36a841' }, h("slot", { key: 'fd33b3ef646e49daff091300cf929dcd2f8269e3' }), !this.loggedIn && (h("sc-dialog", { key: '5b917d2e03182c5321810af4f9e401dbba8a51cd', label: wp.i18n.__('Login to your account', 'surecart'), open: this.open, onScRequestClose: () => (this.open = false) }, h("sc-form", { key: '13629e556d34e57fc4abf28110dfe43b2d9a167e', ref: el => (this.loginForm = el), onScFormSubmit: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
            }, onScSubmit: e => this.handleFormSubmit(e) }, !!this.error && (h("sc-alert", { key: '34a2742057c1f85e5c8b6bbdf275f13d4684f788', type: "danger", open: !!this.error }, this.error)), h("sc-input", { key: 'c9313e16146437f9246ed0a6d79fd89ccd037153', label: wp.i18n.__('Email or Username', 'surecart'), type: "text", name: "login", required: true, autofocus: this.open }), h("sc-input", { key: 'f17e1b02a52fd8242fb7a91e517ccff8bc166fd4', label: wp.i18n.__('Password', 'surecart'), type: "password", name: "password", required: true }), h("sc-button", { key: 'cff0a206e0be6e77a701aa5d67b657ccd170e67f', type: "primary", full: true, loading: this.loading, submit: true }, wp.i18n.__('Login', 'surecart')))))));
    }
    static get watchers() { return {
        "open": ["handleLoginDialogChange"],
        "loggedIn": ["handleLoggedInChange"],
        "order": ["handleOrderChange"]
    }; }
};
ScLoginProvider.style = ScLoginProviderStyle0;

const scOrderConfirmProviderCss = ".confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}sc-dialog::part(overlay){backdrop-filter:blur(4px)}";
const ScOrderConfirmProviderStyle0 = scOrderConfirmProviderCss;

const ScOrderConfirmProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scOrderPaid = createEvent(this, "scOrderPaid", 7);
        this.scSetState = createEvent(this, "scSetState", 7);
        this.showSuccessModal = false;
        this.manualPaymentMethod = undefined;
        this.checkoutStatus = undefined;
        this.successUrl = undefined;
    }
    /**
     * Watch for paid checkout machine state.
     * This is triggered by Stripe, Paypal or Paystack when payment succeeds.
     */
    handleConfirmOrderEvent() {
        if (this.checkoutStatus === 'confirming') {
            this.confirmOrder();
        }
        else if (this.checkoutStatus === 'confirmed') {
            speak(wp.i18n.__('Order has been confirmed. Please select continue to go to the next step.', 'surecart'));
        }
    }
    /** Confirm the order. */
    async confirmOrder() {
        var _a, _b, _c, _d;
        try {
            state$1.checkout = (await apiFetch({
                method: 'PATCH',
                path: addQueryArgs(`surecart/v1/checkouts/${(_a = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _a === void 0 ? void 0 : _a.id}/confirm`, { expand }),
            }));
            this.scSetState.emit('CONFIRMED');
        }
        catch (e) {
            console.error(e);
            createErrorNotice(e);
        }
        finally {
            this.manualPaymentMethod = ((_b = state$1.checkout) === null || _b === void 0 ? void 0 : _b.manual_payment_method) || null;
            const checkout = state$1.checkout;
            const formId = state$1.formId;
            // If there is an initial upsell redirect to it.
            if (!!((_c = checkout === null || checkout === void 0 ? void 0 : checkout.current_upsell) === null || _c === void 0 ? void 0 : _c.permalink)) {
                setTimeout(() => {
                    var _a;
                    return window.location.assign(addQueryArgs((_a = checkout === null || checkout === void 0 ? void 0 : checkout.current_upsell) === null || _a === void 0 ? void 0 : _a.permalink, {
                        sc_checkout_id: checkout === null || checkout === void 0 ? void 0 : checkout.id,
                        sc_form_id: formId,
                    }));
                }, 50);
                clearCheckout();
                return;
            }
            // get success url.
            const successUrl = ((_d = checkout === null || checkout === void 0 ? void 0 : checkout.metadata) === null || _d === void 0 ? void 0 : _d.success_url) || this.successUrl;
            if (successUrl) {
                // set state to redirecting.
                this.scSetState.emit('REDIRECT');
                const redirectUrl = addQueryArgs(successUrl, { sc_order: checkout === null || checkout === void 0 ? void 0 : checkout.id });
                setTimeout(() => window.location.assign(redirectUrl), 50);
            }
            else {
                this.showSuccessModal = true;
            }
            clearCheckout();
        }
    }
    getSuccessUrl() {
        var _a, _b, _c, _d, _e;
        const url = ((_b = (_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.success_url) || this.successUrl;
        return url ? addQueryArgs(url, { sc_order: (_c = state$1.checkout) === null || _c === void 0 ? void 0 : _c.id }) : (_e = (_d = window === null || window === void 0 ? void 0 : window.scData) === null || _d === void 0 ? void 0 : _d.pages) === null || _e === void 0 ? void 0 : _e.dashboard;
    }
    handleSuccessModal() {
        if (this.showSuccessModal) {
            setTimeout(() => {
                var _a;
                (_a = this.continueButton) === null || _a === void 0 ? void 0 : _a.focus();
            }, 50);
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: 'aecabe21058b4ba87454aef8835a246ccb3b418e' }, h("slot", { key: '5fd78cf213b1f6da9039c37ce1e4a9ad2d2d3080' }), h("sc-dialog", { key: 'e48047131b00033432530504ed1d5cf596d861c4', open: !!this.showSuccessModal, style: { '--body-spacing': 'var(--sc-spacing-xxx-large)', '--width': '400px' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, h("div", { key: 'd9f3711ff24368496969a03958080a1fec9b8457', class: "confirm__icon" }, h("div", { key: 'ea6b72c405b6c03d9a99e4cb4ff25c80dd7de7f4', class: "confirm__icon-container" }, h("sc-icon", { key: 'a7d99572ccd3b32d5cefdd2a23ee68453d27ee04', name: "check" }))), h("sc-dashboard-module", { key: 'e2c16e3f9eb33892f62eba192a1cd329eac08d30', heading: ((_b = (_a = state$4 === null || state$4 === void 0 ? void 0 : state$4.text) === null || _a === void 0 ? void 0 : _a.success) === null || _b === void 0 ? void 0 : _b.title) || wp.i18n.__('Thanks for your order!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, h("span", { key: 'cf9f87f433f7807ff446d932ffedddc6a9c89471', slot: "description" }, ((_d = (_c = state$4 === null || state$4 === void 0 ? void 0 : state$4.text) === null || _c === void 0 ? void 0 : _c.success) === null || _d === void 0 ? void 0 : _d.description) || wp.i18n.__('Your payment was successful. A receipt is on its way to your inbox.', 'surecart')), !!((_e = this.manualPaymentMethod) === null || _e === void 0 ? void 0 : _e.name) && !!((_f = this.manualPaymentMethod) === null || _f === void 0 ? void 0 : _f.instructions) && (h("sc-alert", { key: '3523e083001876d39c8a595244e675a7b8eb06aa', type: "info", open: true, style: { 'text-align': 'left' } }, h("span", { key: 'd56dd1716d0772f5423f69eabc904ea360b064be', slot: "title" }, (_g = this.manualPaymentMethod) === null || _g === void 0 ? void 0 : _g.name), h("div", { key: '170ac1e487d0072498cd57727ec8f84d88b609d1', innerHTML: (_h = this.manualPaymentMethod) === null || _h === void 0 ? void 0 : _h.instructions }))), h("sc-button", { key: '0383d15b5b0351467782f0a323d17fca6aaea89a', href: this.getSuccessUrl(), size: "large", type: "primary", ref: el => (this.continueButton = el) }, ((_k = (_j = state$4 === null || state$4 === void 0 ? void 0 : state$4.text) === null || _j === void 0 ? void 0 : _j.success) === null || _k === void 0 ? void 0 : _k.button) || wp.i18n.__('Continue', 'surecart'), h("sc-icon", { key: '78add97a15a45ef505fff99323b9416a98cbfe6b', name: "arrow-right", slot: "suffix" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checkoutStatus": ["handleConfirmOrderEvent"],
        "showSuccessModal": ["handleSuccessModal"]
    }; }
};
ScOrderConfirmProvider.style = ScOrderConfirmProviderStyle0;

const ScSessionProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scUpdateOrderState = createEvent(this, "scUpdateOrderState", 7);
        this.scUpdateDraftState = createEvent(this, "scUpdateDraftState", 7);
        this.scPaid = createEvent(this, "scPaid", 7);
        this.scSetState = createEvent(this, "scSetState", 7);
        this.prices = [];
        this.persist = true;
    }
    handlePricesChange() {
        let line_items = this.addInitialPrices() || [];
        // line_items = this.addPriceChoices(line_items);
        if (!(line_items === null || line_items === void 0 ? void 0 : line_items.length)) {
            return;
        }
        return this.loadUpdate({ line_items });
    }
    /**
     * Finalize the order.
     *
     * @returns {Promise<Order>}
     */
    async finalize() {
        return await this.handleFormSubmit();
    }
    async getFormData() {
        let data = {};
        const form = this.el.querySelector('sc-form');
        if (form) {
            const json = await form.getFormJson();
            data = parseFormData(json);
        }
        return data;
    }
    /**
     * Handles the form submission.
     * @param e
     */
    async handleFormSubmit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        removeNotice();
        updateFormState('FINALIZE');
        if (((_a = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _a === void 0 ? void 0 : _a.payment_method_required) && (state$3 === null || state$3 === void 0 ? void 0 : state$3.id) === 'stripe' && state$2.config.stripe.paymentElement) {
            // not initialized.
            if (!((_b = state$2 === null || state$2 === void 0 ? void 0 : state$2.instances) === null || _b === void 0 ? void 0 : _b.stripeElements)) {
                updateFormState('REJECT');
                this.handleErrorResponse({ message: 'Stripe Elements not found.', code: 'stripe_elements_not_found' });
                return new Error('Stripe Elements not found.');
            }
            // submit the elements.
            const { error } = await ((_c = state$2 === null || state$2 === void 0 ? void 0 : state$2.instances) === null || _c === void 0 ? void 0 : _c.stripeElements.submit());
            if (error) {
                console.error({ error });
                updateFormState('REJECT');
                createErrorNotice(error);
                return;
            }
        }
        // Get current form state.
        let data = await this.getFormData();
        if (((_d = window === null || window === void 0 ? void 0 : window.scData) === null || _d === void 0 ? void 0 : _d.recaptcha_site_key) && (window === null || window === void 0 ? void 0 : window.grecaptcha)) {
            try {
                data['grecaptcha'] = await window.grecaptcha.execute(window.scData.recaptcha_site_key, { action: 'surecart_checkout_submit' });
            }
            catch (e) {
                console.error(e);
                updateFormState('REJECT');
                this.handleErrorResponse(e);
                return new Error(e === null || e === void 0 ? void 0 : e.message);
            }
        }
        // first lets make sure the session is updated before we process it.
        try {
            await this.update(data);
        }
        catch (e) {
            console.error(e);
            updateFormState('REJECT');
            this.handleErrorResponse(e);
        }
        // first validate server-side and get key
        try {
            state$1.checkout = await finalizeCheckout({
                id: (_e = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _e === void 0 ? void 0 : _e.id,
                query: {
                    ...((state$3 === null || state$3 === void 0 ? void 0 : state$3.method) ? { payment_method_type: state$3 === null || state$3 === void 0 ? void 0 : state$3.method } : {}),
                    return_url: addQueryArgs(window.location.href, {
                        ...(((_f = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _f === void 0 ? void 0 : _f.id) ? { checkout_id: (_g = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _g === void 0 ? void 0 : _g.id } : {}),
                        is_surecart_payment_redirect: true,
                    }),
                },
                data,
                processor: {
                    id: state$3.id,
                    manual: state$3.manual,
                },
            });
            if ((_l = (_k = (_j = (_h = state$1.checkout) === null || _h === void 0 ? void 0 : _h.payment_intent) === null || _j === void 0 ? void 0 : _j.processor_data) === null || _k === void 0 ? void 0 : _k.mollie) === null || _l === void 0 ? void 0 : _l.checkout_url) {
                updateFormState('PAYING');
                return setTimeout(() => { var _a, _b, _c, _d; return window.location.assign((_d = (_c = (_b = (_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.payment_intent) === null || _b === void 0 ? void 0 : _b.processor_data) === null || _c === void 0 ? void 0 : _c.mollie) === null || _d === void 0 ? void 0 : _d.checkout_url); }, 50);
            }
            // the checkout is paid.
            if (['paid', 'processing'].includes((_m = state$1.checkout) === null || _m === void 0 ? void 0 : _m.status)) {
                this.scPaid.emit();
            }
            setTimeout(() => {
                updateFormState('PAYING');
            }, 50);
            return state$1.checkout;
        }
        catch (e) {
            console.error(e);
            this.handleErrorResponse(e);
            return new Error(e === null || e === void 0 ? void 0 : e.message);
        }
    }
    /**
     * Handle paid event and update the
     */
    async handlePaid() {
        updateFormState('PAID');
    }
    async handleAbandonedCartUpdate(e) {
        const abandoned_checkout_enabled = e.detail;
        this.loadUpdate({
            abandoned_checkout_enabled,
        });
    }
    /** Find or create session on load. */
    componentDidLoad() {
        this.findOrCreateOrder();
    }
    /** Find or create an order */
    async findOrCreateOrder() {
        var _a;
        // get URL params.
        const { redirect_status, checkout_id, line_items, coupon, is_surecart_payment_redirect } = getQueryArgs(window.location.href);
        // remove params we don't want.
        window.history.replaceState({}, document.title, removeQueryArgs(window.location.href, 'redirect_status', 'coupon', 'line_items', 'confirm_checkout_id', 'checkout_id', 'no_cart', 'is_surecart_payment_redirect'));
        // handle abandoned checkout.
        if (!!is_surecart_payment_redirect && !!checkout_id) {
            updateFormState('FINALIZE');
            updateFormState('PAYING');
            return this.handleCheckoutIdFromUrl(checkout_id, coupon, {
                refresh_status: true,
            });
        }
        // handle redirect status.
        if (!!redirect_status) {
            return this.handleRedirectStatus(redirect_status, checkout_id);
        }
        // handle abandoned checkout.
        if (!!checkout_id) {
            return this.handleCheckoutIdFromUrl(checkout_id, coupon);
        }
        // handle initial line items.
        if (!!line_items) {
            return this.handleInitialLineItems(line_items, coupon);
        }
        // we have an existing saved checkout id in the session, and we are persisting.
        const id = (_a = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _a === void 0 ? void 0 : _a.id;
        if (id && this.persist) {
            return this.handleExistingCheckout(id, coupon);
        }
        return this.handleNewCheckout(coupon);
    }
    /** Handle payment instrument redirect status */
    async handleRedirectStatus(status, id) {
        var _a, _b;
        console.info('Handling payment redirect.');
        // status failed.
        if (status === 'failed') {
            createErrorNotice(wp.i18n.__('Payment unsuccessful. Please try again.', 'surecart'));
            return;
        }
        // get the
        if (!id) {
            createErrorNotice(wp.i18n.__('Could not find checkout. Please contact us before attempting to purchase again.', 'surecart'));
            return;
        }
        // success, refetch the checkout
        try {
            updateFormState('FINALIZE');
            state$1.checkout = (await fetchCheckout({
                id,
                query: {
                    refresh_status: true,
                },
            }));
            // TODO: should we even check this?
            if (((_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.status) && ['paid', 'processing'].includes((_b = state$1.checkout) === null || _b === void 0 ? void 0 : _b.status)) {
                setTimeout(() => {
                    updateFormState('PAID');
                    this.scPaid.emit();
                }, 100);
            }
        }
        catch (e) {
            this.handleErrorResponse(e);
        }
    }
    /** Handle abandoned checkout from URL */
    async handleCheckoutIdFromUrl(id, promotion_code = '', query = {}) {
        var _a;
        console.info('Handling existing checkout from url.', promotion_code, id);
        // if coupon code, load the checkout with the code.
        if (promotion_code) {
            return this.loadUpdate({
                id,
                discount: { promotion_code },
                refresh_line_items: true,
                ...query,
            });
        }
        try {
            updateFormState('FETCH');
            state$1.checkout = (await fetchCheckout({
                id,
                query: {
                    refresh_line_items: true,
                    ...query,
                },
            }));
            updateFormState('RESOLVE');
        }
        catch (e) {
            this.handleErrorResponse(e);
        }
        // handle status.
        switch ((_a = state$1.checkout) === null || _a === void 0 ? void 0 : _a.status) {
            case 'paid':
            case 'processing':
                return setTimeout(() => {
                    updateFormState('FINALIZE');
                    updateFormState('PAID');
                    this.scPaid.emit();
                }, 100);
            case 'payment_failed':
                createErrorNotice({
                    message: wp.i18n.__('Payment unsuccessful.', 'surecart'),
                });
                updateFormState('REJECT');
                return;
            case 'payment_intent_canceled':
                updateFormState('REJECT');
                return;
            case 'canceled':
                clearCheckout();
                createErrorNotice({
                    message: wp.i18n.__('Payment canceled. Please try again.', 'surecart'),
                });
                updateFormState('REJECT');
                return;
        }
    }
    /** Handle line items (and maybe ) */
    async handleInitialLineItems(line_items, promotion_code) {
        console.info('Handling initial line items.');
        // TODO: move this to central store.
        const address = this.el.querySelector('sc-order-shipping-address');
        return this.loadUpdate({
            line_items,
            refresh_line_items: true,
            ...(promotion_code ? { discount: { promotion_code } } : {}),
            ...((address === null || address === void 0 ? void 0 : address.defaultCountry)
                ? {
                    shipping_address: {
                        country: address === null || address === void 0 ? void 0 : address.defaultCountry,
                    },
                }
                : {}),
        });
    }
    /** Handle a brand new checkout. */
    async handleNewCheckout(promotion_code) {
        var _a, _b, _c;
        // get existing form data from defaults (default country selection, etc).
        const data = this.getFormData();
        let line_items = state$1.initialLineItems || [];
        const address = this.el.querySelector('sc-order-shipping-address');
        try {
            updateFormState('FETCH');
            state$1.checkout = (await createCheckout({
                data: {
                    ...data,
                    ...(promotion_code ? { discount: { promotion_code } } : {}),
                    ...((address === null || address === void 0 ? void 0 : address.defaultCountry)
                        ? {
                            shipping_address: {
                                country: address === null || address === void 0 ? void 0 : address.defaultCountry,
                            },
                        }
                        : {}),
                    line_items,
                    ...(((_a = state$1.taxProtocol) === null || _a === void 0 ? void 0 : _a.eu_vat_required) ? { tax_identifier: { number_type: 'eu_vat' } } : {}),
                },
            }));
            updateFormState('RESOLVE');
        }
        catch (e) {
            console.error(e);
            this.handleErrorResponse(e);
            // Handle any invalid coupon set on checkout URL.
            if (((_c = (_b = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.code) === 'checkout.discount.coupon.blank') {
                await this.handleNewCheckout(false);
                createErrorNotice(e);
            }
        }
    }
    /** Handle existing checkout */
    async handleExistingCheckout(id, promotion_code) {
        var _a, _b, _c;
        if (!id)
            return this.handleNewCheckout(promotion_code);
        console.info('Handling existing checkout.');
        try {
            updateFormState('FETCH');
            state$1.checkout = (await createOrUpdateCheckout({
                id,
                data: {
                    ...(promotion_code ? { discount: { promotion_code } } : {}),
                    ...(((_a = state$1.taxProtocol) === null || _a === void 0 ? void 0 : _a.eu_vat_required) ? { tax_identifier: { number_type: 'eu_vat' } } : {}),
                    refresh_line_items: true,
                },
            }));
            updateFormState('RESOLVE');
        }
        catch (e) {
            console.error(e);
            this.handleErrorResponse(e);
            // Handle any invalid coupon set on checkout URL.
            if (((_c = (_b = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.code) === 'checkout.discount.coupon.blank') {
                await this.handleExistingCheckout(id, false);
                createErrorNotice(e);
            }
        }
    }
    /** Handle the error response. */
    async handleErrorResponse(e) {
        var _a, _b, _c, _d, _e, _f;
        // reinitalize if order not found.
        if (['checkout.not_found'].includes(e === null || e === void 0 ? void 0 : e.code)) {
            clearCheckout();
            return this.handleNewCheckout(false);
        }
        if (['test_mode_restricted'].includes(e === null || e === void 0 ? void 0 : e.code)) {
            updateFormState('TEST_MODE_RESTRICTED');
            return;
        }
        const hasPriceVersionChangeError = ((e === null || e === void 0 ? void 0 : e.additional_errors) || []).some(error => {
            var _a, _b;
            const purchasableStatuses = ((_b = (_a = error === null || error === void 0 ? void 0 : error.data) === null || _a === void 0 ? void 0 : _a.options) === null || _b === void 0 ? void 0 : _b.purchasable_statuses) || [];
            return ['price_old_version', 'variant_old_version'].some(status => purchasableStatuses.includes(status));
        });
        if (hasPriceVersionChangeError) {
            await this.loadUpdate({
                id: (_a = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _a === void 0 ? void 0 : _a.id,
                refresh_line_items: true,
                status: 'draft',
            });
            createInfoNotice(((_c = (_b = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message) ||
                wp.i18n.__('Some products in your order were outdated and have been updated. Please review your order summary before proceeding to payment.', 'surecart'));
            updateFormState('REJECT');
            return;
        }
        // If got Product out of stock error, then fetch the checkout again.
        if (((_e = (_d = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.code) === 'checkout.product.out_of_stock') {
            this.fetch();
            updateFormState('REJECT');
            return;
        }
        if (['order.invalid_status_transition'].includes(e === null || e === void 0 ? void 0 : e.code)) {
            await this.loadUpdate({
                id: (_f = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _f === void 0 ? void 0 : _f.id,
                status: 'draft',
            });
            this.handleFormSubmit();
            return;
        }
        // expired
        if ((e === null || e === void 0 ? void 0 : e.code) === 'rest_cookie_invalid_nonce') {
            updateFormState('EXPIRE');
            return;
        }
        // paid
        if ((e === null || e === void 0 ? void 0 : e.code) === 'readonly') {
            clearCheckout();
            window.location.assign(removeQueryArgs(window.location.href, 'order'));
            return;
        }
        createErrorNotice(e);
        updateFormState('REJECT');
    }
    /** Looks through children and finds items needed for initial session. */
    async initialize(args = {}) {
        let line_items = state$1.initialLineItems || [];
        return this.loadUpdate({ ...((line_items === null || line_items === void 0 ? void 0 : line_items.length) ? { line_items } : {}), ...args });
    }
    /** Add prices that are passed into the component. */
    addInitialPrices() {
        var _a;
        if (!((_a = this === null || this === void 0 ? void 0 : this.prices) === null || _a === void 0 ? void 0 : _a.length))
            return [];
        // check for id
        if (this.prices.some(p => !(p === null || p === void 0 ? void 0 : p.id))) {
            return;
        }
        // add prices that are passed into this component.
        return this.prices.map(price => {
            return {
                price_id: price.id,
                quantity: price.quantity,
                variant: price.variant,
            };
        });
    }
    // /** Add default prices that may be selected in form. */
    // addPriceChoices(line_items = []) {
    //   // const elements = this.el.querySelectorAll('[price-id]') as any;
    //   // elements.forEach(el => {
    //   //   // handle price choices.
    //   //   if (el.checked) {
    //   //     line_items.push({
    //   //       quantity: el.quantity || 1,
    //   //       price_id: el.priceId,
    //   //       ...(el.defaultAmount ? { ad_hoc_amount: el.defaultAmount } : {}),
    //   //     });
    //   //   }
    //   //   // handle donation default amount.
    //   //   if (el.defaultAmount) {
    //   //     line_items.push({
    //   //       quantity: el.quantity || 1,
    //   //       price_id: el.priceId,
    //   //       ad_hoc_amount: el.defaultAmount,
    //   //     });
    //   //   }
    //   // });
    //   // return line_items;
    // }
    getSessionId() {
        var _a, _b;
        // check url first.
        const checkoutId = getQueryArg(window.location.href, 'checkout_id');
        if (!!checkoutId) {
            return checkoutId;
        }
        // check existing order.
        if ((_a = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _a === void 0 ? void 0 : _a.id) {
            return (_b = state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout) === null || _b === void 0 ? void 0 : _b.id;
        }
        // we don't have and order id.
        return null;
    }
    async fetchCheckout(id, { query = {}, data = {} } = {}) {
        try {
            updateFormState('FETCH');
            const checkout = (await createOrUpdateCheckout({
                id,
                query,
                data,
            }));
            updateFormState('RESOLVE');
            return checkout;
        }
        catch (e) {
            this.handleErrorResponse(e);
        }
    }
    /** Fetch a session. */
    async fetch(query = {}) {
        try {
            updateFormState('FETCH');
            state$1.checkout = (await fetchCheckout({
                id: this.getSessionId(),
                query,
            }));
            updateFormState('RESOLVE');
        }
        catch (e) {
            this.handleErrorResponse(e);
        }
    }
    /** Update a session */
    async update(data = {}, query = {}) {
        try {
            state$1.checkout = (await createOrUpdateCheckout({
                id: (data === null || data === void 0 ? void 0 : data.id) ? data.id : this.getSessionId(),
                data,
                query,
            }));
        }
        catch (e) {
            // reinitalize if order not found.
            if (['checkout.not_found'].includes(e === null || e === void 0 ? void 0 : e.code)) {
                clearCheckout();
                return this.initialize();
            }
            console.error(e);
            throw e;
        }
    }
    /** Updates a session with loading status changes. */
    async loadUpdate(data = {}) {
        try {
            updateFormState('FETCH');
            await this.update(data);
            updateFormState('RESOLVE');
        }
        catch (e) {
            this.handleErrorResponse(e);
        }
    }
    render() {
        return (h("sc-line-items-provider", { key: 'c241cdcac4b20309e28c4ad79c8ce16b6d083bd6', order: state$1 === null || state$1 === void 0 ? void 0 : state$1.checkout, onScUpdateLineItems: e => this.loadUpdate({ line_items: e.detail }) }, h("slot", { key: '18d4590a944294c1bb919721269684bf1e22e583' })));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "prices": ["handlePricesChange"]
    }; }
};

export { ScCheckoutAutofillProvider as sc_checkout_autofill_provider, ScCheckoutStockAlert as sc_checkout_stock_alert, ScCheckoutTestComplete as sc_checkout_test_complete, ScCheckoutUnsavedChangesWarning as sc_checkout_unsaved_changes_warning, ScFormComponentsValidator as sc_form_components_validator, ScFormErrorProvider as sc_form_error_provider, ScFormStateProvider as sc_form_state_provider, ScLoginProvider as sc_login_provider, ScOrderConfirmProvider as sc_order_confirm_provider, ScSessionProvider as sc_session_provider };

//# sourceMappingURL=sc-checkout-autofill-provider_10.entry.js.map