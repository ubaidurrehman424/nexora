'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-be4abba1.js');
const getters = require('./getters-bc65a40b.js');
require('./store-401bdb4d.js');
require('./utils-a9d13080.js');
require('./index-c3de642f.js');

const scUpsellCountdownTimerCss = ":host{display:flex;justify-content:var(--sc-upsell-countdown-timer-justify-content, center);align-items:var(--sc-upsell-countdown-timer-align-items, center);text-align:var(--sc-upsell-countdown-timer-text-align, center);flex-wrap:wrap;gap:var(--sc-upsell-countdown-timer-gap, 0.5em);line-height:1;padding:var(--sc-upsell-countdown-timer-padding, var(--sc-spacing-medium));border-radius:var(--sc-upsell-countdown-timer-border-radius, var(--sc-border-radius-pill));background-color:var(--sc-upsell-countdown-timer-background-color, rgb(226, 249, 235));color:var(--sc-upsell-countdown-timer-color, rgb(71, 91, 80))}";
const ScUpsellCountdownTimerStyle0 = scUpsellCountdownTimerCss;

const ScUpsellCountdownTimer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.timeRemaining = Infinity;
        this.formattedTime = undefined;
        this.showIcon = true;
    }
    componentDidLoad() {
        this.updateCountdown();
    }
    updateCountdown() {
        this.formattedTime = getters.getFormattedRemainingTime();
        setInterval(() => {
            this.formattedTime = getters.getFormattedRemainingTime();
        }, 1000);
    }
    render() {
        return (index.h(index.Host, { key: '727b55154fbf1fe61aa56ad7d6d0ed9a0a0909b6', role: "timer", class: {
                'sc-upsell-countdown-timer': true,
            } }, this.showIcon && index.h("sc-icon", { key: '302324b2900e8c7488c75e6502395e700f364e06', name: "clock" }), index.h("span", { key: '73bc4a1a8d8a0f54f459aba3f3169dc58d39aaa6' }, index.h("slot", { key: '01c95848cd1822ca64c74de17b55be7a4150e252', name: "offer-expire-text" }), " ", index.h("strong", { key: '38ecb7b7c6b098bbe5e65642a628cf22a702d374' }, this.formattedTime))));
    }
};
ScUpsellCountdownTimer.style = ScUpsellCountdownTimerStyle0;

exports.sc_upsell_countdown_timer = ScUpsellCountdownTimer;

//# sourceMappingURL=sc-upsell-countdown-timer.cjs.entry.js.map