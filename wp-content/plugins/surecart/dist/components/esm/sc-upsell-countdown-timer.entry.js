import { r as registerInstance, h, H as Host } from './index-25e5af33.js';
import { b as getFormattedRemainingTime } from './getters-1477d792.js';
import './store-289e460c.js';
import './utils-f84b2118.js';
import './index-18f5a1bc.js';

const scUpsellCountdownTimerCss = ":host{display:flex;justify-content:var(--sc-upsell-countdown-timer-justify-content, center);align-items:var(--sc-upsell-countdown-timer-align-items, center);text-align:var(--sc-upsell-countdown-timer-text-align, center);flex-wrap:wrap;gap:var(--sc-upsell-countdown-timer-gap, 0.5em);line-height:1;padding:var(--sc-upsell-countdown-timer-padding, var(--sc-spacing-medium));border-radius:var(--sc-upsell-countdown-timer-border-radius, var(--sc-border-radius-pill));background-color:var(--sc-upsell-countdown-timer-background-color, rgb(226, 249, 235));color:var(--sc-upsell-countdown-timer-color, rgb(71, 91, 80))}";
const ScUpsellCountdownTimerStyle0 = scUpsellCountdownTimerCss;

const ScUpsellCountdownTimer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.timeRemaining = Infinity;
        this.formattedTime = undefined;
        this.showIcon = true;
    }
    componentDidLoad() {
        this.updateCountdown();
    }
    updateCountdown() {
        this.formattedTime = getFormattedRemainingTime();
        setInterval(() => {
            this.formattedTime = getFormattedRemainingTime();
        }, 1000);
    }
    render() {
        return (h(Host, { key: '727b55154fbf1fe61aa56ad7d6d0ed9a0a0909b6', role: "timer", class: {
                'sc-upsell-countdown-timer': true,
            } }, this.showIcon && h("sc-icon", { key: '302324b2900e8c7488c75e6502395e700f364e06', name: "clock" }), h("span", { key: '73bc4a1a8d8a0f54f459aba3f3169dc58d39aaa6' }, h("slot", { key: '01c95848cd1822ca64c74de17b55be7a4150e252', name: "offer-expire-text" }), " ", h("strong", { key: '38ecb7b7c6b098bbe5e65642a628cf22a702d374' }, this.formattedTime))));
    }
};
ScUpsellCountdownTimer.style = ScUpsellCountdownTimerStyle0;

export { ScUpsellCountdownTimer as sc_upsell_countdown_timer };

//# sourceMappingURL=sc-upsell-countdown-timer.entry.js.map