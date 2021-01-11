import { Component, h, Prop } from '@stencil/core';
export class SimpleInput {
  render() {
    return (h("div", null,
      h("label", { htmlFor: this.name }, this.label),
      h("input", { type: "text", name: this.name, id: this.name })));
  }
  static get is() { return "simple-input"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "label": {
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
        "text": "Label."
      },
      "attribute": "label",
      "reflect": false
    },
    "name": {
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
        "text": "Name of the input."
      },
      "attribute": "name",
      "reflect": false
    }
  }; }
}
