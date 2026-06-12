'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const watchers = require('./watchers-4cadea78.js');
require('./index-c3de642f.js');
require('./google-03835677.js');
require('./currency-71fce0f0.js');
require('./google-59d23803.js');
require('./utils-a9d13080.js');
require('./util-a15c420c.js');
require('./index-fb76df07.js');

const scProductPillsVariantOptionCss = ".sc-product-pills-variant-option__wrapper{display:flex;flex-wrap:wrap;gap:var(--sc-spacing-x-small)}";
const ScProductPillsVariantOptionStyle0 = scProductPillsVariantOptionCss;

const ScProductPillsVariantOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.optionNumber = 1;
        this.productId = undefined;
    }
    render() {
        return (index.h("sc-form-control", { key: '670f43991a65026e8294cc31bcb66533d7b50162', label: this.label }, index.h("span", { key: 'd88e48856e7f8c7ee6590e1d36f49fab23c7759e', slot: "label" }, this.label), index.h("div", { key: '4a3b0ff68ca59aa6dd6f4d19a194268bcaad925e', class: "sc-product-pills-variant-option__wrapper" }, (watchers.state[this.productId].variant_options[this.optionNumber - 1].values || []).map(value => {
            const isUnavailable = watchers.isOptionSoldOut(this.productId, this.optionNumber, value) || watchers.isOptionMissing(this.productId, this.optionNumber, value);
            return (index.h("sc-pill-option", { isUnavailable: isUnavailable, isSelected: watchers.state[this.productId].variantValues[`option_${this.optionNumber}`] === value, onClick: () => watchers.setProduct(this.productId, {
                    variantValues: {
                        ...watchers.state[this.productId].variantValues,
                        [`option_${this.optionNumber}`]: value,
                    },
                }) }, index.h("span", { "aria-hidden": "true" }, value), index.h("sc-visually-hidden", null, wp.i18n.sprintf(wp.i18n.__('Select %s: %s.', 'surecart'), this.label, value), isUnavailable && index.h(index.Fragment, null, " ", wp.i18n.__('(option unavailable)', 'surecart')), watchers.state[this.productId].variantValues[`option_${this.optionNumber}`] === value && index.h(index.Fragment, null, " ", wp.i18n.__('This option is currently selected.', 'surecart')))));
        }))));
    }
};
ScProductPillsVariantOption.style = ScProductPillsVariantOptionStyle0;

exports.sc_product_pills_variant_option = ScProductPillsVariantOption;

//# sourceMappingURL=sc-product-pills-variant-option.cjs.entry.js.map