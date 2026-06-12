import { r as registerInstance, h, F as Fragment, a as getElement } from './index-25e5af33.js';

const scBreadcrumbsCss = ":host{display:block}.breadcrumb{display:flex;align-items:center;flex-wrap:wrap}";
const ScBreadcrumbsStyle0 = scBreadcrumbsCss;

const ScBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = 'Breadcrumb';
    }
    // Generates a clone of the separator element to use for each breadcrumb item
    getSeparator() {
        const slotted = this.el.shadowRoot.querySelector('slot[name=separator]');
        const separator = slotted.assignedElements({ flatten: true })[0];
        // Clone it, remove ids, and slot it
        const clone = separator.cloneNode(true);
        [clone, ...clone.querySelectorAll('[id]')].forEach(el => el.removeAttribute('id'));
        clone.slot = 'separator';
        return clone;
    }
    handleSlotChange() {
        const slotted = this.el.shadowRoot.querySelector('.breadcrumb slot');
        const items = slotted.assignedElements().filter(node => {
            return node.nodeName === 'CE-BREADCRUMB';
        });
        items.forEach((item, index) => {
            // Append separators to each item if they don't already have one
            const separator = item.querySelector('[slot="separator"]');
            if (separator === null) {
                item.append(this.getSeparator());
            }
            // The last breadcrumb item is the "current page"
            if (index === items.length - 1) {
                item.setAttribute('aria-current', 'page');
            }
            else {
                item.removeAttribute('aria-current');
            }
        });
    }
    render() {
        return (h(Fragment, { key: 'f3a773ae3dec02fd61ae08b2f8db4ea6019b860e' }, h("nav", { key: 'c7dda1a4eb6ccc9367ff3e11379fbf78170b4ed6', part: "base", class: "breadcrumb", "aria-label": this.label }, h("slot", { key: 'e776e91b492658ba252f94df00f8693da587c84c', onSlotchange: () => this.handleSlotChange() })), h("div", { key: '7621cc453369d38647299e30eb2a9f5f3fdc5d8c', part: "separator", hidden: true, "aria-hidden": "true" }, h("slot", { key: '2cc02d684909e8a9d443bf1003131dd827841227', name: "separator" }, h("sc-icon", { key: '25cc937dac95fedb4d8d7374226eec6c1847c036', name: "chevron-right" })))));
    }
    get el() { return getElement(this); }
};
ScBreadcrumbs.style = ScBreadcrumbsStyle0;

export { ScBreadcrumbs as sc_breadcrumbs };

//# sourceMappingURL=sc-breadcrumbs.entry.js.map