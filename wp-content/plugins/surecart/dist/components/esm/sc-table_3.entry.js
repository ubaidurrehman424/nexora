import { r as registerInstance, h, H as Host } from './index-25e5af33.js';

const scTableCss = ":host{display:table;width:100%;height:100%;border-spacing:0;border-collapse:collapse;table-layout:fixed;font-family:var(--sc-font-sans);border-radius:var(--border-radius, var(--sc-border-radius-small))}:host([shadowed]){box-shadow:var(--sc-shadow-medium)}::slotted([slot=head]){border-bottom:1px solid var(--sc-table-border-bottom-color, var(--sc-color-gray-200))}";
const ScTableStyle0 = scTableCss;

const ScTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '4c44544a687062e644990ebe148fddcc65d05e89' }, h("slot", { key: 'a8fdf7ee2196eea0345350f238f2ac7e76842df9', name: "head" }), h("slot", { key: '45c3b2175d9d9a7d978e9ac5d6363b2a92c970d8' }), h("slot", { key: '280863f3a772b85d2223e23524b09891a2713b03', name: "footer" })));
    }
};
ScTable.style = ScTableStyle0;

const scTableCellCss = ":host{display:table-cell;font-size:var(--sc-font-size-medium);padding:var(--sc-table-cell-spacing, var(--sc-spacing-small)) var(--sc-table-cell-spacing, var(--sc-spacing-large)) !important;vertical-align:var(--sc-table-cell-vertical-align, middle)}:host([slot=head]){background:var(--sc-table-cell-background-color, var(--sc-color-gray-50));font-size:var(--sc-font-size-small);padding:var(--sc-table-cell-spacing, var(--sc-spacing-small));color:var(--sc-color-gray-500)}:host(:last-child){text-align:right}sc-table-cell{display:table-cell;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const ScTableCellStyle0 = scTableCellCss;

const ScTableScll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'a05886f64ffb0b92a8d74e5e3548a7980188270b' }, h("slot", { key: '102ac3a046b01b724957d4de84ccc9c95067add5' })));
    }
};
ScTableScll.style = ScTableCellStyle0;

const scTableRowCss = ":host{display:table-row;border:1px solid var(--sc-table-row-border-bottom-color, var(--sc-color-gray-200))}:host([href]){cursor:pointer}:host([href]:hover){background:var(--sc-color-gray-50)}";
const ScTableRowStyle0 = scTableRowCss;

const ScTableRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
    }
    render() {
        return (h(Host, { key: '3805fda9f59a8d6cbe2dddaf19824c03f94eed4a' }, h("slot", { key: '23c3af6b417709d5abca94d243406d3fa30a3317' })));
    }
};
ScTableRow.style = ScTableRowStyle0;

export { ScTable as sc_table, ScTableScll as sc_table_cell, ScTableRow as sc_table_row };

//# sourceMappingURL=sc-table_3.entry.js.map