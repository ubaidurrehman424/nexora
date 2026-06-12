import { r as registerInstance, h } from './index-25e5af33.js';

const scBlockUiCss = ":host{display:block;position:var(--sc-block-ui-position, absolute);top:-5px;left:-5px;right:-5px;bottom:-5px;overflow:hidden;display:flex;align-items:center;justify-content:center}:host>*{z-index:1}:host:after{content:\"\";position:var(--sc-block-ui-position, absolute);top:0;left:0;right:0;bottom:0;cursor:var(--sc-block-ui-cursor, wait);background:var(--sc-block-ui-background-color, var(--sc-color-white));opacity:var(--sc-block-ui-opacity, 0.15)}:host.transparent:after{background:transparent}.overlay__content{font-size:var(--sc-font-size-large);font-weight:var(--sc-font-weight-semibold);display:grid;gap:0.5em;text-align:center}";
const ScBlockUiStyle0 = scBlockUiCss;

const ScBlockUi = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.zIndex = 1;
        this.transparent = undefined;
        this.spinner = undefined;
    }
    render() {
        return (h("div", { key: '47d01444919f4cf56caec4a8e44bc39040299f13', part: "base", class: { overlay: true, transparent: this.transparent }, style: { 'z-index': this.zIndex.toString() } }, h("div", { key: 'b8e4618fd20801f059523530529e3668e092eaed', class: "overlay__content", part: "content" }, h("slot", { key: '7c72fd1356daa2ac23adccb682a4caf4d492d17e', name: "spinner" }, !this.transparent && this.spinner && h("sc-spinner", { key: 'b252861722b74d8e438acec833834c9a609efc88' })), h("slot", { key: '62ff3d0f9d9db58f5ce5466cc29e9dacf0990605' }))));
    }
};
ScBlockUi.style = ScBlockUiStyle0;

export { ScBlockUi as sc_block_ui };

//# sourceMappingURL=sc-block-ui.entry.js.map