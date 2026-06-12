'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const floatingUi_dom_esm = require('./floating-ui.dom.esm-7fad5c49.js');
const index$1 = require('./index-fb76df07.js');

const scPopoverCss = ":host{display:inline-block;--panel-height:75vh}slot[name=title]{font-weight:600;font-size:14px}.popover{position:relative}.popover.popover--open .popover__positioner{visibility:visible;opacity:1;transform:scale(1)}.popover__header{display:flex;justify-content:space-between;padding-bottom:1em}.popover__header-close-button{display:flex;align-items:center;justify-content:center;padding:0;margin:0;border:none;background:transparent;cursor:pointer;border-radius:var(--sc-border-radius-small)}.popover__header-close-button:focus{outline:2px solid var(--sc-focus-ring-color, var(--sc-color-primary-500));outline-offset:2px}.popover__header-close-button:hover{opacity:0.7}.popover__header-close-icon{vertical-align:middle;width:1.5em;height:1.5em}.popover__footer{border-top:1px solid var(--sc-input-border-color);padding-top:0.5em;margin-top:1em}.popover__trigger{display:block;cursor:pointer;border-width:0;outline:none;background-color:unset}.popover--disabled,.popover--disabled .popover__trigger{cursor:not-allowed}.popover__positioner{position:absolute;right:0;width:100%;z-index:var(--sc-z-index-popover);opacity:0;visibility:hidden;transform:scale(0.9);min-width:var(--panel-width, \"fit-content\")}.popover__panel{transform-origin:top left;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);max-height:var(--panel-height);font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);color:var(--sc-input-label-color);background-color:var(--sc-panel-background-color);border:solid 1px var(--sc-panel-border-color);border-radius:var(--sc-border-radius-x-large);box-shadow:var(--sc-shadow-large);overflow:auto;overscroll-behavior:none;transition:var(--sc-transition-fast) opacity, var(--sc-transition-fast) transform;z-index:5;padding:var(--sc-spacing-medium)}";
const ScPopoverStyle0 = scPopoverCss;

const ScPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scShow = index.createEvent(this, "scShow", 7);
        this.scHide = index.createEvent(this, "scHide", 7);
        this.boundHandleOutsideClick = (evt) => this.handleOutsideClick(evt);
        this.boundHandleKeyDown = (evt) => this.handleKeyDown(evt);
        this.boundHandleFocusOut = (evt) => this.handleFocusOut(evt);
        this.disabled = undefined;
        this.open = false;
        this.placement = 'bottom-start';
        this.distance = 0;
        this.skidding = 0;
        this.hoist = false;
        this.isVisible = undefined;
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    handleOutsideClick(evt) {
        const path = evt.composedPath();
        if (!path.some(item => {
            return item === this.el;
        })) {
            this.open = false;
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            event.stopPropagation();
            this.hide();
        }
    }
    handleTriggerKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (this.disabled)
                return;
            if (this.open) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    /**
     * Handles focus leaving the popover.
     * Closes the popover if focus moves outside of it.
     */
    handleFocusOut(event) {
        const relatedTarget = event.relatedTarget;
        // If focus is moving to something outside the popover, close it
        if (relatedTarget && !this.el.contains(relatedTarget)) {
            this.open = false;
        }
    }
    startPositioner() {
        this.stopPositioner();
        this.updatePositioner();
        this.positionerCleanup = floatingUi_dom_esm.autoUpdate(this.trigger, this.positioner, this.updatePositioner.bind(this));
    }
    updatePositioner() {
        if (!this.open || !this.trigger || !this.positioner) {
            return;
        }
        floatingUi_dom_esm.computePosition(this.trigger, this.positioner, {
            placement: this.placement,
            middleware: [
                floatingUi_dom_esm.offset({ mainAxis: this.distance, crossAxis: this.skidding }),
                floatingUi_dom_esm.flip(),
                floatingUi_dom_esm.shift(),
                floatingUi_dom_esm.size({
                    apply: ({ availableWidth: width, availableHeight: height }) => {
                        // Ensure the panel stays within the viewport when we have lots of menu items
                        Object.assign(this.panel.style, {
                            maxWidth: `${width}px`,
                            maxHeight: `${height}px`,
                        });
                    },
                    padding: 8,
                }),
            ],
            strategy: this.hoist ? 'fixed' : 'absolute',
        }).then(({ x, y, placement }) => {
            this.positioner.setAttribute('data-placement', placement);
            Object.assign(this.positioner.style, {
                position: this.hoist ? 'fixed' : 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                right: 'auto',
            });
        });
    }
    stopPositioner() {
        var _a;
        if (this.positionerCleanup) {
            this.positionerCleanup();
            this.positionerCleanup = undefined;
            (_a = this.positioner) === null || _a === void 0 ? void 0 : _a.removeAttribute('data-placement');
        }
    }
    show() {
        index$1.speak(wp.i18n.__('Popover opened. Press Escape to close.', 'surecart'), 'assertive');
        this.scShow.emit();
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (this.isVisible) {
            return;
        }
        this.isVisible = true;
        this.open = true;
        this.startPositioner();
        document.addEventListener('keydown', this.boundHandleKeyDown);
        this.el.addEventListener('focusout', this.boundHandleFocusOut);
        this.panel.focus();
    }
    hide() {
        var _a;
        index$1.speak(wp.i18n.__('Popover closed.', 'surecart'), 'assertive');
        this.scHide.emit();
        // Prevent subsequent calls to the method, whether manually or triggered by the `open` watcher
        if (!this.isVisible) {
            return;
        }
        this.stopPositioner();
        document.removeEventListener('keydown', this.boundHandleKeyDown);
        this.el.removeEventListener('focusout', this.boundHandleFocusOut);
        this.isVisible = false;
        this.open = false;
        const slotted = this.el.shadowRoot.querySelector('slot[name="trigger"]');
        const trigger = slotted.assignedElements({ flatten: true })[0];
        (_a = trigger === null || trigger === void 0 ? void 0 : trigger.focus) === null || _a === void 0 ? void 0 : _a.call(trigger);
    }
    componentWillLoad() {
        document.addEventListener('mousedown', this.boundHandleOutsideClick);
    }
    disconnectedCallback() {
        document.removeEventListener('mousedown', this.boundHandleOutsideClick);
        document.removeEventListener('keydown', this.boundHandleKeyDown);
        this.el.removeEventListener('focusout', this.boundHandleFocusOut);
    }
    handleHide() {
        this.open = false;
        this.trigger.focus();
    }
    render() {
        return (index.h("div", { key: 'bba4c420b3ff37f8e9cb415b3c1547421482adf1', part: "base", class: {
                'popover': true,
                'popover--open': this.open,
                'popover--disabled': this.disabled,
            } }, index.h("span", { key: 'f216b28ef38610f6b1ebb6cc0170fe7645708aec', part: "trigger", class: "popover__trigger", ref: el => (this.trigger = el), onClick: () => {
                if (this.disabled)
                    return;
                if (this.open) {
                    this.hide();
                }
                else {
                    setTimeout(() => {
                        this.show();
                    }, 0);
                }
            }, onKeyDown: e => this.handleTriggerKeyDown(e), tabindex: "0", role: "button", "aria-expanded": this.open ? 'true' : 'false', "aria-haspopup": "dialog", "aria-label": wp.i18n.__('Press Enter to open popover', 'surecart') }, index.h("slot", { key: '84a280a01b8cff0b8ae657e10250a385a695f159', name: "trigger" })), index.h("div", { key: '2bc08860a57d7d539721fd1be1665bfade9f315b', class: "popover__positioner", ref: el => (this.positioner = el) }, index.h("div", { key: 'a294653d1f982a1edff51fc5098a91693406790e', part: "panel", class: "popover__panel", role: "dialog", "aria-modal": "false", tabindex: "-1", ref: el => (this.panel = el) }, index.h("div", { key: '04f6b3e5a409c09ea13a39b7a810a72022b3a8d3', class: "popover__header" }, index.h("slot", { key: 'c780632167459d821793402205bc9ca73e5dfce9', name: "title" }), index.h("button", { key: 'f5afb159d492ed68e7376d067a1256001fedc4cc', type: "button", class: "popover__header-close-button", onClick: () => this.handleHide(), onKeyDown: e => e.key === 'Enter' && this.handleHide(), "aria-label": wp.i18n.__('Close', 'surecart') }, index.h("sc-icon", { key: 'ebc25cef564fa9781cab515e623502ea61b4a1c7', class: "popover__header-close-icon", name: "x" }))), index.h("slot", { key: 'cf2b7907127ec3796abe9b72ab1115fb38a580b9', name: "content" }), index.h("div", { key: 'f98152e7b27b9fd1c0ef9b00e2f5d32219211e7c', class: "popover__footer" }, index.h("slot", { key: '5f4a7923849a429578f80f5336c4316f15a6a965', name: "footer" }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
ScPopover.style = ScPopoverStyle0;

exports.sc_popover = ScPopover;

//# sourceMappingURL=sc-popover.cjs.entry.js.map