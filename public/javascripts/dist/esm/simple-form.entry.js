import { r as registerInstance, h } from './index-87fff49d.js';

const SimpleForm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("form", { action: this.action, id: this.formId }, h("slot", null), h("button", { type: 'submit' }, "Submit form")));
  }
};

export { SimpleForm as simple_form };
