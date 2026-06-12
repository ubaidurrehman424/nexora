import { r as registerInstance, h, F as Fragment } from './index-25e5af33.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';

const scWordpressUserCss = ":host{display:block;position:relative}.customer-details{display:grid;gap:0.75em}";
const ScWordpressUserStyle0 = scWordpressUserCss;

const ScWordPressUser = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.user = undefined;
    }
    renderContent() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!this.user) {
            return this.renderEmpty();
        }
        return (h(Fragment, null, !!((_a = this === null || this === void 0 ? void 0 : this.user) === null || _a === void 0 ? void 0 : _a.display_name) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('Display Name', 'surecart'))), h("div", null, (_b = this.user) === null || _b === void 0 ? void 0 : _b.display_name), h("div", null))), !!((_c = this === null || this === void 0 ? void 0 : this.user) === null || _c === void 0 ? void 0 : _c.email) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('Account Email', 'surecart'))), h("div", null, (_d = this.user) === null || _d === void 0 ? void 0 : _d.email), h("div", null))), !!((_e = this === null || this === void 0 ? void 0 : this.user) === null || _e === void 0 ? void 0 : _e.first_name) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('First Name', 'surecart'))), h("div", null, (_f = this.user) === null || _f === void 0 ? void 0 : _f.first_name), h("div", null))), !!((_g = this === null || this === void 0 ? void 0 : this.user) === null || _g === void 0 ? void 0 : _g.last_name) && (h("sc-stacked-list-row", { style: { '--columns': '3' }, mobileSize: 480 }, h("div", null, h("strong", null, wp.i18n.__('Last Name', 'surecart'))), h("div", null, (_h = this.user) === null || _h === void 0 ? void 0 : _h.last_name), h("div", null)))));
    }
    renderEmpty() {
        return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    render() {
        return (h("sc-dashboard-module", { key: '4c133f2802ce2021ae1242caa0c1770029d7ebc8', class: "customer-details" }, h("span", { key: 'b859fd54e44515e370bfcb0128f855cae28c5573', slot: "heading" }, this.heading || wp.i18n.__('Account Details', 'surecart'), " "), h("sc-button", { key: 'ff569cbca6554e06b9f87dbe91a342f6b8f118aa', type: "link", href: addQueryArgs(window.location.href, {
                action: 'edit',
                model: 'user',
            }), slot: "end" }, h("sc-icon", { key: '079f1aa35d80940718a9f726bb9e4b6df2f81bbb', name: "edit-3", slot: "prefix" }), wp.i18n.__('Update', 'surecart')), h("sc-card", { key: '98057f2e46db8249c8b42fe2c1cd1051d91404e8', "no-padding": true }, h("sc-stacked-list", { key: 'cb7996b4e2ca3afb7b303f78a6b3a94162d9e5e4' }, this.renderContent()))));
    }
};
ScWordPressUser.style = ScWordpressUserStyle0;

export { ScWordPressUser as sc_wordpress_user };

//# sourceMappingURL=sc-wordpress-user.entry.js.map