'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
require('./fetch-853b19c8.js');
const lazy = require('./lazy-2b509fa7.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
const index$1 = require('./index-7ced8198.js');
require('./remove-query-args-b57e8cd3.js');

const scChargesListCss = ":host{display:block;position:relative}.charges-list{display:grid;gap:1em}";
const ScChargesListStyle0 = scChargesListCss;

const ScChargesList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.query = {
            page: 1,
            per_page: 10,
        };
        this.heading = undefined;
        this.showPagination = true;
        this.allLink = undefined;
        this.charges = [];
        this.loading = undefined;
        this.loaded = undefined;
        this.error = undefined;
        this.pagination = {
            total: 0,
            total_pages: 0,
        };
    }
    /** Only fetch if visible */
    componentWillLoad() {
        lazy.onFirstVisible(this.el, () => {
            this.getItems();
        });
    }
    /** Get items */
    async getItems() {
        try {
            this.loading = true;
            const response = (await index$1.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/charges/`, {
                    expand: ['checkout', 'checkout.order'],
                    ...this.query,
                }),
                parse: false,
            }));
            this.pagination = {
                total: parseInt(response.headers.get('X-WP-Total')),
                total_pages: parseInt(response.headers.get('X-WP-TotalPages')),
            };
            this.charges = (await response.json());
        }
        catch (e) {
            if (e === null || e === void 0 ? void 0 : e.message) {
                this.error = e.message;
            }
            else {
                this.error = wp.i18n.__('Something went wrong', 'surecart');
            }
            console.error(this.error);
        }
        finally {
            this.loading = false;
            this.loaded = true;
        }
    }
    renderRefundStatus(charge) {
        if (charge === null || charge === void 0 ? void 0 : charge.fully_refunded) {
            return index.h("sc-tag", { type: "danger" }, wp.i18n.__('Refunded', 'surecart'));
        }
        if (charge === null || charge === void 0 ? void 0 : charge.refunded_amount) {
            return index.h("sc-tag", { type: "warning" }, wp.i18n.__('Partially Refunded', 'surecart'));
        }
        return index.h("sc-tag", { type: "success" }, wp.i18n.__('Paid', 'surecart'));
    }
    renderEmpty() {
        return (index.h("sc-stacked-list-row", { "mobile-size": 0 }, index.h("slot", { name: "empty" }, wp.i18n.__('You have no saved payment methods.', 'surecart'))));
    }
    renderLoading() {
        return (index.h("sc-stacked-list-row", { style: { '--columns': '2' }, "mobile-size": 0 }, index.h("div", { style: { padding: '0.5em' } }, index.h("sc-skeleton", { style: { width: '30%', marginBottom: '0.75em' } }), index.h("sc-skeleton", { style: { width: '20%', marginBottom: '0.75em' } }), index.h("sc-skeleton", { style: { width: '40%' } }))));
    }
    renderContent() {
        var _a;
        if (this.loading && !this.loaded) {
            return this.renderLoading();
        }
        if (((_a = this.charges) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return this.renderEmpty();
        }
        return this.charges.map(charge => {
            var _a;
            const { created_at_date, display_amount } = charge;
            return (index.h("sc-stacked-list-row", { style: { '--columns': '4' }, "mobile-size": 600, href: addQueryArgs.addQueryArgs(window.location.href, {
                    action: 'show',
                    model: 'order',
                    id: (_a = charge.checkout.order) === null || _a === void 0 ? void 0 : _a.id,
                }) }, index.h("strong", null, created_at_date), index.h("sc-text", { style: { '--color': 'var(--sc-color-gray-500)' } }, wp.i18n.sprintf(wp.i18n.__('#%s', 'surecart'), charge.checkout.order.number)), index.h("div", null, this.renderRefundStatus(charge)), index.h("strong", null, display_amount)));
        });
    }
    nextPage() {
        this.query.page = this.query.page + 1;
        this.getItems();
    }
    prevPage() {
        this.query.page = this.query.page - 1;
        this.getItems();
    }
    render() {
        var _a;
        return (index.h("sc-dashboard-module", { key: 'e63b82f5be0dae89f51dc53861af6f01557004fb', class: "charges-list", error: this.error }, index.h("span", { key: '18c690252fa71980458c5ea9a0259ed4c58200ec', slot: "heading" }, index.h("slot", { key: '451c50790882c1ffd1852d697ada6479b69f61e0', name: "heading" }, this.heading || wp.i18n.__('Payment History', 'surecart'))), !!this.allLink && (index.h("sc-button", { key: '263baabfbbfa3f28f454a653845b7bbf1d60434b', type: "link", href: this.allLink, slot: "end" }, wp.i18n.__('View all', 'surecart'), index.h("sc-icon", { key: '38bbf6026a264b103404774c0d009797fbb8f00e', name: "chevron-right", slot: "suffix" }))), index.h("sc-card", { key: '74b4e192ef653a72a19fc2d3b62a8e023e0e0c8c', "no-padding": true, style: { '--overflow': 'hidden' } }, index.h("sc-stacked-list", { key: '9ab6894493f6f97d61abe140d70764ace8d0f740' }, this.renderContent())), this.showPagination && (index.h("sc-pagination", { key: 'f4b7109eed3e401b3ab42ea12a40687322e69eb9', page: this.query.page, perPage: this.query.per_page, total: this.pagination.total, totalPages: this.pagination.total_pages, totalShowing: (_a = this === null || this === void 0 ? void 0 : this.charges) === null || _a === void 0 ? void 0 : _a.length, onScNextPage: () => this.nextPage(), onScPrevPage: () => this.prevPage() })), this.loading && this.loaded && index.h("sc-block-ui", { key: 'aa02b5d1089c78a8ab7630d249fcd76ef65f9af3', spinner: true })));
    }
    get el() { return index.getElement(this); }
};
ScChargesList.style = ScChargesListStyle0;

exports.sc_charges_list = ScChargesList;

//# sourceMappingURL=sc-charges-list.cjs.entry.js.map