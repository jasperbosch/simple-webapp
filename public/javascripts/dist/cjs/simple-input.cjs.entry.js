'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-85f3fe2a.js');

const SimpleInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("label", { htmlFor: this.name }, this.label), index.h("input", { type: "text", name: this.name, id: this.name })));
  }
};

exports.simple_input = SimpleInput;
