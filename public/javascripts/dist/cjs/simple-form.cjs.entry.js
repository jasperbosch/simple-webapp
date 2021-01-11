'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-85f3fe2a.js');

const SimpleForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("form", { action: this.action, id: this.formId }, index.h("slot", null), index.h("button", { type: 'submit' }, "Submit form")));
  }
};

exports.simple_form = SimpleForm;
