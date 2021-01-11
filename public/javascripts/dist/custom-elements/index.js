import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const SimpleForm = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("form", { action: this.action, id: this.formId }, h("slot", null), h("button", { type: 'submit' }, "Submit form")));
  }
};

const SimpleInput = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "text", name: this.name, id: this.name })));
  }
};

const SimpleForm$1 = /*@__PURE__*/proxyCustomElement(SimpleForm, [1,"simple-form",{"formId":[1,"form-id"],"action":[1]}]);
const SimpleInput$1 = /*@__PURE__*/proxyCustomElement(SimpleInput, [1,"simple-input",{"label":[1],"name":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      SimpleForm$1,
  SimpleInput$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { SimpleForm$1 as SimpleForm, SimpleInput$1 as SimpleInput, defineCustomElements };
