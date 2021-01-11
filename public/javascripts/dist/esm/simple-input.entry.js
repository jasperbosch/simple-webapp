import { r as registerInstance, h } from './index-87fff49d.js';

const SimpleInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("input", { type: "text", name: this.name, id: this.name })));
  }
};

export { SimpleInput as simple_input };
