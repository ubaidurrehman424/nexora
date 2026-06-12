import { r as registerInstance, c as createEvent, h } from './index-25e5af33.js';

const scTagCss = ":host{display:inline-block;vertical-align:middle}.tag{display:flex;align-items:center;border:none;line-height:1;white-space:nowrap;user-select:none;cursor:pointer;text-decoration:none;font-weight:var(--sc-font-weight-bold)}.tag__prefix,.tag__suffix{vertical-align:middle;display:flex}.tag__suffix ::slotted(*){width:var(--sc-tag-suffix-width, 1.2em);height:var(--sc-tag-suffix-width, 1.2em);margin-left:var(--sc-tag-suffix-margin-left, 5px)}.tag__prefix ::slotted(*){width:var(--sc-tag-prefix-width, 1.2em);height:var(--sc-tag-prefix-width, 1.2em);margin-right:var(--sc-tag-prefix-margin-right, 5px)}.tag__clear::part(base){color:inherit;padding:0}.tag--primary{background-color:var(--sc-tag-primary-background-color, var(--sc-color-primary-500));border-color:var(--sc-tag-primary-border-color, var(--sc-color-primary-500));color:var(--sc-tag-primary-color, var(--sc-color-primary-text, var(--sc-color-white)))}.tag--success{background-color:var(--sc-tag-success-background-color, var(--sc-color-success-100));border-color:var(--sc-tag-success-border-color, var(--sc-color-success-200));color:var(--sc-tag-success-color, var(--sc-color-success-800))}.tag--info{background-color:var(--sc-color-info-100);border-color:var(--sc-color-info-200);color:var(--sc-color-info-700)}.tag--default{background-color:var(--sc-tag-default-background-color, var(--sc-color-gray-100));border-color:var(--sc-tag-default-border-color, var(--sc-color-gray-200));color:var(--sc-tag-default-color, var(--sc-color-gray-700))}.tag--warning{background-color:var(--sc-color-warning-100);border-color:var(--sc-color-warning-200);color:var(--sc-color-warning-700)}.tag--danger{background-color:var(--sc-color-danger-100);border-color:var(--sc-color-danger-200);color:var(--sc-color-danger-700)}.tag--small{font-size:var(--sc-button-font-size-small);height:calc(var(--sc-input-height-small) * 0.75);line-height:calc(var(--sc-input-height-small) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-small);padding:0 var(--sc-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-xxx-small))}.tag--medium{font-size:var(--sc-font-size-small);height:calc(var(--sc-input-height-medium) * 0.75);line-height:calc(var(--sc-input-height-medium) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-medium);padding:0 var(--sc-spacing-small)}.tag--medium .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-xx-small))}.tag--large{font-size:var(--sc-button-font-size-large);height:calc(var(--sc-input-height-large) * 0.75);line-height:calc(var(--sc-input-height-large) - var(--sc-input-border-width) * 2);border-radius:var(--sc-input-border-radius-large);padding:0 var(--sc-spacing-medium)}.tag--large .tag__clear{margin-left:var(--sc-spacing-xx-small);margin-right:calc(-1 * var(--sc-spacing-x-small))}.tag--pill{border-radius:var(--sc-border-radius-pill)}";
const ScTagStyle0 = scTagCss;

const ScTag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scClear = createEvent(this, "scClear", 7);
        this.type = 'default';
        this.size = 'medium';
        this.pill = false;
        this.clearable = false;
        this.ariaLabel = undefined;
    }
    handleClearClick() {
        this.scClear.emit(this);
    }
    render() {
        const Tag = this.clearable ? 'button' : 'span';
        return (h(Tag, { key: 'd8f35d019addc7f8ef5bfc2c7cdfa731465cdb97', part: "base", onClick: () => this.handleClearClick(), class: {
                'tag': true,
                // Types
                'tag--primary': this.type === 'primary',
                'tag--success': this.type === 'success',
                'tag--info': this.type === 'info',
                'tag--warning': this.type === 'warning',
                'tag--danger': this.type === 'danger',
                'tag--default': this.type === 'default',
                // Sizes
                'tag--small': this.size === 'small',
                'tag--medium': this.size === 'medium',
                'tag--large': this.size === 'large',
                // Modifers
                'tag--pill': this.pill,
                'tag--clearable': this.clearable,
            }, "aria-label": this.ariaLabel }, h("span", { key: '0b07da8716e7b574f312d7184b29e660dc441468', class: "tag__prefix", part: "prefix" }, h("slot", { key: '85bf644a99887be94176aacc1a4103c6353bebdd', name: "prefix" })), h("span", { key: '536b2d0d3ff02517755fb2c7064e6df72fe1335c', part: "content", class: "tag__content" }, h("slot", { key: 'e5f1cf4e8c2374390511e2092fca0237d09f992b' })), !!this.clearable && (h("svg", { key: '3cc27c35ba36d402a79abd764ef1a619bd9f0efe', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-x", viewBox: "0 0 16 16" }, h("path", { key: '01285e35f4aab4ee5e83e066dee9fdf372acb3d3', d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }))), h("span", { key: '1585a4f8f1b95f4032d027beb3c9d8f608c04086', class: "tag__suffix", part: "suffix" }, h("slot", { key: 'c22eb9bb203c9bd1f484b329952d9b9f39ebc68b', name: "suffix" }))));
    }
};
ScTag.style = ScTagStyle0;

export { ScTag as sc_tag };

//# sourceMappingURL=sc-tag.entry.js.map