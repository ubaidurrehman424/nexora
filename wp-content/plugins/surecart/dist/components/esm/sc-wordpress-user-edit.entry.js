import { r as registerInstance, h } from './index-25e5af33.js';
import './fetch-9e15a95d.js';
import { a as apiFetch } from './index-824c562b.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scWordpressUserEditCss = ":host{display:block;position:relative}.customer-details{display:grid;gap:0.75em}";
const ScWordpressUserEditStyle0 = scWordpressUserEditCss;

const ScWordPressUserEdit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    renderEmpty() {
        return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    async handleSubmit(e) {
        this.loading = true;
        try {
            const { email, first_name, last_name, name } = await e.target.getFormJson();
            await apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    first_name,
                    last_name,
                    email,
                    name,
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
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        var _a, _b, _c, _d;
        return (h("sc-dashboard-module", { key: 'c873dbb5fde98599e5469626735155dd8bad7347', class: "account-details", error: this.error }, h("span", { key: 'd7d61fdb81f9b4672309040f2339a46ca64f6ae5', slot: "heading" }, this.heading || wp.i18n.__('Account Details', 'surecart'), " "), h("sc-card", { key: '11154dd3e85dba90aa52a9cc1d37994b96fb60b6' }, h("sc-form", { key: '574de64fc392ee2666346c708a22307a9f9bc74f', onScFormSubmit: e => this.handleSubmit(e) }, h("sc-input", { key: '8cf5f349b6aaf151e64319faf462693cf18a8691', label: wp.i18n.__('Account Email', 'surecart'), name: "email", value: (_a = this.user) === null || _a === void 0 ? void 0 : _a.email, required: true }), h("sc-columns", { key: '068c84390f8871b706c3d8a83b59f620f3e76658', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, h("sc-column", { key: 'f17d8a8ebe2c82c987c874116093dd631b48c385' }, h("sc-input", { key: 'a77b538cacd3a3e197d976718b9d9e8cdecd8212', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.user) === null || _b === void 0 ? void 0 : _b.first_name })), h("sc-column", { key: '31aacae027df0c438de6f2d67f4c98535c7bda83' }, h("sc-input", { key: '1e029f07eebe636c0f7ff4e74467bd5e19a2b68f', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.user) === null || _c === void 0 ? void 0 : _c.last_name }))), h("sc-input", { key: '8bbf1f99c7762be03b647b13c383a196c209ac19', label: wp.i18n.__('Display Name', 'surecart'), name: "name", value: (_d = this.user) === null || _d === void 0 ? void 0 : _d.display_name }), h("div", { key: 'a57a6edf2fa15be6c2956b278080cab5f210e9f4' }, h("sc-button", { key: 'dc5421f2837ef791029837d822c7bfb6aecbfe85', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && h("sc-block-ui", { key: '8a56afc8a96ed6c01e1b5691f8753fb7c5bb7892', spinner: true })));
    }
};
ScWordPressUserEdit.style = ScWordpressUserEditStyle0;

export { ScWordPressUserEdit as sc_wordpress_user_edit };

//# sourceMappingURL=sc-wordpress-user-edit.entry.js.map