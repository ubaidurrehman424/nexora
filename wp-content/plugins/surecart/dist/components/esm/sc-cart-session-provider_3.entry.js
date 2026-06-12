import { r as registerInstance, c as createEvent, h, a as getElement } from './index-25e5af33.js';
import { u as updateFormState, s as state } from './mutations-2cf25d6d.js';
import { d as updateCheckout } from './index-54572542.js';
import { c as createErrorNotice, s as state$1 } from './mutations-7458343f.js';
import { c as clearCheckout } from './mutations-9a4deffa.js';
import { s as setDefaultAnimation, g as getAnimation, b as animateTo, a as stopAnimations } from './animation-registry-de37bd7e.js';
import { g as getAdditionalErrorMessages } from './getters-1049a6f8.js';
import './index-18f5a1bc.js';
import './utils-f84b2118.js';
import './remove-query-args-938c53ea.js';
import './add-query-args-0e2a8393.js';
import './index-c5a96d53.js';
import './google-a86aa761.js';
import './currency-a0c9bff4.js';
import './store-b1758b00.js';
import './price-1ff6aa07.js';
import './fetch-9e15a95d.js';
import './index-824c562b.js';

const ScCartSessionProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scSetState = createEvent(this, "scSetState", 7);
    }
    handleUpdateSession(e) {
        const { data, options } = e.detail;
        if (options === null || options === void 0 ? void 0 : options.silent) {
            this.update(data);
        }
        else {
            this.loadUpdate(data);
        }
    }
    /** Handle the error response. */
    handleErrorResponse(e) {
        var _a, _b;
        if ((e === null || e === void 0 ? void 0 : e.code) === 'readonly' || ((_b = (_a = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.code) === 'checkout.customer.account_mismatch') {
            clearCheckout();
        }
        // expired
        if ((e === null || e === void 0 ? void 0 : e.code) === 'rest_cookie_invalid_nonce') {
            updateFormState('EXPIRE');
            return;
        }
        // something went wrong
        if (e === null || e === void 0 ? void 0 : e.message) {
            createErrorNotice(e);
        }
        // handle curl timeout errors.
        if ((e === null || e === void 0 ? void 0 : e.code) === 'http_request_failed') {
            createErrorNotice(wp.i18n.__('Something went wrong. Please reload the page and try again.', 'surecart'));
        }
    }
    /** Fetch a session. */
    async fetch(args = {}) {
        this.loadUpdate({ status: 'draft', ...args });
    }
    /** Update a the order */
    async update(data = {}, query = {}) {
        var _a;
        try {
            state.checkout = (await updateCheckout({
                id: (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.id,
                data: {
                    ...data,
                },
                query: {
                    ...query,
                },
            }));
        }
        catch (e) {
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
            updateFormState('REJECT');
            this.handleErrorResponse(e);
        }
    }
    render() {
        return (h("sc-line-items-provider", { key: '0fb44376b6b31203f0a66b4837959864a11a3a92', order: state.checkout, onScUpdateLineItems: e => this.loadUpdate({ line_items: e.detail }) }, h("slot", { key: '8f70d3215e9f9ac52002d9c06e434c53d6203d28' })));
    }
    get el() { return getElement(this); }
};

const scDrawerCss = ":host {\n  display: contents;\n}\n.drawer {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  overflow: hidden;\n  font-family: var(--sc-font-sans);\n  font-weight: var(--sc-font-weight-normal);\n}\n.drawer--contained {\n  position: absolute;\n  z-index: initial;\n}\n.drawer--fixed {\n  position: fixed;\n  z-index: var(--sc-z-index-drawer);\n}\n.drawer__panel {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--sc-panel-background-color);\n  box-shadow: var(--sc-shadow-x-large);\n  transition: var(--sc-transition-medium) transform;\n  overflow: auto;\n  pointer-events: all;\n}\n.drawer__panel:focus {\n  outline: none;\n}\n.drawer--top .drawer__panel {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  width: 100%;\n  height: var(--sc-drawer-size, 400px);\n}\n.drawer--end .drawer__panel {\n  top: 0;\n  inset-inline-end: 0;\n  bottom: auto;\n  inset-inline-start: auto;\n  width: 100%;\n  max-width: var(--sc-drawer-size, 400px);\n  height: 100%;\n}\n.drawer--bottom .drawer__panel {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: var(--sc-drawer-size, 400px);\n}\n.drawer--start .drawer__panel {\n  top: 0;\n  inset-inline-end: auto;\n  bottom: auto;\n  inset-inline-start: 0;\n  width: var(--sc-drawer-size, 400px);\n  height: 100%;\n}\n.header__sticky {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background: #fff;\n}\n.drawer__header {\n  display: flex;\n  align-items: center;\n  padding: var(--sc-drawer-header-spacing);\n  border-bottom: var(--sc-drawer-border);\n}\n\n.drawer__title {\n  flex: 1 1 auto;\n  font: inherit;\n  font-size: var(--sc-font-size-large);\n  line-height: var(--sc-line-height-dense);\n  margin: 0;\n}\n.drawer__close {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  font-size: var(--sc-font-size-x-large);\n  color: var(--sc-color-gray-500);\n  cursor: pointer;\n}\n.drawer__body {\n  flex: 1 1 auto;\n}\n\n.drawer--has-footer .drawer__footer {\n  border-top: var(--sc-drawer-border);\n  padding: var(--sc-drawer-footer-spacing);\n\n  &.is-sticky {\n    position: sticky;\n    bottom: 0;\n    background: #fff;\n  }\n}\n\n.drawer__overlay {\n  display: block;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--sc-overlay-background-color);\n  pointer-events: all;\n}\n.drawer--contained .drawer__overlay {\n  position: absolute;\n}\n";
const ScDrawerStyle0 = scDrawerCss;

const ScDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scInitialFocus = createEvent(this, "scInitialFocus", 7);
        this.scRequestClose = createEvent(this, "scRequestClose", 7);
        this.scShow = createEvent(this, "scShow", 7);
        this.scHide = createEvent(this, "scHide", 7);
        this.scAfterShow = createEvent(this, "scAfterShow", 7);
        this.scAfterHide = createEvent(this, "scAfterHide", 7);
        this.open = false;
        this.label = '';
        this.placement = 'end';
        this.contained = false;
        this.noHeader = false;
        this.stickyHeader = false;
        this.stickyFooter = false;
    }
    componentDidLoad() {
        this.drawer.hidden = !this.open;
        if (this.open && !this.contained) {
            this.lockBodyScrolling();
        }
        this.handleOpenChange();
    }
    disconnectedCallback() {
        this.unLockBodyScrolling();
    }
    lockBodyScrolling() {
        document.body.classList.add('sc-scroll-lock');
    }
    unLockBodyScrolling() {
        document.body.classList.remove('sc-scroll-lock');
    }
    /** Shows the drawer. */
    async show() {
        if (this.open) {
            return undefined;
        }
        this.open = true;
    }
    /** Hides the drawer */
    async hide() {
        if (!this.open) {
            return undefined;
        }
        this.open = false;
    }
    getDirection() {
        return getComputedStyle(this.el).direction === 'rtl' ? 'rtl' : 'ltr';
    }
    async requestClose(source = 'method') {
        const slRequestClose = this.scRequestClose.emit(source);
        if (slRequestClose.defaultPrevented) {
            const animation = getAnimation(this.el, 'drawer.denyClose', { dir: this.getDirection() });
            animateTo(this.panel, animation.keyframes, animation.options);
            return;
        }
        this.hide();
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            event.stopPropagation();
            this.requestClose('keyboard');
        }
    }
    async handleOpenChange() {
        if (this.open) {
            this.scShow.emit();
            this.originalTrigger = document.activeElement;
            // Lock body scrolling only if the drawer isn't contained
            if (!this.contained) {
                this.lockBodyScrolling();
            }
            // When the drawer is shown, Safari will attempt to set focus on whatever element has autofocus. This causes the
            // drawer's animation to jitter, so we'll temporarily remove the attribute, call `focus({ preventScroll: true })`
            // ourselves, and add the attribute back afterwards.
            //
            // Related: https://github.com/shoelace-style/shoelace/issues/693
            //
            const autoFocusTarget = this.el.querySelector('[autofocus]');
            if (autoFocusTarget) {
                autoFocusTarget.removeAttribute('autofocus');
            }
            await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
            this.drawer.hidden = false;
            // Set initial focus
            requestAnimationFrame(() => {
                const slInitialFocus = this.scInitialFocus.emit();
                if (!slInitialFocus.defaultPrevented) {
                    // Set focus to the autofocus target and restore the attribute
                    if (autoFocusTarget) {
                        autoFocusTarget.focus({ preventScroll: true });
                    }
                    else {
                        this.panel.focus({ preventScroll: true });
                    }
                }
                // Restore the autofocus attribute
                if (autoFocusTarget) {
                    autoFocusTarget.setAttribute('autofocus', '');
                }
            });
            const dir = this.getDirection();
            const panelAnimation = getAnimation(this.el, `drawer.show${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`, { dir });
            const overlayAnimation = getAnimation(this.el, 'drawer.overlay.show', { dir });
            await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
            this.scAfterShow.emit();
        }
        else {
            // Hide
            this.scHide.emit();
            this.unLockBodyScrolling();
            await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
            const dir = this.getDirection();
            const panelAnimation = getAnimation(this.el, `drawer.hide${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`, { dir });
            const overlayAnimation = getAnimation(this.el, 'drawer.overlay.hide', { dir });
            await Promise.all([animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
            this.drawer.hidden = true;
            // Restore focus to the original trigger
            const trigger = this.originalTrigger;
            if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === 'function') {
                setTimeout(() => trigger.focus());
            }
            this.scAfterHide.emit();
        }
    }
    render() {
        return (h("div", { key: '06c11bd341502b2ecd810f0b4a57002d7fca9167', part: "base", class: {
                'drawer': true,
                'drawer--open': this.open,
                'drawer--top': this.placement === 'top',
                'drawer--end': this.placement === 'end',
                'drawer--bottom': this.placement === 'bottom',
                'drawer--start': this.placement === 'start',
                'drawer--contained': this.contained,
                'drawer--fixed': !this.contained,
                'drawer--has-footer': this.el.querySelector('[slot="footer"]') !== null,
            }, ref: el => (this.drawer = el), onKeyDown: (e) => this.handleKeyDown(e) }, h("div", { key: 'f79fefcc122682244e90c162844b729079f09633', part: "overlay", class: "drawer__overlay", onClick: () => this.requestClose('overlay'), tabindex: "-1", ref: el => (this.overlay = el) }), h("div", { key: 'e848a71618418854a421c01947d576085fe73a14', part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : undefined, "aria-labelledby": !this.noHeader ? 'title' : undefined, tabindex: "0", ref: el => (this.panel = el) }, !this.noHeader && (h("header", { key: '394ad574696e21ba863b9e2b24b619a6b89423ad', part: "header", class: this.stickyHeader ? 'header__sticky' : '' }, h("slot", { key: 'c050621a4169f877428a4351f6b2521cf3046136', name: "header" }, h("div", { key: '90a59c724c33ab638e9cdfbb97c42fbe36b049d4', class: "drawer__header" }, h("h2", { key: '3993bb0584139772a283b7bb055fb6b520601425', part: "title", class: "drawer__title", id: "title" }, h("slot", { key: '8df38e2c8c1b44fe17ec9f14476cd5cc23bf8eda', name: "label" }, this.label.length > 0 ? this.label : ' ', " ")), h("sc-icon", { key: '23eb7681d7ef34093439047acddf3e5b6004a4c1', part: "close-button", exportparts: "base:close-button__base", class: "drawer__close", name: "x", label: 
            /** translators: Close this modal window. */
            wp.i18n.__('Close', 'surecart'), onClick: () => this.requestClose('close-button') }))))), h("footer", { key: 'd65c03ed26460f2a3f3001ab6aaa68c6b352d811', part: "header-suffix", class: "drawer__header-suffix" }, h("slot", { key: '30e59247299752dd1c43681ef8ca9c062beaaae3', name: "header-suffix" })), h("div", { key: 'a8d4033cf969aa8b24784ca47b393f4c7b0753db', part: "body", class: "drawer__body" }, h("slot", { key: '6dab2278c94d35c1fd36a667db16e83b2c87490d' })), h("footer", { key: '83ace6dc67e3c0c6bef844dd988dd862d86d82fa', part: "footer", class: this.stickyFooter ? 'drawer__footer is-sticky' : 'drawer__footer' }, h("slot", { key: '3c17877f96125b1696c8e2fcd339efd258c0a571', name: "footer" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
// Top
setDefaultAnimation('drawer.showTop', {
    keyframes: [
        { opacity: 0, transform: 'translateY(-100%)' },
        { opacity: 1, transform: 'translateY(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideTop', {
    keyframes: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// End — in LTR the panel rests on the right and slides in from the right (translateX 100%). In RTL the panel rests on
// the left (because `inset-inline-end` flips), so it must slide in from the left (translateX -100%).
setDefaultAnimation('drawer.showEnd', {
    keyframes: [
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    rtlKeyframes: [
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideEnd', {
    keyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(100%)' },
    ],
    rtlKeyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Bottom
setDefaultAnimation('drawer.showBottom', {
    keyframes: [
        { opacity: 0, transform: 'translateY(100%)' },
        { opacity: 1, transform: 'translateY(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideBottom', {
    keyframes: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Start — mirrors End. In LTR slides in from the left; in RTL the panel rests on the right (because `inset-inline-start`
// flips), so it must slide in from the right.
setDefaultAnimation('drawer.showStart', {
    keyframes: [
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    rtlKeyframes: [
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.hideStart', {
    keyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-100%)' },
    ],
    rtlKeyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Deny close
setDefaultAnimation('drawer.denyClose', {
    keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.01)' }, { transform: 'scale(1)' }],
    options: { duration: 250 },
});
// Overlay
setDefaultAnimation('drawer.overlay.show', {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250, easing: 'ease' },
});
setDefaultAnimation('drawer.overlay.hide', {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250, easing: 'ease' },
});
ScDrawer.style = ScDrawerStyle0;

const ScFormErrorProvider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scUpdateError = createEvent(this, "scUpdateError", 7);
        this.error = undefined;
    }
    /** Trigger the error event when an error happens  */
    handleErrorUpdate(val) {
        this.scUpdateError.emit(val);
    }
    render() {
        return !!(state$1 === null || state$1 === void 0 ? void 0 : state$1.message) ? (h("sc-alert", { exportparts: "base, icon, text, title, message, close", type: "danger", scrollOnOpen: true, open: !!(state$1 === null || state$1 === void 0 ? void 0 : state$1.message), closable: !!(state$1 === null || state$1 === void 0 ? void 0 : state$1.dismissible) }, (state$1 === null || state$1 === void 0 ? void 0 : state$1.message) && h("span", { slot: "title", innerHTML: state$1.message }), (getAdditionalErrorMessages() || []).map((message, index) => (h("div", { innerHTML: message, key: index }))))) : null;
    }
    static get watchers() { return {
        "error": ["handleErrorUpdate"]
    }; }
};

export { ScCartSessionProvider as sc_cart_session_provider, ScDrawer as sc_drawer, ScFormErrorProvider as sc_error };

//# sourceMappingURL=sc-cart-session-provider_3.entry.js.map