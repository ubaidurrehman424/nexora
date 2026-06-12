import { r as registerInstance, h } from './index-25e5af33.js';

const scDividerCss = ":host{display:block;min-height:1px}.divider{position:relative;padding:var(--spacing) 0}.line__container{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center}.line{width:100%;border-top:1px solid var(--sc-divider-border-top-color, var(--sc-color-gray-200))}.text__container{position:relative;display:flex;justify-content:center;font-size:var(--sc-font-size-small)}.text{padding:0 var(--sc-spacing-small);background:var(--sc-divider-text-background-color, var(--sc-color-white));color:var(--sc-color-gray-500)}";
const ScDividerStyle0 = scDividerCss;

const ScDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'bc09052a9c80a9a56221f539f12c8b33593557e0', class: "divider", part: "base" }, h("div", { key: 'b68b94340bd0e322d2d98de886d13526f4f861f6', class: "line__container", "aria-hidden": "true", part: "line-container" }, h("div", { key: '3bd5c95a7af959b906d6f68e1f347ab70a4a28b3', class: "line", part: "line" })), h("div", { key: 'e7b2c2862860093e6822b7953e941832307ee2b7', class: "text__container", part: "text-container" }, h("span", { key: 'd7e061313f328f983cc3ad0b8b8d9b19e7334c3e', class: "text", part: "text" }, h("slot", { key: '37bd878f65dc23f47ad2e988c806ce54481eb2e9' })))));
    }
};
ScDivider.style = ScDividerStyle0;

export { ScDivider as sc_divider };

//# sourceMappingURL=sc-divider.entry.js.map