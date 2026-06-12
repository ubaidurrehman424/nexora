import { r as registerInstance, h, F as Fragment, a as getElement } from './index-25e5af33.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';

const scPurchaseDownloadsListCss = ":host{display:block}.download__details{opacity:0.75}";
const ScPurchaseDownloadsListStyle0 = scPurchaseDownloadsListCss;

const ScPurchaseDownloadsList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.allLink = undefined;
        this.heading = undefined;
        this.busy = undefined;
        this.loading = undefined;
        this.requestNonce = undefined;
        this.error = undefined;
        this.purchases = [];
    }
    renderEmpty() {
        return (h("div", null, h("sc-divider", { style: { '--spacing': '0' } }), h("slot", { name: "empty" }, h("sc-empty", { icon: "download" }, wp.i18n.__("You don't have any downloads.", 'surecart')))));
    }
    renderLoading() {
        return (h("sc-card", { "no-padding": true, style: { '--overflow': 'hidden' } }, h("sc-stacked-list", null, h("sc-stacked-list-row", { style: { '--columns': '2' }, "mobile-size": 0 }, h("div", { style: { padding: '0.5em' } }, h("sc-skeleton", { style: { width: '30%', marginBottom: '0.75em' } }), h("sc-skeleton", { style: { width: '20%' } }))))));
    }
    renderList() {
        return this.purchases.map(purchase => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            const variant = purchase === null || purchase === void 0 ? void 0 : purchase.variant;
            const hasVariantDownloads = (variant === null || variant === void 0 ? void 0 : variant.downloads_enabled) && ((_b = (_a = variant === null || variant === void 0 ? void 0 : variant.downloads) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.length) > 0;
            const downloads = hasVariantDownloads
                ? variant.downloads.data.filter((d) => !d.archived)
                : ((_e = (_d = (_c = purchase === null || purchase === void 0 ? void 0 : purchase.product) === null || _c === void 0 ? void 0 : _c.downloads) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.filter((d) => !d.archived)) || [];
            const totalDownloads = hasVariantDownloads ? (_f = variant.downloads.pagination) === null || _f === void 0 ? void 0 : _f.count : (_j = (_h = (_g = purchase === null || purchase === void 0 ? void 0 : purchase.product) === null || _g === void 0 ? void 0 : _g.downloads) === null || _h === void 0 ? void 0 : _h.pagination) === null || _j === void 0 ? void 0 : _j.count;
            const mediaBytesList = (downloads || []).map(item => { var _a; return ((item === null || item === void 0 ? void 0 : item.media) ? (_a = item === null || item === void 0 ? void 0 : item.media) === null || _a === void 0 ? void 0 : _a.byte_size : 0); });
            const mediaByteTotalSize = mediaBytesList.reduce((prev, curr) => prev + curr, 0);
            return (h("sc-stacked-list-row", { href: !(purchase === null || purchase === void 0 ? void 0 : purchase.revoked)
                    ? addQueryArgs(window.location.href, {
                        action: 'show',
                        model: 'download',
                        id: purchase.id,
                        nonce: this.requestNonce,
                    })
                    : null, key: purchase.id, "mobile-size": 0 }, h("sc-spacing", { style: {
                    '--spacing': 'var(--sc-spacing-xx--small)',
                } }, h("div", null, h("strong", null, (_k = purchase === null || purchase === void 0 ? void 0 : purchase.product) === null || _k === void 0 ? void 0 : _k.name)), h("div", { class: "download__details" }, wp.i18n.sprintf(wp.i18n._n('%s file', '%s files', totalDownloads, 'surecart'), totalDownloads), !!mediaByteTotalSize && (h(Fragment, null, ' ', "\u2022 ", h("sc-format-bytes", { value: mediaByteTotalSize }))))), h("sc-icon", { name: "chevron-right", slot: "suffix" })));
        });
    }
    renderContent() {
        var _a;
        if (this.loading) {
            return this.renderLoading();
        }
        if (((_a = this.purchases) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return this.renderEmpty();
        }
        return (h("sc-card", { "no-padding": true, style: { '--overflow': 'hidden' } }, h("sc-stacked-list", null, this.renderList())));
    }
    render() {
        return (h("sc-dashboard-module", { key: '5c8ddf82445d104a101536771a33802c60f95d78', class: "downloads-list", error: this.error }, h("span", { key: 'b9c4e10da64d1630078fdefbf93d91f40aeab9cc', slot: "heading" }, h("slot", { key: 'db1216dcb9ffc12fc833edde740ae02e5cd5e671', name: "heading" }, this.heading || wp.i18n.__('Items', 'surecart'))), h("slot", { key: 'b9b09cc64fcf9fced6a703759ccbc686f330edf2', name: "before" }), !!this.allLink && (h("sc-button", { key: 'ba3a4fbc34a7bd82ccf80478b4e5e406e6574867', type: "link", href: this.allLink, slot: "end" }, wp.i18n.__('View all', 'surecart'), h("sc-icon", { key: '5ae134a422e79797008b9d2a9a7de89f70c6dbc2', name: "chevron-right", slot: "suffix" }))), this.renderContent(), h("slot", { key: 'b3b28959ace88d9fedb5d34f3c073fa110d752d3', name: "after" }), this.busy && h("sc-block-ui", { key: 'e6f0974d2163ac90331b89ce8d492880ae02c896' })));
    }
    get el() { return getElement(this); }
};
ScPurchaseDownloadsList.style = ScPurchaseDownloadsListStyle0;

export { ScPurchaseDownloadsList as sc_purchase_downloads_list };

//# sourceMappingURL=sc-purchase-downloads-list.entry.js.map