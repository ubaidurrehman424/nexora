'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');

const ScPremiumTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'small';
    }
    render() {
        return (index.h("sc-tag", { key: 'c882ff96610572be492155da45cb2cc16ba8e7d8', type: "success", size: this.size }, wp.i18n.__('Premium', 'surecart')));
    }
};

exports.sc_premium_tag = ScPremiumTag;

//# sourceMappingURL=sc-premium-tag.cjs.entry.js.map