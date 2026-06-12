import { r as registerInstance, h, F as Fragment } from './index-25e5af33.js';
import { o as openWormhole } from './consumer-f1775a76.js';
import { a as getHumanDiscount } from './price-1ff6aa07.js';
import { f as formatTaxDisplay } from './tax-a03623ca.js';
import './currency-a0c9bff4.js';

const scOrderConfirmationLineItemsCss = ":host{display:block}.line-items{display:grid;gap:var(--sc-spacing-small)}.line-item{display:grid;gap:var(--sc-spacing-small)}.fee__description{opacity:0.75}";
const ScOrderConfirmationLineItemsStyle0 = scOrderConfirmationLineItemsCss;

const ScOrderConfirmationLineItems = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = undefined;
    }
    render() {
        var _a, _b;
        if (!!this.loading) {
            return (h("sc-line-item", null, h("sc-skeleton", { style: { 'width': '50px', 'height': '50px', '--border-radius': '0' }, slot: "image" }), h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), h("sc-skeleton", { slot: "description", style: { width: '60px', display: 'inline-block' } }), h("sc-skeleton", { style: { width: '120px', display: 'inline-block' }, slot: "price" }), h("sc-skeleton", { style: { width: '60px', display: 'inline-block' }, slot: "price-description" })));
        }
        return (h("div", { class: { 'confirmation-summary': true } }, h("div", { class: "line-items", part: "line-items" }, (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data.map(item => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return (h("div", { class: "line-item" }, h("sc-product-line-item", { key: item.id, image: (_b = (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.line_item_image, name: `${(_d = (_c = item === null || item === void 0 ? void 0 : item.price) === null || _c === void 0 ? void 0 : _c.product) === null || _d === void 0 ? void 0 : _d.name}`, price: (_e = item === null || item === void 0 ? void 0 : item.price) === null || _e === void 0 ? void 0 : _e.name, variant: item === null || item === void 0 ? void 0 : item.variant_display_options, editable: false, removable: false, quantity: item.quantity, fees: (_f = item === null || item === void 0 ? void 0 : item.fees) === null || _f === void 0 ? void 0 : _f.data, note: item === null || item === void 0 ? void 0 : item.display_note, amount: item.ad_hoc_display_amount ? item.ad_hoc_display_amount : item.subtotal_display_amount, scratch: !item.ad_hoc_display_amount && (item === null || item === void 0 ? void 0 : item.scratch_display_amount), trial: (_g = item === null || item === void 0 ? void 0 : item.price) === null || _g === void 0 ? void 0 : _g.trial_text, interval: `${(_h = item === null || item === void 0 ? void 0 : item.price) === null || _h === void 0 ? void 0 : _h.short_interval_text} ${(_j = item === null || item === void 0 ? void 0 : item.price) === null || _j === void 0 ? void 0 : _j.short_interval_count_text}`, purchasableStatus: item === null || item === void 0 ? void 0 : item.purchasable_status_display, sku: item === null || item === void 0 ? void 0 : item.sku })));
        }))));
    }
};
openWormhole(ScOrderConfirmationLineItems, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationLineItems.style = ScOrderConfirmationLineItemsStyle0;

const scOrderConfirmationTotalsCss = ":host{display:block}";
const ScOrderConfirmationTotalsStyle0 = scOrderConfirmationTotalsCss;

const ScOrderConfirmationTotals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.order = undefined;
    }
    renderDiscountLine() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        if (!((_c = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.discount) === null || _b === void 0 ? void 0 : _b.promotion) === null || _c === void 0 ? void 0 : _c.code)) {
            return null;
        }
        let humanDiscount = '';
        if ((_e = (_d = this.order) === null || _d === void 0 ? void 0 : _d.discount) === null || _e === void 0 ? void 0 : _e.coupon) {
            humanDiscount = getHumanDiscount((_g = (_f = this.order) === null || _f === void 0 ? void 0 : _f.discount) === null || _g === void 0 ? void 0 : _g.coupon);
        }
        return (h("sc-line-item", { style: { marginTop: 'var(--sc-spacing-small)' } }, h("span", { slot: "description" }, wp.i18n.__('Discount', 'surecart'), h("br", null), ((_k = (_j = (_h = this.order) === null || _h === void 0 ? void 0 : _h.discount) === null || _j === void 0 ? void 0 : _j.promotion) === null || _k === void 0 ? void 0 : _k.code) && (h("sc-tag", { type: "success", size: "small" }, (_o = (_m = (_l = this.order) === null || _l === void 0 ? void 0 : _l.discount) === null || _m === void 0 ? void 0 : _m.promotion) === null || _o === void 0 ? void 0 : _o.code))), humanDiscount && (h("span", { class: "coupon-human-discount", slot: "price-description" }, "(", humanDiscount, ")")), h("span", { slot: "price" }, (_p = this.order) === null || _p === void 0 ? void 0 : _p.discounts_display_amount)));
    }
    renderCheckoutFees(checkout) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.checkout_fees) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (h(Fragment, null, (_d = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.checkout_fees) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.map(fee => (h("sc-line-item", { key: fee === null || fee === void 0 ? void 0 : fee.id }, h("span", { slot: "description" }, fee === null || fee === void 0 ? void 0 : fee.description), h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount))))));
    }
    renderShippingFees(checkout) {
        var _a, _b, _c, _d;
        if (!((_b = (_a = checkout === null || checkout === void 0 ? void 0 : checkout.shipping_fees) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length)) {
            return null;
        }
        return (h(Fragment, null, (_d = (_c = checkout === null || checkout === void 0 ? void 0 : checkout.shipping_fees) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.map(fee => (h("sc-line-item", { key: fee === null || fee === void 0 ? void 0 : fee.id }, h("span", { slot: "description" }, fee === null || fee === void 0 ? void 0 : fee.description), h("span", { slot: "price" }, fee === null || fee === void 0 ? void 0 : fee.display_amount))))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
        const shippingMethod = (_b = (_a = this.order) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice) === null || _b === void 0 ? void 0 : _b.shipping_method;
        const shippingMethodName = shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.name;
        return (h("div", { key: '44671e81b5adecb8d1891430644eb087811887cd', class: { 'line-item-totals': true } }, ((_c = this.order) === null || _c === void 0 ? void 0 : _c.subtotal_amount) !== ((_d = this.order) === null || _d === void 0 ? void 0 : _d.total_amount) && (h(Fragment, { key: 'ba2d4baca0c298466d2104885cfb092d11cb07a7' }, h("sc-line-item", { key: '222e9eecae96c5136a8e2066e96e2faae09efdf2' }, h("span", { key: '1bbf38534880200f25be14db39b5f34779c9cc01', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), h("span", { key: '7efb9c74fa4e161b95bd0ed1038070a7f29f71fa', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_e = this.order) === null || _e === void 0 ? void 0 : _e.subtotal_display_amount)), this.renderCheckoutFees(this.order))), !!((_f = this.order) === null || _f === void 0 ? void 0 : _f.trial_amount) && (h("sc-line-item", { key: '755f89adb52b51c2f0a8c6a3906cc3c850e627a2' }, h("span", { key: '824c8d9219e352218696e46ca6d00dff5641cc0e', slot: "description" }, wp.i18n.__('Trial', 'surecart')), h("span", { key: 'f545cfeb775e4ded45dc2fbbda28cd08dd5b111c', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_g = this.order) === null || _g === void 0 ? void 0 : _g.trial_display_amount))), !!((_h = this.order) === null || _h === void 0 ? void 0 : _h.discounts) && (h("sc-line-item", { key: '6ea99099570522904cbf4b343d902fe764012601' }, h("span", { key: '7d034eaf1edb07d67e374b45922a2d88d751db73', slot: "description" }, wp.i18n.__('Discounts', 'surecart')), h("span", { key: '0abe2c243ff2161f6f7ea7596334450b7178ad25', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_j = this.order) === null || _j === void 0 ? void 0 : _j.discounts_display))), !!((_m = (_l = (_k = this.order) === null || _k === void 0 ? void 0 : _k.discount) === null || _l === void 0 ? void 0 : _l.promotion) === null || _m === void 0 ? void 0 : _m.code) && (h("sc-line-item", { key: 'bf93b13d3ede9f0bfc076036820ba44f94cac93c' }, h("span", { key: 'f913e7f17d72d794c79814fa9a74200edc3a3ca8', slot: "description" }, wp.i18n.__('Discount', 'surecart'), h("br", { key: '8e6fbe4b2209d5dba572aabe22f6f95c3efc3d61' }), h("sc-tag", { key: '7a3d578d52a2de28ae83aa0d5d65bdf8e34f894a', type: "success" }, wp.i18n.__('Coupon:', 'surecart'), " ", (_q = (_p = (_o = this.order) === null || _o === void 0 ? void 0 : _o.discount) === null || _p === void 0 ? void 0 : _p.promotion) === null || _q === void 0 ? void 0 :
            _q.code)), h("span", { key: '478e1d07c78c5beff09f62f3e6d9ccd407d35fae', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_r = this.order) === null || _r === void 0 ? void 0 : _r.discounts_display_amount))), !!((_s = this.order) === null || _s === void 0 ? void 0 : _s.shipping_amount) && (h(Fragment, { key: '91a7adaddca56086da433881fece17af627ef61e' }, h("sc-line-item", { key: '0d53ebb13a9c528ebf68a005ef419872ca550495' }, h("span", { key: '7fcb2a192ba253bf72fae8f60a73b056ede52976', slot: "description" }, `${wp.i18n.__('Shipping', 'surecart')} ${shippingMethodName ? `(${shippingMethodName})` : ''}`), h("span", { key: '681823e941285f2703531561f858fc4ed453e156', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_t = this.order) === null || _t === void 0 ? void 0 : _t.shipping_display_amount)), this.renderShippingFees(this.order))), !!((_u = this.order) === null || _u === void 0 ? void 0 : _u.tax_amount) && (h("sc-line-item", { key: '232c176303a018b90720c62888780564f700e333' }, h("span", { key: '171094a0e398cd1e705252012ce902dc89109a84', slot: "description" }, `${formatTaxDisplay((_v = this.order) === null || _v === void 0 ? void 0 : _v.tax_label, ((_w = this.order) === null || _w === void 0 ? void 0 : _w.tax_status) === 'estimated')} (${(_x = this.order) === null || _x === void 0 ? void 0 : _x.tax_percent}%)`), h("span", { key: '046ae2d96f79dcde471779993bf1ffd72918bd97', slot: "price" }, (_y = this.order) === null || _y === void 0 ? void 0 : _y.tax_display_amount), !!((_z = this.order) === null || _z === void 0 ? void 0 : _z.tax_inclusive_amount) && h("span", { key: '955492f5d029d945b6ea168752dbc46baeb650a8', slot: "price-description" }, `(${wp.i18n.__('included', 'surecart')})`))), h("sc-divider", { key: '1dff05579c9a66d2f9360f96aefb137756d08993', style: { '--spacing': 'var(--sc-spacing-x-small)' } }), h("sc-line-item", { key: 'ed82d074be080007c31f96d1a48f830a20a0bc1f', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: 'f8ea6f5deaf869ee7a893e9d7e9693477ef00a36', slot: "title" }, wp.i18n.__('Total', 'surecart')), h("span", { key: '20bee4b4e2d80073f3e3628ef65bc5e3c2c81a13', slot: "price" }, (_0 = this.order) === null || _0 === void 0 ? void 0 : _0.total_display_amount), h("span", { key: '988c929a99b90cbfbd73fc660793255f04064275', slot: "currency" }, (_1 = this.order) === null || _1 === void 0 ? void 0 : _1.currency)), !!((_2 = this.order) === null || _2 === void 0 ? void 0 : _2.proration_amount) && (h("sc-line-item", { key: '3bbb3f33ff0c26364c29730ffb668b6b435afc30' }, h("span", { key: '4113172856b4d42315a2920bd78680f748b07843', slot: "description" }, wp.i18n.__('Proration', 'surecart')), h("span", { key: 'e8f40fc87c71542bb4d24c0485a8909683626ab5', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_3 = this.order) === null || _3 === void 0 ? void 0 : _3.proration_display_amount))), !!((_4 = this.order) === null || _4 === void 0 ? void 0 : _4.applied_balance_amount) && (h("sc-line-item", { key: '5b9bbdc27876c8462103c4eba9087c5b90db9a46' }, h("span", { key: '8324ce44b61b1773864741a5c3ad232f6150f968', slot: "description" }, wp.i18n.__('Applied Balance', 'surecart')), h("span", { key: '32c9d993ca39ba4098b179ee589b0551b8cd88eb', style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            }, slot: "price" }, (_5 = this.order) === null || _5 === void 0 ? void 0 : _5.applied_balance_display_amount))), !!((_6 = this.order) === null || _6 === void 0 ? void 0 : _6.credited_balance_amount) && (h("sc-line-item", { key: '74a38d635c710045411acc44acb04eae0f3e1cb2' }, h("span", { key: 'f95c6576059bae35c2fe2c17cb1a975db056cf61', slot: "description" }, wp.i18n.__('Credited Balance', 'surecart')), h("span", { key: '44f4ba9dfb63edbdac371f902e4f3e74f5365639', slot: "price", style: {
                'font-weight': 'var(--sc-font-weight-semibold)',
                'color': 'var(--sc-color-gray-800)',
            } }, (_7 = this.order) === null || _7 === void 0 ? void 0 : _7.credited_balance_display_amount))), ((_8 = this.order) === null || _8 === void 0 ? void 0 : _8.amount_due) !== ((_9 = this.order) === null || _9 === void 0 ? void 0 : _9.total_amount) && (h("sc-line-item", { key: 'f7a9e02f23ee35d7b0c35614337622325c2f0e77', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: 'b8938a1e1818146d6c55baa6d17ddbc4925f130b', slot: "title" }, wp.i18n.__('Amount Due', 'surecart')), h("span", { key: '6af09193a445280c7d9965960ba841c5a0ba4c43', slot: "price" }, (_10 = this.order) === null || _10 === void 0 ? void 0 : _10.amount_due_display_amount), h("span", { key: '10d470253f1397d73d17024b053e6a20092a1408', slot: "currency" }, (_11 = this.order) === null || _11 === void 0 ? void 0 : _11.currency))), h("sc-divider", { key: '26668b19578151b467e95a8e62ac805c3378291c', style: { '--spacing': 'var(--sc-spacing-x-small)' } }), !!((_12 = this.order) === null || _12 === void 0 ? void 0 : _12.paid_amount) && (h("sc-line-item", { key: '143885094c4d31aa01734ebe8aadb18db025c3d7', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: 'b6cf719b35c7797fc5210bfad07095ab13166e3f', slot: "title" }, wp.i18n.__('Paid', 'surecart')), h("span", { key: '1cce9e1391c5f55ada0af572e19ae829458991e0', slot: "price" }, (_13 = this.order) === null || _13 === void 0 ? void 0 : _13.paid_display_amount), h("span", { key: '1dc39b7dc41a6953cf782dd701f04e55dca6d4ea', slot: "currency" }, (_14 = this.order) === null || _14 === void 0 ? void 0 : _14.currency))), !!((_15 = this.order) === null || _15 === void 0 ? void 0 : _15.refunded_amount) && (h(Fragment, { key: '3bf0e7f74d1659132107dea6cb860b29eb4d56c9' }, h("sc-line-item", { key: 'fe63c077fa9134dcfd521a16794c4ecf063ab039', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: 'dff307cf96e5b78514e2b0d23935c3c175f75a69', slot: "description" }, wp.i18n.__('Refunded', 'surecart')), h("span", { key: 'e7fcee1e5831a1957e6c1760567412920cb61a08', slot: "price" }, (_16 = this.order) === null || _16 === void 0 ? void 0 : _16.refunded_display_amount)), h("sc-line-item", { key: 'eda82aba130ba2921b948810a870d82f8f473b98', style: {
                'width': '100%',
                '--price-size': 'var(--sc-font-size-x-large)',
            } }, h("span", { key: '980153bd384013107cbee3af9cfbcd7a7a3ea558', slot: "title" }, wp.i18n.__('Net Payment', 'surecart')), h("span", { key: 'c806f00d5b67f2ab1dd90f1390aefc5fb12485e8', slot: "price" }, (_17 = this.order) === null || _17 === void 0 ? void 0 : _17.net_paid_display_amount)))), ((_18 = this.order) === null || _18 === void 0 ? void 0 : _18.tax_reverse_charged_amount) > 0 && (h("sc-line-item", { key: 'ab922848caa3bbbd1578ff792c7668c23ffa0c7f' }, h("span", { key: 'd6407de9f9640e86345a7f9b66730b98cf060c0c', slot: "description" }, wp.i18n.__('*Tax to be paid on reverse charge basis', 'surecart'))))));
    }
};
openWormhole(ScOrderConfirmationTotals, ['order', 'busy', 'loading', 'empty'], false);
ScOrderConfirmationTotals.style = ScOrderConfirmationTotalsStyle0;

export { ScOrderConfirmationLineItems as sc_order_confirmation_line_items, ScOrderConfirmationTotals as sc_order_confirmation_totals };

//# sourceMappingURL=sc-order-confirmation-line-items_2.entry.js.map