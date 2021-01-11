'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-85f3fe2a.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["simple-form.cjs",[[1,"simple-form",{"formId":[1,"form-id"],"action":[1]}]]],["simple-input.cjs",[[1,"simple-input",{"label":[1],"name":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
