import { r as registerInstance, h } from './index-25e5af33.js';
import { p as pure } from './pure-963214cb.js';
import './fetch-9e15a95d.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import { a as apiFetch } from './index-824c562b.js';
import './remove-query-args-938c53ea.js';

const scStripeAddMethodCss = "sc-stripe-add-method{display:block}sc-stripe-add-method [hidden]{display:none}.loader{display:grid;height:128px;gap:2em}.loader__row{display:flex;align-items:flex-start;justify-content:space-between;gap:1em}.loader__details{display:grid;gap:0.5em}";
const ScStripeAddMethodStyle0 = scStripeAddMethodCss;

const ScStripeAddMethod = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.liveMode = true;
        this.customerId = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.loaded = undefined;
        this.error = undefined;
        this.paymentIntent = undefined;
    }
    componentWillLoad() {
        this.createPaymentIntent();
    }
    async handlePaymentIntentCreate() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        // we need this data.
        if (!((_c = (_b = (_a = this.paymentIntent) === null || _a === void 0 ? void 0 : _a.processor_data) === null || _b === void 0 ? void 0 : _b.stripe) === null || _c === void 0 ? void 0 : _c.publishable_key) || !((_f = (_e = (_d = this.paymentIntent) === null || _d === void 0 ? void 0 : _d.processor_data) === null || _e === void 0 ? void 0 : _e.stripe) === null || _f === void 0 ? void 0 : _f.account_id))
            return;
        // check if stripe has been initialized
        if (!this.stripe) {
            try {
                this.stripe = await pure.loadStripe((_j = (_h = (_g = this.paymentIntent) === null || _g === void 0 ? void 0 : _g.processor_data) === null || _h === void 0 ? void 0 : _h.stripe) === null || _j === void 0 ? void 0 : _j.publishable_key, { stripeAccount: (_m = (_l = (_k = this.paymentIntent) === null || _k === void 0 ? void 0 : _k.processor_data) === null || _l === void 0 ? void 0 : _l.stripe) === null || _m === void 0 ? void 0 : _m.account_id });
            }
            catch (e) {
                this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Stripe could not be loaded', 'surecart');
                // don't continue.
                return;
            }
        }
        // load the element.
        // we need a stripe instance and client secret.
        if (!((_q = (_p = (_o = this.paymentIntent) === null || _o === void 0 ? void 0 : _o.processor_data) === null || _p === void 0 ? void 0 : _p.stripe) === null || _q === void 0 ? void 0 : _q.client_secret) || !this.container) {
            console.warn('do not have client secret or container');
            return;
        }
        // get the computed styles.
        const styles = getComputedStyle(document.body);
        // we have what we need, load elements.
        this.elements = this.stripe.elements({
            clientSecret: (_t = (_s = (_r = this.paymentIntent) === null || _r === void 0 ? void 0 : _r.processor_data) === null || _s === void 0 ? void 0 : _s.stripe) === null || _t === void 0 ? void 0 : _t.client_secret,
            appearance: {
                variables: {
                    colorPrimary: styles.getPropertyValue('--sc-color-primary-500'),
                    colorText: styles.getPropertyValue('--sc-input-label-color'),
                    borderRadius: styles.getPropertyValue('--sc-input-border-radius-medium'),
                    colorBackground: styles.getPropertyValue('--sc-input-background-color'),
                    fontSizeBase: styles.getPropertyValue('--sc-input-font-size-medium'),
                },
                rules: {
                    '.Input': {
                        border: styles.getPropertyValue('--sc-input-border'),
                    },
                    '.Input::placeholder': {
                        color: styles.getPropertyValue('--sc-input-placeholder-color'),
                    },
                },
            },
        });
        // create the payment element.
        this.elements
            .create('payment', {
            wallets: {
                applePay: 'never',
                googlePay: 'never',
            },
        })
            .mount('.sc-payment-element-container');
        this.element = this.elements.getElement('payment');
        this.element.on('ready', () => (this.loaded = true));
    }
    async createPaymentIntent() {
        try {
            this.loading = true;
            this.error = '';
            this.paymentIntent = await apiFetch({
                method: 'POST',
                path: 'surecart/v1/payment_intents',
                data: {
                    processor_type: 'stripe',
                    live_mode: this.liveMode,
                    customer_id: this.customerId,
                    refresh_status: true,
                },
            });
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
        }
        finally {
            this.loading = false;
        }
    }
    /**
     * Handle form submission.
     */
    async handleSubmit(e) {
        var _a;
        e.preventDefault();
        this.loading = true;
        try {
            const confirmed = await this.stripe.confirmSetup({
                elements: this.elements,
                confirmParams: {
                    return_url: addQueryArgs(this.successUrl, {
                        payment_intent: (_a = this.paymentIntent) === null || _a === void 0 ? void 0 : _a.id,
                    }),
                },
                redirect: 'always',
            });
            if (confirmed === null || confirmed === void 0 ? void 0 : confirmed.error) {
                this.error = confirmed.error.message;
                throw confirmed.error;
            }
        }
        catch (e) {
            console.error(e);
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        return (h("sc-form", { key: 'b3703206cbf8dd29125bafb4ad4c91983c3d335a', onScFormSubmit: e => this.handleSubmit(e) }, this.error && (h("sc-alert", { key: '485b883e3a1f905896c52576e90590223935dc2b', open: !!this.error, type: "danger" }, h("span", { key: '7f0cc27bbc5b9432952f2fb8d989d96b0caaeed3', slot: "title" }, wp.i18n.__('Error', 'surecart')), this.error)), h("div", { key: 'b1774d217dea92dc0378831ed203caa2cbd8c8cf', class: "loader", hidden: this.loaded }, h("div", { key: '03fb9f1dca55b7ba86c60670a66072d9d8912a2b', class: "loader__row" }, h("div", { key: '71e9f4d027192231d0fab5eb77aa9d5405a20fbb', style: { width: '50%' } }, h("sc-skeleton", { key: '2dee7b2a5fa4e6a182cc495bbaa75f7da39739af', style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", { key: '64371d9b73225de1ee8b629634ae638a94cd471c' })), h("div", { key: '0e133274d308e5a8af9090ed1a9c9d1e6a2643f6', style: { flex: '1' } }, h("sc-skeleton", { key: 'cebeb3c66228c414022b2e0074e54305cc5cbeb6', style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", { key: 'ea3396206ad0a2c041d45c844cb50dd8b3e01fd6' })), h("div", { key: 'f79678e895738c499b2e0602fd41db73158e5327', style: { flex: '1' } }, h("sc-skeleton", { key: '84a3def2e1369e5eb93e585d75f6480ac0dd0c42', style: { width: '50%', marginBottom: '0.5em' } }), h("sc-skeleton", { key: '78a2939177cf186f77a6609b827f9952c05134b7' }))), h("div", { key: 'a58d9228bbff1a9d1046ee32fca6a3d0c68864ca', class: "loader__details" }, h("sc-skeleton", { key: '247594f4a3d061d09eb8c716ecb8f669a26e2485', style: { height: '1rem' } }), h("sc-skeleton", { key: 'c8f628ba21fa3b3c6ac85530ce301c23b99c42b5', style: { height: '1rem', width: '30%' } }))), h("div", { key: '3aac9ad2e9af9a10c0288b5ec46d259cb4bea024', hidden: !this.loaded, class: "sc-payment-element-container", ref: el => (this.container = el) }), h("sc-button", { key: '96c587be72b04d3d67cc83825983115a14fac005', type: "primary", submit: true, full: true, loading: this.loading }, wp.i18n.__('Save Payment Method', 'surecart'))));
    }
    static get watchers() { return {
        "paymentIntent": ["handlePaymentIntentCreate"]
    }; }
};
ScStripeAddMethod.style = ScStripeAddMethodStyle0;

export { ScStripeAddMethod as sc_stripe_add_method };

//# sourceMappingURL=sc-stripe-add-method.entry.js.map