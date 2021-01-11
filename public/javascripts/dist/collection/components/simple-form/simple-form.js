import { Component, h, Prop } from '@stencil/core';
export class SimpleForm {
  render() {
    return (h("form", { action: this.action, id: this.formId },
      h("slot", null),
      h("button", { type: 'submit' }, "Submit form")));
  }
  static get is() { return "simple-form"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "formId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "FormID."
      },
      "attribute": "form-id",
      "reflect": false
    },
    "action": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Form Action."
      },
      "attribute": "action",
      "reflect": false
    }
  }; }
}
